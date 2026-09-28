# Diseño del Curso 22 — 🕊️ Constructores de Paz: el kit de acción en tu unidad

> **Línea:** Programa de Jóvenes · **Nivel 4 — Transversales** · Curso **22** de 25
> **`courseId`:** `kit-constructores-paz` (fijado en `CREAR-CURSO.md` §13.2)
> **Diseño pedagógico:** Claude Code, con autonomía de punta a punta del dueño (27-sep-2026) para todo el Nivel 4.
> **Estado:** publicado (ADR-105). Tres vueltas de auditoría doctrinal y pedagógica y una verificación final; suite E2E local 288 + 2.

El plan lo describe como la aplicación del *Kit de Acción Constructores de Paz* «en el contexto colombiano post-conflicto: DDHH, memoria histórica, transformación de conflictos, cultura de paz», con el ciclo Toma conciencia → Comparte → Actúa, autoevaluación y «manos a la obra», de 7 años a Rovers. El Curso 21 ya enseñó el marco (Scouts por los ODS, las cuatro iniciativas, los siete pasos del *Modelo* §16.3, las insignias). Este curso entra **dentro de un desafío**: qué trae el Kit, cómo se usa por rama y dónde hay que cuidar.

---

## 0. La situación de fuentes

| Fuente | Qué aporta |
|---|---|
| **Kit de Acción Constructores de Paz** (ASC, **junio 2021**, 69 pp.) — **fuente angular**. Publicado en la biblioteca (DNPJ › Scouts por los ODS), archivo `…_Vr_Jun2021_…pdf`, **sha256 idéntico** al del corpus (comprobado el 28-sep-2026). **No hay edición posterior ni otro documento del desafío.** Es de la **ASC** (Comisión Nacional de Mundo Mejor y equipo nacional de Mensajeros de la Paz), no de la OMMS: corregir `INVENTARIO-DOCUMENTOS-BASE.md`. | Qué es el desafío (p. 5); por qué en Colombia (*«postconflicto»*, violencias *«estructurales, directas o culturales»*, p. 5); a quién va (*«a partir de siete años hasta la edad que se determine para la rama rover»*, p. 5); **tres etapas** Toma conciencia · Comparte · Actúa (pp. 5, 8–9); el **viaje en cuatro momentos** (pp. 6–7); dos actividades para 7–10 y tres desde los 11 (p. 9); proyecto de servicio con objetivos SMART y sostenibilidad (p. 9); **Herramienta 1, Autoevaluación**: dos áreas —*«Personal: La Paz y el cambio positivo comienzan conmigo»* y *«Comunidad: …ocurren en mi comunidad»*—, tres marcas, *Mis objetivos personales* / *Mis actividades*, menores de 15 con ayuda del educador (pp. 10–18); **Herramienta 2, Manos a la obra**: actividades **opcionales**, se pueden crear otras *«enmarcadas en las competencias»*, ODS 16 y 10 (p. 19); mapa de actividades por rama (pp. 21, 48); las actividades (pp. 22–67). |
| **Manual de Implementación del Marco de Mundo Mejor** (ASC, jun-2021) | Mismo texto del desafío (pp. 14–16); **insignia** *«de acuerdo con su proceso personal y su edad»* (p. 16) — **el procedimiento no está escrito** (p. 17 anuncia «estos son los pasos» y solo trae un enlace; HeForShe y Patrimonito sí lo traen); autoevaluación al inicio y al final (p. 11); **recomendaciones de uso**: haber completado A Salvo del Peligro y *«sea consciente de su posición de poder… Nunca imponga sus emociones o sentimientos»* (p. 6); porte de insignias exclusivo de reconocidos por la Comisión Nacional (p. 67); Héroes Mensajeros de la Paz (pp. 65–66). |
| **Modelo de Aplicación** 2026, Cap. 16 | Los desafíos *«viven dentro del Programa de Jóvenes»* y remiten a sus *«documentos particulares de implementación»* (p. 98); Mensajeros de la Paz con *«cuidado de la memoria»* (p. 99); los siete pasos (p. 101); *«Mantén seguridad e inclusión como condiciones de calidad, no como anexos»* (§16.4, p. 102); **Seguras** en DURASLID: consentimiento informado y confidencialidad razonable (p. 71). |
| **Política Nacional A Salvo del Peligro** (dic-2025) | **Revictimización** (p. 15: el daño se profundiza cuando se *«minimiza el relato de la víctima o se expone nuevamente a situaciones traumáticas»*); *«secuelas del conflicto armado»* en el contexto (p. 9); confidencialidad no es secreto (p. 21); no revictimización como principio (p. 42); el adulto **reporta** por el botón «Me Pongo A Salvo del Peligro», el **Comité de Gestión de Incidentes** analiza y activa rutas (Anexo 3, p. 44). |
| **Guías de Dirigente de Rama** 2026 | Edades: Cachorros 5–6, Lobatos 7–10, Scouts 11–14, Nómadas Scout 15–17, Rovers 18–20. Clan (pp. 61–63): Constructores de Paz *«motiva… acciones concretas que contribuyan a la reconciliación»*. Tropa: Consejo de Patrulla y Corte de Honor como órganos de decisión. |
| **Curso 21** (publicado) y **Curso 25** (publicado) | El marco y los siete pasos; la ruta de protección y el consentimiento para imágenes. Este curso los usa, no los repite. |

