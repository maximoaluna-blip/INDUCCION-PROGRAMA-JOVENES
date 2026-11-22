# Diseño del Curso 1 — 🎒 Bienvenida al Programa de Jóvenes

**Línea:** Programa de Jóvenes · **Nivel:** 1 (Fundamentación) · **Posición:** Curso 1 de 7 del Nivel 1.

> Vertical slice del Nivel 1. Este curso es la prueba de concepto del marco metodológico aplicado a la Línea Programa de Jóvenes. Tras pilotaje, se replicará el patrón a los Cursos 2–6.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `bienvenida-programa-jovenes` |
| Título | Bienvenida al Programa de Jóvenes |
| Subtítulo | Formación de Adultos Voluntarios — Asociación Scouts de Colombia |
| Icono | 🎒 |
| Duración | ~27 min |
| Lecciones de contenido | 5 + intro + certificado |
| Audiencia primaria | Todo adulto que entra a la línea: dirigentes de unidad de las 5 ramas (Familia, Manada, Tropa, Comunidad, Clan), adultos que apoyan una unidad, equipos de programa de grupo, comisionados de PJ regionales y nacionales, miembros de la Red Nacional de Jóvenes, consejeros juveniles, adultos voluntarios en general. |
| Pre-requisitos | Ninguno. Es la puerta de entrada a la línea. (Recomendado: haber tomado o estar tomando el Curso 1 de la Línea Política de Adultos, pero no es bloqueante.) |
| Logro final | "Constructor de Programa" |

---

## 2. Objetivos del curso

Al completar este curso, el adulto:

1. **Distingue**, en una situación de su unidad, una práctica de Programa vivido como alianza educativa de una práctica de manual que se sigue al pie de la letra.
2. **Relaciona** gestos cotidianos de un adulto en la unidad (acoger a un joven nuevo, dejar decidir a la patrulla, hacer preguntas en vez de dar órdenes) con el elemento del Método Scout que ponen en juego.
3. **Responde** con argumentos de la lección a los cinco mitos frecuentes del dirigente nuevo.
4. **Ubica** las 5 ramas, los grupos naturales de cada una y la documentación marco vigente de la Dirección Nacional de Programa de Jóvenes (PNPJ 2024 + Modelo de Aplicación 2026), y sabe a cuál acudir para cada pregunta.
5. **Explica**, con un caso, qué cambia en el crecimiento del protagonista (las 6 áreas) cuando el Programa es de calidad y cuando solo entretiene.
6. **Formula** un compromiso semanal con acción, persona por su rol (sin nombres) y señal observable.

_(Objetivos reescritos el 22/11/2026, B5 de la auditoría pedagógica: verbos observables y alineados con lo que evalúan los quizzes. El JSON no declara objetivos.)_

---

## 3. Hook pedagógico (la idea poderosa que sostiene el curso)

> **"El Programa de Jóvenes no es un libro que se sigue. Es una alianza que se vive entre quien crece y quien acompaña. Y esa alianza la firmas tú cada reunión, cada campamento, cada conversación, lo nombres así o no."**

Este hook se enuncia explícitamente en la lección 1 (párrafo 2-bis) y vuelve como eco en el cierre de la lección 6. Su función es contradecir el supuesto erróneo de que "hacer Programa" es seguir la guía oficial al pie de la letra, y reemplazarlo por la idea de que el adulto es co-autor de la experiencia educativa, no su ejecutor.

---

## 4. Estructura de lecciones

### 4.1 Mapa general

| # | Lección | Duración | Idea central | Logro al completar |
|---|---|---|---|---|
| 1 | 👋 Bienvenida | 3 min | "Estás aquí porque vas a acompañar a alguien a crecer." | — |
| 2 | 🎒 ¿Qué es Programa de Jóvenes, en realidad? | 5 min | El Programa es una alianza educativa, no un manual de actividades. | El Programa es alianza |
| 3 | 🧨 Los 5 mitos del dirigente nuevo (y cómo desarmarlos) | 5 min | Lo que crees que es "saber escultismo" no siempre es saberlo. | Mito-buster |
| 4 | 🗺️ Tu Programa en una página | 5 min | Conozco las 5 ramas, los grupos naturales y la documentación marco. | Conozco mi Programa |
| 5 | 💡 Por qué un Programa de calidad cambia la vida de los chicos | 4 min | El Programa toca las 6 áreas de crecimiento del protagonista. | Veo por qué importa |
| 6 | ✍️ Tu primer compromiso | 3 min | Saber sin actuar no transforma; el primer paso es chico y concreto. | Constructor de Programa (final) |

**Total estimado: ~27 min** de lecciones de 3–5 min, dentro del rango óptimo del marco metodológico.

---

### 4.2 Lección 1 — 👋 Bienvenida (3 min, isIntro: true)

**Idea central:** "Estás aquí porque vas a acompañar a alguien a crecer."

**Secciones (en orden):**

