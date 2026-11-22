# Diseño del Curso 5 — 🧭 El Método Scout y sus 8 elementos

> *El nombre de este archivo (`Curso-04-…`) es el de la numeración anterior a la renumeración +1 del 28-jun-2026. **No se renombró**: varias entradas del `DECISIONES.md` y una auditoría lo citan por esta ruta, y un ADR debe seguir apuntando a lo que apuntaba. El número que vale es el del título; el identificador que vale es `metodo-scout-8-elementos`.*

**Línea:** Programa de Jóvenes · **Nivel:** 1 (Fundamentación) · **Posición:** Curso 5 de 7 del Nivel 1.

> Herramienta metodológica del Movimiento. Tras el porqué (Curso 2) y el qué (Curso 4), este curso entrega el **cómo**: los 8 elementos del Método Scout adoptados por la 41ª Conferencia Scout Mundial (Resolución 2017-04) y por la PNPJ 2024. El curso más largo y más importante del Nivel 1.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `metodo-scout-8-elementos` |
| Título | El Método Scout y sus 8 elementos |
| Subtítulo | El "cómo" del Movimiento — un sistema, no una lista |
| Icono | 🧭 |
| Duración | ~43 min |
| Lecciones de contenido | 8 + intro + certificado |
| Audiencia primaria | Todo adulto que cursa el Nivel 1 de la Línea Programa de Jóvenes. |
| Curso recomendado | Curso 4 — Características Esenciales. |
| Logro final | "Practicante del Método" |

---

## 2. Objetivos del curso

Al completar este curso, el adulto:

1. **Explica** por qué el Método Scout funciona como un sistema de autoeducación progresiva basado en la interacción de 8 elementos interdependientes (no una lista de técnicas separadas).
2. **Identifica y describe** cada uno de los 8 elementos: Promesa y Ley, Aprender Haciendo, Progresión Personal, Sistema de Equipos, Apoyo del Adulto, Marco Simbólico, Naturaleza, Participación en la Comunidad.
3. **Reconoce** cómo los 8 elementos se manifiestan en una reunión, un campamento o un proyecto reales.
4. **Distingue** una práctica scout (que combina los 8 elementos) de una práctica que solo usa algunos (campismo sin progresión, club juvenil sin marco simbólico, etc.).
5. **Aplica** las 4 Dinámicas del Escultismo (Competencias Educativas, Oportunidades de Aprendizaje, Vida en Grupo, Estructura y Funcionamiento) para evaluar la calidad del Programa de su unidad.
6. **Formula** un plan para integrar los 8 elementos en una reunión concreta de su unidad.

---

## 3. Hook pedagógico (la idea poderosa que sostiene el curso)

> **"El Método Scout no es una lista de 8 técnicas que puedas mezclar y combinar. Es un sistema. Si quitas uno solo, lo que queda ya no es el Método. Y si crees que solo aplicas 5 o 6 'porque tu rama no necesita el resto', no estás haciendo escultismo."**

Este hook se enuncia en la lección 2 y se repite cada vez que se introduce un nuevo elemento. Su función es contradecir la tentación frecuente del dirigente nuevo de "elegir los elementos que más le gustan" en lugar de integrar el sistema completo.

---

## 4. Estructura de lecciones

### 4.1 Mapa general

| # | Lección | Duración | Idea central | Logro al completar |
|---|---|---|---|---|
| 1 | 👋 Bienvenida | ~1,5 min | Vas a aprender el sistema con el que el Movimiento educa. | Empecé el camino |
| 2 | 🧭 El Método como sistema | ~6,5 min | 8 elementos interdependientes, no una lista. | Veo el sistema |
| 3 | 📜 Elementos 1–2: Promesa, Ley y Aprender Haciendo | ~6 min | La ética y la práctica. | Ética + práctica |
| 4 | 🌱 Elementos 3–4: Progresión Personal y Sistema de Equipos | ~6,5 min | Crecimiento individual y vida de pequeño grupo. | Crezco con otros |
| 5 | 💗 Elementos 5–6: Apoyo del Adulto y Marco Simbólico | ~7 min | El acompañante y el imaginario. | Apoyo + imaginación |
| 6 | 🌳 Elementos 7–8: Naturaleza y Participación en la Comunidad | ~7 min | El laboratorio y el servicio. | Naturaleza + ciudadanía |
| 7 | 🎯 Las 4 Dinámicas del Escultismo en acción | ~5,5 min | Cómo se ven los 8 elementos juntos. | Veo el método en vivo |
| 8 | ✍️ Mi próxima reunión con los 8 elementos | ~7 min | Mirar cuatro reuniones y ajustar la próxima. | Practicante del Método (final) |

**Total estimado: ~43 min** (medido tras las auditorías), por encima del rango (justificado por la centralidad del contenido). Las duraciones por lección son una estimación por volumen (≈114 palabras/min, el ritmo del informe pedagógico del 08/11/2026) hecha el 22/11/2026 sobre el JSON; incluyen etiquetas y fuentes de las citas plegables, por eso suman más que el total publicado. El total se vuelve a medir tras el build (ADR-047).

---

### 4.2 Lección 1 — 👋 Bienvenida (~1,5 min, isIntro: true)

**Idea central:** Vas a aprender el sistema con el que el Movimiento educa.

**Secciones (en orden):**

1. **`info-box`** — Tiempo (~43 min) y promesa: _"Al final vas a poder mirar varias reuniones de una unidad y decir, con precisión, qué elementos del Método están vivos y cuáles llevan semanas faltando."_
2. **`paragraph`** — Saludo con hook: _"Te damos la bienvenida. Casi todo dirigente nuevo hace lo mismo: se queda con lo que le sale fácil —el juego, la salida, la Promesa— y deja para después lo que le cuesta. Parece razonable. No lo es: el Método Scout no es una lista de ocho técnicas para escoger según el día. Es un sistema. Si una pieza falta semana tras semana, lo que queda ya no es el Método. Tómalo con calma."_
3. **`heading` (nivel 3)** — _"Lo que vas a vivir en este curso"_
4. **`list`** — Las 7 ideas (lecciones 2 a 8):
    - Por qué el Método es un sistema y no una lista.
    - Los 8 elementos en 4 parejas (2-2-2-2).
    - Las 4 Dinámicas del Escultismo que muestran el Método en acción.
    - Cómo planear una reunión real integrando los 8 elementos.
5. **`mission-box`** — _"Si terminas este curso sin un plan concreto para tu próxima reunión, lo perdimos. Asegúrate de llegar a la Lección 8 con energía para hacer el ejercicio."_

**Reflexión:** ninguna.
**Quiz:** ninguno.
**Logro:** "Empecé el camino".

---

### 4.3 Lección 2 — 🧭 El Método como sistema (~6,5 min)

