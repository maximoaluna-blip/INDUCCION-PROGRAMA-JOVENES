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
        restoreCommitment();
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
        showNotification('⚠️ Ingresa tu correo electrónico', 'warning');
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

                // StudyTime: el unico dato de sesion que el backend sigue devolviendo
                if (data.studyTime) studyTime = data.studyTime;

                // ADR-074 - AQUI NO SE HIDRATA NINGUN TEXTO, A PROPOSITO.
                // `recover` no esta autenticado: pide un correo y nada mas. Por eso el
                // backend dejo de mandar lo que la persona escribio -reflexiones,
                // compromisos, planes, catalogos y los grados del autodiagnostico- y solo
                // dice QUE hay guardado (serverData.saved), nunca que dice.
                // Eso vive en el navegador donde se escribio, y alli sigue: es local por
                // diseno. Si algun dia se quiere recuperarlo entre dispositivos, primero
                // hay que autenticar a la persona, no ampliar esta respuesta.
                var guardado = serverData.saved || {};
                var anotaciones = 0;
                Object.keys(guardado.reflections || {}).forEach(function (cid) {
                    anotaciones += (guardado.reflections[cid] || []).length;
                });
                Object.keys(guardado.commitments || {}).forEach(function (cid) {
                    anotaciones += guardado.commitments[cid] || 0;
                });
                anotaciones += (guardado.plans || []).length +
                               (guardado.catalogs || []).length +
                               (guardado.assessments || []).length;

                saveProgress();
                updateStats();
                updateProgress();

                // --- ADR-080: recuperar TAMBIEN inscribe en este curso ---
                // `recover` busca por correo y devuelve la inscripcion que encuentre,
                // sea del curso que sea. Hasta hoy se entraba aqui con el registro de
                // OTRO curso, se hacia este entero y al final se escribia el
                // certificado pero nunca la inscripcion. Medido el 21-sep-2026: 7
                // certificados sin fila, y SEIS eran la linea Desarrollo Institucional
                // entera -seis cursos completados que el panel mostraba con 0 adultos-.
                // Se inscribe SOLO ante un `false` explicito. Si el campo no viene
                // -deployment anterior al ADR-080- no se toca nada: un `undefined` no
                // puede leerse como "vuelve a inscribirla", que seria duplicar filas.
                var inscritoAhora = false;
                if (serverData.registeredInCourse === false && userProfile && userProfile.fullName) {
                    // Campo a campo y no con spread, para que se vea que `motivation`
                    // va vacia: `recover` no la devuelve desde el ADR-074, y rellenarla
                    // con cualquier cosa seria poner palabras en boca de alguien.
                    sendToGoogleSheets({
                        action: 'register',
                        fullName: userProfile.fullName,
                        age: userProfile.age,
                        group: userProfile.group,
                        region: userProfile.region,
                        email: userProfile.email,
                        motivation: '',
                        registrationDate: new Date().toISOString(),
                        course: COURSE_CONFIG.courseId
                    });
                    inscritoAhora = true;
                }

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

                // ADR-080: si acabamos de inscribirla en este curso, se dice. Es la
                // otra mitad de la decision -- el dato se arregla y el texto lo cuenta.
                var avisoInscripcion = inscritoAhora
                    ? '<p style="color: #2e7d32; margin-top: 10px;">Te inscribimos en <strong>este curso</strong> con esos mismos datos.</p>'
                    : '';
                var avisoAnotaciones = anotaciones > 0
                    ? '<p style="color: #636363; margin-top: 10px;">Tienes <strong>' + anotaciones +
                      '</strong> anotaciones guardadas (reflexiones, compromisos o planes). ' +
                      'Lo que escribes <strong>no se recupera por correo</strong>: se queda en el navegador donde lo escribiste. ' +
                      'Abre el curso en ese dispositivo para verlas.</p>'
                    : '';

                if (anotaciones > 0 || inscritoAhora) {
                    msgDiv.style.display = 'block';
                    msgDiv.innerHTML = '<p style="color: #2e7d32; font-weight: 600;">✅ Recuperamos tu avance: ' +
                        completedCount + ' módulos.</p>' + avisoInscripcion + avisoAnotaciones;
                } else {
                    msgDiv.style.display = 'none';
                }
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