### Lo que este curso tiene que resolver (discrepancias registradas, no arbitradas)

1. **Las edades del Kit no son las de las ramas.** Dice «desde siete años», pero sus tablas usan 6–10, 6–11, 11–14, 11–15, 15–18, «+18» y un «14 a 15». **Regla del curso: guíate por la rama, no por el número**; Manada ↔ 6–10, Tropa ↔ 11–14, Comunidad ↔ 15–18, Clan ↔ +18. **Familia queda fuera** del Kit (5–6 años) y se dice.
2. **El Kit no trae ninguna advertencia de cuidado** para la memoria de la violencia, y *Los Mapas* (6–10, p. 52) pide a cada niño ubicar *«las huellas de la violencia y el sufrimiento»* y contar *«su historia»*. **Ninguna fuente del corpus orienta cómo trabajar el conflicto armado con niños** (barrido del 28-sep-2026). El curso usa lo que sí hay —revictimización y reporte (Política ASP 2025), posición de poder (Manual p. 6), consentimiento informado (*Modelo* p. 71), la práctica del propio Kit en *Empiezo a ser consciente de mis emociones* (solo quien quiera, sin valoraciones, a quien confíe, p. 45) y el permiso de adaptar (p. 19)— y **lo dice**: es una recomendación del curso armada con esas fuentes, no una norma nueva. Hallazgo para la comisión de Mundo Mejor.
3. **La autoevaluación del Kit usa los nombres de las tres etapas** como niveles (Tomar conciencia = al comienzo; Comparte = explorando; Actúa = terminé). No son los niveles de las competencias del *Modelo* (Exploro–Aplico–Profundizo, que el Curso 21 enseña en el paso 3): **la autoevaluación dice en qué punto del desafío está el joven; no es su registro de progresión.**
4. **El procedimiento de la insignia de Constructores de Paz no está escrito** en ninguna fuente publicada: el curso lo dice y remite a la comisión de Mundo Mejor.
5. **Registrar acciones**: el Kit dice *«sitio SDG hub»* sin dirección; el Manual, sdgs.scout.org; las Guías, scout.org. El curso dice «la plataforma de registro de Scouts por los ODS» y remite a la comisión, como el 21.
6. **ODS**: el Kit nombra el **16** y el **10** (p. 19). Una nota del Manual (p. 18) dice «11 y 16»: se sigue al Kit, que es el documento del desafío.

### Lo que este curso NO puede decir

- **No nombrar a Galtung ni la Ley 1732** (Cátedra de la Paz): ninguna fuente del corpus los trae. La tríada directa/cultural/estructural se usa **como la usa el Kit**, sin definiciones de manual; paz positiva y negativa, **con las frases del propio Kit** (p. 31).
- **No presentar al adulto como terapeuta**: escucha, no presiona, reporta (Política ASP; *Manual Operativo* 2023 p. 26: ASP no es atención en salud mental).
- **No reexplicar** los siete pasos, las insignias ni los reconocimientos (Curso 21), el ABP (Curso 15) ni la ruta de protección (Curso 25).
- **No pedir en las reflexiones historias de violencia, nombres ni confidencias** (ADR-087). La L6 es la más expuesta.
- **No usar «Mensajeros de Paz»** (Guía de Comunidad): el nombre es **Mensajeros de la Paz**.
- **No tomar partido** sobre el conflicto armado ni sobre actores: el Kit no lo hace.

---