1. **`info-box`** — Tiempo estimado del curso (~27 min) y promesa concreta: _"Al final vas a tener claro qué es el Programa de Jóvenes, por qué te aplica a ti incluso si nunca fuiste scout, y cuál es tu primer compromiso. Cada lección cierra con un mini-quiz de tres preguntas: para seguir hay que acertar las tres, y puedes intentarlo las veces que quieras."_
2. **`paragraph`** — Saludo cálido en segunda persona. Reconocimiento del lugar del dirigente en el Movimiento. Mensaje: detrás de cada lobato, scout, nómada o rover que sonríe en una foto, hay un adulto que escogió estar ahí. Hoy esa persona eres tú.
2-bis. **`paragraph`** — Hook enunciado (reauditoría pedagógica 08/11/2026, M1): _"Quizás llegaste esperando que te entregaran un manual: qué hacer cada sábado, paso a paso. Y quizás te preocupa no saber lo suficiente. Te adelantamos la idea que sostiene todo este curso: el Programa de Jóvenes no es un libro que se sigue. Es una alianza que se vive entre quien crece y quien acompaña. Y esa alianza la firmas tú, cada reunión, lo nombres así o no."_
3. **`heading` (nivel 3)** — _"Lo que vas a vivir en este curso"_
4. **`list`** — Las 5 ideas centrales que verá (una por lección 2–6):
    - Qué es realmente el Programa de Jóvenes (y qué no es).
    - Los 5 mitos que estorban al dirigente y cómo desarmarlos.
    - Las 5 ramas, los grupos naturales y la documentación marco.
    - Por qué la calidad del Programa toca las 6 áreas de crecimiento del protagonista.
    - Tu primer compromiso concreto.
5. **`mission-box`** — _"No lo apures. Tómalo lección por lección, y escribe tus reflexiones pensando en una unidad concreta."_
6. **`info-box`** — _"Si todavía no tienes un cargo —estás apoyando la unidad o en tu inducción—, haz los ejercicios con la función que cumples hoy junto al jefe de la unidad o, si aún no apoyas ninguna, con una unidad que conozcas; el cargo llega con el nombramiento."_

**Reflexión:** ninguna en la intro (siguiendo el patrón del Curso 1 de la Línea Política de Adultos y de Desarrollo Institucional: la lección de bienvenida no lleva reflexión ni quiz).

**Quiz:** ninguno.

**Logro al completar:** ninguno — la lección de intro no otorga logro.

---

### 4.3 Lección 2 — 🎒 ¿Qué es Programa de Jóvenes, en realidad? (5 min)

**Idea central:** El Programa es una alianza educativa, no un manual de actividades.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Anti-definición: _"Si abres la Política Nacional de Programa de Jóvenes vas a leer que el Programa es «la totalidad de las oportunidades de aprendizaje» de las que los jóvenes pueden beneficiarse, creadas para alcanzar el propósito del Movimiento y vividas a través del Método Scout. Es exacto. Y, si nunca has hecho un curso así, es difícil de digerir. Vamos a llegar a esa frase, pero por el camino aterrizado."_
3. **`heading` (nivel 3)** — _"Mira tu propia unidad y vas a ver Programa por todos lados"_
4. **`method-grid`** — 6 ejemplos cotidianos de Programa con icono y color, para mostrar que el adulto ya hace Programa:
    - **La jefa de Manada** que cambia el orden de la reunión porque los lobatos llegaron cansados → _adaptar la reunión a su grupo_
    - **El dirigente** que se sienta 20 min con un scout a preguntarle qué le gustaría aprender este trimestre → _progresión personal (acompañar)_
    - **El subjefe de Tropa** que deja que la patrulla cocine sola aunque tarde el doble → _aprender haciendo_
    - **La dirigente de Comunidad** que acompaña a los nómadas a presentar un proyecto en la junta de acción comunal → _participación en la comunidad_
    - **El dirigente de Clan** que decide no decirle al rover cómo planear el peregrinaje y solo le hace preguntas → _apoyo del adulto_
    - **El Viejo Lobo nuevo** (así se llama al dirigente de Manada y de Familia) que se acuerda del nombre del lobato nuevo, le pregunta cómo le fue en el colegio y se lo presenta a su seisena para que se sienta parte → _sistema de equipos_
5. **`paragraph`** — Conclusión: _"Ninguno de estos adultos está pensando 'estoy aplicando el Método Scout'. Pero todos lo están haciendo. Y todos, de alguna forma, están firmando esa alianza educativa con el joven que tienen al frente."_
6. **`paragraph`** — Nota para el Curso 5 (movida después del grid el 22/11/2026, B1; rótulo sin término propio, M3 doctrinal): _"Un detalle para cuando llegues al Curso 5, donde vas a ver los ocho elementos del Método Scout: cinco de estas flechas nombran elementos del Método. La de la jefa de Manada —adaptar la reunión a su grupo— no es un elemento: es una forma en que el Método se nota en la unidad."_ (Modelo de Aplicación §3.1.4: Sistema de equipos, «uso de pequeños equipos como forma de aprendizaje colaborativo».)
7. **`policy-quote`** — Cita textual de la PNPJ 2024 con su definición técnica:
    - `text`: _"El Programa [de] Jóvenes en el Movimiento Scout es la totalidad de las oportunidades de aprendizaje de las que los jóvenes pueden beneficiarse (Qué), creadas para alcanzar el propósito del Movimiento Scout (Por qué), y que se vive a través del Método Scout (Cómo)."_
    - `source`: "Política Nacional de Programa de Jóvenes (Acuerdo C.S.N. N° 617 del 11 de diciembre de 2024), §5.1 — Definición del Programa de Jóvenes."
    - `label`: "📋 Ver lo que dice la política textualmente"
8. **`info-box`** — Reformulación accesible: _"En palabras simples: el Programa de Jóvenes es la alianza educativa entre quien crece y quien acompaña. Lo que pasa entre tú y un protagonista, semana a semana, año tras año, hasta que él o ella se vaya con herramientas para la vida. (Protagonista de Programa es como el Modelo de Aplicación llama a cada niño, niña, adolescente o joven de la unidad: es protagonista de su propio aprendizaje.)"_

