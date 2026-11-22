# Diseño del Curso 8 — 🐺 Rama Lobatos (Manada)

**Línea:** Programa de Jóvenes · **Nivel:** 2 (Profundización por rama y práctica pedagógica) · **Posición:** Curso 8 de 8 del Nivel 2 (7–14), primero en construirse.

> Vertical slice del Nivel 2. Elegido como primer curso de rama por tener el material fuente más completo (Guía de Dirigente de Manada 2026, 69 pp. + Manual de Presentación y Buen Orden de la Manada) y por ser la rama-patrón ya auditada en la app complementaria PROGRAMA SCOUT. Se replica el patrón a los Cursos 7, 9, 10 y 11 (las otras 4 ramas).
>
> **El JSON manda (ADR-073).** El 22/11/2026 este diseño se sincronizó con `borradores/rama-manada-lobatos.json` (contentVersion 2026-11-22): quizzes completos, duración, textos corregidos y numeración de cursos. Si vuelven a diferir, vale el JSON.
>
> **Sin cursos habilitantes** (decisión 11-jul-2026, `CLAUDE.md` §5.3, `DECISIONES.md` ADR-019): este curso no bloquea ni está bloqueado por ningún otro. El Nivel 1 y el Curso 25 (A Salvo del Peligro) se recomiendan en la ficha, no se exigen técnicamente.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `rama-manada-lobatos` |
| Título | Rama Lobatos (Manada) |
| Subtítulo | Formación de Adultos Voluntarios — Asociación Scouts de Colombia |
| Icono | 🐺 |
| Duración | ~38 min |
| Lecciones de contenido | 7 + intro + certificado (8 en total) |
| Audiencia primaria | Dirigentes que acompañan (o van a acompañar) la rama Manada, y Asistentes de la unidad (7–10 años). |
| Recomendado antes | Ninguno es obligatorio. Para aprovechar mejor el curso: Nivel 1 completo (Cursos 1–6) y, en paralelo, el Curso 25 — A Salvo del Peligro. |
| Logro final | "Guardián de la Selva" |
| `contentVersion` | `2026-11-22` |

---

## 2. Objetivos del curso

Al completar este curso, el dirigente:

1. **Reconoce** las características propias del niño y la niña de 7 a 10 años (cuerpo en movimiento, mente curiosa, corazón sensible, fantasía como lenguaje) y por qué determinan todo el diseño de la rama.
2. **Distingue** la Ley y la Promesa de la Manada como compromisos que se viven jugando, y **propone** una actividad que haga vivir uno de sus puntos sin moraleja.
3. **Usa el fondo motivador** —El Libro de las Tierras Vírgenes, dentro del marco simbólico de La Fantasía (*Guía de Manada* §6.9, p. 30)— (Akela, Baloo, Bagheera, la Flor Roja, el Cubil) como lenguaje pedagógico principal, no como decoración.
4. **Aplica DURASLID** al diseño de una actividad y organiza la Manada en seisenas sin caer en jerarquías fijas ni "seiseneros" permanentes.
5. **Ubica** la Naturaleza y la Progresión Personal (territorio de la selva, seis Sendas) en el acompañamiento cotidiano de un lobato concreto.
6. **Decide**, en situaciones de la Manada, cuándo facilitar y cuándo poner un límite como Viejo Lobo —facilitador, no jefe—, reconoce el Consejo de Roca, las ceremonias y el Gran Salto como los momentos donde ese rol se hace visible, y **formula** un compromiso observable.

---

## 3. Hook pedagógico (la idea poderosa que sostiene el curso)

> **"Tú no mandas en la Manada. Le ofreces el territorio, el símbolo, la confianza y unos límites claros — y el rumbo lo marcan ellos."**
>
> _(22/11/2026: «no diriges» pasó a «no mandas» y se sumaron «unos límites claros», para que la frase guía no contradiga la L6 y la L8: Guía §9.2, p. 54, y §10.1.3, p. 58.)_

Parafrasea directamente a la Guía de Dirigente de Manada 2026: *"El Viejo Lobo ofrece las condiciones, pero el rumbo lo marcan ellos. En este contexto, el error deja de ser un fracaso para convertirse en una fuente valiosa de aprendizaje."* (p. 19). Se enuncia explícitamente en la Lección 6 y se referencia en las Lecciones 2, 4 y 8. Su función es contradecir el supuesto de que el dirigente de Manada es quien "pone orden y dirige el juego", y reemplazarlo por la idea de que su trabajo es sostener las condiciones (símbolo, seguridad, cariño) para que el lobato decida, se equivoque y crezca.

---

## 4. Estructura de lecciones

### 4.1 Mapa general

| # | Lección | Duración | Idea central | Logro al completar |
|---|---|---|---|---|
| 1 | 🐾 Bienvenida a la Manada | 3 min | Vas a acompañar a un niño o niña de 7 a 10 años en la etapa donde la fantasía es el lenguaje que mejor entienden. | — (la intro no desbloquea logro) |
| 2 | 🚪 Quién es un Lobato y cómo llega a la Manada | 5 min | El lobato de 7 a 10 años tiene un cuerpo que no para, una mente curiosa y un corazón sensible — y llega a la Manada por una ceremonia, no de golpe. | Acompaño su llegada |
| 3 | 📖 El Libro de las Tierras Vírgenes: el lenguaje de la Selva | 5 min | El marco simbólico no es decoración: es el idioma con el que un niño de 7 años entiende la lealtad, el respeto y el cuidado. | Hablo el idioma de la Selva |
| 4 | 🐺 Las Seisenas: todos aportan, todos crecen | 5 min | En la Manada de 2026 las seisenas no tienen jefes fijos: el liderazgo rota para que todos vivan guiar y ser guiados. | Todos aportan, todos crecen |
| 5 | 🌳 El territorio de la selva: Naturaleza y Progresión | 5 min | La progresión de un lobato se traza en seis Sendas sobre "el territorio de la selva", a su propio ritmo. | Trazo las Sendas |
| 6 | 🦉 El Viejo Lobo: facilitador, no jefe | 5 min | Ser Viejo Lobo es firmeza con ternura: sostener el espacio seguro sin decidir por ellos. | Soy Viejo Lobo |
| 7 | 🌙 Ceremonias, el Círculo de Roca y el Gran Salto | 4 min | Las ceremonias de la Manada —incluida su despedida, el Gran Salto— sostienen el marco simbólico con solemnidad y alegría a la vez. | Sostengo el Círculo de Roca |
| 8 | ✍️ Tu primer paso como Viejo Lobo | 3 min | Saber sin actuar no transforma; el primer paso es chico, concreto y tuyo. | Guardián de la Selva (final) |

**Total medido en el JSON: ~38 min** (los minutos por lección son estimados de diseño). Excede levemente el rango óptimo de 20–30 min de un curso estándar (ver Curso 1), justificado —igual que el Curso 4 del Nivel 1— por la centralidad del contenido: es el primer curso de rama del Nivel 2 y cubre los 8 elementos del Método aplicados a una rama completa, más grupo natural, marco simbólico y transiciones de entrada/salida. Documentado como excepción en la sección 9.

---

### 4.2 Lección 1 — 🐾 Bienvenida a la Manada (3 min, `isIntro: true`)

**Idea central:** Vas a acompañar a un niño o niña de 7 a 10 años en la etapa donde la fantasía es el lenguaje que mejor entienden.

