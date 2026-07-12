# Diseño del Curso 8 — 🐺 Rama Manada (Lobatos)

**Línea:** Programa de Jóvenes · **Nivel:** 2 (Profundización por rama y práctica pedagógica) · **Posición:** Curso 8 de 8 del Nivel 2 (7–14), primero en construirse.

> Vertical slice del Nivel 2. Elegido como primer curso de rama por tener el material fuente más completo (Guía de Dirigente de Manada 2026, 69 pp. + Manual de Presentación y Buen Orden de la Manada) y por ser la rama-patrón ya auditada en la app complementaria PROGRAMA SCOUT. Tras pilotaje, se replica el patrón a los Cursos 7, 9, 10 y 11 (las otras 4 ramas).
>
> ⚠️ **Nota de gateo pendiente:** según CLAUDE.md §5.3 y CREAR-CURSO.md §5.D, los Cursos 7–14 deberían bloquearse hasta que el adulto complete el Curso 25 (A Salvo del Peligro, habilitante). **El Curso 25 todavía no está construido** (no tiene carpeta ni JSON en el repo). Este curso se construye y pilotea igualmente como prueba de concepto del Nivel 2, pero **no debe marcarse `status: "active"` en `cursos.json` ni publicarse sin gate real** hasta que el Curso 25 exista y el flag `aSalvoCompleted` esté implementado. Ver sección 10.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `rama-manada-lobatos` |
| Título | Rama Manada (Lobatos) |
| Subtítulo | Formación de Adultos Voluntarios — Asociación Scouts de Colombia |
| Icono | 🐺 |
| Duración | ~35 min |
| Lecciones de contenido | 7 + intro + certificado (8 en total) |
| Audiencia primaria | Dirigentes que acompañan (o van a acompañar) la rama Manada, y Asistentes de la unidad (7–10 años). |
| Pre-requisitos | Nivel 1 completo (Cursos 1–6) y Curso 25 — A Salvo del Peligro (habilitante). *Mientras el Curso 25 no exista, este prerrequisito se muestra como recomendación, no como bloqueo técnico — ver nota de gateo arriba.* |
| Logro final | "Guardián de la Selva" |

---

## 2. Objetivos del curso

Al completar este curso, el dirigente:

1. **Reconoce** las características propias del niño y la niña de 7 a 10 años (cuerpo en movimiento, mente curiosa, corazón sensible, fantasía como lenguaje) y por qué determinan todo el diseño de la rama.
2. **Recita y explica** la Ley y la Promesa de la Manada en el lenguaje sencillo en que están escritas, y las conecta con los Principios y Virtudes que las sostienen.
3. **Usa el marco simbólico** de El Libro de las Tierras Vírgenes (Akela, Baloo, Bagheera, la Flor Roja, el Cubil) como lenguaje pedagógico principal, no como decoración.
4. **Aplica DURASLID** al diseño de una actividad y organiza la Manada en seisenas sin caer en jerarquías fijas ni "seiseneros" permanentes.
5. **Ubica** la Naturaleza y la Progresión Personal (territorio de la selva, seis Sendas) en el acompañamiento cotidiano de un lobato concreto.
6. **Adopta** el rol de Viejo Lobo — facilitador, no jefe — y reconoce el Consejo de Roca, las ceremonias de la Manada y el Gran Salto como los momentos donde ese rol se hace visible.

---

## 3. Hook pedagógico (la idea poderosa que sostiene el curso)

> **"Tú no diriges la Manada. Le ofreces el territorio, el símbolo y la confianza — y el rumbo lo marcan ellos."**

Parafrasea directamente a la Guía de Dirigente de Manada 2026: *"El Viejo Lobo ofrece las condiciones, pero el rumbo lo marcan ellos. En este contexto, el error deja de ser un fracaso para convertirse en una fuente valiosa de aprendizaje."* (p. 19). Se enuncia explícitamente en la Lección 6 y se referencia en las Lecciones 2, 4 y 8. Su función es contradecir el supuesto de que el dirigente de Manada es quien "pone orden y dirige el juego", y reemplazarlo por la idea de que su trabajo es sostener las condiciones (símbolo, seguridad, cariño) para que el lobato decida, se equivoque y crezca.

---

## 4. Estructura de lecciones

### 4.1 Mapa general

| # | Lección | Duración | Idea central | Logro al completar |
|---|---|---|---|---|
| 1 | 🐾 Bienvenida a la Manada | 3 min | Vas a acompañar a un niño o niña de 7 a 10 años en la etapa donde la fantasía es el lenguaje que mejor entienden. | Entré a la Selva |
| 2 | 🚪 Quién es un Lobato y cómo llega a la Manada | 5 min | El lobato de 7 a 10 años tiene un cuerpo que no para, una mente curiosa y un corazón sensible — y llega a la Manada por una ceremonia, no de golpe. | Acompaño su llegada |
| 3 | 📖 El Libro de las Tierras Vírgenes: el lenguaje de la Selva | 5 min | El marco simbólico no es decoración: es el idioma con el que un niño de 7 años entiende la lealtad, el respeto y el cuidado. | Hablo el idioma de la Selva |
| 4 | 🐺 Las Seisenas: todos aportan, todos crecen | 5 min | En la Manada de 2026 las seisenas no tienen jefes fijos: el liderazgo rota para que todos vivan guiar y ser guiados. | Todos aportan, todos crecen |
| 5 | 🌳 El territorio de la selva: Naturaleza y Progresión | 5 min | La progresión de un lobato se traza en seis Sendas sobre "el territorio de la selva", a su propio ritmo. | Trazo las Sendas |
| 6 | 🦉 El Viejo Lobo: facilitador, no jefe | 5 min | Ser Viejo Lobo es firmeza con ternura: sostener el espacio seguro sin decidir por ellos. | Soy Viejo Lobo |
| 7 | 🌙 Ceremonias, el Círculo de Roca y el Gran Salto | 4 min | Las ceremonias de la Manada —incluida su despedida, el Gran Salto— sostienen el marco simbólico con solemnidad y alegría a la vez. | Sostengo el Círculo de Roca |
| 8 | ✍️ Tu primer paso como Viejo Lobo | 3 min | Saber sin actuar no transforma; el primer paso es chico, concreto y tuyo. | Guardián de la Selva (final) |

