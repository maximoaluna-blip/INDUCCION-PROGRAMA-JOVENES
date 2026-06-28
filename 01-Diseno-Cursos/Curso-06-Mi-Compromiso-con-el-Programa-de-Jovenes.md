# Diseño del Curso 6 — 🗺️ Mi Compromiso con el Programa de Jóvenes

**Línea:** Programa de Jóvenes · **Nivel:** 1 (Fundamentación) · **Posición:** Curso 6 de 6 del Nivel 1.

> Cierre de la ruta. Tras la bienvenida, la educación por el amor, las características esenciales, el método y el modelo colombiano, este curso convierte los 5 anteriores en un plan personal firmable. No introduce contenido nuevo: integra todo lo visto en una herramienta accionable para el día a día del dirigente.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `mi-compromiso-programa-jovenes` |
| Título | Mi Compromiso con el Programa de Jóvenes |
| Subtítulo | Tu plan personal de dirigente — cierre del Nivel 1 |
| Icono | 🗺️ |
| Duración | ~30 min |
| Lecciones de contenido | 6 + intro + certificado |
| Audiencia primaria | Todo adulto que ha completado los Cursos 1–5 del Nivel 1. |
| Pre-requisitos | Cursos 1, 2, 3, 4 y 5 del Nivel 1 (los 5 anteriores). |
| Logro final | "Dirigente con Plan" |

---

## 2. Objetivos del curso

Al completar este curso, el adulto:

1. **Integra** los aprendizajes de los Cursos 1–5 en una visión personal del propio rol como dirigente de PJ.
2. **Construye** un Plan Personal de Dirigente con compromisos chicos, concretos y observables para el próximo trimestre.
3. **Selecciona** los cursos del Nivel 2 y del Nivel 4 que más le servirán según su rama y rol.
4. **Compromete** una primera acción de aplicación del Método Scout en su próxima reunión real.
5. **Identifica** a un par dirigente con quien compartir el plan para sostenerse mutuamente.
6. **Cierra** la ruta del Nivel 1 con un acto de promesa personal hacia la propia formación continua.

---

## 3. Hook pedagógico (la idea poderosa que sostiene el curso)

> **"Saber sin actuar no transforma. Y actuar sin plan termina en cansancio. Este curso es el puente: convierte lo que aprendiste en lo que vas a hacer, con quién, cuándo, y cómo sabrás que se cumplió."**

Este hook se enuncia en la lección 1 y se ejecuta en el `plan-builder` que atraviesa las lecciones 3 a 6. Su función es evitar el efecto "termino el curso y vuelvo a hacer lo mismo de siempre".

---

## 4. Estructura de lecciones

### 4.1 Mapa general

| # | Lección | Duración | Idea central | Logro al completar |
|---|---|---|---|---|
| 1 | 👋 Bienvenida | 3 min | Llegaste al cierre del Nivel 1. Ahora construyes tu plan. | Listo para integrar |
| 2 | 🪞 Mi brújula: qué me quedó del Nivel 1 | 5 min | Revisión guiada de las reflexiones acumuladas. | Veo mi camino |
| 3 | 🎯 Mi rol, mi rama, mis prioridades | 5 min | Defino dónde sirvo y qué áreas trabajo este trimestre. | Sé dónde estoy parado |
| 4 | 🛠️ Mi próxima reunión + mi proyecto del trimestre | 6 min | 1 reunión y 1 proyecto planeados con los 8 elementos + DURASLID. | Tengo planes concretos |
| 5 | 📚 Mi ruta de formación: Niveles 2 y 4 | 4 min | Selecciono cursos según rama y rol. | Sé qué viene |
| 6 | 🤝 Mi par dirigente + Promesa personal | 4 min | Comparto el plan con un par + firmo mi promesa. | Dirigente con Plan (final) |

**Total estimado: ~30 min**, dentro del rango óptimo del marco metodológico.

---

### 4.2 Lección 1 — 👋 Bienvenida (3 min, isIntro: true)

**Idea central:** Llegaste al cierre del Nivel 1. Ahora construyes tu plan.

**Secciones (en orden):**

