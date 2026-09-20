# Diseño del Curso 7 — 🗺️ Mi Compromiso con el Programa de Jóvenes

**Línea:** Programa de Jóvenes · **Nivel:** 1 (Fundamentación) · **Posición:** Curso 7 de 7 del Nivel 1.

> Cierre de la ruta. Tras la bienvenida, la educación por el amor, las características esenciales, el método y el modelo colombiano, este curso convierte los 6 anteriores en un plan personal firmable. No introduce contenido nuevo: integra todo lo visto en una herramienta accionable para el día a día del dirigente.

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
| Audiencia primaria | Todo adulto que ha completado los Cursos 1–6 del Nivel 1. |
| Pre-requisitos | Cursos 1, 2, 3, 4, 5 y 6 del Nivel 1 (los 6 anteriores). |
| Logro final | "Dirigente con Plan" |

---

## 2. Objetivos del curso

Al completar este curso, el adulto:

1. **Integra** los aprendizajes de los Cursos 1–6 en una visión personal del propio rol como dirigente de PJ.
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
2. **`paragraph`** — Reconocimiento: _"Llegaste hasta acá. Tomaste 6 cursos. Leíste a Baden-Powell, a la OMMS, a la PNPJ. Te asomaste a los 8 elementos del Método y al Modelo de Aplicación colombiano. Reflexionaste, contestaste quizzes, escribiste compromisos parciales. Hoy todo eso se vuelve plan."_
3. **`heading` (nivel 3)** — _"Lo que vas a vivir en este curso"_
4. **`list`** — Las 5 ideas:
    - Revisión de tu brújula: qué te quedó de los Cursos 1–6.
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

> ⚠️ **Corregido el 19-sep-2026 (ADR-067) — esta lección se construyó SIN el `brujula-display` que este diseño
> pedía, y el diseño no se enteró.** El componente existe en **Desarrollo Institucional** y en **Políticas
> Transversales**, no en Programa de Jóvenes: esta línea no tiene su `case` en `build-course.js` ni el tipo en su
> `course-schema.json`. **No se publicó nada en blanco** —el tipo nunca llegó al JSON—: la lección resuelve el
> mismo propósito con un `info-box` que le pide al adulto tener a la vista sus seis reflexiones de cierre, y las
> enumera una por una. Lo que sigue abierto —decisión del dueño— es **si se porta el componente y se republica el
> curso**. Abajo está descrito **lo que existe**; lo que el diseño pedía queda anotado dentro del propio paso 3,
> para que se entienda de dónde viene y qué haría falta para portarlo.

**Idea central:** Revisión guiada de las reflexiones acumuladas.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Antes de planear, miremos hacia atrás. Las reflexiones que escribiste en cada curso son tu **brújula personal**: lo que más te resonó, lo que más te costó, lo que reconociste como propio. Aquí las vamos a recuperar."_
3. **`info-box`** — La brújula, enumerada para que el adulto la recupere él mismo. Texto construido:
    _"🧭 **Tu brújula del Nivel 1.** Recupera las reflexiones de cierre que escribiste en cada curso: el compromiso
    de la primera semana (Curso 1, L6), tu compromiso pedagógico (Curso 2, L6), tu frase de «antes pensaba / ahora
    entiendo» sobre qué es educar (Curso 3, L6), tu frase de definición (Curso 4, L6), tu ajuste de reunión
    (Curso 5, L8) y tu mapa del Modelo (Curso 6, L7). Tenlas a la vista mientras construyes tu plan."_
    - **Conserva las seis fuentes exactas** que pedía el diseño original; lo que cambia es **quién las trae**: las
      trae el adulto, no el motor.
    - ⚠️ **Lo que el diseño pedía y no se construyó**, por si algún día se porta el componente: un
      `brujula-display` con `sourceCourses` = `["bienvenida-programa-jovenes", "educacion-por-el-amor",
      "como-se-educa-hoy", "caracteristicas-esenciales-movimiento-scout", "metodo-scout-8-elementos",
      "pnpj-gran-juego-para-la-vida"]` y `displayMode: lecciones-clave`. **Ojo con dos cosas al portarlo:** el
      renderizador de DI lee **un** curso y **un** módulo por caja (`data-source-course` / `data-source-module`),
      no seis, y el módulo hay que declararlo **siempre** —cae al 6 por defecto y la caja sale vacía sin avisar—.