**Total estimado: ~35 min.** Excede levemente el rango óptimo de 20–30 min de un curso estándar (ver Curso 1), justificado —igual que el Curso 4 del Nivel 1— por la centralidad del contenido: es el primer curso de rama del Nivel 2 y cubre los 8 elementos del Método aplicados a una rama completa, más grupo natural, marco simbólico y transiciones de entrada/salida. Documentado como excepción en la sección 9.

---

### 4.2 Lección 1 — 🐾 Bienvenida a la Manada (3 min, `isIntro: true`)

**Idea central:** Vas a acompañar a un niño o niña de 7 a 10 años en la etapa donde la fantasía es el lenguaje que mejor entienden.

**Secciones (en orden):**

1. **`info-box`** — Tiempo estimado (~35 min) y promesa concreta: _"Al final de este curso vas a poder hablar el idioma de la Selva, organizar tu Manada en seisenas sin jerarquías fijas, acompañar la progresión de un lobato por sus seis Sendas, y entender qué significa ser Viejo Lobo: facilitador, no jefe."_
2. **`paragraph`** — Presentación del protagonista narrativo del curso: _"Vas a conocer a Andrés. Tiene 7 años, acaba de cruzar la Ceremonia de Paso desde la Familia, y en tres años va a hacer su Gran Salto hacia la Tropa. En este curso vas a acompañar su viaje por la Manada — y vas a entender, lección a lección, qué necesita de ti en cada tramo."_
3. **`paragraph`** — Tensión del hook, adelantada (H4 auditoría pedagógica): _"Es fácil pensar que ser Viejo Lobo es 'dirigir el juego': decidir qué hacen, cómo lo hacen y cuándo. A lo largo de este curso vas a ver por qué esa idea, aunque bienintencionada, le quita a Andrés justamente lo que la Manada existe para darle: la oportunidad de decidir, equivocarse y crecer."_
4. **`heading` (nivel 3)** — _"Lo que vas a vivir en este curso"_
5. **`list`** — Las 6 ideas centrales que verá (una por lección 2–7):
    - Quién es un lobato de 7 a 10 años y cómo llega a la Manada.
    - El Libro de las Tierras Vírgenes como idioma, no como disfraz.
    - Las seisenas: cómo se organizan sin líderes fijos.
    - El territorio de la selva y las seis Sendas de la progresión.
    - Qué significa ser Viejo Lobo: facilitador, no jefe.
    - Las ceremonias de la Manada y el Gran Salto hacia la Tropa.
6. **`mission-box`** — Invitación a pensar en un lobato real (o imaginado, si aún no tiene Manada) mientras avanza en las reflexiones.

**Reflexión:** ninguna en la intro (patrón establecido en el Curso 1).

**Quiz:** ninguno.

**Logro al completar:** "Entré a la Selva".

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
4. **`paragraph`** — Aplicación a Andrés: _"Cuando Andrés llegó a su primera reunión, no se sentó a escuchar una explicación de 10 minutos sobre qué es el escultismo. Se puso a cuatro patas a aullar con su seisena. Ese aullido —no la explicación— fue su primera lección de pertenencia."_
5. **`heading` (nivel 3)** — _"Cómo llega un niño a la Manada: la Ceremonia de Paso"_
6. **`paragraph`** — Explicación de la transición de entrada: un cachorro de Familia no "se pasa" de un día para otro. Hay una **Ceremonia de Paso de Familia a Manada**, en la que es presentado a Akela por el Jefe de Grupo y acogido afectuosamente en la Manada. Es el primer ritual de pertenencia que va a vivir Andrés, y marca simbólicamente que entra a un territorio nuevo: la Selva.
7. **`policy-quote`** — Cita textual de la Guía de Dirigente de Manada:
    - `text`: _"Ceremonia de Paso de Familia a Manada: Es el momento en que un cachorro pasa a la manada, es presentado a Akela por el Jefe de Grupo y acogido afectuosamente en la Manada."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 6.12 — Ceremonias en la Manada, p. 32."
    - `label`: "📋 Ver la ceremonia de entrada textual"
8. **`info-box`** — Reformulación accesible: _"En palabras simples: la Manada no empieza en la primera reunión, empieza en un ritual. Si tu grupo no está haciendo esa ceremonia, el lobato nuevo está entrando por la puerta de atrás en vez de por el portón."_