**Secciones (en orden):**

1. **`info-box`** — Tiempo estimado (~38 min) y promesa concreta: _"Al final de este curso vas a poder hablar el idioma de la Selva, organizar tu Manada en seisenas sin jerarquías fijas, acompañar la progresión de un lobato por sus seis Sendas, y entender qué significa ser Viejo Lobo: facilitador, no jefe."_
2. **`paragraph`** — Presentación del protagonista narrativo del curso: _"Vas a conocer a Andrés. Tiene 7 años, acaba de cruzar la Ceremonia de Paso desde la Familia, y en unos cuatro años va a hacer su Gran Salto hacia la Tropa. En este curso vas a acompañar su viaje por la Manada — y vas a entender, lección a lección, qué necesita de ti en cada tramo."_
3. **`paragraph`** — Tensión del hook, adelantada (H4 auditoría pedagógica): _"Es fácil pensar que ser Viejo Lobo es 'dirigir el juego': decidir qué hacen, cómo lo hacen y cuándo. En este curso vas a ver por qué esa idea le quita a Andrés lo que la Manada existe para darle: la oportunidad de decidir, equivocarse y crecer. La frase que te va a acompañar: tú no mandas en la Manada; le ofreces el territorio, el símbolo, la confianza y unos límites claros, y el rumbo lo marcan ellos."_
4. **`heading` (nivel 3)** — _"Lo que vas a vivir en este curso"_
5. **`list`** — Las 6 ideas centrales que verá (una por lección 2–7):
    - Quién es un lobato de 7 a 10 años y cómo llega a la Manada.
    - El Libro de las Tierras Vírgenes como idioma, no como disfraz.
    - Las seisenas: cómo se organizan sin líderes fijos, y DURASLID, el filtro con que se revisa todo lo que hace la Manada.
    - El territorio de la selva y las seis Sendas de la progresión.
    - Qué significa ser Viejo Lobo: facilitador, no jefe.
    - Las ceremonias de la Manada y el Gran Salto hacia la Tropa.
6. **`mission-box`** — Invitación a pensar en un lobato real (o imaginado, si aún no tiene Manada) mientras avanza en las reflexiones; además avisa: «De la próxima lección en adelante, cada una cierra con tres preguntas, y hay que acertar las tres para seguir. No es una trampa: si fallas, vuelves al párrafo y lo intentas otra vez, sin penalización.»

**Reflexión:** ninguna en la intro (patrón establecido en el Curso 1).

**Quiz:** ninguno.

**Logro al completar:** ninguno — la lección de intro no desbloquea logro; el primero ("Acompaño su llegada") se desbloquea al completar la Lección 2.

---

### 4.3 Lección 2 — 🚪 Quién es un Lobato y cómo llega a la Manada (5 min)

**Idea central:** El lobato de 7 a 10 años tiene un cuerpo que no para, una mente curiosa y un corazón sensible — y llega a la Manada por una ceremonia, no de golpe.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura narrativa (Patrón 6.2, Variante B): _"Antes de hablar de seisenas o de progresión, conviene mirar de frente a quién tienes al frente. Un lobato de 7 años no es un scout chiquito ni un niño de Familia grande. Es una etapa con lógica propia."_
3. **`method-grid`** — 4 rasgos del lobato (Guía de Dirigente de Manada, Cap. 1), con icono y color:
    - 🏃 **Un cuerpo que quiere moverse todo el tiempo** — la quietud prolongada lo agota; el juego físico no es un premio, es la vía de aprendizaje.
    - 🧠 **Una mente curiosa que quiere entender el mundo** — pregunta todo, varias veces, y necesita respuestas concretas, no abstractas.
    - 💛 **Un corazón sensible que necesita seguridad** — vive las emociones con intensidad; un ambiente predecible y cálido es condición, no lujo.
    - 🎭 **Fantasía y juego: su manera de aprender** — no juega *para después aprender*; jugando ya está aprendiendo.
4. **`paragraph`** — Aplicación a Andrés: _"Cuando Andrés llegó a su primera reunión, no se sentó a escuchar una explicación de 10 minutos sobre qué es el escultismo. Se puso a cuatro patas a aullar con toda la Manada. Ese aullido —no la explicación— fue su primera lección de pertenencia."_
5. **`heading` (nivel 3)** — _"Cómo llega un niño a la Manada: la Ceremonia de Paso"_
6. **`paragraph`** — Explicación de la transición de entrada: un cachorro de Familia no "se pasa" de un día para otro. Hay una **Ceremonia de Paso de Familia a Manada**, en la que es presentado a Akela por el Jefe de Grupo y acogido afectuosamente en la Manada. Es el primer ritual de pertenencia que va a vivir Andrés, y marca simbólicamente que entra a un territorio nuevo: la Selva.
7. **`policy-quote`** — Cita textual de la Guía de Dirigente de Manada:
    - `text`: _"Ceremonia de Paso de Familia a Manada: Es el momento en que un cachorro pasa a la manada, es presentado a Akela por el Jefe de Grupo y acogido afectuosamente en la Manada."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 6.12 — Ceremonias en la Manada, p. 32."
    - `label`: "📋 Ver la ceremonia de entrada textual"
8. **`info-box`** — Las dos puertas de entrada (Guía de Dirigente de Manada, Cap. 6.12 p. 32 y Cap. 8.7.4 p. 53): _"Hay dos formas de entrar a la Manada, y conviene no confundirlas. Si el niño viene de la Familia de Cachorros, entra por la **Ceremonia de Paso de Familia a Manada**. Si llega de fuera y nunca fue Cachorro, vive primero la etapa de **«Lobezno»**: un tiempo para conocer la Manada, el juego, la Ley y la Promesa, y decidir por sí mismo si quiere pertenecer. Esa etapa se cierra con su **Investidura**. Y venga de donde venga, todo lobato hace su Promesa en una Ceremonia de Investidura (la verás en la Lección 7). En los dos casos hay un ritual de entrada — lo que no puede pasar es que entre sin ninguno."_

**Reflexión:** _"Piensa en cómo llegó a tu Manada el último lobato nuevo (o cómo imaginas que debería llegar). ¿Hubo un momento reconocible de bienvenida, o simplemente 'empezó a venir'? Escribe qué harías igual y qué cambiarías."_

**Quiz (3 preguntas, sincronizado con el JSON el 22/11/2026):**

> **P1.** Sofía, de 7 años, viene de la Familia de Cachorros de tu mismo Grupo. Una dirigente propone dejarla un tiempo de «Lobezno» antes de recibirla. ¿Qué le respondes?
>
> a) _Que la etapa de «Lobezno» es para todo niño nuevo que llega a la Manada, venga o no de la Familia de Cachorros._
> b) _Que ella no pasa por esa etapa: entra por la Ceremonia de Paso, presentada a Akela por el Jefe de Grupo._  ✅
> c) _Que ella sí vive esa etapa, pero se cierra con la Ceremonia de Paso y no con una Investidura._

> **P2.** Llega a tu Manada Tomás, de 8 años. Nunca fue Cachorro: es su primer contacto con el escultismo. Su papá pregunta cuándo es la ceremonia. ¿Qué le explicas?
>
> a) _Que primero vive la etapa de «Lobezno» y que esa se cierra con su Investidura._  ✅
> b) _Que la Ceremonia de Paso se hace apenas complete un mes de asistencia seguida._
> c) _Que, como no viene de Familia, hace directamente su Investidura en la próxima reunión de Manada._