**Idea central:** 8 elementos interdependientes, no una lista.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — **Anti-definición**: _"Si abres The Scout Method de la OMMS vas a leer, en inglés, algo así como 'sistema de autoeducación progresiva… basado en la interacción de elementos igualmente importantes que funcionan como un sistema cohesivo'. Es exacto: lo aprobó la 41ª Conferencia Scout Mundial en 2017 y la PNPJ 2024 lo adoptó (§4.2, p. 7). Y, si nunca has hecho un curso así, es difícil de digerir en frío. Vamos a llegar a esa frase, pero por el camino aterrizado."_
3. **`policy-quote`** — Cita oficial:
    - `text`: _"El Método Scout es un sistema de autoeducación progresiva… basado en la interacción de elementos igualmente importantes que funcionan como un sistema cohesivo."_
    - `source`: "The Scout Method, OMMS 2019 (Resolución 41.ª Conferencia Scout Mundial 2017-04), p. 14, dos frases unidas — traducción propia del original en inglés. Equivalente vigente en español: Modelo de Aplicación 2026, §3.1, p. 11."
    - `label`: "📋 Ver la definición oficial"
4. **`info-box`** — **Reformulación accesible**: _"En palabras simples: el Método Scout es la forma en que el Movimiento educa. Y esa forma no es una lista de técnicas sueltas que tú puedas escoger según el día — es un sistema de 8 piezas que se sostienen mutuamente. Si una de ellas desaparece de tu unidad por semanas, el sistema cojea —y esa combinación equilibrada es lo que hace único al escultismo—. No tienen que verse las ocho en cada reunión, pero sí a lo largo de varias. La definición oficial dice eso mismo, en lenguaje doctrinal."_
5. **`heading` (nivel 3)** — _"Las palabras clave de la definición"_
6. **`method-grid`** — Las 4 palabras clave:
    - 🛠️ **Sistema** — No una lista de la que tomas lo que te sirve. Un conjunto donde cada parte sostiene a las demás.
    - 🌱 **Autoeducación** — El joven se educa **a sí mismo**, con apoyo. El adulto no es maestro; es facilitador.
    - 📈 **Progresiva** — No se aprende todo de una vez. Se avanza por etapas, según el ritmo de cada quien.
    - ⚖️ **Igualmente importantes** — Ningún elemento vale más que los demás. La Promesa y la Ley son la base del Método (PNPJ 2024, p. 8), pero no valen más que el Sistema de Equipos. La Naturaleza no vale más que el Marco Simbólico.
7. **`heading` (nivel 3)** — _"Los 8 elementos (visión panorámica)"_
8. **`list`** — Los 8 elementos en orden oficial:
    - **Promesa y Ley** — el código de vida que el joven asume voluntariamente.
    - **Aprender Haciendo** — la experiencia como motor del aprendizaje.
    - **Progresión Personal** — el camino individual de crecimiento.
    - **Sistema de Equipos** — los pequeños grupos donde se vive el Movimiento.
    - **Apoyo del Adulto** — el rol del dirigente como facilitador.
    - **Marco Simbólico** — el universo narrativo de cada rama.
    - **Naturaleza** — el entorno educativo privilegiado.
    - **Participación en la Comunidad** — el servicio y la ciudadanía activa.
9. **`info-box`** — Puente a la lección siguiente: _"Ahora vamos a recorrerlos en cuatro parejas. Fíjate en cómo cada pareja se sostiene: ninguna funciona sola."_ (la cita de B-P sobre el bosque queda solo en la L6, como `policy-quote`).

**Reflexión:** _"Piensa en el último mes de tu unidad (o de la que acompañas). ¿Qué elemento del Método no apareció ni una vez? Describe una actividad concreta de ese mes donde habría cabido, y cómo."_

**Quiz (3 preguntas, igual al JSON):**

> **P1.** Un dirigente te dice: «Cuando la reunión se alarga, siempre recorto el trabajo por patrullas; lo que no puede faltar es la Promesa y la Ley». Según la definición que viste, ¿qué le respondes?
>
> a) _Que hace bien: la Promesa y la Ley son fundamentales para el Método, y lo demás puede esperar a otra reunión._
> b) _Que sí son fundamentales, pero los ocho pesan igual: si uno falta semana tras semana, el sistema cojea._  ✅
> c) _Que mejor recorte la Promesa y la Ley, porque los equipos son lo que más distingue al escultismo._

> **P2.** En su primera reunión, la patrulla no se pone de acuerdo sobre qué juego hacer y le pide a la dirigente nueva que decida. ¿Qué hace alguien que entendió «autoeducación»?
>
> a) _Proponerles un juego que ella conozca bien y pedirles que lo evalúen al final, para que aprendan._
> b) _Decirles que se pongan de acuerdo entre ellos y apartarse hasta que hayan elegido un juego._
> c) _Ayudarles a poner dos o tres criterios para elegir, y que la decisión la tome la patrulla._  ✅

> **P3.** Una jefa de Manada revisa el trimestre: hubo Promesas, juegos en seisenas y una salida al parque, pero ni un solo momento de Marco Simbólico, porque «a los lobatos de ahora eso les da pena». ¿Qué haría alguien que entendió que el Método es un sistema?
>
> a) _Programar para el próximo mes dos o tres momentos de Marco Simbólico, porque ese elemento lleva semanas faltando._  ✅
> b) _Preguntarles a los lobatos si quieren Marco Simbólico y hacer lo que decidan, porque eso es autoeducación._
> c) _Dejarlo así mientras los otros siete sigan fuertes: si ninguno vale más que otro, este tampoco hace falta._

**Logro:** "Veo el sistema".

---

### 4.4 Lección 3 — 📜 Elementos 1–2: Promesa, Ley y Aprender Haciendo (~6 min)

**Idea central:** La ética y la práctica.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
1-bis. **`paragraph`** — Anclaje: _"Piensa en una promesa que hayas hecho porque quisiste y en una regla que cumples porque toca. ¿Cuál de las dos te pesa más cuando nadie te ve? De esa diferencia trata esta pareja."_
2. **`heading` (nivel 3)** — _"Elemento 1 — Promesa y Ley"_
3. **`paragraph`** — _"La Promesa es la decisión voluntaria del joven de adherirse al código de vida del Movimiento. La Ley es ese código, formulado en términos positivos y progresivos según la rama. Promesa y Ley son **una pareja**: la Promesa sin Ley es palabra vacía; la Ley sin Promesa es regla externa."_
4. **`policy-quote`** — Cita textual del artículo 1 de la Ley Scout:
    - `text`: _"El Scout cifra su honor en ser digno de confianza."_
    - `source`: "Ley Scout, artículo 1 — PNPJ 2024, p. 24."
    - `label`: "📋 La cita central de la Ley"