**Reflexión:** _"Piensa en cómo llegó a tu Manada el último lobato nuevo (o cómo imaginas que debería llegar). ¿Hubo un momento reconocible de bienvenida, o simplemente 'empezó a venir'? Escribe qué harías igual y qué cambiarías."_

**Quiz (2 preguntas):**

> **P1.** Un lobato lleva 10 minutos sentado escuchando una explicación sobre el escultismo y empieza a inquietarse. Según esta lección, ¿qué está pasando?
>
> a) _Es un lobato indisciplinado que necesita aprender a poner atención._
> b) _Su cuerpo necesita movimiento para aprender — la quietud prolongada no es su vía natural de aprendizaje._  ✅
> c) _Necesita que le expliquen el tema de forma más abstracta y detallada._

> **P2.** Un lobato nuevo llega y el dirigente decide presentarlo rápido al grupo un sábado cualquiera, "para no perder tiempo de reunión". Según esta lección, ¿qué le falta a esa bienvenida?
>
> a) _Nada: lo importante es que ya esté jugando con el resto._
> b) _Le falta un ritual reconocible — la Ceremonia de Paso — donde se le presente formalmente y la Manada lo acoja; sin eso, entra "por la puerta de atrás"._  ✅
> c) _Le falta esperar unas semanas para ver si se adapta antes de aceptarlo del todo._

**Logro:** "Acompaño su llegada".

---

### 4.4 Lección 3 — 📖 El Libro de las Tierras Vírgenes: el lenguaje de la Selva (5 min)

**Idea central:** El marco simbólico no es decoración: es el idioma con el que un niño de 7 años entiende la lealtad, el respeto y el cuidado.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura (Variante B, preparación previa a la cita): _"Cuando Andrés dice que Akela lo va a acompañar en su próxima aventura, no está fingiendo un juego de disfraces. Está usando el único idioma que a los 7 años le permite entender ideas grandes como la lealtad o el cuidado mutuo."_
3. **`heading` (nivel 3)** — _"Los personajes que enseñan sin dar discursos"_
4. **`method-grid`** — Personajes y elementos del marco simbólico (Guía de Dirigente de Manada, Cap. 6):
    - 🐺 **Akela** — la guía de la Manada, autoridad cercana y protectora.
    - 🐻 **Baloo** — enseña con paciencia, encarna el conocimiento compartido con calma.
    - 🐆 **Bagheera** — la astucia y la valentía serena.
    - 🧒 **Mowgli** — el niño que aprende de la Selva y se convierte en parte de ella.
5. **`paragraph`** — Función pedagógica: _"Personajes como Mowgli, Baloo, Bagheera y Akela enseñan a través de sus acciones, no de discursos. Los niños no memorizan una moraleja: la viven jugando a ser lobos."_ (Guía de Dirigente de Manada, Cap. 6.10, p. 30)
6. **`heading` (nivel 3)** — _"Otros elementos simbólicos que sostienen la Selva"_
7. **`list`** — Elementos simbólicos (Cap. 6.11), acotada a 3 ítems para no sobrecargar (H3 auditoría pedagógica):
    - **La Flor Roja** — símbolo del crecimiento y el paso a nuevas etapas.
    - **El Cubil** — el espacio simbólico de la Manada: seguridad, protección, encuentro.
    - **El Saludo** — expresión de respeto y pertenencia entre lobatos.
8. **`paragraph`** — _"La Manada tiene además otros símbolos propios —el Libro de Oro, el Himno, un referente espiritual como San Francisco de Asís— que vas a ir conociendo con la práctica; no hace falta memorizarlos hoy."_
9. **`heading` (nivel 3)** — _"La Ley y la Promesa se viven dentro de ese lenguaje"_
10. **`paragraph`** — La Ley de la Manada se inspira en la sociedad de lobos del Pueblo Libre de Seeonee, del Libro de las Tierras Vírgenes, donde la manada vive unida por el respeto, el orden y el cuidado mutuo bajo la guía de Akela. Está escrita en lenguaje sencillo, cercano a niños de 7 a 10 años.
11. **`policy-quote`** — Cita textual de la Ley de la Manada:
    - `text`: _"El Lobato: 1. Escucha y respeta a los demás. 2. Dice siempre la verdad. 3. Es alegre y buen amigo. 4. Comparte con su familia. 5. Ayuda a los demás con alegría. 6. Ama y protege la naturaleza. 7. Escucha y aprende con emoción."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 3.2.1 — Ley de la Manada, pp. 15–16."
    - `label`: "📋 Ver la Ley de la Manada completa"