4. **`heading` (nivel 3)** — _"Tres preguntas para mirar el camino"_
5. **`list`** — Plantilla de auto-revisión (tres ítems; el diseño decía `paragraph` y se construyó como lista):
    - _"¿Cuál idea de los 6 cursos **más me transformó la mirada** sobre el Programa de Jóvenes? Escríbela en una frase."_
    - _"¿Cuál práctica **me di cuenta que estoy haciendo mal o ausente**, y necesito ajustar?"_
    - _"¿Cuál fortaleza **ya tengo** que el Movimiento necesita de mí?"_
6. **`info-box`** — _"Esta auto-revisión es la materia prima de tu plan. Lo que escribas aquí va a guiar los compromisos de las próximas lecciones. Sé honesto y específico."_

**Reflexión:** _"Responde las 3 preguntas del paso anterior. No copies de tus reflexiones anteriores; reescribe con la perspectiva de quien ya terminó los 6 cursos."_

**Quiz (2 preguntas):**

> **P1.** Una "brújula personal" en este Nivel 1 es…
>
> a) _Un instrumento físico que se regala al cerrar el curso._
> b) _El conjunto de reflexiones que escribiste en cada curso, que ahora guía la construcción de tu plan._  ✅
> c) _La hoja de ruta de los cursos siguientes._

> **P2.** ¿Para qué sirve la auto-revisión de la L2 antes de planear?
>
> a) _Para repasar el contenido de los 6 cursos en clave de examen._
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
    - **Campo 1: Ámbito de servicio** — `select` con opciones [unidad: Familia, Manada, Tropa, Comunidad, Clan] o [otro ámbito: equipo de programa del grupo, comisión de PJ regional, comisión de PJ nacional, Red de Jóvenes]. Las cuatro últimas **no son ramas**.
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
    - **Campo 14: ¿Cuál de los 8 criterios DURASLID está en riesgo y necesita atención?** — `select` con los 8 (Desafiante, Útil, Recompensante, Atractiva, Segura, Lúdica, Inclusiva, Diversa).
5. **`heading` (nivel 3)** — _"Mi proyecto del trimestre"_
6. **`paragraph`** — _"Un proyecto scout no es una actividad larga. Empieza con una pregunta que sale de mirar el entorno — ¿qué duele?, ¿qué falta?, ¿qué queremos mejorar? — y avanza en cinco momentos: **miran** su realidad, **planean** juntos qué van a hacer y para quién, lo **hacen** por tramos, lo **muestran** a quien va dirigido, y al final **evalúan** qué se llevan. Lo más importante: la pregunta la formulan los protagonistas contigo. Tu rol es Apoyar, Acompañar y Enlazar."_
7. **`plan-builder` — Bloque 4 continúa**
    - **Campo 15: Nombre tentativo del proyecto del trimestre** — `text`.
    - **Campo 16: ¿De dónde surgió la idea? (¿de los protagonistas o del adulto?)** — `radio` con [Surgió de los protagonistas, Surgió del adulto y voy a abrirla a votación, Aún no surgió — la próxima reunión la abrimos].
    - **Campo 17: ¿Qué áreas de crecimiento toca?** — `checkbox` con las 6 áreas (mínimo 2).
    - **Campo 18: ¿Cómo se conecta con el territorio (barrio, comunidad, escuela)?** — `textarea`.
8. **`info-box`** — _"Si te quedaste atascado en algún campo, está bien. Marca 'por definir' y vuelve más tarde. El plan se construye, no se improvisa."_

**Reflexión:** _"Imagina que tu plan se cumple al 80%. Al final del trimestre, ¿qué se va a notar en tu unidad que hoy no se nota? Sé concreto."_

**Quiz (2 preguntas):**

> **P1.** En el ciclo de programa que propone el Modelo de Aplicación 2026, un proyecto…
>
> a) _Lo propone el dirigente y lo ejecutan los protagonistas._
> b) _Surge de los protagonistas; el dirigente Apoya, Acompaña y Enlaza._  ✅
> c) _Lo asigna el Comisionado Regional según el plan nacional._

