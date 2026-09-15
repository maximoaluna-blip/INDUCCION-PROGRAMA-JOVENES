// ============================================
// engine.linea.js — EXTENSIÓN de la línea Programa de Jóvenes
// Se concatena ANTES de engine.core.js (aquí viven las variables globales).
//
// Qué va aquí: lo que NO es idéntico en las 3 líneas — textos propios (el número
// del curso al que se remite, el pie del PDF) y componentes exclusivos de la línea.
// Lo demás está en el núcleo compartido; si tocas algo que también usan las otras
// líneas, va en _MOTOR/engine.core.js del repo raíz, no aquí.
// ============================================

// ============================================
// MOTOR DE CURSOS - PLATAFORMA DE FORMACION DE ADULTOS ASC
// Este archivo es generado automaticamente por build-course.js
// Las variables COURSE_CONFIG y QUIZ_ANSWERS son inyectadas por el builder
// ============================================

// --- Variables globales ---
let currentModule = 0;
let moduleProgress = [];
let quizScores = [];
let startTime = new Date();
let studyTime = 0;
let sessionStartTime = null;
let reflections = {};
let photos = {};
let selfAssessments = {};
let personalPlans = {};
let userProfile = {};

// Version de la escala de grados de dominio del autodiagnostico de competencias.
// Subir este numero cuando cambien los criterios de los grados: invalida los perfiles
// ya guardados, que quedarian describiendo peldanos distintos a los que el adulto eligio.
// v2 (02-ago-2026): correccion doctrinal de los grados en 4 de las 7 competencias
// (DECISIONES.md raiz ADR-023, Fase 2). Ver ESTADO-AUDITORIA.md.
const COMPETENCY_SCALE_VERSION = 2;

// --- Escritura segura en localStorage ---
// saveProgress() no manejaba el fallo en absoluto y mostraba el indicador de "guardado"
// sin comprobar que la escritura hubiera funcionado. Si localStorage falla (cuota llena,
// modo privado de Safari, almacenamiento bloqueado por politica del navegador), el
// estudiante veia el visto verde y perdia su trabajo sin enterarse. Ahora se entera.
var _avisoAlmacenamiento = false;



// --- Inicializacion ---
window.addEventListener('DOMContentLoaded', function () {
    moduleProgress = new Array(COURSE_CONFIG.totalModules).fill(false);
    sessionStartTime = new Date();
    shuffleQuizOptions();
    loadProgress();
    prefillFromGlobalProfile();
    updateElapsedTime();
});

window.addEventListener('beforeunload', function () {
    saveProgress();
});

// --- Persistencia ---
function saveProgress() {
    var key = 'courseProgress_' + COURSE_CONFIG.courseId;
    var progress = {
        userProfile: userProfile, moduleProgress: moduleProgress,
        quizScores: quizScores, studyTime: studyTime, reflections: reflections, photos: photos, selfAssessments: selfAssessments, personalPlans: personalPlans,
        currentModule: currentModule, startTime: startTime.toISOString(),
        lastSaved: new Date().toISOString(), version: '3.0'
    };
    // Solo confirmar visualmente si la escritura funciono de verdad.
    if (!guardarLocal(key, JSON.stringify(progress))) return;
    var indicator = document.getElementById('saveIndicator');
    if (indicator) { indicator.classList.add('show'); setTimeout(function () { indicator.classList.remove('show'); }, 2000); }
}

function loadProgress() {
    var key = 'courseProgress_' + COURSE_CONFIG.courseId;
    var saved = localStorage.getItem(key);
    if (saved) {
        var p = JSON.parse(saved);
        userProfile = p.userProfile || {};
        moduleProgress = p.moduleProgress || new Array(COURSE_CONFIG.totalModules).fill(false);
        quizScores = p.quizScores || [];
        studyTime = p.studyTime || 0;
        reflections = p.reflections || {};
        photos = p.photos || {};
        selfAssessments = p.selfAssessments || {};
        personalPlans = p.personalPlans || {};
        currentModule = p.currentModule || 0;
        startTime = new Date(p.startTime || new Date());
        if (userProfile.fullName) {
            showModule(currentModule);
            var welcomeEl = document.getElementById('welcomeName');
            if (welcomeEl) welcomeEl.textContent = userProfile.fullName.split(' ')[0];
            showNotification('¡Bienvenido de vuelta, ' + userProfile.fullName.split(' ')[0] + '! 👋');
        }
        Object.keys(reflections).forEach(function (k) {
            var ta = document.getElementById('reflection-' + k);
            if (ta) ta.value = reflections[k];
        });
        Object.keys(photos).forEach(function (k) {
            var preview = document.getElementById('photo-preview-' + k);
            var actions = document.getElementById('photo-actions-' + k);
            if (preview && photos[k] && photos[k].dataUrl) {
                preview.innerHTML = '<img src="' + photos[k].dataUrl + '" alt="Imagen guardada">';
                if (actions) actions.classList.remove('hidden');
            }
        });
        if (typeof restoreAssessmentSelections === 'function') restoreAssessmentSelections();
        if (typeof restorePlanState === 'function') restorePlanState();
        if (typeof initPlanBuilders === 'function') initPlanBuilders();
        updateStats();
        updateProgress();
    }
}