12. **`policy-quote`** — Cita textual de la Promesa:
    - `text`: _"Yo (nombre del aspirante a ser Lobato), prometo hacer siempre lo mejor, para cumplir mis deberes para con Dios y la Patria, hacer un favor a alguien cada día, y cumplir la Ley de la Manada."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 3.2.2 — Promesa, p. 16. (Existe una variante que sustituye \"para con Dios\" por \"para con mi espiritualidad\", para respetar e incluir distintas formas de vivir lo espiritual.)"
    - `label`: "📋 Ver la Promesa de la Manada"
13. **`info-box`** — Reformulación accesible: _"En palabras simples: la Promesa no es un examen que el lobato pasa una vez. Es un compromiso de intentarlo cada día — 'hacer siempre lo mejor', no 'hacerlo perfecto'. Tu trabajo como dirigente es que ese esfuerzo se sienta posible, no una meta inalcanzable."_

**Reflexión:** _"Elige uno de los siete puntos de la Ley de la Manada. Escribe un ejemplo concreto —con un lobato real o imaginado, en una situación real de tu unidad— donde ese punto de la Ley se vivió (o pudo haberse vivido) sin que nadie lo nombrara así."_

**Quiz (2 preguntas):**

> **P1.** Un dirigente nuevo piensa: _"lo de Akela y la Selva es un disfraz simpático, pero lo importante es enseñarles las normas de convivencia directamente."_ Según esta lección, ¿qué le falta a esa idea?
>
> a) _Nada: los símbolos son un adorno opcional, las normas se pueden enseñar igual sin ellos._
> b) _Le falta entender que el marco simbólico ES el idioma con el que un niño de 7 años comprende ideas como la lealtad o el respeto — no es decoración, es el vehículo pedagógico._  ✅
> c) _Le falta agregar más personajes de la Selva, pero el enfoque directo sigue siendo mejor._

> **P2.** La Promesa de la Manada dice "prometo hacer siempre lo mejor". Un lobato falla en cumplir la Ley un día y se siente culpable. Según esta lección, ¿qué le dirías?
>
> a) _Que la Promesa exige perfección y debe esforzarse más para no repetir el error._
> b) _Que la Promesa es un compromiso de intentarlo cada día, no de lograrlo siempre a la perfección — el esfuerzo cuenta, no la perfección._  ✅
> c) _Que mejor no haga la Promesa hasta que esté seguro de poder cumplirla siempre._

**Logro:** "Hablo el idioma de la Selva".

---

### 4.5 Lección 4 — 🐺 Las Seisenas: todos aportan, todos crecen (5 min)

**Idea central:** En la Manada de 2026 las seisenas no tienen jefes fijos: el liderazgo rota para que todos vivan guiar y ser guiados.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura (Variante B): _"Si vienes de otra época del escultismo, o leíste una guía vieja, puede que esperes que cada seisena tenga un 'seisenero' fijo, elegido, con autoridad sobre los demás. La Guía de Dirigente de Manada 2026 es explícita en que eso ya no es el modelo."_
3. **`heading` (nivel 3)** — _"La seisena no fragmenta la Manada, la organiza"_
4. **`paragraph`** — Cuando la Manada se organiza en seisenas —pequeños grupos de aproximadamente seis lobatos— no se fragmenta ni se divide. Adopta una estructura que permite acompañar mejor a cada niño dentro de la experiencia común. La pertenencia real no está en la seisena: está en la Manada. La seisena ayuda a cuidar el bosque; la Manada es el bosque.
5. **`policy-quote`** — Cita textual sobre el liderazgo en la seisena:
    - `text`: _"En coherencia con esta visión, en la seisena no existen líderes fijos ni jerarquías rígidas entre los niños y las niñas. No se trata de crear pequeñas estructuras de poder, sino de ofrecer oportunidades para que todos desarrollen capacidades. […] Las funciones pueden rotar según la actividad, los intereses o la etapa de progresión."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 5.2 — Organización, 'Liderazgo: Todos Aportan, Todos Crecen', pp. 26–27."
    - `label`: "📋 Ver el criterio oficial sobre liderazgo en la seisena"
6. **`info-box`** — Reformulación accesible: _"En palabras simples: nadie es 'el líder de la seisena' de forma permanente. Hoy Andrés propone el juego; la próxima semana otro lobato de su seisena reparte las tareas. Todos experimentan guiar y ser guiados."_
7. **`heading` (nivel 3)** — _"Aprender Haciendo: el otro elemento que se vive en la seisena"_
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

**Quiz (2 preguntas):**

> **P1.** Un dirigente nombra a un lobato como "seisenero" fijo para todo el año, responsable de decidir por su seisena. Según esta lección, ¿qué le dirías?
>
> a) _Que está bien: alguien necesita tener autoridad sobre el grupo para que funcione._
> b) _Que la Guía 2026 es explícita en que no debe haber líderes fijos ni jerarquías rígidas en la seisena — las funciones deben rotar para que todos vivan guiar y ser guiados._  ✅
> c) _Que el error fue no dejar que los lobatos votaran quién sería el seisenero._

> **P2.** Una dirigente diseña una actividad muy divertida, pero al analizarla nota que no le exige nada nuevo a los lobatos y no les deja ninguna habilidad. Según el filtro DURASLID, ¿qué le falta?
>
> a) _Nada: si es lúdica y segura, ya cumple con lo esencial._
> b) _Le falta ser Desafiante y Útil — la diversión sola no basta, la actividad debe exigir algo y dejar un aprendizaje real._  ✅
> c) _Le falta que sea más larga en duración._

**Logro:** "Todos aportan, todos crecen".

---

### 4.6 Lección 5 — 🌳 El territorio de la selva: Naturaleza y Progresión (5 min)