**Reflexión:** _"Piensa en una reunión de tu unidad (o la unidad que acompañas) en las últimas dos semanas. Escribe **dos momentos** donde, sin nombrarlo así, estaban haciendo Programa de Jóvenes de calidad. Y **un momento** donde sospechas que pudieron hacer más."_

**Quiz (3 preguntas; texto idéntico al JSON, sincronizado el 22/11/2026):**

> **P1.** En el consejo de grupo, un dirigente dice: «El Programa de Jóvenes es la guía de actividades de la rama; si la cumplimos completa, estamos haciendo Programa». ¿Qué le responderías, con lo visto en la lección?
>
> a) _Que le falta lo principal: el Programa es lo que el joven vive con su adulto al lado; la guía lo orienta._  ✅
> b) _Que le sobra la guía: el Programa lo escriben los jóvenes, y el adulto no necesita mirar ningún documento._
> c) _Que depende de la rama: con los pequeños se sigue la guía completa, y con los mayores ya se va adaptando._

> **P2.** Un subjefe de Tropa recibe a una scout nueva: se aprende su nombre, la presenta a su patrulla y le pide a la guía que la integre en el primer juego. Según las flechas de la lección, ¿qué elemento del Método Scout está poniendo en juego?
>
> a) _El apoyo del adulto: es él, el subjefe, quien la recibe primero y se aprende su nombre._
> b) _La progresión personal: desde el primer día empieza a acompañar su camino en la Tropa._
> c) _El sistema de equipos: deja que su patrulla y la guía sean las que la reciben y la integran._  ✅

> **P3.** Un Viejo Lobo preparó un juego de pistas en el parque, pero ese sábado llueve fuerte y solo llegan cuatro lobatos. Con lo visto en la lección, ¿qué le conviene hacer?
>
> a) _Hace el juego tal cual, bajo la lluvia: lo planeado se cumple, y así los lobatos aprenden a ser constantes._
> b) _Juega con los cuatro una versión corta bajo techo y les pregunta qué parte guardar para cuando estén todos._  ✅
> c) _Hace bajo techo una versión corta que él mismo ajusta sin consultarles, para no perder lo que preparó._

**Logro:** "El Programa es alianza".

---

### 4.4 Lección 3 — 🧨 Los 5 mitos del dirigente nuevo (y cómo desarmarlos) (5 min)

**Idea central:** Lo que crees que es "saber escultismo" no siempre es saberlo. Vale la pena revisar tus supuestos.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Hablemos de los cinco mitos que escuchamos una y otra vez cuando un adulto entra al Movimiento. Si alguna vez has pensado uno de estos, no estás solo. Pero queremos que salgas de aquí pensando distinto."_
3. **`heading` (nivel 3)** — _"Mito 1 — 'Yo no fui scout, no estoy en capacidad de hacer esto'"_
4. **`paragraph`** — Refutación: el escultismo se aprende caminando, no se hereda. Muchos de los mejores dirigentes nunca fueron protagonistas de niños. Lo que sí necesitas es: querer estar, dejarte formar y respetar la propuesta. El resto se aprende junto a otros dirigentes y al lado de los propios jóvenes. La Política Nacional de Adultos en el Movimiento existe precisamente para formarte paso a paso.
5. **`heading` (nivel 3)** — _"Mito 2 — 'Hacer Programa es seguir la guía oficial al pie de la letra'"_
6. **`paragraph`** — Refutación: la guía es una orientación, no una receta. El Modelo de Aplicación 2026 insiste en pensar todo para el grupo concreto que tienes al frente, en su territorio, con sus historias y sus preguntas. La guía te da el norte: lo que se busca en tu rama y cómo funciona ahí el Método. Con los jóvenes lo aterrizan: qué actividad, cuándo, dónde, con quién y para qué aquí.
7. **`heading` (nivel 3)** — _"Mito 3 — 'A los chicos hay que entretenerlos'"_
8. **`paragraph`** — Refutación: el Programa no entretiene, **educa**. Una reunión donde los chicos se rieron mucho pero no aprendieron nada, no se conocieron mejor, no avanzaron en ninguna área de crecimiento — fue una linda fiesta, no una reunión scout. Para eso hay un filtro de ocho cualidades de una buena actividad, el **DURASLID** (desafiante, útil, recompensante, atractiva, segura, lúdica, inclusiva y diversa); lo vas a usar en el Curso 6. Por ahora, quédate con la pregunta: ¿esta actividad, además de divertir, le deja algo al joven?
9. **`heading` (nivel 3)** — _"Mito 4 — 'Los jóvenes deciden cuando yo se los permito'"_
10. **`paragraph`** — _"La PNPJ es radical en esto: el Programa se hace por y con los jóvenes, no solo para ellos (la cita textual, aquí abajo). Tu rol es apoyar, acompañar y enlazar —no dirigir—. Si los jóvenes solo deciden lo que tú permites, no estás aplicando el Método: estás aplicando otra cosa que se le parece pero no lo es."_
10-bis. **`policy-quote`** — movida desde la L4 el 22/11/2026 (B2), sin tocar el texto:
    - `text`: _"[E]stá diseñado “por” y “con” los jóvenes, no simplemente “para” ellos… reconociéndolos como los principales agentes de su desarrollo."_
    - `source`: "Política Nacional de Programa de Jóvenes (Acuerdo C.S.N. N° 617 de 2024), §5.2 — Características del Programa de Jóvenes."
    - `label`: "📋 Ver el corazón de la política"