5. **`paragraph`** — _"Esa palabra, 'cifra', quiere decir: mi honor está puesto ahí. Si no se puede confiar en mí, no me queda nada."_
6. **`paragraph`** — _"En cada rama, la Promesa y la Ley se formulan con el lenguaje propio de la edad: la Ley del Cachorro, la Ley de la Manada, la Ley Scout, la Ley del Nómada Scout, y en el Clan la Ley Scout dicha en clave Rover. Lo importante: en todas ellas, el joven dice 'yo prometo' libremente. No 'yo obedezco'. No 'yo cumplo porque me obligan'. La voluntariedad es la condición."_
7. **`heading` (nivel 3)** — _"Elemento 2 — Aprender Haciendo"_
8. **`paragraph`** — _"Es la misma familia de ideas de la educación activa: el Modelo 2026 conecta el aprender haciendo con John Dewey y con el aprendizaje experiencial de Kolb (p. 8). **No se aprende escuchando; se aprende intentando, equivocándose y mejorando.** En la unidad, esto significa: dejar que la patrulla cocine sola aunque tarde el doble; dejar que el lobato amarre el nudo aunque le quede flojo; dejar que el rover lidere el proyecto aunque a veces se atasque."_
9. **`policy-quote`** — Cita de B-P en la redacción vigente de la PNPJ:
    - `text`: _"El método de instrucción en el Escultismo consiste en crear en el muchacho el deseo de aprender por sí mismo."_
    - `source`: "Baden-Powell, citado en la PNPJ 2024, p. 11."
    - `label`: "📋 La cita de Aprender Haciendo"
10. **`info-box`** — _"Si el dirigente hace por el joven, el joven no aprende. Esa es la regla. Pero dejar hacer no es desaparecer: una pregunta a tiempo («¿qué se les ocurre?») prepara el escenario sin resolverle. Tu trabajo es preparar el escenario para que él intente, no resolver lo que él puede resolver."_

**Reflexión:** _"Recuerda una situación reciente donde, por la prisa o por evitar el error, **hiciste por** un protagonista —o viste a otro adulto hacerlo, en una unidad que conozcas— lo que él hubiera podido hacer solo o con apoyo. Escribe brevemente: ¿qué pasó? ¿Qué hubieras hecho distinto sabiendo lo que sabes ahora?"_

**Quiz (3 preguntas, igual al JSON):**

> **P1.** En una tropa, la Ley Scout está pegada en la pared y el Jefe la usa para poner sanciones, pero varios scouts llevan un año sin hacer su Promesa ni hablar de ella. Según la pareja Promesa–Ley, ¿qué está pasando?
>
> a) _La Promesa se está volviendo palabra vacía, porque a la Ley le falta explicación en la tropa._
> b) _La Ley está funcionando como una regla externa: se impone desde afuera, sin que nadie la asuma._  ✅
> c) _La Ley se está aplicando bien; la Promesa puede esperar a que cada scout la pida._

> **P2.** Se acerca el campamento de Promesas. Un lobato dice que todavía no quiere prometer, y su seisenero insiste en que «todos la hacen ese día». Según la lección, ¿qué debe primar?
>
> a) _Que prometa ese día con su seisena: el Sistema de Equipos también educa en el compromiso._
> b) _Que prometa ya y lo vaya entendiendo después: la Ley se asume poco a poco, con la práctica._
> c) _Que prometa solo cuando quiera: el joven dice «yo prometo», no «cumplo porque me obligan»._  ✅

> **P3.** En el campamento, la patrulla Halcones cocina sola por primera vez. A media tarde ves que nadie ha prendido el fogón y que la leña está mojada. Según Aprender Haciendo, ¿qué haces?
>
> a) _Te acercas al Guía y le preguntas qué se les ocurre con la leña mojada; el fogón sigue siendo de ellos._  ✅
> b) _Te acercas al Guía y le explicas paso a paso cómo se prende un fogón con leña mojada, para que lo haga él._
> c) _Te acercas al Guía y le consigues leña seca de otra patrulla, para que puedan seguir con su propio menú._

**Logro:** "Ética + práctica".

---

### 4.5 Lección 4 — 🌱 Elementos 3–4: Progresión Personal y Sistema de Equipos (~6,5 min)

**Idea central:** Crecimiento individual y vida de pequeño grupo.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
1-bis. **`paragraph`** — Anclaje: _"Piensa en dos scouts de la misma patrulla que entraron el mismo día. Un año después, uno ya enseña nudos y el otro apenas empieza a animarse a hablar en el consejo. ¿Va atrasado el segundo? No: cada uno va por su propio camino. Eso es la Progresión Personal."_
2. **`heading` (nivel 3)** — _"Elemento 3 — Progresión Personal"_
3. **`paragraph`** — _"La PNPJ 2024 lo titula **'Progreso personal'**: es el camino individual de crecimiento del protagonista en las 6 áreas (Corporalidad, Creatividad, Carácter, Afectividad, Sociabilidad, Espiritualidad). No es competitiva: cada joven avanza a su ritmo. Se construye con el acompañamiento del **dirigente** —en la próxima lección verás cómo—, en momentos de conversación y reconocimiento, y se deja por escrito en los registros de seguimiento que verás en el Curso 13."_
4. **`paragraph`** — _"El Modelo de Aplicación 2026 marca **tres niveles** por los que pasa cada competencia educativa, en este orden: **Exploro** (la conozco por primera vez), **Aplico** (la pongo en práctica en situaciones reales), **Profundizo** (ya es parte de mí y la pongo al servicio). No es un examen ni una carrera: en una misma actividad, unos exploran, otros aplican y otros profundizan (p. 25), porque cada joven va a su ritmo."_
5. **`heading` (nivel 3)** — _"Elemento 4 — Sistema de Equipos"_
6. **`paragraph`** — _"En Tropa, Comunidad y Clan, los jóvenes viven el Movimiento sobre todo en **pequeños grupos** donde se sienten conocidos, toman decisiones y aprenden a liderar entre pares. **En Familia y Manada pesa más la unidad completa**: las camadas y las seisenas se arman para ciertas actividades (en Familia, para facilitar el juego; en la Manada, además, para aprender a escuchar a los demás y a turnarse las funciones). Cada rama tiene su grupo natural: Camadas (Familia), Seisenas (Manada), Patrullas (Tropa), equipos de Comunidad y de Clan."_
7. **`method-grid`** — Las 5 ramas y sus grupos naturales (recordatorio del Curso 1):
    - 🐻 Familia → **Camadas**.
    - 🐺 Manada → **Seisenas**.
    - ⚜️ Tropa → **Patrullas** (6-8 scouts).
    - 🧗 Comunidad → equipos.
    - 🏔️ Clan → equipos rover.
8. **`paragraph`** — _"En la Tropa, el Sistema de Patrullas es **lo que más claramente distingue al escultismo**: B-P lo llamó 'la característica esencial que diferencia a la educación scout de la que ofrecen todas las demás organizaciones similares' (Orientaciones para la tarea del dirigente scout, 1919, citado en la Guía para dirigentes de la Rama Scout, Oficina Scout Mundial – Región Interamericana, 2ª ed. 2005, p. 59). Una patrulla bien constituida lidera sus propias actividades, planea su comida, organiza su rincón, resuelve sus conflictos. El Jefe de Tropa no manda a las patrullas; trabaja con los Guías de Patrulla."_
9. **`info-box`** — _"Cuando una Tropa, una Comunidad o un Clan funcionan solo como gran grupo y nunca como pequeños grupos, están rompiendo el Sistema de Equipos. La unidad existe; el Método, no."_