**Idea central:** La progresión de un lobato se traza en seis Sendas sobre "el territorio de la selva", a su propio ritmo.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura (Variante B): _"El escultismo nació al aire libre, entre árboles y colinas, como una forma de aprender de la vida en la vida misma. En la Manada, la naturaleza no es un escenario de fondo: es maestra, refugio y espejo."_ (Guía de Dirigente de Manada, Cap. 7.1)
3. **`heading` (nivel 3)** — _"Por qué el aire libre es esencial en la Manada"_
4. **`paragraph`** — Un lobato que se adentra en el bosque, siente el crujir de las hojas o el olor a tierra húmeda después de la lluvia, está honrando el origen del escultismo. La naturaleza enseña exploración, autocuidado, vida en grupo y conciencia ambiental — habilidades que ninguna explicación en salón reemplaza.
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
9. **`info-box`** — Reformulación accesible: _"En palabras simples: cada vez que Andrés supera un reto en una de las seis Sendas —no necesariamente al mismo ritmo en todas— avanza en su territorio de la selva. La insignia mayor de las rutas se llama Plenitud de la Selva. Cuando un lobato profundiza en las seis áreas, alcanza además la fase máxima: Lobo Cazador de la Selva."_
10. **`info-box`** — Cierre operativo: _"En el Curso 12 del Nivel 2 (Seguimiento de la Progresión Personal) vas a aprender las técnicas concretas para observar y registrar este avance. Hoy solo guarda el mapa: seis Sendas, un ritmo propio para cada lobato."_

**Reflexión:** _"Piensa en Andrés (o en un lobato real que acompañes). ¿En qué Senda dirías que está avanzando más rápido ahora mismo? ¿Y en cuál necesita más de tu acompañamiento? Nómbralas y escribe por qué."_

**Quiz (2 preguntas):**

> **P1.** Una dirigente le da a un lobato todas sus insignias de progresión al mismo tiempo, al final del año, "para que no se sienta atrasado frente a los demás". Según esta lección, ¿qué está haciendo mal?
>
> a) _Nada: lo importante es que todos terminen con las mismas insignias._
> b) _Está tratando la progresión como una carrera colectiva, cuando cada lobato avanza por las seis Sendas a su propio ritmo — las insignias deben iluminar avances reales, no repartirse por igual._  ✅
> c) _El error fue no avisarles con tiempo que recibirían las insignias._

> **P2.** Un lobato que antes se aislaba empieza a compartir sus ideas con su seisena y a escuchar a los demás. ¿En qué Senda avanzó, sobre todo?
>
> a) _Senda del rastreador, porque implica moverse en grupo._
> b) _Senda de la unidad, porque es la que corresponde a la Sociabilidad._  ✅
> c) _Senda del eco del bosque, porque toda relación humana es espiritual._

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
7. **`paragraph`** — Ser Viejo Lobo no es ser permisivo ni distante. La Guía habla de **firmeza con ternura**: límites claros, sostenidos con calidez — no gritos ni castigos, pero tampoco ausencia de estructura. Un Viejo Lobo coherente y cercano crea el entorno seguro donde un lobato puede intentarlo, fallar, y volver a intentarlo sin miedo.
8. **`heading` (nivel 3)** — _"El Consejo de Roca: donde los lobatos deciden de verdad"_
9. **`paragraph`** — El Involucramiento Comunitario en la Manada no significa que los lobatos asuman responsabilidades de adultos, sino que tengan oportunidades reales de opinar, decidir y actuar según su edad. El espacio formal donde esto ocurre es el **Consejo de Roca**: allí los lobatos comparten opiniones, proponen actividades y evalúan lo vivido, con Andrés y su seisena participando de verdad, no solo escuchando.
10. **`info-box`** — Reformulación accesible: _"En palabras simples: si en tu Manada las decisiones importantes las tomas siempre tú, no hay Consejo de Roca — hay una clase con disfraz de lobo. El objetivo no es que los lobatos dirijan la Manada; es que experimenten, de verdad, su capacidad de aportar."_

**Reflexión:** _"Recuerda una decisión reciente en tu Manada que tomaste tú solo, por rapidez o por costumbre, y que pudo haberse llevado al Consejo de Roca. ¿Qué hubiera cambiado si los lobatos hubieran participado en decidirla?"_

**Quiz (2 preguntas):**

> **P1.** Un lobato comete un error organizando un juego con su seisena y todo sale mal. El Viejo Lobo interviene de inmediato y reorganiza todo él mismo "para que no se pierda tiempo". Según esta lección, ¿qué está haciendo?
>
> a) _Lo correcto: un buen dirigente evita que los errores afecten la actividad._
> b) _Está quitándole al lobato la oportunidad de aprender del error — el rol del Viejo Lobo es ofrecer condiciones, no decidir por ellos; el error es fuente de aprendizaje, no un fracaso a evitar._  ✅
> c) _Está bien, siempre que después le explique qué hizo mal._

> **P2.** Un Grupo scout dice tener "Consejo de Roca" en su Manada, pero en la práctica el dirigente ya decidió todo antes de la reunión y solo lo anuncia. Según esta lección, ¿qué le falta a ese Consejo de Roca?
>
> a) _Nada, siempre es más eficiente que el adulto decida y luego informe._
> b) _Le falta ser real: el Consejo de Roca debe ser un espacio donde los lobatos opinan, proponen y deciden de verdad según su edad — no un anuncio disfrazado de consulta._  ✅
> c) _Le falta que se haga con más frecuencia, aunque el formato esté bien._

**Logro:** "Soy Viejo Lobo".