> **P3.** Vas a recibir a tres lobatos nuevos. Un dirigente propone abrir la reunión con diez minutos sentados explicando qué es el escultismo, «para que después el juego tenga sentido». ¿Qué le respondes según la lección?
>
> a) _Que la explicación sirve si es concreta y no abstracta, y el juego queda como premio a la atención._
> b) _Que es mejor empezar por la Ley de la Manada, que está en lenguaje sencillo y es más concreta._
> c) _Que el aullido y el juego con la Manada ya son su primera lección: la charla puede esperar._  ✅

**Logro:** "Acompaño su llegada".

---

### 4.4 Lección 3 — 📖 El Libro de las Tierras Vírgenes: el lenguaje de la Selva (5 min)

**Idea central:** El marco simbólico no es decoración: es el idioma con el que un niño de 7 años entiende la lealtad, el respeto y el cuidado.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura (Variante B, preparación previa a la cita): _"Cuando Andrés dice que Akela lo va a acompañar en su próxima aventura, no está fingiendo un juego de disfraces. Está usando el único idioma que a los 7 años le permite entender ideas grandes como la lealtad o el cuidado mutuo."_
2-bis. **`paragraph`** — Anclaje de las tres capas (H3, 22/11/2026; ejemplo cotejado con la Guía §6.9, p. 30: marco = la fantasía que envuelve la vida de la Manada; fondo = las historias del Libro; ambiente = los relatos que dan sentido a las experiencias): _"Piénsalo con una reunión cualquiera: la Manada juega a que Bagheera la guía de noche por la selva. El aire de «hagamos como si…» que envuelve todo es la primera capa; que sea Bagheera, y no otro personaje, viene del libro; y la aventura de esa noche es el relato."_
3. **`info-box`** — Las tres capas del marco simbólico (Guía de Dirigente de Manada, Cap. 6.9, p. 30): _"En palabras simples: hay tres capas y vale la pena no mezclarlas. Según la Guía de Manada, el **marco simbólico** de la Manada es **La Fantasía** — el aire que envuelve todo lo que pasa aquí. El **fondo motivador** es **El Libro de las Tierras Vírgenes**: las historias de donde salen Akela, Baloo y Bagheera. Y el **ambiente de referencia** son los **relatos fantásticos** que le dan sentido a cada aventura. La Familia de Cachorros comparte contigo el marco y el libro; lo que cambia es el tipo de relato y los personajes que cada rama se reserva."_
4. **`heading` (nivel 3)** — _"Los personajes que enseñan sin dar discursos"_
5. **`method-grid`** — Personajes y elementos del marco simbólico (Guía de Dirigente de Manada, Cap. 6):
    - 🐺 **Akela** — la guía de la Manada, autoridad cercana y protectora.
    - 🐻 **Baloo** — enseña con paciencia, encarna el conocimiento compartido con calma.
    - 🐆 **Bagheera** — la astucia y la valentía serena.
    - 🧒 **Mowgli** — el niño que aprende de la Selva y se convierte en parte de ella.
6. **`paragraph`** — Función pedagógica: _"Personajes como Mowgli, Baloo, Bagheera y Akela enseñan a través de sus acciones, no de discursos. Los niños no memorizan una moraleja: la viven jugando a ser lobos."_ (Guía de Dirigente de Manada, Cap. 6.10, p. 30)
7. **`paragraph`** — Otros elementos simbólicos (Cap. 6.11), fundidos en un solo párrafo el 22/11/2026 (H3: antes eran heading + lista de 3 + párrafo): _"Además están **la Flor Roja** (el crecimiento y el paso a nuevas etapas), **el Cubil** (el espacio seguro de encuentro de la Manada) y **el Saludo** (respeto y pertenencia entre lobatos); y otros —el Libro de Oro, el Himno, un referente espiritual como San Francisco de Asís— que irás conociendo con la práctica. No hace falta memorizarlos hoy."_
10. **`heading` (nivel 3)** — _"La Ley y la Promesa se viven dentro de ese lenguaje"_
11. **`paragraph`** — La Ley de la Manada se inspira en la sociedad de lobos del Pueblo Libre de Seeonee, del Libro de las Tierras Vírgenes, donde la manada vive unida por el respeto, el orden y el cuidado mutuo bajo la guía de Akela. Está escrita en lenguaje sencillo, cercano a niños de 7 a 10 años.
12. **`policy-quote`** — Cita textual de la Ley de la Manada:
    - `text`: _"El Lobato: 1. Escucha y respeta a los demás. 2. Dice siempre la verdad. 3. Es alegre y buen amigo. 4. Comparte con su familia. 5. Ayuda a los demás con alegría. 6. Ama y protege la naturaleza. 7. Escucha y aprende con emoción."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 3.2.1 — Ley de la Manada, p. 16."
    - `label`: "📋 Ver la Ley de la Manada completa"
13. **`policy-quote`** — Cita textual de la Promesa:
    - `text`: _"Yo (nombre del aspirante a ser Lobato), prometo hacer siempre lo mejor, para cumplir mis deberes para con Dios y la Patria, hacer un favor a alguien cada día, y cumplir la Ley de la Manada."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 3.2.2 — Promesa, p. 16. (Existe una variante que sustituye \"para con Dios\" por \"para con mi espiritualidad\", para respetar e incluir distintas formas de vivir lo espiritual.)"
    - `label`: "📋 Ver la Promesa de la Manada"
14. **`info-box`** — Reformulación accesible: _"En palabras simples: la Promesa no es un examen que el lobato pasa una vez. Es un compromiso de intentarlo cada día — 'hacer siempre lo mejor', no 'hacerlo perfecto'. Tu trabajo como dirigente es que ese esfuerzo se sienta posible, no una meta inalcanzable."_

**Reflexión:** _"Elige uno de los siete puntos de la Ley de la Manada. Escribe un ejemplo concreto —con un lobato real o imaginado, en una situación real de tu unidad— donde ese punto de la Ley se vivió (o pudo haberse vivido) sin que nadie lo nombrara así."_

**Quiz (3 preguntas, sincronizado con el JSON el 22/11/2026):**

> **P1.** Una dirigente de la Familia de Cachorros te dice: «Ustedes en Manada tienen otro marco simbólico, el Libro de las Tierras Vírgenes; nosotros usamos La Fantasía». Según la lección, ¿qué le respondes?
>
> a) _Que tiene razón: cada rama tiene su marco, y el de la Manada es el Libro de las Tierras Vírgenes._
> b) _Que es al revés: las dos comparten el Libro como marco, y La Fantasía es solo el ambiente de la Familia._
> c) _Que las dos comparten La Fantasía como marco y el Libro como fondo; cambian los relatos y personajes._  ✅

> **P2.** Mateo, un «Lobezno» a punto de su Investidura, le mintió ayer a su seisena y te pregunta si todavía puede hacer la Promesa el domingo. Según la lección, ¿qué le dices?
>
> a) _Que la haga solo si antes le pide perdón a su seisena delante de la Manada, para que la Promesa valga._
> b) _Que la aplace hasta cumplir la Ley unas semanas seguidas, para que su Promesa tenga peso de verdad._
> c) _Que la haga: prometer es comprometerse a hacer siempre lo mejor cada día, no haber sido perfecto._  ✅