1. **`info-box`** — Tiempo (~30 min) y promesa: _"Al final vas a tener un Plan Personal de Dirigente firmado, descargable en PDF, con compromisos chicos y concretos para el próximo trimestre. Y un par dirigente con quien compartirlo."_
2. **`paragraph`** — Reconocimiento: _"Llegaste hasta acá. Tomaste 5 cursos. Leíste a Baden-Powell, a la OMMS, a la PNPJ. Te asomaste a los 8 elementos del Método y al Modelo de Aplicación colombiano. Reflexionaste, contestaste quizzes, escribiste compromisos parciales. Hoy todo eso se vuelve plan."_
3. **`heading` (nivel 3)** — _"Lo que vas a vivir en este curso"_
4. **`list`** — Las 5 ideas:
    - Revisión de tu brújula: qué te quedó de los Cursos 1–5.
    - Definición de tu rol, rama y áreas prioritarias del trimestre.
    - Tu próxima reunión y tu proyecto del trimestre, planeados con los 8 elementos del Método.
    - Tu ruta de formación: qué cursos del Nivel 2 y del Nivel 4 vas a tomar primero.
    - Tu par dirigente y tu promesa personal.
5. **`mission-box`** — _"Hoy no aprendes contenido nuevo. Integras lo que ya tienes en un plan que puedas mirar dentro de un mes y ajustar. Tómate el tiempo. Vale el viaje."_

**Reflexión:** ninguna.
**Quiz:** ninguno.
**Logro:** "Listo para integrar".

---

### 4.3 Lección 2 — 🪞 Mi brújula: qué me quedó del Nivel 1 (5 min)

**Idea central:** Revisión guiada de las reflexiones acumuladas.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Antes de planear, miremos hacia atrás. Las reflexiones que escribiste en cada curso son tu **brújula personal**: lo que más te resonó, lo que más te costó, lo que reconociste como propio. Aquí las vamos a recuperar."_
3. **`brujula-display`** — Componente que muestra al adulto sus propias reflexiones acumuladas:
    - `sourceCourses`: `["bienvenida-programa-jovenes", "educacion-por-el-amor", "caracteristicas-esenciales-movimiento-scout", "metodo-scout-8-elementos", "pnpj-gran-juego-para-la-vida"]`
    - `displayMode`: `lecciones-clave`
    - Muestra reflexiones de cierre por curso: Curso 1 L6 (compromiso primera semana), Curso 2 L6 (compromiso pedagógico), Curso 3 L6 (frase de definición), Curso 4 L8 (ajuste de reunión), Curso 5 L7 (mapa del Modelo).
4. **`heading` (nivel 3)** — _"Tres preguntas para mirar el camino"_
5. **`paragraph`** — Plantilla de auto-revisión:
    - _"¿Cuál idea de los 5 cursos **más me transformó la mirada** sobre el Programa de Jóvenes? Escríbela en una frase."_
    - _"¿Cuál práctica **me di cuenta que estoy haciendo mal o ausente**, y necesito ajustar?"_
    - _"¿Cuál fortaleza **ya tengo** que el Movimiento necesita de mí?"_
6. **`info-box`** — _"Esta auto-revisión es la materia prima de tu plan. Lo que escribas aquí va a guiar los compromisos de las próximas lecciones. Sé honesto y específico."_

**Reflexión:** _"Responde las 3 preguntas del paso 5. No copies de tus reflexiones anteriores; reescribe con la perspectiva de quien ya terminó los 5 cursos."_

**Quiz (2 preguntas):**

> **P1.** Una "brújula personal" en este Nivel 1 es…
>
> a) _Un instrumento físico que se regala al cerrar el curso._
> b) _El conjunto de reflexiones que escribiste en cada curso, que ahora guía la construcción de tu plan._  ✅
> c) _La hoja de ruta de los cursos siguientes._

> **P2.** ¿Para qué sirve la auto-revisión de la L2 antes de planear?
>
> a) _Para repasar el contenido de los 5 cursos en clave de examen._
> b) _Para identificar la idea más transformadora, la práctica a ajustar y la fortaleza ya presente — insumos directos del plan._  ✅
> c) _Para evaluar si los cursos estuvieron bien diseñados._

**Logro:** "Veo mi camino".

---

### 4.4 Lección 3 — 🎯 Mi rol, mi rama, mis prioridades (5 min)