---

### 4.8 Lección 7 — 🌙 Ceremonias, el Círculo de Roca y el Gran Salto (4 min)

**Idea central:** Las ceremonias de la Manada —incluida su despedida, el Gran Salto— sostienen el marco simbólico con solemnidad y alegría a la vez.

**Secciones (en orden):**

1. **`info-box`** — Idea central de la lección.
2. **`paragraph`** — Apertura (Variante B): _"Ya viste cómo entra un lobato a la Manada (la Ceremonia de Paso) y cómo se organiza semana a semana (seisenas, Consejo de Roca). Falta ver cómo la Manada marca sus momentos importantes — y cómo, algún día, se despide de Andrés."_
3. **`heading` (nivel 3)** — _"El Círculo de Roca: la única formación de la Manada"_
4. **`paragraph`** — A diferencia de otras ramas, la Manada tiene una sola formación: el círculo, porque representa la unidad y requiere la presencia de todos. No tiene principio ni fin. Se llama, en dos pasos, Círculo de Roca y Círculo de Parada — y un detalle que sorprende a muchos dirigentes nuevos: **la Manada nunca se llama con silbato**. El llamado es siempre por voz, reuniendo a los lobatos alrededor de quien convoca.
5. **`policy-quote`** — Cita textual sobre el llamado sin silbato:
    - `text`: _"[Los Lobatos se reúnen en] Círculo de Roca alrededor del Dirigente que hace dicho llamado. […] Vale la pena anotar que nunca serán llamados con silbatos […]"_
    - `source`: "Manual de Presentación y Buen Orden de la Manada (DNPJ), sección sobre el llamado y la formación de Manada."
    - `label`: "📋 Ver el procedimiento oficial del llamado"
6. **`heading` (nivel 3)** — _"Las ceremonias que marcan el camino"_
7. **`paragraph`** — Anclaje narrativo (H6 auditoría pedagógica): _"Además de la Ceremonia de Paso que ya vivió Andrés, la Manada marca otros momentos con ceremonias propias:"_
8. **`list`** — Ceremonias de la Manada (Cap. 6.12):
    - **Ceremonia de Paso** — de Familia a Manada (ya vista en la Lección 2).
    - **Ceremonia de Investidura** — el lobato ingresa oficialmente al Movimiento y a la Manada, asume su compromiso con símbolos y gestos sencillos.
    - **Ceremonia de Progresión Personal** — reconoce el crecimiento y esfuerzo del lobato en sus Sendas, sin comparar con los demás.
    - **El Gran Clamor** — más que una ceremonia en sí, es un elemento ceremonial que refuerza la unidad y da fuerza solemne a momentos como la Investidura y el Gran Salto.
9. **`heading` (nivel 3)** — _"El Gran Salto: la despedida de Andrés"_
10. **`paragraph`** — Alrededor de los 10–11 años, cuando el lobato ha recorrido su camino en la Manada, llega el **Gran Salto**: la ceremonia que marca su paso a la siguiente rama, la Tropa. No es solo un trámite administrativo — reconoce el camino recorrido y anima a asumir nuevos retos, cerrando una etapa con gratitud y abriendo otra con ilusión.
11. **`policy-quote`** — Cita textual del Gran Salto:
    - `text`: _"Gran Salto: Marca el paso del Lobato a la siguiente rama. Es una ceremonia cargada de significado, que reconoce el camino recorrido en la Manada y anima a asumir nuevos retos, cerrando una etapa con gratitud y abriendo otra con ilusión."_
    - `source`: "Guía de Dirigente de Manada (Scouts de Colombia, 2026), Cap. 6.12 — Ceremonias en la Manada, p. 32."
    - `label`: "📋 Ver la descripción oficial del Gran Salto"
12. **`info-box`** — Cierre: _"El día que Andrés haga su Gran Salto, la Manada no lo está 'perdiendo'. Le está entregando a la Tropa un scout que ya sabe lo que es pertenecer, esforzarse y ser escuchado. Ese es tu trabajo de tres años, resumido en una ceremonia."_

**Reflexión:** _"Piensa en el Gran Salto de un lobato próximo a salir de tu Manada (o imagina el de Andrés). ¿Qué te gustaría que ese lobato se lleve, más allá de las insignias? Escríbelo en una frase."_

**Quiz (2 preguntas):**

> **P1.** Un dirigente nuevo, acostumbrado a otras ramas, empieza a llamar a la Manada con un silbato para formar el Círculo de Roca. Según esta lección, ¿qué corrección le harías?
>
> a) _Ninguna: el silbato es un método universal en el escultismo, funciona igual en cualquier rama._
> b) _Que en la Manada el llamado nunca se hace con silbato — se convoca por voz, en coherencia con el tono cálido y cercano de la rama._  ✅
> c) _Que solo debe usar el silbato en las ceremonias, no en las reuniones normales._