## 1. Ficha

| Campo | Valor |
|---|---|
| `courseId` | `kit-constructores-paz` |
| Título | Constructores de Paz: el kit de acción en tu unidad |
| Icono | 🕊️ |
| Nivel / orden | 4 — Transversales · Curso **22** |
| Duración | **50 min** (medida después de las auditorías, ADR-047: 5.866 palabras; L6 y L7 en el tope de la banda) |
| Destinatario | Todo dirigente de Manada, Tropa, Comunidad o Clan (Familia: fuera del Kit) |
| Recomendado antes | Curso 21 (Scouts por los ODS) y Curso 25 (A Salvo del Peligro aplicado al Programa) |
| Logro final | La paz se construye cada día |

## 2. Objetivos

1. **Explicar** qué es Constructores de Paz, por qué responde a Colombia y dónde vive (Mensajeros de la Paz, Scouts por los ODS).
2. **Distinguir** paz negativa de paz positiva y reconocer el conflicto como oportunidad de aprender.
3. **Acompañar** el viaje del desafío —Toma conciencia, Comparte, Actúa— acordándolo con el joven.
4. **Usar** la autoevaluación del Kit por rama sin confundirla con el registro de progresión.
5. **Elegir y adaptar** actividades del Kit por rama, con el número que pide el Kit.
6. **Cuidar** a quien recuerda: trabajar la memoria histórica sin revictimizar y reportar cuando toca.

## 3. Hook

> **«La paz no es que no haya pelea: se construye cada día.»**

Anclado en las frases del Kit (p. 31): *«La paz la construimos cada día»* (paz positiva) frente a *«Estoy tranquilo y en paz, no me peleo con mis compañeros y tampoco hablo con ellos»* (paz negativa). Ataca dos ideas viejas: **la paz como ausencia de pelea** (el silencio entre patrullas «en paz») y **Constructores de Paz como charla sobre la guerra** (empezar por el conflicto armado, en abstracto y desde el adulto). **Hilo: la Tropa de Andrés**, en un municipio donde el conflicto armado dejó huella: tras un partido, dos patrullas dejan de hablarse, y Andrés tenía planeada una charla sobre el conflicto armado para «hacer Constructores de Paz».

## 4. Lecciones

| # | Lección | Contenido |
|---|---|---|
| 1 | 🕊️ La paz se construye cada día | Registro. Hook. Las dos patrullas «en paz» y la charla que Andrés planeaba. Qué es el desafío (`policy-quote`, Kit p. 5), por qué Colombia, dónde vive (Mensajeros de la Paz → Curso 21), ODS 16 y 10, para quién (7 años a Rover; Familia fuera). Qué NO es el curso. |
| 2 | ☮️ Paz negativa, paz positiva | Las frases del Kit (p. 31) en dos columnas. «Estamos en paz» de las patrullas = paz negativa. Las tres violencias que nombra el Kit (directa, cultural, estructural), **mostradas con sus propias actividades** (el refrán *«No hay mejor defensa que un buen ataque»*, p. 61; el cuento del reparto desigual, p. 25), sin definiciones importadas. El conflicto como oportunidad (competencia de Tropa). |
| 3 | 🧭 El viaje: toma conciencia, comparte, actúa | Las tres etapas (pp. 5, 8–9) y los cuatro momentos del viaje (pp. 6–7): el joven descubre el interés → **jóvenes y adultos acuerdan** el viaje → el joven lleva a cabo → evaluación, reconocimiento y **celebración**. Quién decide. Enlace con los siete pasos (Curso 21): el Kit trae el contenido; el *Modelo*, la traducción pedagógica. Andrés lleva la idea a la Corte de Honor en vez de anunciarla. |
| 4 | 🪞 La autoevaluación: dónde empieza cada uno | Herramienta 1: dos áreas, lista por rama, tres marcas, *Mis objetivos personales* y *Mis actividades*; al inicio y al final (Manual p. 11); menores de 15 con ayuda del educador **sin llenarla por ellos** (posición de poder, Manual p. 6). **No es Exploro–Aplico–Profundizo.** Tabla rama ↔ grupo etario; las edades que no cuadran; Familia. |
| 5 | 🛠️ Manos a la obra, por rama | Herramienta 2 (`method-grid` por rama con las actividades de cada área). **Dos actividades de 7 a 10 y tres desde los 11** (p. 9). Opcionales y adaptables *«enmarcadas en las competencias»* (p. 19); DURASLID como filtro (Curso 14). La Tropa de Andrés escoge en Consejo de Patrulla: *Paz positiva y paz negativa*, *La dinámica del conflicto*, *Líneas de tiempo*. |
| 6 | 🤲 Memoria sin revictimizar | La memoria histórica en el Kit (competencias por rama; *Los Mapas*, *Líneas de tiempo*: violencia **y resistencia**). **El Kit no trae advertencias**; lo que sí hay: revictimización (Política p. 15), posición de poder (Manual p. 6), consentimiento informado (*Modelo* p. 71), la práctica del Kit en *Empiezo a ser consciente…* (p. 45), permiso de adaptar (p. 19). En la línea de tiempo, un scout cuenta que su familia llegó desplazada: Andrés agradece, no pregunta más frente al grupo, deja que él decida qué contar; si algo revela un riesgo actual, **reporta** por el botón y el Comité decide. Confidencialidad no es secreto. En Manada, empezar por las iniciativas de resistencia y no por el sufrimiento propio. |
| 7 | ✊ Actúa y reconoce | Proyecto de servicio (pp. 8–9: identificar con la comunidad, lluvia de ideas, viabilidad, **SMART**, sostenibilidad, presentar a beneficiarios); *Propuesta de proyecto* (15 en adelante). Evaluación y reconocimiento: autoevaluación final, resultados, esfuerzo, **celebrar**; insignia *«de acuerdo con su proceso personal y su edad»* con procedimiento no escrito → comisión; registro de acciones; Héroes Mensajeros de la Paz (11–26, Curso 21). **Se cobra el hook**: las dos patrullas organizan juntas una tarde de juegos cooperativos con la junta de acción comunal. `Y en tu rama`. Vivir → Mirar → Comprender → Proyectar. Qué sigue: 23 y 24. `mission-box`. |