**Idea central:** Defino dónde sirvo y qué áreas trabajo este trimestre.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Tu plan personal arranca con tu rol concreto. Si serves en Manada, no vas a planear como serves en Clan. Si eres asistente, no vas a planear como un jefe de rama. Vamos al detalle."_
3. **`plan-builder` — Bloque 1 de 4 (rol y rama)**
    - **Campo 1: Rama** — `select` con opciones [Familia, Manada, Tropa, Comunidad, Clan, Equipo de Programa de Grupo, Comisión Regional PJ, Comisión Nacional PJ, Red de Jóvenes].
    - **Campo 2: Cargo actual o esperado** — `select` con opciones [Asistente, Subjefe de Rama, Jefe de Rama, Consejero Juvenil, Comisionado de PJ, Coordinador RDJ, Otro].
    - **Campo 3: Grupo Scout o ámbito** — `text` (nombre del grupo, región).
    - **Campo 4: Cantidad de protagonistas que acompaño / acompañaré** — `number`.
4. **`heading` (nivel 3)** — _"Mis áreas prioritarias del trimestre"_
5. **`paragraph`** — _"De las 6 áreas de crecimiento (Corporalidad, Creatividad, Carácter, Afectividad, Sociabilidad, Espiritualidad), elige **2 áreas** donde quieras poner foco este trimestre. No las que más amas; las que más necesita tu unidad ahora."_
6. **`plan-builder` — Bloque 2 de 4 (áreas)**
    - **Campo 5: Área prioritaria 1** — `select` con las 6 áreas.
    - **Campo 6: Área prioritaria 2** — `select` con las 6 áreas (no repetir).
    - **Campo 7: Razón de la elección** — `textarea` (2-3 líneas).
7. **`heading` (nivel 3)** — _"Mi rol principal del trimestre"_
8. **`paragraph`** — _"De los 3 roles del Modelo de Aplicación (Apoyar, Acompañar, Enlazar), ¿cuál vas a fortalecer este trimestre? El que más te haga falta, no el que ya manejas bien."_
9. **`plan-builder` — Bloque 3 de 4 (rol)**
    - **Campo 8: Rol prioritario** — `radio` con [Apoyar, Acompañar, Enlazar].
    - **Campo 9: Razón** — `textarea`.

**Reflexión:** _"Escribe en una frase: ¿cómo conecta tu rol prioritario del trimestre con las 2 áreas que elegiste?"_

**Quiz (2 preguntas):**

> **P1.** Marcela ama el área de Creatividad y se le da fácil. Pero su Manada llega dispersa y se trata mal entre lobatos. Según el criterio de esta lección, ¿en qué 2 áreas debería poner foco este trimestre?
>
> a) _Creatividad y otra que le guste, porque va a disfrutar más el trimestre._
> b) _Carácter y Sociabilidad, porque son las que su unidad más necesita ahora, aunque no sean sus favoritas._  ✅
> c) _Las 6 áreas a la vez, para no dejar ninguna por fuera._

> **P2.** Andrés es buenísimo Enlazando: consigue aliados, gestiona permisos, conecta con los papás. Pero le cuesta Acompañar uno-a-uno a sus protagonistas. ¿Cuál rol del Modelo debería elegir como prioritario del trimestre?
>
> a) _Enlazar, para seguir explotando lo que ya hace bien._
> b) _Acompañar, porque es el que más le hace falta fortalecer._  ✅
> c) _Da igual cuál: los tres roles se desarrollan solos con el tiempo._

**Logro:** "Sé dónde estoy parado".

---

### 4.5 Lección 4 — 🛠️ Mi próxima reunión + mi proyecto del trimestre (6 min)

**Idea central:** 1 reunión y 1 proyecto planeados con los 8 elementos + DURASLID.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Esta es la lección donde el plan se vuelve acción. Vas a planear concretamente: una reunión que vas a tener esta o la próxima semana, y un proyecto que tu unidad va a vivir en el próximo trimestre."_
3. **`heading` (nivel 3)** — _"Mi próxima reunión: los 8 elementos en acción"_
4. **`plan-builder` — Bloque 4 de 4 (reunión y proyecto)**
    - **Campo 10: Fecha de la próxima reunión** — `date`.
    - **Campo 11: Tema o foco principal** — `text`.
    - **Campo 12: Elemento del Método que voy a fortalecer especialmente** — `select` con los 8 elementos.
    - **Campo 13: ¿Cómo voy a fortalecerlo? (1-2 líneas)** — `textarea`.
    - **Campo 14: ¿Cuál de los 8 atributos DURASLID está en riesgo y necesita atención?** — `select` con los 8 (Desafiante, Útil, Recompensante, Atractiva, Segura, Lúdica, Inclusiva, Diversa).