**Reflexión:** _"Recuerda la última actividad en la que el pequeño grupo (seisena, patrulla, equipo; en Familia, la camada de ese juego) decidió algo por su cuenta, con el adulto cerca pero sin decidir por ellos. ¿Qué decidió? Si no recuerdas ninguna, describe la última vez que un adulto decidió algo que el grupo podía haber decidido."_

**Quiz (3 preguntas, igual al JSON):**

> **P1.** Un scout que aprendió amarres el año pasado ahora, por iniciativa propia, se los enseña a los nuevos de su patrulla en cada salida. ¿En qué nivel de esa competencia educativa lo ubica el Modelo 2026?
>
> a) _En Aplico, porque está usando la competencia en situaciones reales con su patrulla._
> b) _En Profundizo, porque la competencia ya es suya y ahora la pone al servicio de otros._  ✅
> c) _En Exploro, porque enseñar es algo que hace por primera vez, aunque sepa amarres._

> **P2.** El Guía de los Zorros te cuenta que la patrulla decidió repartirse el material de un modo que a ti te parece más lento que el tuyo. Ya lo probaron en dos salidas y no se les ha quedado nada. ¿Qué haces, según el Sistema de Equipos?
>
> a) _Le muestras al Guía tu forma de repartir, para que la compare con la suya y elija la mejor._
> b) _Respetas el reparto que decidieron: a ellos les funciona y esa decisión le toca a la patrulla._  ✅
> c) _Le propones al Guía probar tu forma en la próxima salida y, si no les sirve, volver a la suya._

> **P3.** En la misma salida, Ana se orienta con brújula por primera vez y Luis ya la usa solo en cada campamento. ¿Qué cabe esperar?
>
> a) _Que Ana esté en Exploro y Luis en Aplico, aunque compartan la misma salida._  ✅
> b) _Que Ana quede en Aplico, porque ya usó la brújula en una situación real de campo._
> c) _Que Luis pase a Profundizo, porque ya domina la brújula y la vuelve a usar._

**Logro:** "Crezco con otros".

---

### 4.6 Lección 5 — 💗 Elementos 5–6: Apoyo del Adulto y Marco Simbólico (~7 min)

**Idea central:** El acompañante y el imaginario.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`heading` (nivel 3)** — _"Elemento 5 — Apoyo del Adulto"_
3. **`paragraph`** — _"En el Curso 4 viste la frase eje del Movimiento (Características Esenciales, OMMS 2019, p. 28): de jóvenes, para jóvenes, **apoyado por adultos**. Aquí ese 'apoyo' se vuelve elemento del Método."_ (Los 4 tipos de apoyo de las Características Esenciales, p. 19, quedan en el Curso 4: decisión del 22/11/2026 por carga cognitiva.)
4. **`paragraph`** — _"El Modelo de Aplicación 2026 lo resume en tres palabras: **Apoyar** (preparar), **Acompañar** (sostener), **Enlazar** (proyectar). Apoyar es dejar la escena lista para que el joven se atreva. Acompañar es estar cerca mientras practica, sin resolverle. Enlazar es abrirle puertas **fuera del grupo** —gente que sabe, organizaciones del barrio, proyectos más grandes— cuando ya está listo para profundizar. El Modelo empareja cada uno con los tres niveles que viste en la Lección 4: Apoyar va con Exploro, Acompañar con Aplico y Enlazar con Profundizo (§9.2)."_
5. **`policy-quote`** — Cita de B-P sobre el rol:
    - `text`: _"Hacer las veces de hermano mayor, esto es, considerar las cosas desde el punto de vista de los jóvenes, guiarlos por el buen sendero, transmitirles entusiasmo."_
    - `source`: "B-P, Orientaciones para la tarea del dirigente scout (1919), citado en la Guía para dirigentes de la Rama Scout, Oficina Scout Mundial – Región Interamericana, 2ª ed. 2005, p. 166."
    - `label`: "📋 El rol del adulto según B-P"
6. **`heading` (nivel 3)** — _"Elemento 6 — Marco Simbólico"_
7. **`paragraph`** — _"Es el universo narrativo, los imaginarios y los símbolos propios de cada rama. No es decoración: es el lenguaje con el que la rama vive sus valores. Un lobato no aprende cooperación leyendo un manual; la aprende viviendo, dentro de La Fantasía, las historias del Libro de las Tierras Vírgenes con sus seisenas. Un cachorro aprende fraternidad jugando a ser Hermano de Mowgli."_
8. **`paragraph`** — Las tres palabras que se confunden: _"**Tres palabras que se confunden todo el tiempo.** El **marco simbólico** es el mundo que la rama habita. El **fondo motivador** es el relato del que saca sus historias. El **ambiente de referencia** es el tono de esas historias."_
9. **`method-grid`** — Marcos simbólicos por rama (*Modelo* §8.2.2, pp. 56–57):
    - 🐻 **Familia (Cachorros)** → **La Fantasía.** Se nutre del *Libro de las Tierras Vírgenes*, sobre todo de *Los Hermanos de Mowgli*, y su tono son los relatos infantiles.
    - 🐺 **Manada (Lobatos)** → **La Fantasía** también, con el mismo relato de fondo. Lo que la distingue es el tono —relatos fantásticos— y los personajes que se reserva.
    - ⚜️ **Tropa (Scouts)** → **La Aventura.**
    - 🧗 **Comunidad (Nómadas Scout)** → **La aventura hacia la ciudadanía**, nutrida por las historias de la humanidad.
    - 🏔️ **Clan (Rovers)** → **La Ciudadanía Activa**, que se vive sirviendo.
10. **`paragraph`** — _"Familia y Manada comparten el Libro de las Tierras Vírgenes; en Familia se vive sobre todo a través de los Hermanos de Mowgli y los Nombres de Caza."_
11. **`info-box`** — Discrepancia entre dos fuentes vigentes: _"📝 **Dos documentos vigentes, dos formas de decirlo.** Las Guías de Familia y de Manada dan a las dos ramas el mismo marco, **La Fantasía**; el *Modelo* las distingue como **Territorio de la Fantasía** y **Territorio de la Fantasía Expandida** (§8.2.2, pp. 56–57). Te contamos la diferencia en vez de arreglarla por nuestra cuenta."_
12. **`info-box`** — _"Un dirigente que ignora o ridiculiza el Marco Simbólico ('eso es de niños'), está cortando el cable principal por el que la rama transmite sus valores. El símbolo es el método. Tómalo en serio aunque te dé pena."_

**Reflexión:** _"Describe el último momento de una reunión en que se usó el lenguaje o un símbolo propio de la rama (un nombre, una ceremonia, una historia). ¿Cómo reaccionaron los protagonistas? ¿Qué momento de la reunión habría ganado con un toque del marco simbólico?"_

**Quiz (3 preguntas, igual al JSON):**

> **P1.** Una lobata nunca ha preparado un refrigerio y el sábado le toca a su seisena. ¿Qué haces antes de la reunión?
>
> a) _Contarle a la seisena cómo preparabas tú los refrigerios y dejar que el sábado lo intenten a su modo._
> b) _Revisar con la seisena la receta y el reparto de tareas, y el sábado quedarte cerca mientras cocinan._  ✅
> c) _Armar tú la receta y el reparto de tareas, y el sábado decirle a cada lobato lo que le toca hacer._