> **P2.** ¿Por qué se planea pensando en un elemento del Método y un criterio DURASLID?
>
> a) _Para llenar un formato y tener el papeleo al día._
> b) _Para hacer consciente lo que la reunión va a fortalecer especialmente, en vez de confiarlo a la intuición._  ✅
> c) _Para evitar tener que aplicar los 8 elementos del Método en cada reunión y ahorrarse la preparación._

**Logro:** "Tengo planes concretos".

---

### 4.6 Lección 5 — 📚 Mi ruta de formación: Niveles 2 y 4 (4 min)

**Idea central:** Selecciono cursos según rama y rol.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Hoy cierras el Nivel 1. La línea tiene 4 niveles. Aquí defines cuál curso del Nivel 2 vas a tomar primero y cuándo vas a hacer el módulo oficial A Salvo del Peligro de la ASC, que no se deja para después."_
3. **`heading` (nivel 3)** — _"Tu curso de rama del Nivel 2 (Cursos 8–12)"_
4. **`paragraph`** — _"Cada dirigente toma el curso de su rama. Abajo está la lista: busca la tuya y anota cuál vas a tomar primero."_
5. **`list`** — Recordatorio de los 5 cursos por rama:
    - 🐻 **Curso 9** — Rama Familia (Cachorros, 5-6 años).
    - 🐺 **Curso 8** — Rama Manada (Lobatos, 7-10 años).
    - ⚜️ **Curso 10** — Rama Tropa Scout (11-14 años).
    - 🧗 **Curso 11** — Rama Comunidad (Nómadas Scout, 15-17 años).
    - 🏔️ **Curso 12** — Rama Clan (Rovers, 18-20 años).
6. **`heading` (nivel 3)** — _"Los 3 cursos pedagógicos operativos (Cursos 13, 14, 15)"_
7. **`paragraph`** — _"Estos los toman todos los dirigentes de unidad. Recomendamos este orden, según tu rol:"_
8. **`list`** — Orden sugerido:
    - **Si tu foco es acompañar la progresión personal** (uno-a-uno con los protagonistas) → empieza por el **Curso 13 (Seguimiento de la Progresión)**.
    - **Si eres Jefe o Subjefe de Rama** → empieza por el **Curso 14 (Planeación de Reuniones)** y luego el **Curso 15 (Ciclo con ABP)**.
    - **Si eres Asistente o entras nuevo** → orden libre, según prioridad de tu unidad.
9. **`heading` (nivel 3)** — _"A Salvo del Peligro: el módulo oficial de la ASC, cuanto antes"_
10. **`info-box`** — _"**Importante**: ningún curso de esta plataforma te bloquea el acceso a otro — entra al Nivel 2 cuando quieras. Y hay algo que no se deja para después: **el módulo oficial A Salvo del Peligro de la ASC**, que es el que la Asociación exige y certifica. Ninguno de nuestros cursos lo reemplaza; búscalo y hazlo ya. Cuando publiquemos el Curso 25 (A Salvo del Peligro aplicado al Programa) te va a servir para llevarlo a tu unidad, pero el obligatorio es el oficial."_
11. **`paragraph`** — _"Los otros 4 cursos del Nivel 4 (Marco de Mundo Mejor, Kit Constructores de Paz, Kit HeForShe, Kit Patrimonito) se toman según interés o convocatorias nacionales. No tienen orden obligatorio."_

**Reflexión:** _"Escribe cuál será **el primer curso del Nivel 2** que vas a tomar (de los 8) y cuándo planeas empezarlo. Sé específico (semana, mes)."_

**Quiz (2 preguntas):**

> **P1.** Un dirigente ya terminó el Nivel 1 y quiere arrancar el Curso 10 (Rama Tropa) del Nivel 2 la próxima semana. Te pregunta si antes tiene que hacer algún otro curso de la plataforma. ¿Qué le dices?
>
> a) _Que sí, que primero tiene que completar el Nivel 4 entero, que es donde están los kits y todo lo relativo a la protección._
> b) _Que no, que nada lo bloquea; y que lo que no debe esperar es el módulo oficial A Salvo del Peligro de la ASC._  ✅
> c) _Que sí: la plataforma le bloquea el acceso al Nivel 2 hasta que complete el curso de A Salvo del Peligro._