5. **`heading` (nivel 3)** — _"Mi proyecto del trimestre"_
6. **`paragraph`** — _"Un proyecto scout no es una actividad. Es una experiencia con propuesta (de quién surge), decisión (cómo se elige), preparación (qué se necesita), desarrollo (cómo se ejecuta), evaluación (qué aprendimos). Lo más importante: **lo proponen los protagonistas**, no los adultos. Tu rol es Apoyar, Acompañar y Enlazar."_
7. **`plan-builder` — Bloque 4 continúa**
    - **Campo 15: Nombre tentativo del proyecto del trimestre** — `text`.
    - **Campo 16: ¿De dónde surgió la idea? (¿de los protagonistas o del adulto?)** — `radio` con [Surgió de los protagonistas, Surgió del adulto y voy a abrirla a votación, Aún no surgió — la próxima reunión la abrimos].
    - **Campo 17: ¿Qué áreas de crecimiento toca?** — `checkbox` con las 6 áreas (mínimo 2).
    - **Campo 18: ¿Cómo se conecta con el territorio (barrio, comunidad, escuela)?** — `textarea`.
8. **`info-box`** — _"Si te quedaste atascado en algún campo, está bien. Marca 'por definir' y vuelve más tarde. El plan se construye, no se improvisa."_

**Reflexión:** _"Imagina que tu plan se cumple al 80%. Al final del trimestre, ¿qué se va a notar en tu unidad que hoy no se nota? Sé concreto."_

**Quiz (2 preguntas):**

> **P1.** Un proyecto scout, según el Modelo de Aplicación 2026, idealmente…
>
> a) _Lo propone el dirigente y lo ejecutan los protagonistas._
> b) _Surge de los protagonistas; el dirigente Apoya, Acompaña y Enlaza._  ✅
> c) _Lo asigna el Comisionado Regional según el plan nacional._

> **P2.** ¿Por qué se planea pensando en un elemento del Método y un atributo DURASLID?
>
> a) _Para cumplir un requisito de la PNPJ._
> b) _Para hacer consciente lo que la reunión va a fortalecer especialmente, en vez de confiarlo a la intuición._  ✅
> c) _Para evitar tener que aplicar los 8 elementos._

**Logro:** "Tengo planes concretos".

---

### 4.6 Lección 5 — 📚 Mi ruta de formación: Niveles 2 y 4 (4 min)

**Idea central:** Selecciono cursos según rama y rol.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Hoy cierras el Nivel 1. La línea tiene 4 niveles. Aquí defines cuál curso del Nivel 2 vas a tomar primero y cuándo vas a hacer el Curso 24 (A Salvo del Peligro — habilitante)."_
3. **`heading` (nivel 3)** — _"Tu curso de rama del Nivel 2 (Cursos 7–11)"_
4. **`paragraph`** — _"Cada dirigente toma el curso de su rama. La plataforma te lo sugiere automáticamente según la rama que declaraste en la L3 de este curso."_
5. **`list`** — Recordatorio de los 5 cursos por rama:
    - 🐻 **Curso 7** — Rama Familia (Cachorros, 5-6 años).
    - 🐺 **Curso 8** — Rama Manada (Lobatos, 7-10 años).
    - ⚜️ **Curso 9** — Rama Tropa Scout (11-14 años).
    - 🧗 **Curso 10** — Rama Comunidad (Nómadas, 15-17 años).
    - 🏔️ **Curso 11** — Rama Clan (Rovers, 18-20 años).
6. **`heading` (nivel 3)** — _"Los 3 cursos pedagógicos operativos (Cursos 12, 13, 14)"_
7. **`paragraph`** — _"Estos los toman todos los dirigentes de unidad. Recomendamos este orden, según tu rol:"_
8. **`list`** — Orden sugerido:
    - **Si tu foco es acompañar la progresión personal** (uno-a-uno con los protagonistas) → empieza por el **Curso 12 (Seguimiento de la Progresión)**.
    - **Si eres Jefe o Subjefe de Rama** → empieza por el **Curso 13 (Planeación de Reuniones)** y luego el **Curso 14 (Ciclo con ABP)**.
    - **Si eres Asistente o entras nuevo** → orden libre, según prioridad de tu unidad.