> **P3.** Quieres que tu Manada viva el punto 2 de la Ley («Dice siempre la verdad»). Según la lección, ¿cuál de estas propuestas usa mejor el marco simbólico?
>
> a) _Proponer un relato de Mowgli y cerrar con Akela explicando la moraleja, para que no quede ninguna duda._
> b) _Proponer un juego de la Selva donde los personajes actúan y la verdad se vive jugando, sin moraleja al final._  ✅
> c) _Leer el punto 2 de la Ley en el Círculo y pedir que cada seisena lo repita hasta que lo sepa de memoria._

**Logro:** "Hablo el idioma de la Selva".

---

### 4.5 Lección 4 — 🐺 Las Seisenas: todos aportan, todos crecen (5 min)

**Idea central:** En la Manada de 2026 las seisenas no tienen jefes fijos —el liderazgo rota— y todo lo que hace la Manada, también en seisenas, se revisa con un filtro de ocho letras: DURASLID.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura (Variante B): _"Si vienes de otra época del escultismo, o leíste una guía vieja, puede que esperes que cada seisena tenga un 'seisenero' fijo, elegido, con autoridad sobre los demás. La Guía de Dirigente de Manada 2026 es explícita en que eso ya no es el modelo."_
3. **`heading` (nivel 3)** — _"La seisena no fragmenta la Manada, la organiza"_
4. **`paragraph`** — Cuando la Manada se organiza en seisenas —pequeños grupos de aproximadamente seis lobatos— no se fragmenta ni se divide. Adopta una estructura que permite acompañar mejor a cada niño dentro de la experiencia común. La pertenencia real no está en la seisena: está en la Manada. La seisena ayuda a cuidar el bosque; la Manada es el bosque.
5. **`policy-quote`** — Cita textual sobre el liderazgo en la seisena:
    - `text`: _"En coherencia con esta visión, en la seisena no existen líderes fijos ni jerarquías rígidas entre los niños y las niñas. No se trata de crear pequeñas estructuras de poder, sino de ofrecer oportunidades para que todos desarrollen capacidades. […] Las funciones pueden rotar según la actividad, los intereses o la etapa de progresión."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 5.2 — Organización, 'Liderazgo: Todos Aportan, Todos Crecen', p. 26."
    - `label`: "📋 Ver el criterio oficial sobre liderazgo en la seisena"
6. **`info-box`** — Reformulación accesible: _"En palabras simples: nadie es 'el líder de la seisena' de forma permanente. Hoy Andrés propone el juego; la próxima semana otro lobato de su seisena reparte las tareas. Todos experimentan guiar y ser guiados."_
7. **`heading` (nivel 3)** — _"Aprender Haciendo, también en la seisena"_
8. **`paragraph`** — El Aprender Haciendo no es un lema decorativo: es la convicción de que el conocimiento no se recibe pasivamente, sino que se construye en la experiencia, la acción concreta y la reflexión que sigue a cada paso, a cada error y a cada descubrimiento. En la Manada esto se traduce en actividades que Andrés y su seisena viven, se equivocan, y de las que hablan después — no en explicaciones que escuchan sentados.
9. **`heading` (nivel 3)** — _"El filtro DURASLID"_
10. **`paragraph`** — Anclaje narrativo (H6 auditoría pedagógica): _"Antes de la próxima aventura de la seisena de Andrés, pásala por estas ocho letras:"_
11. **`list`** — Toda actividad de calidad en la Manada pasa por el filtro DURASLID (Cap. 4.3):
    - **D**esafiante — le exige algo, sin ser imposible.
    - **U**til — le deja una habilidad o aprendizaje real.
    - **R**ecompensante — el esfuerzo se siente valioso.
    - **A**tractiva — despierta el interés genuino.
    - **S**egura — física y emocionalmente.
    - **L**údica — se vive como juego, no como tarea.
    - **I**ncluyente — nadie se queda por fuera.
    - **D**iversa — varía en forma y ritmo.
12. **`info-box`** — Cierre operativo: _"Antes de tu próxima reunión, pasa la actividad que planeaste por las ocho letras de DURASLID. Si le faltan dos o tres, no la canceles — ajústala. El filtro no castiga, orienta."_

**Reflexión:** _"Piensa en la última vez que organizaste (o viste organizar) subgrupos en tu Manada. ¿Había un lobato fijo 'a cargo', o las funciones rotaban? Escribe cómo aplicarías el criterio 'todos aportan, todos crecen' la próxima vez."_

**Quiz (3 preguntas, sincronizado con el JSON el 22/11/2026):**

> **P1.** En el juego de pistas de hoy, una seisena le pide a Valeria que reparta las tareas, porque es la que mejor conoce el juego. ¿Qué haces?
>
> a) _Les pides que voten quién reparte, para que lo decida toda la seisena y no solo la que más sabe._
> b) _La dejas repartir hoy: que ella guíe esta vez es la rotación, y la próxima le toca otra función a otro._  ✅
> c) _Repartes tú las tareas esta vez, para que Valeria no termine siendo la jefa fija de la seisena._

> **P2.** Hace dos meses que cada reunión es el mismo juego de pistas, en el mismo salón, por seisenas y con la misma mecánica. A los lobatos aún les encanta y cada semana las pistas son más difíciles. Según DURASLID, ¿qué haces?
>
> a) _Lo reviso por Diversa: mantengo las pistas, pero cambio el escenario y el modo de jugarlas._  ✅
> b) _Lo reviso por Atractiva: tarde o temprano dejará de gustarles, así que lo cambio por otra actividad._
> c) _Lo reviso por Desafiante: si siempre es igual no les exige, así que subo la dificultad de las pistas._

> **P3.** Una dirigente quiere que las seisenas compitan todo el año por puntos, con gritos propios y sin mezclarse nunca, «para que cada lobato sienta que su seisena es su casa». Según la lección, ¿qué le dices?
>
> a) _Que va bien: la seisena es donde el lobato pertenece de verdad, y la Manada es el marco que las reúne._
> b) _Que cambie los puntos por un premio al lobato que más aporte a su seisena, para que nadie se quede quieto._
> c) _Que mezcle a veces las seisenas: el lobato es de la Manada entera y la seisena solo lo acompaña._  ✅

**Logro:** "Todos aportan, todos crecen".

---

### 4.6 Lección 5 — 🌳 El territorio de la selva: Naturaleza y Progresión (5 min)

**Idea central:** La progresión de un lobato se traza en seis Sendas sobre "el territorio de la selva", a su propio ritmo.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura (Variante B): _"El escultismo nació al aire libre, entre árboles y colinas, como una forma de aprender de la vida en la vida misma. En la Manada, la naturaleza no es un escenario de fondo: es maestra, refugio y espejo."_ (Guía de Dirigente de Manada, Cap. 7.1)
3. **`heading` (nivel 3)** — _"Por qué el aire libre es esencial en la Manada"_
4. **`paragraph`** — Un lobato que se adentra en el bosque, siente el crujir de las hojas o el olor a tierra húmeda después de la lluvia, está honrando el origen del escultismo. La naturaleza enseña exploración, autocuidado, vida en grupo y conciencia ambiental — habilidades que ninguna explicación en salón reemplaza. Y no hace falta un día perfecto: un lobato que ha caminado bajo la lluvia o ayudado a un compañero cansado vive lecciones que difícilmente olvida (Guía §7.2.3, p. 34).
5. **`heading` (nivel 3)** — _"El territorio de la selva: cómo se traza la progresión de Andrés"_
6. **`paragraph`** — La progresión personal en la Manada se representa como un territorio a recorrer: la selva. No es una carrera de insignias, es un mapa del crecimiento de cada lobato en las seis áreas de crecimiento, traducidas a un lenguaje que Andrés entiende.
7. **`method-grid`** — Las 6 Sendas de la progresión (una por área de crecimiento):
    - 🏃 **Senda del rastreador** (Corporalidad)
    - 🎨 **Senda de la imaginación** (Creatividad)
    - 💛 **Senda del corazón** (Afectividad)
    - 🧭 **Senda del buen lobo** (Carácter)
    - 🤝 **Senda de la unidad** (Sociabilidad)
    - 🌌 **Senda del eco del bosque** (Espiritualidad)