> **P2.** Una rover del Clan ya domina los primeros auxilios y quiere ir más lejos. ¿Cuál de estas acciones es Enlazar, según el Modelo?
>
> a) _Proponerle ser la responsable de primeros auxilios del Clan y que les enseñe a los demás._
> b) _Proponerle practicar en cada reunión del Clan mientras tú le das retroalimentación._
> c) _Proponerle formarse con una brigada de salud del barrio y servir allí junto con ellos._  ✅

> **P3.** Un dirigente de Manada sigue usando el Libro de las Tierras Vírgenes, pero cuenta las historias de Mowgli como cuentos infantiles para dormir, con voz suave y finales tiernos, y los lobatos se aburren. Según las tres palabras que se confunden, ¿qué tocó?
>
> a) _El fondo motivador: al contarlas de otra forma, cambió el relato del que salen las historias._
> b) _El marco simbólico: los lobatos ya no sienten que viven en el mundo de La Fantasía._
> c) _El ambiente de referencia: el relato sigue siendo el mismo; lo que cambió es el tono._  ✅

**Logro:** "Apoyo + imaginación".

---

### 4.7 Lección 6 — 🌳 Elementos 7–8: Naturaleza y Participación en la Comunidad (~7 min)

**Idea central:** El laboratorio y el servicio.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
1-bis. **`paragraph`** — Anclaje: _"Piensa en la primera vez que dormiste lejos de casa: un campamento, si fuiste scout, o un paseo, una finca, una salida del colegio. Lo que aprendiste ahí —a cuidar lo poco que llevabas, a depender de los otros— no te lo enseñó nadie en un salón."_
2. **`heading` (nivel 3)** — _"Elemento 7 — Naturaleza"_
3. **`paragraph`** — _"La Naturaleza es el entorno educativo privilegiado del Movimiento. No es decoración del fin de semana ni un lujo de los grupos urbanos. Es el espacio donde los otros 7 elementos cobran intensidad: en la naturaleza, la patrulla se vuelve indispensable; la Promesa toma cuerpo; el Aprender Haciendo se vuelve necesidad; el Marco Simbólico encuentra su escenario natural."_
4. **`policy-quote`** — La cita célebre de B-P:
    - `text`: _"Para quienes tienen ojos para ver y oídos para oír, el bosque es a la vez un laboratorio, un club y un templo."_
    - `source`: "Baden-Powell, Rovering to Success, citado en The Scout Method, OMMS 2019, p. 25 — traducción propia del original en inglés."
    - `label`: "📋 La frase de B-P sobre la naturaleza"
5. **`paragraph`** — _"La PNPJ 2024 reconoce la Naturaleza como un elemento propio del Método, y es clara: usar la naturaleza 'implica más que actividades realizadas al aire libre… implica el desarrollo de un contacto constructivo con la Naturaleza' (p. 19-20). Y si tu grupo es de ciudad, la PNPJ te da una salida: el elemento también se vive al aire libre en lo que tengas cerca —su ejemplo es hacer pionerismo en una cancha de baloncesto—, siempre que ahí haya algo que aprender (p. 20). Vale la pena preguntarse, honestamente, cuánto de eso está pasando en tu unidad."_
6. **`heading` (nivel 3)** — _"Elemento 8 — Participación en la Comunidad"_
7. **`paragraph`** — _"El Movimiento no educa para encerrarse en la unidad. Educa para servir y participar. La Participación en la Comunidad incluye proyectos de servicio en el barrio, articulación con organizaciones locales, ejercicio de ciudadanía en espacios públicos. La PNPJ 2024 lo titula **'Participación comunitaria'**: ayudar a construir un mundo mejor desde la ciudadanía activa, en el **territorio** donde vive: su barrio, su colegio, su comunidad. El Modelo de Aplicación 2026 lo describe como un lugar con cuatro caras: la física (dónde pasa), la simbólica (el marco de la rama que le da sentido: para una Comunidad, su aventura hacia la ciudadanía), la de las relaciones (con quién: vecinos, familias, otras organizaciones) y la transformadora (qué cambia ahí gracias a ellos) — §8.2, p. 54. Servir CON no es solo poner las manos: es un esfuerzo colectivo, que se decide y se planea junto con la gente del lugar (PNPJ 2024, p. 22)."_
8. **`policy-quote`** — Cita:
    - `text`: _"El servicio no debe verse simplemente como hacer cosas para los demás sino que, a través de la participación, definitivamente implicará hacer cosas con los demás."_
    - `source`: "PNPJ 2024, pp. 22–23."
    - `label`: "📋 Servir CON, no PARA"
9. **`info-box`** — _"El Programa de Jóvenes que se cocina solo en el salón del grupo no es escultismo completo. Le falta el laboratorio (la naturaleza) y le falta el campo (el territorio). Ambos elementos son no-negociables, aunque la región sea urbana."_

**Reflexión:** _"En el último año, tu unidad ¿cuánto tiempo pasó en naturaleza real (campo, monte, río, bosque)? ¿Y cuántos proyectos hicieron CON la comunidad, no solo PARA la comunidad? Sé honesto."_

**Quiz (3 preguntas, igual al JSON):**

> **P1.** Una tropa acampa en una finca con río y monte, pero pasa casi todo el fin de semana jugando fútbol en la cancha y viendo películas en el salón. ¿Cumple el elemento Naturaleza?
>
> a) _Sí: basta con llevar a la tropa a un entorno natural, lejos de la ciudad y del salón del grupo._
> b) _No: cada actividad del campamento tiene que hacerse dentro del monte, nunca en la cancha._
> c) _No basta: pide más que estar al aire libre, un contacto constructivo con la naturaleza._  ✅

> **P2.** El Clan quiere pintar el salón comunal con pintura que donó una ferretería. La Junta de Acción Comunal les dice que el salón está bien y que lo que les preocupa es el parque, que se volvió un basurero. ¿Qué lo acerca más a la Participación en la Comunidad?
>
> a) _Sentarse con la Junta a mirar qué necesita el parque y planear con ella, paso a paso, una jornada allí._  ✅
> b) _Proponerle a la Junta la jornada en el parque que el Clan ya diseñó, y pedirle que convoque a los vecinos._
> c) _Pintar el salón como estaba previsto e invitar a la Junta y a los vecinos a pintar junto con el Clan._

> **P3.** Antes de su proyecto en la vieja cancha, la Comunidad lo bautiza como una etapa de su «aventura hacia la ciudadanía» y lo cuenta con las historias de la humanidad que vienen trabajando. ¿Qué cara del territorio están trabajando?
>
> a) _La física, porque el proyecto pasa en la cancha que la Comunidad ya conoce._
> b) _La simbólica, porque le dan al proyecto el sentido que trae el marco de su rama._  ✅
> c) _La transformadora, porque con el proyecto buscan cambiar algo en la vieja cancha._

**Logro:** "Naturaleza + ciudadanía".

---