9. **`heading` (nivel 3)** — _"Curso 24 — A Salvo del Peligro: HABILITANTE"_
10. **`info-box`** — _"**Importante**: ningún dirigente avanza al Nivel 2 sin haber completado el Curso 24 (A Salvo del Peligro aplicado al Programa). Es el único curso del Nivel 4 que es prerrequisito real. Tómalo en paralelo con tu primer curso del Nivel 2."_
11. **`paragraph`** — _"Los otros 4 cursos del Nivel 4 (Marco de Mundo Mejor, Kit Constructores de Paz, Kit HeForShe, Kit Patrimonito) se toman según interés o convocatorias nacionales. No tienen orden obligatorio."_

**Reflexión:** _"Escribe cuál será **el primer curso del Nivel 2** que vas a tomar (de los 8) y cuándo planeas empezarlo. Sé específico (semana, mes)."_

**Quiz (2 preguntas):**

> **P1.** Un dirigente ya terminó el Nivel 1 y quiere arrancar el Curso 9 (Rama Tropa) del Nivel 2 la próxima semana, pero todavía no ha hecho el Curso 24 (A Salvo del Peligro). ¿Qué pasa?
>
> a) _Puede arrancar el Curso 9 sin problema; el Curso 24 es opcional y lo hace cuando quiera._
> b) _No puede avanzar al Nivel 2 hasta completar el Curso 24; lo ideal es tomarlo en paralelo con su primer curso de Nivel 2._  ✅
> c) _Solo lo necesita si su grupo está en una zona de alto riesgo._

> **P2.** Un dirigente nuevo de Manada que se enfocará en acompañar la progresión personal debería empezar el Nivel 2 con…
>
> a) _El Curso 8 (Rama Manada) y el Curso 12 (Seguimiento de la Progresión)._  ✅
> b) _El Curso 14 (Ciclo con ABP) primero, luego el resto._
> c) _Los cursos del Nivel 3 directamente._

**Logro:** "Sé qué viene".

---

### 4.7 Lección 6 — 🤝 Mi par dirigente + Promesa personal (4 min)

**Idea central:** Comparto el plan con un par + firmo mi promesa.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Los planes que se guardan en el cajón no se cumplen. Los que se comparten con un par, sí. Cerramos el Nivel 1 con dos actos: identificar un par dirigente con quien compartir el plan, y firmar una promesa personal."_
3. **`heading` (nivel 3)** — _"Mi par dirigente"_
4. **`paragraph`** — _"Un par dirigente puede ser: otro adulto de tu mismo consejo de grupo, alguien de tu rama en otro grupo de la región, un dirigente con quien hiciste un curso de formación. La función: compartirle el plan, contar cómo va cada mes, ajustar juntos. No es un jefe ni un evaluador; es un compañero de camino."_
5. **`plan-builder` — Bloque final (par)**
    - **Campo 19: Nombre del par dirigente** — `text`.
    - **Campo 20: Grupo o ámbito del par** — `text`.
    - **Campo 21: ¿Cuándo le compartirás el plan?** — `date`.
    - **Campo 22: ¿Con qué frecuencia se reunirán para revisar avances?** — `radio` con [Semanal, Quincenal, Mensual].
6. **`heading` (nivel 3)** — _"Mi promesa personal del Nivel 1"_
7. **`paragraph`** — Plantilla de promesa:
    - _"Yo, **[tu nombre]**, completé el Nivel 1 de la Línea Programa de Jóvenes el día **[fecha]**."_
    - _"Asumí los aprendizajes de los Cursos 1 a 6 como brújula de mi servicio al Movimiento Scout."_
    - _"Me comprometo a vivir el Programa de Jóvenes como una alianza educativa entre jóvenes y adultos, no como un manual."_
    - _"Me comprometo a educar por el amor, no por el temor."_
    - _"Me comprometo a aplicar el Método Scout como sistema completo, no como menú."_
    - _"Me comprometo a tomar el Curso 24 (A Salvo del Peligro) antes de avanzar al Nivel 2."_
    - _"Y me comprometo a revisar y ajustar este Plan Personal de Dirigente, junto con mi par, cada **[frecuencia que elegí]**."_