8. **`policy-quote`** — Cita textual del esquema de progresión:
    - `text`: _"Las sendas serán los siguientes: Corporalidad - Senda del rastreador; Creatividad - Senda de la imaginación; Afectividad - Senda del corazón; Carácter - Senda del buen lobo; Sociabilidad: - Senda de la unidad; Espiritualidad - Senda del eco del bosque."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 8.3 — El Esquema de Progresión en la Manada, p. 45."
    - `label`: "📋 Ver el esquema oficial de las seis Sendas"
9. **`info-box`** — Reformulación accesible: _"En palabras simples: cada vez que Andrés supera un reto en una de las seis Sendas —no necesariamente al mismo ritmo en todas— avanza en su territorio de la selva. La insignia máxima de la rama se llama Plenitud de la Selva. Cuando un lobato llega al nivel de Profundización —el más alto de los tres niveles de cada área— en las seis áreas, alcanza además la fase máxima: Lobo Cazador de la Selva."_
10. **`info-box`** — Cierre operativo: _"En el Curso 13 del Nivel 2 (Seguimiento de la Progresión Personal) vas a aprender las técnicas concretas para observar y registrar este avance. Hoy solo guarda el mapa: seis Sendas, un ritmo propio para cada lobato."_

**Reflexión:** _"Piensa en Andrés (o en un lobato real que acompañes). ¿En qué Senda dirías que está avanzando más rápido ahora mismo? ¿Y en cuál necesita más de tu acompañamiento? Nómbralas y escribe por qué."_

**Quiz (3 preguntas, sincronizado con el JSON el 22/11/2026):**

> **P1.** Andrés avanzó mucho en la Senda del rastreador y casi nada en la del corazón. Su dirigente propone no reconocerle el avance del rastreador hasta que nivele la otra, «para que crezca parejo». ¿Qué le dices?
>
> a) _Que lo reconozca ya: cada lobato lleva su propio paso, y una Senda puede ir delante de otra._  ✅
> b) _Que tiene sentido: la progresión es integral y una Senda no debe adelantarse a las demás._
> c) _Que lo reconozca, pero en la ceremonia de fin de año y junto con el resto de los lobatos de la Manada._

> **P2.** Este mes anotaste dos avances de Andrés: ya hace la caminata sin quedarse atrás y ahora le cuenta a la Manada cuando algo lo pone triste. Tu compañero los registró los dos en la Senda del rastreador. ¿Qué le dices?
>
> a) _Que está bien así: los dos se notaron en salidas, y la del rastreador recoge lo que pasa afuera._
> b) _Que la caminata está bien ahí, pero lo de contar su tristeza va en la Senda del corazón: es afectividad._  ✅
> c) _Que la caminata está bien ahí, pero lo de contar su tristeza va en la Senda de la unidad: es con la Manada._

> **P3.** Para el sábado de la salida al parque de siempre se anuncia llovizna, sin tormenta ni alerta. Un dirigente propone cambiarla por una charla en el salón sobre el bosque. ¿Qué le dices?
>
> a) _Que hagan la charla: con fotos y relatos de la Selva el bosque se puede enseñar igual de bien adentro._
> b) _Que la pasen a un sábado seco: una salida con lluvia se aprovecha poco y los lobatos se distraen._
> c) _Que salgan con impermeable: caminar bajo la llovizna también enseña, y el parque es seguro y conocido._  ✅

**Logro:** "Trazo las Sendas".

---

### 4.7 Lección 6 — 🦉 El Viejo Lobo: facilitador, no jefe (5 min)

**Idea central:** Ser Viejo Lobo es firmeza con ternura: sostener el espacio seguro sin decidir por ellos.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura (Variante B): _"Todo lo que viste hasta ahora —el marco simbólico, las seisenas sin jefes fijos, las seis Sendas— depende de una sola decisión tuya como adulto: ¿vas a dirigir la Manada, o vas a facilitarla?"_
3. **`heading` (nivel 3)** — _"El dirigente como facilitador, no como jefe"_
4. **`paragraph`** — El nombre simbólico que recibe el adulto en la Manada es **Viejo Lobo**. Su papel no es resolver todo por los niños, sino ofrecer las condiciones para que ellos marquen el rumbo: acompañar, mediar en conflictos —que son normales y parte del aprendizaje—, enseñar con el ejemplo y hacer que las normas sean claras.
5. **`policy-quote`** — Cita textual del rol del Viejo Lobo:
    - `text`: _"El Viejo Lobo ofrece las condiciones, pero el rumbo lo marcan ellos. En este contexto, el error deja de ser un fracaso para convertirse en una fuente valiosa de aprendizaje."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Capítulo 4 — Aprender Haciendo, p. 19."
    - `label`: "📋 Ver el rol del Viejo Lobo textual"
6. **`heading` (nivel 3)** — _"Firmeza con ternura"_
7. **`paragraph`** — Ser Viejo Lobo no es ser permisivo ni distante. La Guía habla de **firmeza con ternura**: límites claros, sostenidos con calidez: sin gritos, sin humillaciones ni comparaciones, pero tampoco sin estructura — normas claras y conocidas, y consecuencias coherentes. Un Viejo Lobo coherente y cercano crea el entorno seguro donde un lobato puede intentarlo, fallar, y volver a intentarlo sin miedo.
8. **`heading` (nivel 3)** — _"El Consejo de Roca: donde los lobatos deciden de verdad"_
9. **`paragraph`** — El Involucramiento Comunitario en la Manada no significa que los lobatos asuman responsabilidades de adultos, sino que tengan oportunidades reales de opinar, decidir y actuar según su edad. El espacio formal donde esto ocurre es el **Consejo de Roca**: allí los lobatos comparten opiniones, proponen actividades y evalúan lo vivido, con Andrés y su seisena participando de verdad, no solo escuchando.
10. **`info-box`** — Reformulación accesible: _"En palabras simples: si en tu Manada las decisiones importantes las tomas siempre tú, no hay Consejo de Roca — hay una clase con disfraz de lobo. El objetivo no es que los lobatos dirijan la Manada; es que experimenten, de verdad, su capacidad de aportar."_

**Reflexión:** _"Recuerda una decisión reciente en tu Manada que tomaste tú solo, por rapidez o por costumbre, y que pudo haberse llevado al Consejo de Roca. ¿Qué hubiera cambiado si los lobatos hubieran participado en decidirla?"_

**Quiz (3 preguntas, sincronizado con el JSON el 22/11/2026):**