### 4.8 Lección 7 — 🎯 Las 4 Dinámicas del Escultismo en acción (~5,5 min)

**Idea central:** Cómo se ven los 8 elementos juntos.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
1-bis. **`paragraph`** — Anclaje: _"Imagina dos manadas. En una, los lobatos llegan felices, pero nadie sabe qué deberían estar aprendiendo. En la otra, el plan es impecable y los niños llegan como a clase. A las dos les falta algo, y no es lo mismo. Las 4 Dinámicas sirven para ponerle nombre a eso que falta."_
2. **`paragraph`** — Apertura: _"Los 8 elementos no se aplican uno por uno como una checklist. Se viven simultáneamente. The Scout Method (OMMS 2019, pp. 28-32) las describe como cuatro ingredientes que se necesitan entre sí; en este curso las llamamos **las 4 Dinámicas del Escultismo**. Son la forma en que el Método se hace visible en la vida real de la unidad."_
3. **`heading` (nivel 3)** — _"Las 4 Dinámicas"_
4. **`method-grid`** — Las 4 Dinámicas:
    - 🎯 **Competencias Educativas** — el norte del crecimiento del protagonista: qué queremos que aprenda a hacer en su vida diaria. Se escriben en dos alturas: las **terminales** son la meta grande, lo que logra **a lo largo de todo su paso por el Movimiento**; las **intermedias** son esa misma meta partida en pasos **por rama y por edad**, y las encuentras en la Guía de Dirigente de tu rama.
    - 🛠️ **Oportunidades de Aprendizaje** — las experiencias diseñadas o aprovechadas para que el protagonista crezca (reuniones, campamentos, proyectos, conversaciones).
    - 👥 **Vida en Grupo** — el clima, los vínculos, la cultura de la unidad (acogida, conflictos resueltos, alegría compartida).
    - 🏛️ **Estructura y Funcionamiento** — la organización que hace posible todo lo anterior (consejos, equipos de jefatura, planeación, evaluación).
5. **`paragraph`** — _"Una unidad con Programa de calidad muestra las 4 Dinámicas activas a la vez. El Modelo 2026 lo dice a su manera: mira la unidad como un ecosistema donde todo eso tiene que estar vivo al tiempo (§3.2, p. 16). Una unidad que solo cuida las competencias educativas pero descuida la Vida en Grupo se vuelve fría. Una que solo cuida la Vida en Grupo pero no tiene claro qué quiere que sus jóvenes aprendan se vuelve divertida pero no educativa."_
6. **`heading` (nivel 3)** — _"El filtro DURASLID"_
7. **`paragraph`** — _"El Modelo de Aplicación 2026 añade un filtro práctico para evaluar la calidad de cada Oportunidad de Aprendizaje: **DURASLID**. Toda actividad debería ser **D**esafiante, **Ú**til, **R**ecompensante, **A**tractiva, **S**egura, **L**údica, **I**nclusiva y **D**iversa. Si una actividad solo cumple 2 o 3 de los 8 atributos, hay algo que ajustar."_
8. **`info-box`** — _"En el Curso 14 del Nivel 2 —«Planeación de Reuniones y Oportunidades de Aprendizaje»— vas a aprender a planear reuniones aplicando DURASLID con la herramienta oficial Excel DNPJ. Hoy solo guarda el filtro."_

**Reflexión:** _"Elige la Dinámica más floja de tu unidad y escribe la escena de la última reunión que te hace pensar eso. ¿Qué harías distinto en la siguiente?"_

**Quiz (3 preguntas, igual al JSON):**

> **P1.** En una manada todos se quieren: hay juegos, acogida y alegría, pero ningún dirigente sabe decir qué debería estar aprendiendo un lobato este año. ¿Qué Dinámica está floja?
>
> a) _Las Oportunidades de Aprendizaje: faltan actividades pensadas con un propósito._
> b) _Las Competencias Educativas: falta el norte hacia el que crece cada protagonista._  ✅
> c) _La Estructura y Funcionamiento: falta un consejo que planee el año y luego lo evalúe._

> **P2.** Una dirigente de Tropa quiere saber qué debería lograr en Sociabilidad un scout de 12 años. ¿Qué competencias busca, y dónde?
>
> a) _Las terminales, que trae la Guía de Dirigente de Tropa para cada edad de la rama._
> b) _Las del registro de seguimiento, que anota lo que cada scout ya logró en el área._
> c) _Las intermedias, que trae la Guía de Dirigente de Tropa partidas por rama y por edad._  ✅

> **P3.** Las Panteras proponen otra vez su carrera de observación por el barrio: les encanta, es segura y juegan todos, también los nuevos; ya la hicieron dos veces este trimestre exactamente igual. Pasada por DURASLID, ¿qué conviene ajustar?
>
> a) _Cambiarle el reto, porque a la patrulla ya no le exige nada nuevo._  ✅
> b) _Mantenerla: tiene seguridad, juego y gusto, que es lo que más pesa._
> c) _Cambiarle el premio, para que vuelva a ser recompensante para todos._

**Logro:** "Veo el método en vivo".

---

### 4.9 Lección 8 — ✍️ Mi próxima reunión con los 8 elementos (~7 min)

**Idea central:** Mirar cuatro reuniones y ajustar la próxima.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Vas a hacer el ejercicio más importante del Nivel 1. Piensa en tus últimas cuatro reuniones juntas (si aún no tienes cargo o unidad, piensa en las de la unidad que apoyas hoy o en las de una que conozcas). La PNPJ lo explica con una imagen muy parecida: una instantánea de un día no captura los 8 elementos; un diario en video de varias semanas, sí (p. 8). Vamos a ver qué tan bien integran los 8 elementos."_
3. **`heading` (nivel 3)** — _"Checklist de los 8 elementos en tus últimas cuatro reuniones"_
4. **`list`** — 8 preguntas, una por elemento (en pasado: diagnóstico hacia atrás, ajuste hacia adelante):
    - **Promesa y Ley** — ¿Hubo en las cuatro reuniones un momento donde se mencionara, se viviera o se reconociera la Promesa o algún punto de la Ley?
    - **Aprender Haciendo** — ¿Los protagonistas **hicieron** algo, o solo **escucharon y miraron**?
    - **Progresión Personal** — ¿En las cuatro reuniones se observó o se registró el avance de algún protagonista en alguna área?
    - **Sistema de Equipos** — ¿Hubo momentos de pequeño grupo (camada o seisena para una actividad; patrulla o equipo con vida propia), y no solo de gran grupo?
    - **Apoyo del Adulto** — ¿El adulto estuvo en rol de Apoyar/Acompañar/Enlazar — o en rol de dirigir y entretener?
    - **Marco Simbólico** — ¿Estuvieron presentes el lenguaje, los símbolos y las ceremonias propias de la rama?
    - **Naturaleza** — ¿Alguna de las cuatro reuniones tuvo contacto con la naturaleza —observar, cuidar, explorar—, aunque fuera en un parque o en una plaza con árboles?
    - **Participación en la Comunidad** — ¿Hubo algún hilo que vinculara las cuatro reuniones con el territorio (familia, barrio, escuela, comunidad)?