11. **`heading` (nivel 3)** — _"Mito 5 — 'Esto se hace por amor, así que no necesita estructura'"_
12. **`paragraph`** — Refutación: claro que se hace por amor — Baden-Powell lo dijo en 1922, lo verás en el próximo curso. **Y** justo porque se hace por amor, exige más estructura, no menos. La protección del joven (A Salvo del Peligro), la planeación de la reunión, el seguimiento de la progresión, los protocolos de actividad — todo eso es la forma en que el amor se hace responsable. Amar sin cuidar no es amar; es buena intención. Los módulos oficiales de A Salvo del Peligro conviene hacerlos pronto: en el Curso 7, Lección 5, te decimos dónde están.
13. **`info-box`** — Cierre: _"Si hubo un mito que reconociste como tuyo: bienvenido al club. Ahora lo importante es que ya tienes con qué responderle a quien lo repita —incluso si esa persona eres tú mismo."_

**Reflexión:** _"Piensa en la última vez que escuchaste (o pensaste) uno de estos mitos en tu unidad: ¿en qué momento fue —una reunión, un consejo, una salida— y quién lo dijo, por su rol? Escribe qué le responderías ahí mismo, en una o dos frases tuyas."_

**Quiz (3 preguntas; texto idéntico al JSON, sincronizado el 22/11/2026):**

> **P1.** Una mamá acepta apoyar la Manada pero dice: «Nunca fui scout; mejor sigo ayudando con la logística hasta que sepa algo». Con lo que viste del Mito 1, ¿qué le respondes?
>
> a) _Que entre ya y se apoye en los papás del grupo que fueron scouts de niños: ellos saben cómo es esto._
> b) _Que no se preocupe por formarse: con cariño y buena voluntad ya tiene todo lo que la Manada necesita._
> c) _Que entre ya a la Manada junto a un dirigente y se inscriba en su formación: esto se aprende caminando._  ✅

> **P2.** En una Tropa, la patrulla quiere organizar un día de juegos en el parque del barrio. Según el rol del adulto que describe la lección, ¿qué hace su dirigente?
>
> a) _Deja que lo decidan y lo armen ellos; él los apoya con el permiso del parque y se queda cerca._  ✅
> b) _Les propone tres juegos ya probados para que la patrulla escoja uno, y así el día no se les cae._
> c) _Les pide esperar al campamento del trimestre, donde un día de juegos encaja mejor en el plan de la Tropa._

> **P3.** Un subjefe de Tropa nuevo abre la guía de su rama esperando encontrar resuelto el próximo campamento: actividades, fechas y lugar. Con lo que la lección responde al Mito 2, ¿qué hace con la guía?
>
> a) _Toma de la guía las actividades que propone y deja que los scouts escojan solo la fecha y el lugar._
> b) _La usa para saber qué se busca en la Tropa; actividades, fecha y lugar los decide con los scouts._  ✅
> c) _Le pide al jefe de grupo un campamento ya probado en otro grupo, para no improvisar el primero._

**Logro:** "Mito-buster".

---

### 4.5 Lección 4 — 🗺️ Tu Programa en una página (5 min)

**Idea central:** Conozco las 5 ramas, los grupos naturales y la documentación marco.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"En los próximos cursos entras al detalle. Pero antes necesitas un mapa simple. El Programa de Jóvenes en la ASC se organiza en 5 tramos de edad, y cada tramo tiene su rama: su forma propia de vivir el escultismo. En las tarjetas vas a ver tres cosas de cada una: su grupo natural (cómo se agrupan los jóvenes dentro de la unidad), su marco simbólico (el universo narrativo que la sostiene) y, en Familia y Manada, su fondo motivador (el relato del que saca sus historias)."_
3. **`method-grid`** — Las 5 ramas con icono y color distintos:
    - 🐻 **Rama Cachorros — Familia (5–6 años)** — Grupo natural: Camadas. Marco simbólico: La Fantasía; su fondo motivador es el Libro de las Tierras Vírgenes — el mismo de la Manada.
    - 🐺 **Rama Lobatos — Manada (7–10 años)** — Grupo natural: Seisenas. Marco simbólico: La Fantasía — el mismo de la Familia (según las Guías de rama; el Modelo de Aplicación los llama Fantasía y Fantasía Expandida); su fondo motivador es el Libro de las Tierras Vírgenes.
    - ⚜️ **Rama Scouts — Tropa (11–14 años)** — Grupo natural: Patrullas, con su Guía, que la patrulla elige, y su Subguía, que lo apoya y lo reemplaza cuando hace falta. Marco simbólico: La Aventura. _(22/11/2026: texto ajustado a la Guía de Dirigente de Tropa 2026, §5.3, p. 27 del PDF; que la patrulla elige también al Subguía solo lo dice la Guía de Buenas Prácticas para Jefes de Tropa de 2023, p. 11 del PDF.)_
    - 🧗 **Rama Nómadas Scout — Comunidad (15–17 años)** — Grupo natural: equipos de Comunidad. Marco simbólico: La aventura hacia la ciudadanía.
    - 🏔️ **Rama Rovers — Clan (18–20 años)** — Grupo natural: equipos de proyectos o clubes Rovers. Marco simbólico: La Ciudadanía Activa.