// calculateAssessment eliminada (14-sep-2026, ADR-034 Fase 2): renderizaba el
// perfil de COMPETENCIAS DEL ADULTO — 'Tu perfil de competencias', 'Grado promedio',
// 'Tus areas de oportunidad'. Programa de Jovenes no tiene ningun curso con
// self-assessment (0 de 8) y la funcion no se invocaba desde ninguna parte: era
// codigo muerto heredado al copiar el motor de Politica de Adultos. Sus cadenas
// viajaban igualmente dentro de los 8 HTML compilados.
// Lo detecto el check de lexico de codigo.spec.js. Ver GLOSARIO-ASC.md seccion E-bis.

// loadProfileIntoPlan eliminada (23-ago-2026): cargaba el perfil de competencias
// del ADULTO (Curso 4 de Política de Adultos) en un ejercicio sobre ÁREAS DE CRECIMIENTO
// del joven. En PJ ningún curso produce ese perfil. Ver GLOSARIO-ASC.md §E-bis.

// generatePlan ya no vive aqui (14-sep-2026, ADR-034 Fase 1 B): esta en el nucleo,
// y lee sus textos del HTML que deja render.plan-builder.js a partir de los `labels`
// del JSON del curso. Las 3 copias por linea diferian SOLO por vocabulario.