5. **`paragraph`** — _"Si respondiste "no" o "no sé" a más de 3 de las 8, a tus reuniones les están faltando piezas del sistema: empieza por una. Si fueron entre 1 y 3, escoge uno de esos elementos. Si respondiste "sí" a las 8, vas en camino del Método: escoge el que veas más flojo y cuídalo. En cualquier caso, el ajuste empieza en **tu próxima reunión**, y lo vuelves a mirar dentro de cuatro."_
6. **`heading` (nivel 3)** — _"Mi ajuste para la próxima reunión"_
7. **`paragraph`** — Plantilla (en el recuadro «Compromiso Personal»): _"En mi próxima reunión voy a fortalecer el elemento __________, agregando __________. La señal de que se cumplió será __________."_
8. **`mission-box`** — _"El Método se aprende aplicándolo. Cada reunión es un ensayo. Si una semana no funciona, ajustas la siguiente. Si una se queda corta en un elemento, lo trabajas en la otra. El sistema es flexible; lo no negociable es seguir integrando los 8."_
9. **`heading` (nivel 3)** — _"Lo que viene"_
10. **`list`** — Mapa:
    - 📜 **Curso 6** — La PNPJ y "El Gran Juego para la Vida": cómo Colombia aterriza el Método al Modelo de Aplicación 2026, las 5 ramas y las 6 áreas de crecimiento.
    - 🗺️ **Curso 7** — Mi Compromiso con el Programa de Jóvenes: tu compromiso escrito como dirigente.
11. **`info-box`** — Despedida: _"Ahora ya lo sabes: no es una lista de ocho técnicas para escoger según el día; es un sistema. Bienvenido al equipo de los que aplican el Método con conciencia."_

**Reflexión:** _"¿Cuántas de las 8 preguntas respondiste con «sí», y qué elemento escogiste fortalecer? Como el Método es un sistema, di también qué otro elemento crees que se va a mover cuando fortalezcas ese, y por qué. El ajuste completo escríbelo en el recuadro «Compromiso Personal» que aparece junto a tu certificado: ese se queda en tu navegador."_

**Compromiso Personal** (`commitmentBox`, se queda en el navegador; corrección de privacidad del 02-oct-2026, ADR-117): _"Escribe tu ajuste para la próxima reunión: el elemento que vas a fortalecer, qué vas a agregar y cuál será la señal de que se cumplió."_ — placeholder _"En mi próxima reunión voy a fortalecer el elemento …, agregando … La señal será …"_

**Quiz (3 preguntas, igual al JSON):**

> **P1.** Un dirigente revisa la reunión del sábado y encuentra activos solo 5 de los 8 elementos. Concluye que su unidad «no aplica el Método». Según la lección, ¿qué le respondes?
>
> a) _Que tiene razón: si en esa reunión falta un elemento, el sistema ya no está completo._
> b) _Que una reunión es solo una instantánea: los 8 se miran a lo largo de varias semanas._  ✅
> c) _Que revise solo los elementos de su rama: no todos los 8 aplican a cada edad._

> **P2.** Al pasar el checklist por sus últimas cuatro reuniones, una dirigente responde «sí» en 4 elementos y «no sé» en los otros 4. Concluye que va bien porque no marcó ningún «no». ¿Qué dice la lección?
>
> a) _Que con la mitad de los elementos en «sí» ya va en camino del Método, y sigue cuidándolo._
> b) _Que «no sé» cuenta igual que «no»: con más de 3 así, sus reuniones necesitan ajustes._  ✅
> c) _Que «no sé» no cuenta en contra: solo los «no» piden ajustar las reuniones._

> **P3.** Tu compromiso fue fortalecer Naturaleza. Dos sábados después, la salida al parque se cayó por lluvia y nadie la reprogramó. ¿Qué propone la lección?
>
> a) _Cambiar de compromiso y fortalecer otro elemento, porque Naturaleza no te está funcionando._
> b) _Dejar la salida para cuando mejore el clima y, mientras tanto, hablar de naturaleza en el salón._
> c) _Reprogramar la salida para la reunión que sigue y fijar la señal que te dirá si funcionó._  ✅

**Logro al completar:** "Practicante del Método" (logro final, `unlockOnModule: -1`).

---

## 5. Logros (achievements)

| ID | Nombre | Emoji | Desbloqueo |
|---|---|---|---|
| `achievement-1` | Empecé el camino | 👋 | Al completar Lección 1 |
| `achievement-2` | Veo el sistema | 🧭 | Al completar Lección 2 |
| `achievement-3` | Ética + práctica | 📜 | Al completar Lección 3 |
| `achievement-4` | Crezco con otros | 🌱 | Al completar Lección 4 |
| `achievement-5` | Apoyo + imaginación | 💗 | Al completar Lección 5 |
| `achievement-6` | Naturaleza + ciudadanía | 🌳 | Al completar Lección 6 |
| `achievement-7` | Veo el método en vivo | 🎯 | Al completar Lección 7 |
| `achievement-final` | Practicante del Método | 🧭 | Al completar el curso (`unlockOnModule: -1`) |

(Excepción al patrón estándar de 4-6 logros: este curso tiene 8 lecciones de contenido por la centralidad doctrinal, justificando 7 + 1 final.)

---

## 6. Conexiones cross-course

### 6.1 Hacia adelante (dentro del Nivel 1 de PJ)

- **L4 (Progresión Personal) → Curso 6:** las 6 áreas de crecimiento y las competencias terminales/intermedias por rama se desarrollan en el Curso 6.
- **L7 (DURASLID) → Curso 14 (Nivel 2):** filtro completo y herramienta de evaluación operativa, como dice el `info-box` de la L7 en el JSON.
- **L4 (Sistema de Equipos) → cursos de rama del Nivel 2 (Cursos 8–12):** cada rama desarrolla su propio grupo natural.
- **L8 → Curso 7:** el checklist de los 8 elementos se incorpora al compromiso escrito del dirigente.

### 6.2 Hacia atrás

- **Curso 2 (Educación por el Amor)** → "Aprender Haciendo" es la versión metodológica de la "autoeducación voluntaria" que B-P propuso en 1922.
- **Curso 4 (Características Esenciales)** → "Apoyo del Adulto" es la versión metodológica de la "alianza joven-adulto" del Curso 4 L5.
- **Curso 1 (Bienvenida)** → el `method-grid` de la L2 del Curso 1 (6 ejemplos cotidianos) anclaba los elementos que aquí se sistematizan.

### 6.3 Cross-línea

- **Con A Salvo del Peligro (Curso 25)**: el elemento **Apoyo del Adulto** se cuida con A Salvo del Peligro.
- **Con DI Curso 8 (Planeación)**: las 4 Dinámicas son insumo del Plan de Grupo (área Programa de Jóvenes).

---

## 7. Tipos de sección utilizados