4. **`paragraph`** — Aplicación: _"Tu rol como dirigente está en una de estas ramas. Pero todo el grupo —desde la familia más chiquita hasta el clan— forma un solo recorrido educativo. Lo que un cachorro vive a los 5 años lo prepara para su paso a la Comunidad, y lo que vivió en la tropa lo sostiene cuando, ya rover, se despide del Clan."_
5. **`heading` (nivel 3)** — _"La documentación marco que rige todo"_
6. **`list`** — Las 4 normas/documentos marco vigentes:
    - **Política Nacional de Programa de Jóvenes** (Acuerdo C.S.N. N° 617 del 11 de diciembre de 2024) — la norma marco del PJ.
    - **Modelo de Aplicación "El Gran Juego para la Vida"** (DNPJ 2026) — el manual pedagógico que aterriza la política al día a día.
    - **Guías de Dirigente por rama** (Familia, Manada, Tropa, Comunidad y Clan — DNPJ 2026) — lo que busca cada rama y cómo funciona ahí el Método.
    - **Recursos Educativos para Dirigentes — Herramientas de Seguimiento para la Progresión Personal 2.0** (DNPJ) — la caja de herramientas evaluativas que usarán todos los dirigentes.
7. **`info-box`** — _"Los puedes consultar todos en https://scout.org.co/biblioteca · No tienes que aprendértelos. Solo saber que existen y dónde encontrarlos cuando los necesites. En los Cursos 5 y 6 los vamos a recorrer juntos. En el Curso 6 vuelves a este mapa, con la Promesa y la Ley de cada rama."_
_(El `policy-quote` «por y con» que cerraba esta lección se movió a la L3, después del Mito 4, el 22/11/2026: B2.)_

**Reflexión:** _"En tu unidad o la unidad que vas a acompañar, ¿sabrías nombrar qué rama es, qué edades cubre, cuál es su grupo natural y cuál su marco simbólico? Anota lo que sepas y lo que no — eso vale más que adivinar."_

**Quiz (3 preguntas; texto idéntico al JSON, sincronizado el 22/11/2026):**

> **P1.** Un papá va a empezar a apoyar a un grupo de jóvenes de 17 años. Según las tarjetas de ramas de la lección, ¿en qué rama están y con qué marco simbólico se va a encontrar?
>
> a) _En la rama Rovers (Clan), con el marco de la Ciudadanía Activa de los Rovers._
> b) _En la rama Nómadas Scout (Comunidad), con la aventura hacia la ciudadanía._  ✅
> c) _En la rama Scouts (Tropa), con el marco de La Aventura y sus patrullas._

> **P2.** Un Viejo Lobo deja de acompañar la Manada y pasa a acompañar la Familia de Cachorros. Según las tarjetas de la lección, ¿qué cambia entre una rama y otra en grupo natural y fondo motivador?
>
> a) _Cambia el fondo motivador: la Familia tiene un relato propio, distinto del de la Manada._
> b) _No cambia el grupo natural: en la Familia los cachorros también se organizan en Seisenas._
> c) _Cambia el grupo natural, de Seisenas a Camadas; el fondo motivador sigue siendo el mismo._  ✅

> **P3.** Una dirigente de Comunidad quiere saber qué busca su rama con los nómadas y cómo funciona ahí el Método. Un compañero le dice que se lea la Política Nacional completa. Con el mapa de documentos de la lección, ¿qué le sugieres?
>
> a) _Empezar por el Modelo de Aplicación, que aterriza la política al día a día, y dejar la Guía para después._
> b) _Leerse antes los cuatro documentos completos y tomar notas de todos, para no equivocarse con los nómadas._
> c) _Empezar por la Guía de Dirigente de Comunidad, que lo aterriza para su rama, y volver a la Política si hace falta._  ✅

**Logro:** "Conozco mi Programa".

---

### 4.6 Lección 5 — 💡 Por qué un Programa de calidad cambia la vida de los chicos (4 min)

**Idea central:** El Programa toca las 6 áreas de crecimiento del protagonista.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura emocional: _"Hasta acá hablamos de definiciones, ramas y documentos. Suena lejano del lobato que llega a la reunión del sábado. Pero quiero que veas algo que vemos pocas veces: cuando el Programa es de calidad, un protagonista crece en seis dimensiones a la vez. Cuando no, ninguna."_
3. **`heading` (nivel 3)** — _"Tres historias para ver la diferencia"_ (22/11/2026: son relatos ilustrativos sin fuente; el título ya no dice «reales»)
4. **`timeline`** — Tres historias breves:
    - **Lobato A — Cuando el Programa es solo entretenimiento.** Mariana llegó a la Manada a los 8 años. Le encantaban los juegos. Estuvo tres años. Su dirigente nunca planeó una reunión pensando en áreas de crecimiento ni hizo seguimiento a su progresión. A los 11 años se fue. _"Era divertido, pero ya me aburrí"_, dijo. Nunca supo que pudo haber escogido sus propios proyectos.
    - **Scout B — Cuando el Programa funciona como sistema.** Camilo entró a la Tropa a los 11. Su patrulla decidía qué cocinar, cómo armar el campamento, qué proyecto de servicio harían en el barrio. Su dirigente se sentaba con él cada trimestre y le preguntaba qué quería trabajar. Cerca de los 15 vivió su etapa de transición y pasó a la Comunidad. A los 22 entró a estudiar trabajo social _"porque en los scouts aprendí que se puede cambiar algo en serio"_.
    - **Rover C — Cuando el Programa se hace alianza.** Sofía entró a Clan a los 18. Su dirigente nunca le dijo qué hacer; le hizo preguntas. Sofía propuso, se equivocó, ajustó, lideró un proyecto de paz con un colegio rural. A los 20 hizo su Partida Rover. Hoy, a los 28, dirige el equipo regional de jóvenes y forma a otros dirigentes. _"Lo que aprendí en el Clan no me lo enseñó nadie — lo viví."_