// --- Recovery from server ---
function recoverProgress() {
    var emailInput = document.getElementById('recoveryEmail');
    var email = emailInput.value.trim();
    var msgDiv = document.getElementById('recoveryMessage');

    if (!email) {
        showNotification('⚠️ Ingresa tu correo electronico', 'warning');
        return;
    }

    msgDiv.style.display = 'block';
    msgDiv.innerHTML = '<p style="color: #622599; font-weight: 600;">🔄 Buscando tu avance...</p>';

    var url = COURSE_CONFIG.googleScriptUrl +
        '?action=recover&email=' + encodeURIComponent(email) +
        '&course=' + encodeURIComponent(COURSE_CONFIG.courseId) +
        '&token=ADULTOS_ASC_2026';

    fetch(url, { redirect: 'follow' })
        .then(function(response) {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.json();
        })
        .then(function(data) {

            // El Apps Script devuelve: { success: true, data: { registration, modules, quizzes, certificates } }
            var isFound = (data && data.found) || (data && data.success && data.data);

            if (isFound) {
                var serverData = data.data || data;
                var reg = serverData.registration || data.userProfile || {};
                var mods = serverData.modules || [];
                var quizzes = serverData.quizzes || [];

                // Reconstruir userProfile desde registration
                if (reg.fullName || reg.name) {
                    userProfile = {
                        fullName: reg.fullName || reg.name || '',
                        age: reg.age || '',
                        group: reg.group || '',
                        region: reg.region || '',
                        email: reg.email || email,
                        motivation: reg.motivation || '',
                        registrationDate: reg.registrationDate || reg.timestamp || ''
                    };
                } else if (data.userProfile) {
                    userProfile = data.userProfile;
                }

                // Reconstruir moduleProgress desde modules array
                if (mods.length > 0) {
                    moduleProgress = new Array(COURSE_CONFIG.totalModules).fill(false);
                    mods.forEach(function(m) {
                        var modNum = m.moduleCompleted || m.module;
                        if (modNum !== undefined && modNum < moduleProgress.length) {
                            moduleProgress[modNum] = true;
                        }
                    });
                } else if (data.moduleProgress) {
                    moduleProgress = data.moduleProgress;
                }

                // Reconstruir quizScores desde quizzes array
                if (quizzes.length > 0) {
                    quizScores = [];
                    quizzes.forEach(function(q) {
                        var modNum = q.module;
                        var score = q.score;
                        if (modNum !== undefined && score !== undefined) {
                            quizScores[modNum] = parseInt(score);
                        }
                    });
                } else if (data.quizScores) {
                    quizScores = data.quizScores;
                }

                // StudyTime y reflections (si vienen directamente)
                if (data.studyTime) studyTime = data.studyTime;
                if (data.reflections) {
                    reflections = data.reflections;
                    Object.keys(reflections).forEach(function(k) {
                        var ta = document.getElementById('reflection-' + k);
                        if (ta) ta.value = reflections[k];
                    });
                }

                // Reflexiones por curso (persistencia hibrida): hidratar cada curso en localStorage
                if (serverData.reflectionsByCourse && typeof serverData.reflectionsByCourse === 'object') {
                    Object.keys(serverData.reflectionsByCourse).forEach(function (cid) {
                        var courseReflections = serverData.reflectionsByCourse[cid] || {};
                        if (cid === COURSE_CONFIG.courseId) {
                            reflections = courseReflections;
                            Object.keys(reflections).forEach(function (k) {
                                var ta = document.getElementById('reflection-' + k);
                                if (ta) ta.value = reflections[k];
                            });
                        } else {
                            try {
                                var key = 'courseProgress_' + cid;
                                var raw = localStorage.getItem(key);
                                var existing = raw ? JSON.parse(raw) : {};
                                existing.reflections = courseReflections;
                                existing.lastSaved = new Date().toISOString();
                                guardarLocal(key, JSON.stringify(existing));
                            } catch (e) { /* el aviso lo da guardarLocal */ }
                        }
                    });
                }

                // Autodiagnósticos: restaurar grados desde el backend
                if (serverData.assessments && typeof serverData.assessments === 'object') {
                    Object.keys(serverData.assessments).forEach(function (aid) {
                        var saved = serverData.assessments[aid] || {};
                        if (!selfAssessments[aid]) selfAssessments[aid] = { grades: {} };
                        if (saved.grades) selfAssessments[aid].grades = saved.grades;
                    });
                    if (typeof restoreAssessmentSelections === 'function') restoreAssessmentSelections();
                }

                // Planes personales: restaurar plan-builder
                if (serverData.plans && typeof serverData.plans === 'object') {
                    Object.keys(serverData.plans).forEach(function (pid) {
                        var savedPlan = serverData.plans[pid] || {};
                        var contenido = savedPlan.contenido;
                        if (contenido && typeof contenido === 'object') {
                            personalPlans[pid] = contenido;
                        }
                    });
                    if (typeof restorePlanState === 'function') restorePlanState();
                }

                saveProgress();
                updateStats();
                updateProgress();

                // Determinar último módulo completado
                var lastModule = data.currentModule || 0;
                if (!lastModule && moduleProgress.length > 0) {
                    for (var i = moduleProgress.length - 1; i >= 0; i--) {
                        if (moduleProgress[i]) { lastModule = i + 1; break; }
                    }
                }

                var firstName = userProfile.fullName ? userProfile.fullName.split(' ')[0] : 'Scout';
                var welcomeEl = document.getElementById('welcomeName');
                if (welcomeEl) welcomeEl.textContent = firstName;

                var completedCount = moduleProgress.filter(Boolean).length;
                showNotification('¡Avance recuperado, ' + firstName + '! ' + completedCount + ' módulos completados 🎉');
                showModule(lastModule > 0 ? lastModule : 1);
            } else {
                var reason = (data && data.message) ? data.message : 'No se encontro avance asociado a este correo.';
                msgDiv.innerHTML = '<p style="color: #FF9800; font-weight: 600;">⚠️ ' + escapeHtml(reason) + '</p>' +
                    '<p style="color: #636363; margin-top: 10px;">Puedes registrarte como nuevo usuario.</p>' +
                    '<button class="btn" style="margin-top: 10px;" onclick="toggleRegistrationMode(\'new\')">🆕 Registrarme</button>';
            }
        })
        .catch(function(err) {
            if (typeof console !== 'undefined') console.error('[Recovery] Error:', err);
            msgDiv.innerHTML = '<p style="color: #f44336; font-weight: 600;">❌ Error al conectar con el servidor.</p>' +
                '<p style="color: #636363; margin-top: 10px;">Error: ' + escapeHtml(err && err.message ? err.message : String(err)) + '</p>' +
                '<p style="color: #636363; margin-top: 5px;">Verifica tu conexion a internet e intenta de nuevo.</p>';
        });
}