> **P2.** Un Grupo trata el Gran Salto de un lobato como un simple trámite: le entregan el papel de traslado a Tropa sin ceremonia. Según esta lección, ¿qué se están perdiendo?
>
> a) _Nada grave, mientras el lobato efectivamente pase a la Tropa._
> b) _Se pierden el momento de reconocer el camino recorrido y cerrar una etapa con gratitud — el Gran Salto es una ceremonia cargada de significado, no un trámite administrativo._  ✅
> c) _Solo se pierde tiempo si se hace la ceremonia completa; mejor avanzar rápido a la Tropa._

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
    - 🛠️ **Curso 12** — Seguimiento de la Progresión Personal: las técnicas para observar y registrar el avance por las Sendas. *(En camino — te avisamos cuando esté listo.)*
    - 📋 **Curso 13** — Planeación de Reuniones y Oportunidades de Aprendizaje: cómo diseñar la próxima reunión con DURASLID y los 8 elementos. *(En camino — te avisamos cuando esté listo.)*
    - 🎯 **Curso 14** — Ciclo de Programa con ABP: cómo la Manada decide y ejecuta sus propios proyectos. *(En camino — te avisamos cuando esté listo.)*
    - 🐻⚜️🧗🏔️ **Cursos 7, 9, 10 y 11** — las guías de las otras 4 ramas (Familia, Tropa, Comunidad, Clan), si acompañas o vas a acompañar más de una. *(En camino — te avisamos cuando esté listo.)*
8. **`info-box`** — Despedida: _"Tú no diriges la Manada. Le ofreces el territorio, el símbolo y la confianza — y el rumbo lo marcan ellos. Bienvenido, Viejo Lobo."_

**Reflexión:** _"Escribe tu compromiso completo siguiendo la plantilla. Te lo recordaremos junto a tu certificado."_

**Quiz (2 preguntas):**

> **P1.** Un Viejo Lobo nota que su Manada no tiene ningún ritual de rotación en las seisenas. ¿Cuál de estos sería un buen primer paso "chico, concreto y tuyo"?
>
> a) _"Voy a rediseñar todo el sistema de seisenas de mi Manada este mes."_
> b) _"La próxima reunión, antes de empezar el juego, voy a preguntar en el Consejo de Roca quién quiere proponerlo esta vez — y lo anoto para que la próxima semana le toque a otro."_  ✅
> c) _"Voy a explicarles en la próxima reunión por qué la rotación es importante."_

> **P2.** Un padre de familia le dice al nuevo Viejo Lobo: "Usted es el que manda aquí, así que decida usted qué hacen hoy." Según lo que viste en este curso, ¿qué le respondes?
>
> a) _"Tiene razón, yo decido todo para que la reunión salga bien."_
> b) _"Mi trabajo es ofrecerles el territorio, el símbolo y la confianza — hoy el rumbo del juego lo eligen ellos, yo los acompaño."_  ✅
> c) _"Mejor que decida usted, ya que es el papá."_

**Logro al completar:** "Guardián de la Selva" (logro final del curso, `unlockOnModule: -1`).

---

## 5. Logros (achievements)

| ID | Nombre | Emoji | Desbloqueo |
|---|---|---|---|
| `achievement-1` | Entré a la Selva | 🐾 | Al completar Lección 1 |
| `achievement-2` | Acompaño su llegada | 🚪 | Al completar Lección 2 |
| `achievement-3` | Hablo el idioma de la Selva | 📖 | Al completar Lección 3 |
| `achievement-4` | Todos aportan, todos crecen | 🐺 | Al completar Lección 4 |
| `achievement-5` | Trazo las Sendas | 🌳 | Al completar Lección 5 |
| `achievement-6` | Soy Viejo Lobo | 🦉 | Al completar Lección 6 |
| `achievement-7` | Sostengo el Círculo de Roca | 🌙 | Al completar Lección 7 |
| `achievement-final` | Guardián de la Selva | 🐺✨ | Al completar el curso (`unlockOnModule: -1`) |

_Excepción documentada (8 lecciones → 7+1 logros, igual que el Curso 04 del Nivel 1): justificada por ser el primer curso de rama, que cubre los 8 elementos del Método aplicados a la Manada más grupo natural, marco simbólico y transiciones._

---

## 6. Conexiones cross-course

### 6.1 Hacia atrás (dentro de la Línea PJ)

- **L2 (Ceremonia de Paso) ← Curso 6:** retoma el compromiso escrito en el Plan Personal de Dirigente del Curso 6, ahora aterrizado a la rama concreta que el adulto declaró.
- **L4 (DURASLID) ← Curso 1 (Mito 3):** el Curso 1 introdujo DURASLID como filtro contra "hay que entretenerlos"; aquí se aplica en profundidad.
- **L5 (seis Sendas) ← Curso 1 (L5) y Curso 5:** el Curso 1 presentó panorámicamente las 6 áreas de crecimiento; el Curso 5 las aterrizó al Modelo de Aplicación; aquí se convierten en las seis Sendas concretas de la Manada.
- **Prerrequisito ← Curso 25 (A Salvo del Peligro):** pendiente de construir — ver nota de gateo al inicio de este documento.

### 6.2 Hacia adelante (dentro del Nivel 2)

- **L5 → Curso 12 (Seguimiento de la Progresión Personal):** anuncia explícitamente las técnicas de observación y registro de las Sendas.
- **L4 → Curso 13 (Planeación de Reuniones y OdA):** anuncia el diseño de reuniones con DURASLID y los 8 elementos.
- **L8 → Curso 14 (Ciclo de Programa con ABP):** el Consejo de Roca y la participación real de los lobatos anticipan cómo la Manada decide su propio ciclo de programa.
- **L8 → Cursos 7, 9, 10, 11:** anuncia las guías de las otras 4 ramas para dirigentes que acompañan más de una.
- **Curso 24/25 (A Salvo del Peligro):** cuando se construya, debe referenciar el ciclo de programa y las ceremonias de este curso como contexto de aplicación (transporte, pernoctas, protocolo de actividades en la Manada).