5. **`paragraph`** — Síntesis: _"El Programa no es un fin en sí mismo. Es la condición silenciosa para que la experiencia scout transforme la vida del protagonista."_
6. **`heading` (nivel 3)** — _"Las 6 áreas de crecimiento"_
7. **`list`** — Las 6 áreas (panorama, sin profundizar — se aterrizan en el Curso 6):
    - **Corporalidad** — que el protagonista cuide y conozca su cuerpo.
    - **Creatividad** — que explore, invente, resuelva problemas con imaginación.
    - **Carácter** — que decida, asuma responsabilidades, construya autonomía.
    - **Afectividad** — que reconozca, exprese y regule sus emociones.
    - **Sociabilidad** — que conviva, coopere, sirva y ejerza ciudadanía.
    - **Espiritualidad** — que se haga preguntas grandes y construya sentido.
8. **`info-box`** — Anuncio: _"En el Curso 6 de esta línea vas a recorrer cómo el Modelo de Aplicación 2026 baja estas 6 áreas a competencias: unas terminales, que son la meta de todo el recorrido scout, y otras intermedias, que son los pasos de cada rama. Hoy solo guarda el mapa."_

**Reflexión:** _"De las tres historias, ¿cuál se parece más a algo que has visto o escuchado en un grupo cercano (no necesariamente el tuyo)? Escribe en una frase qué hizo (o no hizo) el adulto, y qué área de crecimiento se vio afectada."_

**Quiz (3 preguntas; texto idéntico al JSON, sincronizado el 22/11/2026):**

> **P1.** Un scout de 13 años decide por su cuenta preparar su parte del menú del campamento; le queda salado y, en vez de culpar a otro, dice «me equivoqué yo» y propone cómo arreglarlo. Según la lista de la lección, ¿qué área de crecimiento muestra ante todo?
>
> a) _El área de Afectividad: le cuenta a su patrulla cómo se siente con el error._
> b) _El área de Sociabilidad: coopera con su patrulla y cumple su parte._
> c) _El área de Carácter: se hace cargo de lo suyo y responde por el resultado._  ✅

> **P2.** Un Viejo Lobo tiene una lobata de 9 años que va a todas las reuniones, se divierte y nunca ha propuesto nada. Con lo que hacía el dirigente de Camilo, ¿qué le conviene hacer ante todo?
>
> a) _Armarle él un proyecto llamativo para la seisena, para que ella se anime a participar en algo nuevo._
> b) _Sentarse con ella a preguntarle qué le gustaría aprender y dejar que escoja su propio proyecto._  ✅
> c) _Dejarla tranquila: si se divierte y viene a todas las reuniones, el Programa ya le está sirviendo._

> **P3.** Un dirigente de Manada dice: «Si los chicos vuelven cada sábado contentos, el Programa está funcionando». Con las tres historias de la lección, ¿qué le respondes?
>
> a) _Que tiene razón: si un niño se divierte cada semana, ya está creciendo en todas sus áreas a la vez._
> b) _Que depende de la rama: en la Manada basta con que vuelvan contentos; en la Tropa ya hay que pedir más._
> c) _Que volver contentos no basta: Mariana iba feliz cada sábado y se fue sin haber escogido nada propio._  ✅

**Logro:** "Veo por qué importa".

---

### 4.7 Lección 6 — ✍️ Tu primer compromiso (3 min)

**Idea central:** Saber sin actuar no transforma; el primer paso es chico y concreto.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Llegaste hasta acá. Antes de pasar al Curso 2 necesitamos algo: que conviertas lo que viste en un primer paso concreto."_
3. **`heading` (nivel 3)** — _"Imagina al protagonista que vas a acompañar"_
4. **`paragraph`** — Instrucción del ejercicio: dibujar (o tomar foto a un dibujo, o subir una imagen que represente) cómo te imaginas a un protagonista de tu rama dentro de tres años, si vivió un Programa de calidad contigo al lado. No es un examen artístico, es un ancla visual del joven al que vas a acompañar.
5. **`photo-upload`**
    - `photoId`: `bienvenida-pj-protagonista-sonado`
    - `prompt`: "Tu protagonista de programa dentro de 3 años"
    - `hint`: _"Puedes dibujarlo en papel y tomarle foto, o usar cualquier imagen que para ti represente ese joven que aprendió, decidió, sirvió y creció. Es solo para ti — la guardamos en tu navegador."_
    - `buttonLabel`: "📷 Subir mi imagen"
6. **`heading` (nivel 3)** — _"Un compromiso chico, concreto y tuyo"_
7. **`paragraph`** — Plantilla: _"Esta semana, en mi unidad, voy a __________ (algo que muestre que el Programa es alianza, no manual). Lo voy a hacer con __________ (otro dirigente, un protagonista, una familia: por su rol, no por su nombre). Y la señal de que se cumplió será __________ (algo observable, no una intención)."_ Se completa en el recuadro «Compromiso Personal» junto al certificado, que se queda en el navegador. Si aún no tiene cargo o unidad, piensa en la función que cumple hoy o en una unidad que conozca.
8. **`mission-box`** — _"No prometas grande. Promete chico. La diferencia entre un dirigente que transforma y uno que se quema son cien promesas chicas cumplidas, no una grande olvidada. Y si una semana no se pudo, no lo agrandes para compensar: repítelo igual de chico y fíjate qué te frenó."_ (la última frase se agregó el 22/11/2026: enseña lo que evalúa la P3 del quiz)
9. **`heading` (nivel 3)** — _"Lo que viene"_
10. **`list`** — Mapa de los siguientes 6 cursos del Nivel 1, con icono y nombre:
    - 💗 **Curso 2** — La Educación por el Amor: la apuesta de Baden-Powell.
    - 🎓 **Curso 3** — Cómo se Educa Hoy: los conceptos clave de la educación, antes de lo scout.
    - 🌟 **Curso 4** — Características Esenciales del Movimiento Scout.
    - 🧭 **Curso 5** — El Método Scout y sus 8 elementos.
    - 📜 **Curso 6** — La PNPJ y "El Gran Juego para la Vida".
    - 🗺️ **Curso 7** — Mi Compromiso con el Programa de Jóvenes.