Cada lección cierra con reflexión (por rol y situación, **sin nombres ni historias personales**) y dos preguntas. Distractores con las ideas viejas: *la paz es que no haya pelea*, *la charla sobre la guerra primero*, *el adulto decide el desafío*, *la autoevaluación la llena el adulto*, *más actividades es mejor*, *indagar el dolor para que haya memoria*, *guardar el secreto*, *la insignia como meta*. La fuga se mide con `fuga.py` y `att.py` en **cada** vuelta (ADR-100, 104).

## 5. Colaterales

- Catálogo (nivel 4, orden 22), workflow E2E, portal y panel (23).
- Barrer los cursos que anuncian el 22: `marco-mundo-mejor-ods` (L1 y L7: «Cuando se publiquen»), `a-salvo-del-peligro-programa`, `mi-compromiso-programa-jovenes`.
- `INVENTARIO-DOCUMENTOS-BASE.md`: el Kit es **ASC**, no OMMS (y revisar los otros dos kits).
- Glosario: **Constructores de Paz** (desafío, etapas, autoevaluación, edades del Kit ≠ ramas); **paz negativa · paz positiva** (según el Kit); nota de que el Kit no trae salvaguardas.
- ADR-105, trazabilidad, ledger, bitácora, `generar-estado.py`.

---

_Documento de diseño v1.1 — 28 de septiembre de 2026. La v1.1 recoge tres vueltas de auditoría: las tres violencias se presentan como **propuesta del curso**, no del Kit (que las nombra sin definirlas); el criterio de reporte de la L6 no se limita a «lo de hoy» (la Política p. 21 no pone filtro de tiempo: vulneración o riesgo, lo que está pasando o lo que nadie ha atendido; si dudas, reportas; peligro inmediato, también a las autoridades) y suma un sexto cuidado (práctica 2+1); la frase que casi todos marcan en la Tropa es la del **conflicto como oportunidad** (p. 14), que es la que trabaja *La dinámica del conflicto* (p. 54), no la de la rabia; las reflexiones de L2 y L6 ya no piden relatos ni roles; los órganos por rama (Consejo de Roca, Consejos de Patrulla y Corte de Honor, Congreso de Comunidad, Consejo de Clan) son donde el desafío se **presenta y se decide**, mientras el viaje es personal; la L7 evalúa cerrar aunque el resultado sea parcial, y la insignia remite al Curso 21; séptimo objetivo (cerrar). Las preguntas de recuerdo pasaron a aplicación y la fuga quedó en el azar en todas las estrategias. El JSON manda._