> **P2.** Un dirigente nuevo de Manada que se enfocará en acompañar la progresión personal debería empezar el Nivel 2 con…
>
> a) _El Curso 8 (Rama Manada) y el Curso 13 (Seguimiento de la Progresión)._  ✅
> b) _El Curso 15 (Ciclo con ABP) primero, y después el curso de su rama._
> c) _Los cursos del Nivel 3 directamente, porque ahí está el detalle de cada cargo._

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
    - _"Me comprometo a hacer el módulo oficial A Salvo del Peligro de la ASC, si todavía no lo he hecho."_
    - _"Y me comprometo a revisar y ajustar este Plan Personal de Dirigente, junto con mi par, cada **[frecuencia que elegí]**."_
8. **`mission-box`** — _"Lee tu promesa en voz alta antes de descargar tu certificado. Lo que se dice cobra peso. Lo que se escribe se queda."_
9. **`photo-upload`**
    - `photoId`: `pj-promesa-personal-nivel-1`
    - `prompt`: "Foto de tu promesa firmada (opcional)"
    - `hint`: _"Si quieres, imprime la promesa, fírmala a mano y súbele la foto. Es solo para ti — la guardamos en tu navegador."_
    - `buttonLabel`: "Subir foto de mi promesa"
10. **`heading` (nivel 3)** — _"Lo que viene"_
11. **`list`** — Mapa hacia los Niveles 2-4:
    - **Inmediato**: el módulo oficial A Salvo del Peligro de la ASC, que no lo reemplaza ningún curso nuestro.
    - **Próximo mes**: tu curso de rama del Nivel 2 + un curso pedagógico operativo (13, 14 o 15).
    - **Próximos meses**: el resto del Nivel 2, el Nivel 3 (cuando ejerzas un cargo) y los demás cursos del Nivel 4.
12. **`info-box`** — Despedida: _"Bienvenida, bienvenido al equipo de quienes tienen plan. El Movimiento te necesitaba. Tu unidad también. Buen camino."_

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

### 6.1 Hacia atrás (los 6 cursos del Nivel 1)

- **L2 — la brújula** recoge las reflexiones de cierre de **los 6 cursos anteriores** como insumo. ⚠️ El diseño pedía un `brujula-display` que se las mostrara en pantalla; **no se construyó** (esta línea no dibuja ese tipo) y la lección publicada las **enumera en un `info-box`** para que el adulto las recupere. Ver §4.3 y el ADR-067.
- **L3 — áreas y roles** integra Curso 4 (Características Esenciales — alianza joven-adulto), Curso 5 (Método — Apoyo del Adulto) y Curso 6 (PNPJ — 6 áreas + 3 roles).
- **L4 — reunión y proyecto** opera con los 8 elementos del Curso 5 y el filtro DURASLID del Curso 6.
- **L6 — promesa** recoge la educación por el amor del Curso 2, los principios del Curso 4 y el compromiso pedagógico del Curso 2.

### 6.2 Hacia adelante (Niveles 2, 3, 4)

- **L5 → Cursos 8–12 (rama)**: recomendación automática según la rama declarada en L3.
- **L5 → Cursos 13, 14, 15 (pedagógicos)**: orden recomendado según rol.
- **L5 + L6 → módulo oficial A Salvo del Peligro de la ASC**: lo que no se deja para después. El **Curso 25** (A Salvo del Peligro aplicado al Programa) **aún no está construido** y, cuando lo esté, **no** será habilitante (ADR-019) ni sustituirá al oficial.
- **L6 → par dirigente**: vínculo informal de acompañamiento entre niveles.

### 6.3 Cross-línea

- **Con Política de Adultos Curso 5 (Plan Personal de Desarrollo)**: el Plan Personal de Dirigente de este curso se lee al lado del Plan Personal de Desarrollo de Política de Adultos en el dashboard.
- **Con DI Curso 6 (Mi Aporte al Desarrollo Institucional)**: paralelismo de estructura: ambas líneas cierran su Nivel 1 con un plan personal.

---

## 7. Tipos de sección utilizados

| Tipo | Lecciones |
|---|---|
| `info-box` | Todas |
| `paragraph` | Todas |
| `heading` (nivel 3) | Todas |
| `list` | L1, **L2**, L5, **L6** |
| ~~`brujula-display`~~ | ~~L2 (nuevo en esta línea; ya existe en DI Curso 6)~~ — **no se construyó**: esta línea no dibuja ese tipo (ADR-067) |
| `plan-builder` | **L3** — uno solo, con las **6 áreas de crecimiento** como elementos |
| `mission-box` | L1, L6 |
| `photo-upload` | L6 |
| `reflection` | L2, L3, L4, L5, L6 |
| `quiz` | L2, L3, L4, L5, L6 |