> **P1.** Una seisena organiza un juego, las reglas quedan confusas y el juego se desarma. Nadie corre peligro. Según la lección, ¿qué hace el Viejo Lobo?
>
> a) _Detiene el juego y les dicta las reglas correctas, para que no pierdan la tarde en un juego que no funciona._
> b) _Deja que el juego se desarme y, después, conversa con la seisena sobre qué pasó y qué cambiarían._  ✅
> c) _Deja que sigan un rato y luego lo reorganiza él, explicándoles con calma qué falló y por qué._

> **P2.** En pleno juego, un lobato le pega una y otra vez a un compañero de su seisena. Según la lección, ¿qué hace el Viejo Lobo?
>
> a) _Detiene el juego, protege al compañero, le recuerda la norma que ya conocen y aplica la consecuencia acordada._  ✅
> b) _Detiene el juego, protege al compañero y hace que el lobato pida perdón frente a toda la Manada reunida._
> c) _Detiene el juego, protege al compañero y lo saca el resto de la tarde, aunque nadie les dijo antes la norma._

> **P3.** Un Viejo Lobo entusiasta le entrega al Consejo de Roca el presupuesto del semestre y la logística del campamento: transporte y permisos. Según la lección, ¿qué pasa?
>
> a) _Va demasiado lejos: en el Consejo deciden según su edad; presupuesto y permisos son tareas de adultos._  ✅
> b) _Está bien: si en el Consejo de Roca deciden de verdad, también deben decidir presupuesto y logística._
> c) _Va bien, mientras el Viejo Lobo revise cada decisión antes de aplicarla, para cuidar la seguridad._

**Logro:** "Soy Viejo Lobo".

---

### 4.8 Lección 7 — 🌙 Ceremonias, el Círculo de Roca y el Gran Salto (4 min)

**Idea central:** Las ceremonias de la Manada —incluida su despedida, el Gran Salto— sostienen el marco simbólico con solemnidad y alegría a la vez.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura (Variante B): _"Ya viste cómo entra un lobato a la Manada (la Ceremonia de Paso) y cómo se organiza semana a semana (seisenas, Consejo de Roca). Falta ver cómo la Manada marca sus momentos importantes — y cómo, algún día, se despide de Andrés."_
3. **`heading` (nivel 3)** — _"El círculo: la única formación de la Manada"_
4. **`paragraph`** — A diferencia de otras ramas, la Manada tiene una sola formación: el círculo, porque representa la unidad y requiere la presencia de todos. No tiene principio ni fin. Se forma en dos pasos: Círculo de Roca y Círculo de Parada — y un detalle que sorprende a muchos dirigentes nuevos: **la Manada nunca se llama con silbato**. El llamado es siempre por voz, reuniendo a los lobatos alrededor de quien convoca.
5. **`policy-quote`** — Cita textual sobre el llamado sin silbato:
    - `text`: _"…proceden a tomar su lugar para formar el Círculo de Roca alrededor del Dirigente que hace dicho llamado. […] nunca serán llamados con silbatos ni mucho menos cuernos o pitos, ya que estos hacen parte de otras ramas."_
    - `source`: "Manual de Presentación y Buen Orden de la Manada (DNPJ), sección sobre el llamado y la formación de Manada, p. 6."
    - `label`: "📋 Ver el procedimiento oficial del llamado"
6. **`info-box`** — Contraste de términos (H9 auditoría pedagógica 2026-11): _"Ojo con el parecido: el Círculo de Roca es la forma de reunirse; el Consejo de Roca (Lección 6) es el espacio donde los lobatos deciden."_
7. **`heading` (nivel 3)** — _"Las ceremonias que marcan el camino"_
8. **`paragraph`** — Anclaje narrativo (H6 auditoría pedagógica): _"Además de la Ceremonia de Paso que ya vivió Andrés, la Manada marca otros momentos con ceremonias propias:"_
9. **`list`** — Ceremonias de la Manada (Cap. 6.12):
    - **Ceremonia de Paso** — de Familia a Manada (ya vista en la Lección 2).
    - **Ceremonia de Investidura** — es cuando el lobato hace su Promesa y asume su compromiso con símbolos y gestos sencillos. Para el niño que llegó de fuera, además, cierra su etapa de «Lobezno».
    - **Ceremonia de Progresión Personal** — reconoce el crecimiento y esfuerzo del lobato en sus Sendas, sin comparar con los demás.
    - **El Gran Clamor** — más que una ceremonia en sí, es un elemento ceremonial que refuerza la unidad y da fuerza solemne a momentos como la Investidura y el Gran Salto.
10. **`heading` (nivel 3)** — _"El Gran Salto: la despedida de Andrés"_
11. **`paragraph`** — Alrededor de los 10–11 años, cuando el lobato ha recorrido su camino en la Manada, llega el **Gran Salto**: la ceremonia que marca su paso a la siguiente rama, la Tropa. No es solo un trámite administrativo — reconoce el camino recorrido y anima a asumir nuevos retos, cerrando una etapa con gratitud y abriendo otra con ilusión.
12. **`policy-quote`** — Cita textual del Gran Salto:
    - `text`: _"Gran Salto: Marca el paso del Lobato a la siguiente rama. Es una ceremonia cargada de significado, que reconoce el camino recorrido en la Manada y anima a asumir nuevos retos, cerrando una etapa con gratitud y abriendo otra con ilusión."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 6.12 — Ceremonias en la Manada, p. 32."
    - `label`: "📋 Ver la descripción oficial del Gran Salto"
13. **`info-box`** — Cierre: _"El día que Andrés haga su Gran Salto, la Manada no lo está 'perdiendo'. Le está entregando a la Tropa un scout que ya sabe lo que es pertenecer, esforzarse y ser escuchado. Ese es tu trabajo de esos años, resumido en una ceremonia."_

**Reflexión:** _"Piensa en el próximo lobato de tu Manada que va a hacer el Gran Salto (sin su nombre: por su edad o su seisena). Escribe un momento concreto de este año que te gustaría reconocerle en su ceremonia —un esfuerzo, una vez que lo escucharon en el Consejo de Roca— y qué vas a hacer de aquí a entonces para que su paso no sea solo un cambio de pañoleta."_

**Quiz (3 preguntas, sincronizado con el JSON el 22/11/2026):**

> **P1.** Termina el juego libre y necesitas reunir a la Manada en el Círculo de Roca. ¿Qué haces?
>
> a) _Esperas a que terminen el juego solos, para no cortar lo que decidieron._
> b) _Das un toque corto de silbato, que al aire libre se oye mejor que la voz._
> c) _Los llamas con la voz, y los lobatos forman el círculo a tu alrededor._  ✅

> **P2.** Una dirigente prepara la Ceremonia de Progresión: va a nombrar, uno por uno, el reto que cada lobato superó este año en sus Sendas. ¿Qué le dices?
>
> a) _Que no nombre retos: que entregue a todos la misma insignia, para que ninguno se sienta menos que otro._
> b) _Que mejor lo haga a solas con cada uno, porque nombrarlos delante de la Manada ya es compararlos._
> c) _Que va bien: reconoce el esfuerzo de cada lobato en su propio camino, sin ponerlo frente a otro._  ✅