8. **`mission-box`** — _"Lee tu promesa en voz alta antes de descargar tu certificado. Lo que se dice cobra peso. Lo que se escribe se queda."_
9. **`photo-upload`**
    - `photoId`: `pj-promesa-personal-nivel-1`
    - `prompt`: "Foto de tu promesa firmada (opcional)"
    - `hint`: _"Si quieres, imprime la promesa, fírmala a mano y súbele la foto. Es solo para ti — la guardamos en tu navegador."_
    - `buttonLabel`: "Subir foto de mi promesa"
10. **`heading` (nivel 3)** — _"Lo que viene"_
11. **`list`** — Mapa hacia los Niveles 2-4:
    - **Inmediato**: Curso 24 (A Salvo del Peligro — habilitante).
    - **Próximo mes**: tu curso de rama del Nivel 2 + un curso pedagógico operativo (12, 13 o 14).
    - **Próximos meses**: el resto del Nivel 2, el Nivel 3 (cuando ejerzas un cargo) y los demás cursos del Nivel 4.
12. **`info-box`** — Despedida: _"Bienvenido al equipo de los dirigentes con plan. El Movimiento te necesitaba. Tu unidad también. Buen camino, hermano mayor."_

**Reflexión:** _"Escribe tu promesa personal completa (paso 7) y agrega una línea propia tuya — algo que solo tú podrías comprometer, según tu camino. Esta promesa te la enviaremos por correo con tu certificado."_

**Quiz (2 preguntas):**

> **P1.** ¿Por qué se sugiere compartir el plan con un par dirigente, no con un jefe?
>
> a) _Porque los jefes están ocupados con otras tareas._
> b) _Porque el par es compañero de camino, no evaluador: sostiene sin juzgar y permite ajuste mutuo._  ✅
> c) _Porque el plan es secreto y el jefe no debe verlo._

> **P2.** La promesa personal del Nivel 1 es…
>
> a) _Un trámite administrativo necesario para obtener el certificado._
> b) _Un acto de compromiso explícito que convierte el aprendizaje en orientación viva del servicio._  ✅
> c) _Una promesa de cumplir los 5 cursos restantes del Nivel 1._

**Logro al completar:** "Dirigente con Plan" (logro final, `unlockOnModule: -1`).

---

## 5. Logros (achievements)

| ID | Nombre | Emoji | Desbloqueo |
|---|---|---|---|
| `achievement-1` | Listo para integrar | 👋 | Al completar Lección 1 |
| `achievement-2` | Veo mi camino | 🪞 | Al completar Lección 2 |
| `achievement-3` | Sé dónde estoy parado | 🎯 | Al completar Lección 3 |
| `achievement-4` | Tengo planes concretos | 🛠️ | Al completar Lección 4 |
| `achievement-5` | Sé qué viene | 📚 | Al completar Lección 5 |
| `achievement-final` | Dirigente con Plan | 🗺️✨ | Al completar el curso (`unlockOnModule: -1`) |

---

## 6. Conexiones cross-course

### 6.1 Hacia atrás (los 5 cursos del Nivel 1)

- **L2 — `brujula-display`** lee las reflexiones de **los 5 cursos anteriores** y se las muestra al adulto como insumo.
- **L3 — áreas y roles** integra Curso 3 (Características Esenciales — alianza joven-adulto), Curso 4 (Método — Apoyo del Adulto) y Curso 5 (PNPJ — 6 áreas + 3 roles).
- **L4 — reunión y proyecto** opera con los 8 elementos del Curso 4 y el filtro DURASLID del Curso 5.
- **L6 — promesa** recoge la educación por el amor del Curso 2, los principios del Curso 3 y el compromiso pedagógico del Curso 2.

### 6.2 Hacia adelante (Niveles 2, 3, 4)

- **L5 → Cursos 7–11 (rama)**: recomendación automática según la rama declarada en L3.
- **L5 → Cursos 12, 13, 14 (pedagógicos)**: orden recomendado según rol.
- **L5 + L6 → Curso 24 (A Salvo del Peligro)**: prerrequisito habilitante.
- **L6 → par dirigente**: vínculo informal de acompañamiento entre niveles.