> ⚠️ **Tabla corregida el 19-sep-2026 (ADR-067) contra el curso realmente construido.** Este párrafo decía: *«Requiere reutilización del `brujula-display` del Curso 6 de DI con `sourceCourses` actualizados a los IDs de PJ. El `plan-builder` opera con 22 campos distribuidos en L3, L4 y L6 — generan un PDF descargable con el Plan Personal de Dirigente al finalizar»*. **Ninguna de las dos cosas es lo que se publicó:** el `brujula-display` no se portó, y hay **un solo `plan-builder`, en la L3**, cuyos elementos son las **6 áreas de crecimiento** (meta, plazo y recursos por área, más el compromiso final). El plan **sí es imprimible / guardable como PDF** desde el botón del propio componente. ⚠️ **Desde el 19-sep-2026 sus rótulos de campo pueden declararse en `labels` y llegan también al plan impreso** — este curso no los declara, así que imprime los genéricos.

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
| Citas oficiales plegables | ⚠️ ninguna (justificado: este curso es de integración personal, no doctrinal — la doctrina está en los Cursos 1-6). |
| Reflexión personal por lección | ✅ excepto intro |
| Mini-quiz por lección | ✅ 2 por lección |
| 4–6 logros + 1 final | ✅ 5 + 1 |
| L1 `isIntro: true` sin quiz | ✅ |
| Conexión cross-course | ✅ con TODOS los Cursos 1-6 del Nivel 1, con Niveles 2, 3, 4 y cross-línea |
| 3 exigencias propias de PJ | ✅ alianza joven-adulto (L3, L6), DURASLID (L4), educación por el amor (L6) |

---

## 10. Próximos pasos *(lista del 28-may-2026 — histórica; el curso está publicado)*

> ⚠️ **Se conserva tal cual porque explica el hueco.** El **paso 3 nunca se hizo**, y nada lo detectó hasta el
> 19-sep-2026 (ADR-067): el curso se generó, se auditó y se publicó sin el componente, porque el JSON simplemente
> no lo declaró. *Una tarea de esta lista que no se ejecuta no deja rastro en ninguna parte — ni en el build, ni en
> las auditorías, ni en la suite.*

1. ✅ **Revisar este diseño** con el dueño del proyecto.
2. ✅ **Diseñar la plantilla PDF "Plan Personal de Dirigente PJ"** (salida del `plan-builder`) — resuelto con la
   salida imprimible del propio componente.
3. ❌ **Adaptar el `brujula-display`** del Curso 6 DI a esta línea, con los 6 courseIds de PJ. **No se hizo.** La L2
   quedó con un `info-box` que enumera las seis reflexiones (§4.3). **Decisión abierta:** portarlo y republicar, o
   dejarlo así.
4. ✅ **Generar el JSON** del curso siguiendo `course-schema.json`.
5. ✅ **Generar HTML** con `node build-course.js mi-compromiso-programa-jovenes`.
6. ✅ **Generar preview PDF** y revisar.
7. **Pilotar** como cierre del Nivel 1 — los 5-10 dirigentes que hicieron los 6 cursos anteriores deberían completar este como integración.

---

_Documento de diseño del Curso 7 — **v1.1, 19 de septiembre de 2026** (ADR-067: el documento se pone al día con el curso que de verdad se construyó y publicó. Corregidos la §4.3 —el `brujula-display` que esta línea no dibuja, y el `list` de las tres preguntas—, la §6.1, la tabla de componentes de la §7 y la lista de próximos pasos de la §10, donde el paso 3 quedó sin hacer. **El diseño es fuente:** quien reconstruyera el curso desde la versión anterior reintroduciría un componente que el build de Programa de Jóvenes no sabe dibujar). Versión inicial — 28 de mayo de 2026. Este curso cierra la ruta del Nivel 1 de la Línea Programa de Jóvenes. Integra los aprendizajes de los Cursos 1-6 en un Plan Personal de Dirigente y una Promesa personal. Validado contra el marco metodológico de la plataforma._