11. **`info-box`** — Despedida con eco del hook: _"Al principio te dijimos que el Programa no es un libro que se sigue, sino una alianza que firmas cada reunión. Tu compromiso de esta semana es tu primera firma. Bienvenido al equipo de los que acompañan."_

**Reflexión:** _"Sin nombres: ¿qué idea de este curso te cambió más la forma de ver tu papel en la unidad, y en qué momento de tu próxima reunión crees que se va a notar? (El compromiso concreto —qué, con quién por su rol y la señal— escríbelo solo en el recuadro «Compromiso Personal» junto a tu certificado: ese se queda en tu navegador.)"_

**Compromiso Personal** (`commitmentBox`, se queda en el navegador; corrección de privacidad del 02-oct-2026, ADR-117): _"Escribe tu compromiso de esta semana con la plantilla de la Lección 6: qué vas a hacer en tu unidad (o la que acompañas), con quién (por su rol) y cuál será la señal de que se cumplió."_ — placeholder _"Esta semana, en mi unidad (o la que acompaño), voy a … Lo voy a hacer con … Y la señal de que se cumplió será …"_

**Quiz (3 preguntas; texto idéntico al JSON, sincronizado el 22/11/2026):**

> **P1.** Tres dirigentes llenan la plantilla del compromiso. Las tres hacen lo mismo; cambian en con quién y en la señal. ¿Cuál la llena como pide la lección?
>
> a) _Esta semana dejaré que la patrulla escoja el juego, con el guía de patrulla. Señal: que ellos lo dirijan._  ✅
> b) _Esta semana dejaré que la patrulla escoja el juego, con Tomás, el guía. Señal: que ellos lo dirijan._
> c) _Esta semana dejaré que la patrulla escoja el juego, con el guía. Señal: mi intención de escucharlos más._

> **P2.** Un dirigente de Clan escribe: «Este mes voy a acompañar a cada rover a armar su plan de progresión, con los cinco del Clan. Señal: que los cinco tengan su plan escrito». Según la lección, ¿qué ajuste le sugieres?
>
> a) _Que lo cambie: mejor una charla para el Clan sobre por qué importa la progresión._
> b) _Que lo achique: un rover, esta semana, y como señal su plan empezado._  ✅
> c) _Que lo amplíe: un plan común para todo el Clan, con su fecha de entrega._

> **P3.** Una dirigente escribió un compromiso chico: dejar que la patrulla escogiera el juego. Llovió, se suspendió la salida y no lo cumplió. ¿Qué le conviene hacer ahora?
>
> a) _Cambiarlo por uno más ambicioso para todo el trimestre, y así compensar la semana que se perdió._
> b) _Repetirlo en la próxima reunión, igual de chico, y anotar qué la frenó esta vez para preverlo._  ✅
> c) _Cambiarlo por otro igual de chico pero sin la patrulla, para no depender de nadie la próxima vez._

**Logro al completar:** "Constructor de Programa" (logro final del curso, `unlockOnModule: -1`).

---

## 5. Logros (achievements)

| ID | Nombre | Emoji | Desbloqueo |
|---|---|---|---|
| `achievement-1` | El Programa es alianza | 🎒 | Al completar Lección 2 |
| `achievement-2` | Mito-buster | 🧨 | Al completar Lección 3 |
| `achievement-3` | Conozco mi Programa | 🗺️ | Al completar Lección 4 |
| `achievement-4` | Veo por qué importa | 💡 | Al completar Lección 5 |
| `achievement-5` | Constructor de Programa | 🎒 | Al completar el curso (`unlockOnModule: -1`) |

---

## 6. Conexiones cross-course

### 6.1 Hacia adelante (dentro del Nivel 1 de PJ)

- **L2 → Curso 5:** los 6 ejemplos cotidianos del `method-grid` anclan los 8 elementos del Método Scout que el Curso 5 va a desarrollar.
- **L3 (Mito 5) → Curso 2:** la mención de "Baden-Powell lo dijo en 1922" abre la puerta al Curso 2 sobre la Educación por el Amor.
- **L3 (Mito 4) → Curso 4:** la idea «por y con los jóvenes, no solo para ellos» remite al Curso 4 sobre Características Esenciales.
- **L4 → Cursos 5 y 6:** la mención de PNPJ + Modelo de Aplicación + Guías por rama anuncia el recorrido documental de los Cursos 5 y 6 (el corazón documental es el Curso 6).
- **L5 → Curso 6:** las 6 áreas de crecimiento se enuncian aquí y se aterrizan en el Curso 6 con sus competencias terminales para todo el recorrido e intermedias para cada rama.
- **L6 → Curso 7:** el compromiso escrito anticipa el trabajo de *Mi Compromiso con el Programa de Jóvenes* (Curso 7).

### 6.2 Cross-línea con la Línea Política de Adultos