| Tipo | Lecciones |
|---|---|
| `info-box` | L1, L2, L3, L4, L5, L6, L7, L8 (todas) |
| `paragraph` | Todas |
| `heading` (nivel 3) | L1, L2, L3, L4, L5, L6, L7, L8 |
| `list` | L1, L2, L8 |
| `method-grid` | L2 (4 palabras clave), L4 (5 ramas), L5 (5 marcos simbólicos), L7 (4 Dinámicas) |
| `mission-box` | L1, L8 |
| `policy-quote` | L2, L3 (2), L5, L6 (2) |
| `reflection` | L2, L3, L4, L5, L6, L7, L8 |
| `quiz` | L2, L3, L4, L5, L6, L7, L8 |

**No requiere ningún tipo de sección nuevo.**

---

## 8. Multimedia requerido

| Activo | Tipo | Estado | Observación |
|---|---|---|---|
| Diagrama "Los 8 elementos como sistema" | SVG | Por crear | Visualización circular o de red mostrando interdependencia. Crítico para L2. |
| Imagen de portada | PNG | Por crear | Brújula sobre paisaje natural — color #00838F. |
| Iconos por elemento (8) | Emoji | Listo | Se renderizan con emoji. |

**Decisión sugerida:** lanzar con el diagrama de los 8 elementos como infografía descargable en L2. Sin video en primera versión.

---

## 9. Validación contra el marco metodológico

| Criterio | Cumplimiento |
|---|---|
| Curso entre 20 y 40 min | ⚠️ ~43 min (por encima del rango, justificado por centralidad) |
| Lecciones de 3–8 min | ✅ rango ~5,5–7 min (más la intro) |
| Lenguaje conversacional, tutea | ✅ |
| Citas oficiales plegables | ✅ 6 citas (OMMS 2019, PNPJ 2024, Guía para dirigentes de la Rama Scout y B-P) |
| Patrón 6.2 — Anti-definición + reformulación accesible (fórmula literal "Si abres…") | ✅ aplicado explícitamente en L2 antes y después de la cita oficial de OMMS, por la densidad doctrinal de la definición; anclajes en la experiencia del adulto en L3, L4, L6 y L7. |
| Reflexión personal por lección | ✅ excepto intro |
| Mini-quiz por lección | ✅ 3 por lección (21 preguntas, todas de escenario) |
| 4–6 logros + 1 final | ⚠️ 7 + 1 final (excepción documentada por número de lecciones; se mantiene < 10) |
| L1 `isIntro: true` sin quiz | ✅ |
| Conexión cross-course | ✅ con Cursos 1, 2, 4, 6, 7, 8–12, 14, 25 y DI 8 |
| 3 exigencias propias de PJ | ✅ alianza joven-adulto (L5), DURASLID (L7), educación por el amor implícita |

---

## 10. Próximos pasos

1. **Revisar este diseño** con el dueño del proyecto.
2. **Diseñar el diagrama "Los 8 elementos como sistema"** (clave para L2).
3. **Generar el JSON** del curso siguiendo `course-schema.json`.
4. **Generar HTML** con `node build-course.js metodo-scout-8-elementos`.
5. **Generar preview PDF** y revisar.
6. **Pilotar** junto a los Cursos 1–3 con los mismos 5–10 dirigentes.

---

_Documento de diseño del Curso 5, versión inicial — 28 de mayo de 2026. **Revisión doctrinal del 15 de septiembre de 2026** (`contentVersion` 2026-09-15): se aplicaron las correcciones de la re-auditoría doctrinal — nomenclatura vigente «Competencias Educativas» (Modelo 2026 §3.2, p. 16), citas textuales reancladas a fuente localizable y reencuadre del checklist de la L8 de «una reunión» a «un período» (PNPJ 2024, p. 8). **Segunda vuelta el mismo día** (re-auditoría): «Enlazar» reapuntado hacia fuera del ámbito scout y emparejado con Exploro/Aplico/Profundizo (Modelo 2026 §9.2.1–9.2.3); «competencia» a secas sustituida por «competencia educativa» (GLOSARIO §E-bis / ADR-034); el `label` de la L3 corregido a «la Ley»; marco simbólico de Comunidad según la Guía de Dirigente de Comunidad (PDF 19–21); unidad de tiempo del bloque de la L8 unificada en «cuatro reuniones» (PNPJ 2024, p. 8); y distractores del diseño realineados con el JSON, que es el que compila. Fuente angular: "The Scout Method", OMMS Oficina Scout Mundial 2019 (Resolución 41.ª Conferencia Scout Mundial 2017-04). Validado contra el marco metodológico de la plataforma y la PNPJ 2024 / Modelo de Aplicación 2026. **Tercera revisión doctrinal, 16 de septiembre de 2026** (`contentVersion` 2026-09-16): barrido de marcos simbólicos — la rejilla de la L5 nombra ahora los cinco marcos del *Modelo* §8.2.2, p. 56 (Familia: La Fantasía · Manada: La Fantasía · **Tropa: La Aventura** · Comunidad: La aventura hacia la ciudadanía · Clan: La Ciudadanía Activa), separando marco simbólico de fondo motivador y de ambiente de referencia, con un `info-box` que **cuenta la discrepancia** entre las Guías de Familia (§6.1, p. 35) y de Manada (§6.9, p. 30) y el *Modelo*, sin armonizarla; el quiz de la L5 P2 se rehizo sobre el papel del *Libro de las Tierras Vírgenes* como fondo motivador (el ítem anterior certificaba el error); se restituyó el orden de la cadena de competencias — **terminales** a lo largo de todo el tránsito por el Movimiento, **intermedias** por rama y por edad (*Modelo* §6.3.1, pp. 31-32) —; y la cita de B-P quedó anclada a su documento real, la **Guía para dirigentes de la Rama Scout** (Oficina Scout Mundial – Región Interamericana, 2ª ed., abril 2005), pp. 59 y 166. **Corrección del 08/11/2026** (`contentVersion` 2026-11-08): re-auditorías doctrinal y pedagógica de noviembre — grupo natural de Familia y Manada (Guía de Familia §5.2.2, p. 29; Guía de Manada §5.2, pp. 26–27), componentes del territorio (*Modelo* §8.2, p. 54), hook y eco del curso, anclajes de la L4 y la L7, reflexiones de caso concreto y unidad de tiempo de la L8; quizzes de 3 preguntas por lección. **Decisiones del 22/11/2026** (`contentVersion` 2026-11-22, decisor con autoridad delegada): quizzes reescritos para romper la pista del término medio (L2 P2–P3, L3 P3, L4 P2, L5 P1, L6 P2, L8 P3), correctas de la L7 redistribuidas y la L6 P3 con un distractor del territorio; anclajes de la L3 y la L6 (este último sin dar por hecho que el adulto fue scout); «el juego» ya no figura como elemento en la L1; la L4 sin códigos de documentos ni roles adelantados, con la reflexión y la caja acotadas por rama (Guía de Familia p. 29); la L5 aligerada (los 4 tipos de apoyo quedan en el Curso 4) y su caja de discrepancia en dos frases; el «con» de la L6 incluye decidir y planear (PNPJ 2024, p. 22); ítems del checklist de la L8 en pasado; OA1 con «Explica»; quizzes, duraciones y §9 de este diseño sincronizados con el JSON, que es el que compila._