> **P3.** En un Grupo, los lobatos que cumplen 11 años pasan a la Tropa en la primera reunión del año, con un cambio de pañoleta y un aviso a sus familias. Según la lección, ¿qué falta?
>
> a) _Una despedida que le reconozca a cada lobato lo que vivió en la Manada antes de dar el paso._  ✅
> b) _El Gran Clamor: la ceremonia propia con la que la Manada despide a los lobatos que pasan a la Tropa._
> c) _Nada de fondo: el paso de rama ya queda marcado con el cambio de pañoleta y el aviso._

**Logro:** "Sostengo el Círculo de Roca".

---

### 4.9 Lección 8 — ✍️ Tu primer paso como Viejo Lobo (3 min)

**Idea central:** Saber sin actuar no transforma; el primer paso es chico, concreto y tuyo.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura: _"Recorriste con Andrés su llegada, su idioma simbólico, su seisena, sus Sendas, tu rol como Viejo Lobo y las ceremonias que van a marcar su camino hasta el Gran Salto. Antes de cerrar, convierte esto en una acción concreta para tu próxima reunión."_
3. **`heading` (nivel 3)** — _"Un compromiso chico, concreto y tuyo"_
4. **`paragraph`** — Plantilla (siguiendo el patrón del Curso 1): _"En mi próxima reunión de Manada, voy a __________ (algo que muestre que eres facilitador, no jefe — por ejemplo, llevar una decisión al Consejo de Roca, o dejar que una seisena rote quién propone el juego). La señal de que se cumplió será __________ (algo observable, no una intención)."_
5. **`mission-box`** — _"No prometas reorganizar toda la Manada. Promete una sola decisión que hoy tomas tú y que la próxima semana la tome —o la proponga— un lobato."_
6. **`heading` (nivel 3)** — _"Lo que viene"_
7. **`list`** — Anuncio de los próximos cursos disponibles del Nivel 2:
    - 🛠️ **Curso 13** — Seguimiento de la Progresión Personal: las técnicas para observar y registrar el avance por las Sendas. *(Ya está disponible.)*
    - 📋 **Curso 14** — Planeación de Reuniones y Oportunidades de Aprendizaje: cómo diseñar la próxima reunión con DURASLID y los 8 elementos. *(Ya está disponible.)*
    - 🎯 **Curso 15** — Ciclo de Programa con ABP: cómo la Manada decide y ejecuta sus propios proyectos. *(Ya está disponible.)*
    - 🐻⚜️🧗🏔️ **Cursos 9, 10, 11 y 12** — las guías de las otras 4 ramas: Familia (9), Tropa (10), Comunidad (11) y Clan (12), si acompañas o vas a acompañar más de una. *(Las cuatro ya están publicadas.)*
8. **`info-box`** — Despedida: _"Tú no mandas en la Manada. Le ofreces el territorio, el símbolo, la confianza y unos límites claros — y el rumbo lo marcan ellos. Bienvenido, Viejo Lobo."_

**Reflexión:** _"Sin nombres: ¿qué tipo de decisión vas a dejar de tomar tú —un juego, una regla, una salida…— y a quién se la pasas: al Consejo de Roca o a una seisena? El compromiso completo escríbelo en el recuadro «Compromiso Personal» que aparece junto a tu certificado: ese se queda en tu navegador."_

**Compromiso Personal** (`commitmentBox`, se queda en el navegador; corrección de privacidad del 02-oct-2026, ADR-117): _"Escribe tu primer paso como Viejo Lobo con la plantilla de la Lección 8: qué vas a hacer en la próxima reunión de Manada y cuál será la señal de que se cumplió."_ — placeholder _"En mi próxima reunión de Manada voy a … La señal de que se cumplió será …"_

**Quiz (3 preguntas, sincronizado con el JSON el 22/11/2026):**

> **P1.** ¿Cuál de estos compromisos cumple mejor la plantilla del curso: chico, de facilitador y con una señal observable?
>
> a) _Voy a reorganizar todas las seisenas para que roten funciones desde ya; la señal: un cuadro de turnos._
> b) _Voy a escuchar más a los lobatos en la próxima reunión; la señal: sentir que participaron más que antes._
> c) _Voy a llevar al Consejo de Roca la elección del próximo juego; la señal: que un lobato lo proponga._  ✅

> **P2.** Un compañero escribe su compromiso: «En mi próxima reunión de Manada voy a dejar que los lobatos decidan todo». Según el curso, ¿qué le sugieres?
>
> a) _Que elija una cosa que hoy decide él, como el juego de cierre, y se la pase a los lobatos._  ✅
> b) _Que lo deje así: dejarles todo a ellos es justo lo que pide ser facilitador y no jefe._
> c) _Que lo deje igual y le sume una señal: que los lobatos salgan más contentos que de costumbre._

> **P3.** Un papá le dice al nuevo Viejo Lobo: «Usted es el que manda aquí, así que decida usted qué hacen hoy». Según el curso, ¿qué le responde?
>
> a) _Que en la Manada nadie manda: los lobatos dirigen la reunión y él solo vigila que estén seguros._
> b) _Que él cuida las normas y la seguridad, y dentro de eso los lobatos proponen qué juegan hoy._  ✅
> c) _Que no manda nadie: hoy todo lo decide el Consejo de Roca, incluso qué es seguro y qué no._

**Logro al completar:** "Guardián de la Selva" (logro final del curso, `unlockOnModule: -1`).

---

## 5. Logros (achievements)

| ID | Nombre | Emoji | Desbloqueo |
|---|---|---|---|
| `achievement-1` | Acompaño su llegada | 🚪 | Al completar Lección 2 |
| `achievement-2` | Hablo el idioma de la Selva | 📖 | Al completar Lección 3 |
| `achievement-3` | Todos aportan, todos crecen | 🐺 | Al completar Lección 4 |
| `achievement-4` | Trazo las Sendas | 🌳 | Al completar Lección 5 |
| `achievement-5` | Soy Viejo Lobo | 🦉 | Al completar Lección 6 |
| `achievement-6` | Sostengo el Círculo de Roca | 🌙 | Al completar Lección 7 |
| `achievement-7` | Guardián de la Selva | 🐺✨ | Al completar el curso (`unlockOnModule: -1`) |

_Excepción documentada (8 lecciones → 7+1 logros, igual que el Curso 04 del Nivel 1): justificada por ser el primer curso de rama, que cubre los 8 elementos del Método aplicados a la Manada más grupo natural, marco simbólico y transiciones._

---

## 6. Conexiones cross-course

### 6.1 Hacia atrás (dentro de la Línea PJ)

- **L2 (Ceremonia de Paso) ← Curso 6:** retoma el compromiso escrito en el Curso 6 (*Mi Compromiso con el Programa de Jóvenes*), ahora aterrizado a la rama concreta que el adulto declaró.
- **L4 (DURASLID) ← Curso 1 (Mito 3):** el Curso 1 introdujo DURASLID como filtro contra "hay que entretenerlos"; aquí se aplica en profundidad.
- **L5 (seis Sendas) ← Curso 1 (L5) y Curso 5:** el Curso 1 presentó panorámicamente las 6 áreas de crecimiento; el Curso 5 las aterrizó al Modelo de Aplicación; aquí se convierten en las seis Sendas concretas de la Manada.
- **Recomendado, no prerrequisito ← Curso 25 (A Salvo del Peligro):** cuando se construya, se recomienda en la ficha del curso; no bloquea el acceso (ver `CLAUDE.md` §5.3, ADR-019).