### 6.3 Cross-línea

- El personaje narrativo Andrés puede referenciarse en el futuro Curso 15 (Jefe de Rama) como caso de seguimiento longitudinal.
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
| Curso entre 20 y 40 min | ✅ ~35 min (excepción documentada por centralidad, igual que Curso 04) |
| Lecciones de 3–8 min, óptimo 5–7 | ✅ rango 3–5 min |
| Cada lección termina independiente | ✅ |
| Lenguaje conversacional, tutea | ✅ |
| Citas oficiales plegables (`policy-quote`) | ✅ 8 citas distribuidas en L2, L3 (×2), L4, L5, L6, L7 (×2) — dentro del límite de máximo 2 por lección para citas contrastantes |
| Reflexión personal por lección | ✅ excepto intro, todas fuerzan un caso concreto (Andrés o un lobato real) |
| Mini-quiz 2 preguntas, con distractor = idea vieja | ✅ en las 7 lecciones de contenido |
| 4–6 logros + 1 final | ⚠️ Excepción documentada: 7 + 1 (igual justificación que Curso 04) |
| Lección 1 marcada `isIntro: true` sin quiz | ✅ |
| Patrón 6.2 (anti-definición + reformulación) | **Variante B (narrativa/contextual)** en todas las lecciones con cita — el contenido es más narrativo-doctrinal que técnico-burocrático (Ley y Promesa están redactadas para niños de 7 años, no requieren "traducción" adicional); cada cita se antecede de contexto narrativo con Andrés y se cierra con reformulación accesible. |
| Conexión cross-course | ✅ hacia atrás (Cursos 1, 5, 6) y hacia adelante (Cursos 12, 13, 14, y resto de ramas) |
| Las 3 exigencias propias de PJ (DURASLID, educación por el amor, alianza joven-adulto) | ✅ DURASLID explícito en L4; "firmeza con ternura" y "el error como aprendizaje, no fracaso" en L6 encarnan la educación por el amor; Consejo de Roca en L6 encarna la alianza joven-adulto |
| Riesgo "leer la guía en voz alta" (sección 8.3 de CREAR-CURSO.md) | ✅ mitigado con protagonista narrativo (Andrés) que hila las 8 lecciones |
| Riesgo "marco simbólico como decoración" | ✅ mitigado: L3 dedica la lección completa a tratarlo como idioma pedagógico, no ornamento, con cita explícita advirtiendo este error |
| Riesgo "seisenero fijo" (terminología obsoleta) | ✅ corregido explícitamente en L4 con cita textual de la Guía 2026 — ningún lobato tiene liderazgo fijo |

---

## 10. Próximos pasos

1. **Revisar este diseño** con el dueño del proyecto. Aplicar ajustes de tono, nombre del protagonista narrativo, ejemplos.
2. **Generar el JSON** del curso en `05-Generador-Cursos/borradores/rama-manada-lobatos.json` siguiendo `course-schema.json`, replicando el patrón de `bienvenida-programa-jovenes.json`.
3. **Build HTML** con `node build-course.js rama-manada-lobatos`.
4. **Generar preview PDF** y revisar visualmente.
5. **NO marcar `status: "active"` en `cursos.json`** hasta que:
   - a) exista un piloto con 5–10 dirigentes de Manada reales, y
   - b) se resuelva el gateo del Curso 25 (A Salvo del Peligro) — hoy inexistente. Mientras tanto, el curso queda accesible solo por URL directa o con `status: "draft"`/`"coming-soon"` en el catálogo, para no ofrecer Nivel 2 sin su prerrequisito habilitante real.
6. **Correr auditoría doctrinal** (`/auditar-curso rama-manada-lobatos`) antes de cualquier publicación, aunque el contenido reutiliza citas ya verificadas en la app PROGRAMA SCOUT — el curso añade material nuevo (Ley, Promesa, DURASLID, Consejo de Roca, Gran Salto, Círculo de Roca) que no pasó por esa auditoría todavía.
7. **Pilotar** con 5–10 dirigentes de Manada reales. Recoger retroalimentación 1–2 semanas.
8. **Ajustar y replicar** el patrón a los Cursos 7 (Familia), 9 (Tropa), 10 (Comunidad) y 11 (Clan).

---

_Documento de diseño del Curso 8, versión inicial — 11 de julio de 2026. Redactado directamente por Claude Code (excepción al flujo Cowork↔Claude Code documentada en CREAR-CURSO.md §1, por decisión explícita del dueño del proyecto en esta sesión). Validado contra la Guía de Dirigente de Manada (Scouts de Colombia, DNPJ 2026, 69 pp.) y el Manual de Presentación y Buen Orden de la Manada (DNPJ), con citas textuales verificadas por extracción directa del PDF fuente. Reutiliza y es consistente con los 5 conceptos de Manada ya auditados en la app PROGRAMA SCOUT (`manada-lobatos`, `marco-simbolico-manada`, `grupos-naturales-manada`, `progresion-manada`, `dirigente-manada`)._