- Si el adulto ya hizo el Curso 1 (Bienvenida al Movimiento de Adultos) de la Línea Política de Adultos, el formato le será familiar (microlearning, lecciones cortas, photo-upload, reflexión, quiz).
- El compromiso de L6 es del plano del adulto que hace el curso; no se confunde con la progresión personal del joven.
- El Mito 1 ("no fui scout, no puedo") se refuta apoyándose en la Política Nacional de Adultos en el Movimiento.

### 6.3 Cross-línea con la Línea Desarrollo Institucional

- El Programa de Jóvenes es **una de las 8 áreas estratégicas del Plan de Grupo** (DI Curso 8). El dirigente que hizo el Curso 1 de DI ya sabe que su trabajo en la unidad vive dentro de una arquitectura institucional.
- El Mito 5 ("esto no necesita estructura") apoya la idea —desarrollada en DI Curso 14— de que la gestión del riesgo no contradice el amor, lo encarna.

---

## 7. Tipos de sección utilizados

| Tipo | Lecciones donde aparece |
|---|---|
| `info-box` | L1, L2, L3, L4, L5, L6 (todas) |
| `paragraph` | Todas |
| `heading` (nivel 3) | L1, L3, L4, L5, L6 |
| `list` | L1, L4, L5, L6 |
| `method-grid` | L2, L4 |
| `mission-box` | L1, L6 |
| `policy-quote` | L2, L3 |
| `timeline` | L5 |
| `photo-upload` | L6 |
| `reflection` | L2, L3, L4, L5, L6 (excepto L1 intro) |
| `quiz` | L2, L3, L4, L5, L6 (excepto L1 intro) |

**No requiere ningún tipo de sección nuevo** — todos los tipos usados ya están soportados por el motor (`engine.js`) de la línea Política de Adultos / Desarrollo Institucional. Esto significa que el Curso 1 de PJ puede construirse sin tocar el motor.

---

## 8. Multimedia requerido

| Activo | Tipo | Estado | Observación |
|---|---|---|---|
| Video introductorio del curso | MP4 (opcional) | Por decidir | El Curso 1 de Política de Adultos usa videos del Taller Flor de Lis I. En PJ podríamos usar testimonios de protagonistas o de dirigentes que han dejado huella. |
| Imagen de portada del curso | PNG | Por crear | Estilo coherente con la línea Política de Adultos (morado #622599 + amarillo #FFE675), pero con una paleta secundaria por rama si se decide. |
| Iconos del `method-grid` de L2 y L4 | Emoji | Listo | Se renderizan con emoji en el motor actual (🐻🐺⚜️🧗🏔️ para ramas). |

**Decisión sugerida:** lanzar el Curso 1 sin videos en su primera versión. Si tras el piloto los dirigentes piden testimonios en video, grabar 2–3 testimonios cortos (1–2 min) de dirigentes y rovers reales.

---

## 9. Validación contra el marco metodológico

| Criterio del MARCO-METODOLOGICO-PEDAGOGICO | Cumplimiento |
|---|---|
| Curso entre 20 y 40 min | ✅ ~27 min |
| Lecciones de 3–8 min, óptimo 5–7 | ✅ rango 3–5 min, dentro del óptimo |
| Cada lección termina independiente | ✅ |
| Lenguaje conversacional, tutea | ✅ |
| Citas oficiales plegables (`policy-quote`) | ✅ L2 (PNPJ 2024) y L3 (PNPJ 2024) |
| Reflexión personal por lección | ✅ excepto intro |
| Mini-quiz 1–3 preguntas, 70 % | ✅ 3 preguntas por lección (hay que acertar las tres) |
| 4–6 logros + 1 final | ✅ 4 + 1 |
| Lección 1 marcada `isIntro: true` sin quiz | ✅ |
| Conexión cross-course | ✅ con Cursos 2–6 del nivel y con las Líneas Política de Adultos y DI |
| Cumple las 3 exigencias propias de PJ (DURASLID, educación por el amor, alianza joven-adulto) | ✅ todas presentes en L2, L3, L5 y L6 |

---

## 10. Próximos pasos

1. **Revisar este diseño** con el dueño del proyecto. Aplicar ajustes de tono, ejemplos, mitos, historias.
2. **Generar el JSON** del curso en `INDUCCION-PROGRAMA-JOVENES/05-Generador-Cursos/borradores/bienvenida-programa-jovenes.json` siguiendo `course-schema.json`. Replicar el motor desde `INDUCCION-ADULTOS` / `INDUCCION-DESARROLLO-INSTITUCIONAL`.
3. **Generar HTML** con `node build-course.js bienvenida-programa-jovenes`.
4. **Generar preview PDF** y revisar.
5. **Pilotar** con 5–10 dirigentes de unidad reales (idealmente 2 de Manada, 2 de Tropa, 1 de Comunidad y 1 de Clan). Recoger retroalimentación durante 1–2 semanas.
6. **Ajustar** según retroalimentación y replicar el patrón a los Cursos 2–6 del Nivel 1.

---

_Documento de diseño del Curso 1, versión inicial — 28 de mayo de 2026. Validado contra el marco metodológico de la plataforma y los documentos doctrinales de la ASC (Política Nacional de Programa de Jóvenes 2024, Modelo de Aplicación 2026) y la OMMS (Características Esenciales 2019, The Scout Method 2019, La Educación por el Amor 1922/2007)._

_Sincronizado con el JSON (`contentVersion` 2026-11-22) el 22/11/2026 por el decisor: los 15 quizzes, las lecciones 1 a 6 y las conexiones. El JSON manda (ADR-073)._