### 6.3 Cross-línea

- **Con Política de Adultos Curso 6 (Plan Personal de Desarrollo)**: el Plan Personal de Dirigente de este curso se lee al lado del Plan Personal de Desarrollo de Política de Adultos en el dashboard.
- **Con DI Curso 6 (Mi Aporte al Desarrollo Institucional)**: paralelismo de estructura: ambas líneas cierran su Nivel 1 con un plan personal.

---

## 7. Tipos de sección utilizados

| Tipo | Lecciones |
|---|---|
| `info-box` | Todas |
| `paragraph` | Todas |
| `heading` (nivel 3) | Todas |
| `list` | L1, L5 |
| `brujula-display` | L2 (nuevo en esta línea; ya existe en DI Curso 6) |
| `plan-builder` | L3, L4, L6 (con 22 campos en total) |
| `mission-box` | L1, L6 |
| `photo-upload` | L6 |
| `reflection` | L2, L3, L4, L5, L6 |
| `quiz` | L2, L3, L4, L5, L6 |

**Requiere reutilización del `brujula-display`** del Curso 6 de DI con `sourceCourses` actualizados a los IDs de PJ. **El `plan-builder` opera con 22 campos** distribuidos en L3, L4 y L6 — generan un PDF descargable con el Plan Personal de Dirigente al finalizar.

---

## 8. Multimedia requerido

| Activo | Tipo | Estado | Observación |
|---|---|---|---|
| Plantilla PDF "Plan Personal de Dirigente PJ" | PDF generado | Por diseñar | Crítica. Salida del `plan-builder` con todos los 22 campos llenos. Diseño coherente con la plantilla PDF del Curso 6 DI. |
| Imagen de portada | PNG | Por crear | Brújula sobre mapa de Colombia — color #FF6F00 (cálido, motivacional). |
| Plantilla "Promesa personal Nivel 1" | PDF imprimible | Por diseñar | La adulta puede imprimir, firmar a mano y subir foto. |

**Decisión sugerida:** la plantilla del Plan Personal de Dirigente es el entregable más importante del Nivel 1. Vale la pena producirla con calidad de marca ASC.

---

## 9. Validación contra el marco metodológico

| Criterio | Cumplimiento |
|---|---|
| Curso entre 20 y 40 min | ✅ ~30 min |
| Lecciones de 3–8 min | ✅ rango 3–6 min |
| Lenguaje conversacional, tutea | ✅ |
| Citas oficiales plegables | ⚠️ ninguna (justificado: este curso es de integración personal, no doctrinal — la doctrina está en los Cursos 1-5). |
| Reflexión personal por lección | ✅ excepto intro |
| Mini-quiz por lección | ✅ 2 por lección |
| 4–6 logros + 1 final | ✅ 5 + 1 |
| L1 `isIntro: true` sin quiz | ✅ |
| Conexión cross-course | ✅ con TODOS los Cursos 1-5 del Nivel 1, con Niveles 2, 3, 4 y cross-línea |
| 3 exigencias propias de PJ | ✅ alianza joven-adulto (L3, L6), DURASLID (L4), educación por el amor (L6) |

---

## 10. Próximos pasos

1. **Revisar este diseño** con el dueño del proyecto.
2. **Diseñar la plantilla PDF "Plan Personal de Dirigente PJ"** (salida del `plan-builder`).
3. **Adaptar el `brujula-display`** del Curso 6 DI a esta línea, con los 5 courseIds de PJ.
4. **Generar el JSON** del curso siguiendo `course-schema.json`.
5. **Generar HTML** con `node build-course.js mi-compromiso-programa-jovenes`.
6. **Generar preview PDF** y revisar.
7. **Pilotar** como cierre del Nivel 1 — los 5-10 dirigentes que hicieron los 5 cursos anteriores deberían completar este como integración.

---

_Documento de diseño del Curso 6, versión inicial — 28 de mayo de 2026. Este curso cierra la ruta del Nivel 1 de la Línea Programa de Jóvenes. Integra los aprendizajes de los Cursos 1-5 en un Plan Personal de Dirigente y una Promesa personal. Validado contra el marco metodológico de la plataforma._