### 6.2 Hacia adelante (dentro del Nivel 2)

- **L5 → Curso 13 (Seguimiento de la Progresión Personal):** anuncia explícitamente las técnicas de observación y registro de las Sendas.
- **L4 → Curso 14 (Planeación de Reuniones y OdA):** anuncia el diseño de reuniones con DURASLID y los 8 elementos.
- **L8 → Curso 15 (Ciclo de Programa con ABP):** el Consejo de Roca y la participación real de los lobatos anticipan cómo la Manada decide su propio ciclo de programa.
- **L8 → Cursos 9, 10, 11 y 12:** anuncia las guías de las otras 4 ramas para dirigentes que acompañan más de una.
- **Curso 25 (A Salvo del Peligro):** cuando se construya, debe referenciar el ciclo de programa y las ceremonias de este curso como contexto de aplicación (transporte, pernoctas, protocolo de actividades en la Manada).

### 6.3 Cross-línea

- El personaje narrativo Andrés puede referenciarse en el Curso 16 (Jefe de Rama) como caso de seguimiento longitudinal.
- El "Consejo de Roca" conecta conceptualmente con el Curso 8 de Desarrollo Institucional (Plan de Grupo): ambos enseñan toma de decisiones colectiva, a escalas distintas.

---

## 7. Tipos de sección utilizados

| Tipo | Lecciones donde aparece |
|---|---|
| `info-box` | L1–L8 (todas) |
| `paragraph` | Todas |
| `heading` (nivel 3) | L2, L3, L4, L5, L6, L7, L8 |
| `list` | L1, L3, L5 (implícito en method-grid), L7, L8 |
| `method-grid` | L2, L3, L5 |
| `mission-box` | L1, L8 |
| `policy-quote` | L2, L3 (×2), L4, L5, L6, L7 (×2) |
| `reflection` | L2–L8 (excepto L1 intro) |
| `quiz` | L2–L8 (excepto L1 intro) |

**No requiere ningún tipo de sección nuevo** — todos los tipos ya están soportados por `engine.js`. El curso puede construirse sin tocar el motor.

---

## 8. Multimedia requerido

| Activo | Tipo | Estado | Observación |
|---|---|---|---|
| Imagen de portada del curso | PNG | Por crear | Paleta de la línea PJ (cian #00afef) + un tono cálido/tierra propio de la rama Manada, sugerido en la Guía (marrones/verdes de la Selva). |
| Iconos del `method-grid` (L2, L3, L5) | Emoji | Listo | Se renderizan con emoji en el motor actual. |
| Video introductorio | MP4 (opcional) | Por decidir | Igual que el Curso 1: lanzar sin video en la primera versión; evaluar tras el piloto. |

---

## 9. Validación contra el marco metodológico

| Criterio del MARCO-METODOLOGICO-PEDAGOGICO | Cumplimiento |
|---|---|
| Curso entre 20 y 40 min | ✅ ~38 min (excepción documentada por centralidad, igual que Curso 04) |
| Lecciones de 3–8 min, óptimo 5–7 | ✅ rango 3–5 min |
| Cada lección termina independiente | ✅ |
| Lenguaje conversacional, tutea | ✅ |
| Citas oficiales plegables (`policy-quote`) | ✅ 8 citas distribuidas en L2, L3 (×2), L4, L5, L6, L7 (×2) — dentro del límite de máximo 2 por lección para citas contrastantes |
| Reflexión personal por lección | ✅ excepto intro, todas fuerzan un caso concreto (Andrés o un lobato real) |
| Mini-quiz de 3 preguntas, con distractor = idea vieja | ✅ en las 7 lecciones de contenido; desde el 22/11/2026 la correcta no cae siempre en el punto medio entre exceso y defecto (ADR-148) |
| 4–6 logros + 1 final | ⚠️ Excepción documentada: 7 + 1 (igual justificación que Curso 04) |
| Lección 1 marcada `isIntro: true` sin quiz | ✅ |
| Patrón 6.2 (anti-definición + reformulación) | **Variante B (narrativa/contextual)** en todas las lecciones con cita — el contenido es más narrativo-doctrinal que técnico-burocrático (Ley y Promesa están redactadas para niños de 7 años, no requieren "traducción" adicional); cada cita se antecede de contexto narrativo con Andrés y se cierra con reformulación accesible. |
| Conexión cross-course | ✅ hacia atrás (Cursos 1, 5, 6) y hacia adelante (Cursos 13, 14, 15, y resto de ramas) |
| Las 3 exigencias propias de PJ (DURASLID, educación por el amor, alianza joven-adulto) | ✅ DURASLID explícito en L4; "firmeza con ternura" y "el error como aprendizaje, no fracaso" en L6 encarnan la educación por el amor; Consejo de Roca en L6 encarna la alianza joven-adulto |
| Riesgo "leer la guía en voz alta" (sección 8.3 de CREAR-CURSO.md) | ✅ mitigado con protagonista narrativo (Andrés) que hila las 8 lecciones |
| Riesgo "marco simbólico como decoración" | ✅ mitigado: L3 dedica la lección completa a tratarlo como idioma pedagógico, no ornamento, con cita explícita advirtiendo este error |
| Riesgo "seisenero fijo" (terminología obsoleta) | ✅ corregido explícitamente en L4 con cita textual de la Guía 2026 — ningún lobato tiene liderazgo fijo |

---

## 10. Próximos pasos

1. ~~Revisar este diseño con el dueño del proyecto~~ ✅
2. ~~Generar el JSON del curso~~ ✅
3. ~~Build HTML~~ ✅
4. ~~Generar preview PDF y revisar visualmente~~ ✅
5. ~~Auditoría doctrinal~~ ✅ APTO · ~~Auditoría pedagógica~~ ✅ APTO · ~~Auditoría funcional (suite propia de la línea)~~ ✅ suite construida y en verde
6. **Sin gate ni piloto obligatorio** (decisión 11-jul-2026, `CLAUDE.md` §5.3 y §5.4, `DECISIONES.md` ADR-019): las 3 auditorías automatizadas reemplazan al piloto humano como compuerta de calidad para este lanzamiento.
7. **Pendiente para publicar:** sumar `rama-manada-lobatos` al catálogo de `PRUEBAS-E2E` (fallback de `cursos.js` + lista de `pruebas-e2e.yml`), pasar `status` a `"active"` en `cursos.json`, actualizar `coursesActive` en `PORTAL-ADULTOS-ASC/lineas.json`, commit + push + verificar en producción.
8. **Ajustar y replicar** el patrón a los Cursos 7 (Familia), 9 (Tropa), 10 (Comunidad) y 11 (Clan).

---

_Documento de diseño del Curso 8, versión inicial — 11 de julio de 2026. Redactado directamente por Claude Code (excepción al flujo Cowork↔Claude Code documentada en CREAR-CURSO.md §1, por decisión explícita del dueño del proyecto en esta sesión). Validado contra la Guía de Dirigente de Manada (Scouts de Colombia, DNPJ 2026, 69 pp.) y el Manual de Presentación y Buen Orden de la Manada (DNPJ), con citas textuales verificadas por extracción directa del PDF fuente. Reutiliza y es consistente con los 5 conceptos de Manada ya auditados en la app PROGRAMA SCOUT (`manada-lobatos`, `marco-simbolico-manada`, `grupos-naturales-manada`, `progresion-manada`, `dirigente-manada`)._
