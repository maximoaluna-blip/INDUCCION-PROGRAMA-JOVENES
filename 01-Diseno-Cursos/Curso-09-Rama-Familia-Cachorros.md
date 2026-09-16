# Diseño del Curso 9 — 🐻 Rama Familia (Cachorros)

**Línea:** Programa de Jóvenes · **Nivel:** 2 (Profundización por rama y práctica pedagógica) · **Posición:** curso de rama, el segundo construido del Nivel 2.

> La rama de la primera infancia: niñas y niños de **5 y 6 años**. Fuente angular: **Guía para el Dirigente de Familia de Cachorros** (DNPJ 2026, 83 pp.), complementada por **Cómo Crear una Familia de Cachorros** (DNPJ-2026-065, 23 pp.) y el **Modelo de Aplicación 2026**.

> **Las páginas se citan por el PDF, no por el índice.** Este documento **no tiene folios impresos** —cero en las 83 páginas— y su índice va desfasado entre 0 y −2 respecto del PDF. Por eso todas las referencias del curso dicen «del PDF» explícitamente: sin esa marca, un lector que abra el índice creería que el curso se equivocó.

> **Numeración:** este curso es el **9** por el **ADR-043** (15-sep-2026). En el Nivel 2 el número sigue al **orden de publicación**, no a la edad de la rama: Manada se publicó como Curso 8 y su certificado lo dice. Cítalo siempre por su `courseId`, `rama-familia-cachorros`.

> **Sin cursos habilitantes** (ADR-019, 11-jul-2026): este curso no bloquea ni está bloqueado por ningún otro. Lo que hay son recomendaciones en la ficha.

> ⚠️ **Nota de reconstrucción (15-sep-2026).** Este documento se **reconstruyó desde el JSON** después de que un script de sincronización lo truncara a cero bytes, y el archivo aún no estaba versionado. El JSON —que es la fuente de verdad del motor— quedó intacto y ya traía todas las correcciones de la auditoría y la re-auditoría, así que lo que sigue refleja el curso real, sección por sección. Lección aprendida: **commitear el diseño antes de encadenar scripts sobre él.**

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `rama-familia-cachorros` |
| Título | Rama Familia (Cachorros) |
| Subtítulo | Formación de Adultos Voluntarios — Asociación Scouts de Colombia |
| Icono | 🐻 |
| Duración | **45 minutos** (excede el tope de 40 del CHECKLIST — justificado en el **ADR-045**) |
| Lecciones | 8 (1 intro + 7 de contenido) |
| Nivel | 2 — Profundización por rama y práctica pedagógica |
| `order` | 9 |
| `contentVersion` | 2026-09-15 |
| Audiencia primaria | Dirigentes de Familia (Viejos Lobos de Familia) y quienes abren una unidad nueva |
| Recomendado antes | Nivel 1 completo (Cursos 1–7). **Recomendado, no exigido** (ADR-019) |
| Recomendado en paralelo | Curso 25 (A Salvo del Peligro aplicado al Programa) — de adopción inmediata |
| Logro final | 🐻✨ Viejo Lobo de Familia |

**Hilo narrativo:** el curso acompaña a **Salomé**, que llega al Cubil a los 5 años y dos años después cruza la **Ceremonia de Paso** hacia la Manada. Esa ceremonia es exactamente donde arranca el Curso 8 con Andrés: los dos cursos se dan la mano en el mismo punto.

---

## 2. Objetivos del curso

Al terminar, el adulto podrá:

1. **Distinguir** a la Familia de Cachorros de un jardín infantil o una guardería, nombrando qué la hace una unidad scout y no un servicio de cuidado.
2. **Decir** la Promesa del Cachorro en **sus dos fórmulas oficiales** y los dos artículos de la Ley, y explicar por qué son dos y no diez.
3. **Diseñar** una actividad de Familia que use el juego como método —no como premio— y que conecte con las cuatro actividades rectoras de la primera infancia.
4. **Organizar** su unidad según el **Sistema de Familia**, usar Camadas como agrupaciones momentáneas, y conducir un Círculo de Familia y un Encuentro del Cubil.
5. **Usar** el marco simbólico de la **Fantasía** —y la historia de Los Hermanos de Mowgli que lo llena— como lenguaje principal de la unidad, no como decoración.
6. **Acompañar** la progresión de un Cachorro por sus tres fases, sus cinco Dentelladas y sus especialidades, sin convertirla en una carrera.
7. **Aplicar** las reglas de entorno seguro propias de la rama —dos adultos siempre, un adulto por cada cinco Cachorros, nunca a solas— al planear cualquier actividad.

> ⚠️ **Pendiente menor de la auditoría pedagógica (H6).** El objetivo 4 dice **«conducir»** un Círculo de Familia — un verbo de ejecución que el curso no alcanza a entregar. El `info-box` de la L1, que es lo que el estudiante lee, ya se ajustó a **«saber cómo se arma y qué significa»**. Este objetivo **no se tocó**: reescribir un objetivo del curso es decisión de diseño, no una corrección pedagógica acotada. Alinearlo —o no— queda para la compuerta humana.

---

## 3. Hook pedagógico

> **«A los cinco años no se aprende escuchando. Se aprende jugando — y eso no es una concesión a la edad: es el método.»**

> **Dónde vive el hook (desde la auditoría pedagógica, H3).** Ya no vive solo en este diseño: se **enuncia textualmente** en el tercer `paragraph` de la L1 y se **cierra con eco** en el `mission-box` de la L8, que remite a él para escoger el primer paso. Antes aparecía cero veces en el JSON, así que el estudiante nunca lo leía.

El error más común del adulto que llega a Familia es tratarla como "Manada pero más pequeños": bajar el nivel, simplificar el juego, esperar a que crezcan para empezar a educar en serio. La Guía desmonta eso desde el capítulo cuatro: en la primera infancia el juego **es** la forma del elemento *Aprender Haciendo*, no un envoltorio para hacerlo pasar. Y lo conecta con las **actividades rectoras** que el Ministerio de Educación fija para la primera infancia en Colombia — juego, arte, literatura y exploración del medio.

---

## 4. Estructura de lecciones

### 4.1 Mapa general

| # | Lección | Min | Idea central |
|---|---|---|---|
| 1 | 🐾 Bienvenida al Cubil | 3 | Presentación, Salomé, y qué NO es la Familia. `isIntro: true` |
| 2 | 🧒 Quién es un Cachorro y quién es el Viejo Lobo | 5 | El adulto es mediador: ni maestro ni papá. Nombres de Caza |
| 3 | 🤝 Promesa, Ley, Saludo y Lema | 5 | Dos artículos son una Ley traducida, no recortada. **Dos fórmulas de Promesa** |
| 4 | 🎲 El juego: así se aprende a los cinco años | 5 | Aprender Haciendo en primera infancia + actividades rectoras + DURASLID |
| 5 | 🐾 Camadas, Círculo de Familia y Encuentro del Cubil | 5 | **Sistema de Familia**: las Camadas son ratos, no estructura |
| 6 | 📖 Los Hermanos de Mowgli y el Eo-Wawa | 5 | Marco simbólico = **la Fantasía**; Mowgli es el fondo motivador. Tres ceremonias |
| 7 | 🌱 Cómo crece un Cachorro | 6 | Cinco Dimensiones, tres fases, cinco Dentelladas, especialidades, etapas |
| 8 | 🛡️ Un Cubil seguro y tu primer paso | 5 | Dos adultos y 1:5, baño y custodia, padres aliados, Intención→Decisión→Acción |

**Total: 45 minutos.** *(Medido, no estimado: **5.752 palabras** contando cuerpo, reflexiones y quizzes. A 45 min eso son **128 palabras/minuto declarado** — todavía menos generoso que Manada, publicado con 35 min y 4.135 palabras (118), y que Método Scout, con 40 min y 3.522 (88). Excede el tope de 40 del CHECKLIST; la excepción está justificada en el ADR-045.)* *(Medido sobre el texto real del JSON, no estimado: ~5.400 palabras ≈ 34 min de lectura pura más reflexiones y quizzes. La L7 sola pasa de 1.100 palabras. Para calibrar: Manada, publicado con «35 minutos», tiene 3.898 palabras.)*

---

### 4.2 Lección 1 — 🐾 Bienvenida al Cubil (3 min, `isIntro: true`)

**Idea central:** este no es un curso sobre cuidar niños pequeños; es sobre educarlos.

1. **`info-box`** — ⏱️ ~45 minutos, con lo que el adulto va a poder hacer al final. Sobre el Círculo de Familia promete **«saber cómo se arma y qué significa»** — que es lo que el curso entrega — en vez de «conducir» (auditoría pedagógica, H6-B).
2. **`paragraph`** — Salomé, 5 años, primer día en el Cubil; dentro de dos años cruza hacia la Manada, que es donde arranca el Curso 8.
3. **`paragraph`** — El malentendido a desarmar: *«a los cinco años todavía no se puede hacer escultismo de verdad; toca esperar a que crezcan»*. **Cierra enunciando el hook con todas sus letras** y diciendo que todo el curso sale de esa frase (H3).
4. **`info-box`** — Anti-definición: **no** es una guardería con pañoleta, **no** es «la antesala de la Manada», **no** es un servicio para que los papás dejen a los niños.
5. **`paragraph`** — Lo que sí es: **una unidad** del Grupo Scout con Promesa, Ley, saludo, lema, marco simbólico, sistema de equipos, órgano de participación y progresión propios. *(«Unidad», no «sección»: la tabla de §6.1, p. 35, separa Sección = franja 5-6 años · Rama = Cachorros · Unidad = Familia.)*
6. **`mission-box`** — Cómo usar el curso: cada lección termina en algo que probar el sábado.

**Sin quiz ni reflexión** (es intro).

---

### 4.3 Lección 2 — 🧒 Quién es un Cachorro y quién es el Viejo Lobo (5 min)

**Idea central:** el adulto de Familia no es ni maestro ni papá. Es un mediador que facilita experiencias.

`info-box` (idea central) · `heading` «El protagonista de programa de la Familia» · `paragraph` (5 y 6 años; la primera infancia tiene lógica propia) · `heading` «El Viejo Lobo de Familia» · **`policy-quote`** §1.2, p. 8 — *«Su papel no corresponde al de un docente tradicional ni al de una figura parental, sino al de un adulto mediador que facilita experiencias significativas de aprendizaje…»* · `paragraph` (qué descarta esa frase: ni explicar y evaluar, ni proteger y resolver) · **`method-grid` de 3**: 👩‍🏫 El maestro · 🤱 El papá · 🐺 El Viejo Lobo · `heading` «Los Nombres de Caza» · `paragraph` con la definición de §1.3, p. 10 · `paragraph` (no es un apodo: es la puerta al mundo simbólico donde el Cachorro ya vive).

**Reflexión:** qué Nombre de Caza elegirías y por qué; y de las dos formas que el curso descarta —maestro y papá—, cuál te va a costar más soltar.

**Quiz (2):** P1 — Salomé no logra abotonarse el pelaje ✅ *le muestra una vez, se queda cerca y la deja intentarlo*. P2 — «los Nombres de Caza son una bobada simpática» ✅ *es la puerta al mundo simbólico donde el niño ya vive*.

**Logro:** 🧒 "Me paro como mediador".

---

### 4.4 Lección 3 — 🤝 Promesa, Ley, Saludo y Lema (5 min)

**Idea central:** dos artículos no son una Ley recortada. Son una Ley traducida.

`info-box` · **`policy-quote`** §3.1.1, p. 16 — *«Prometo amar a Dios y ayudar a los demás»* · `paragraph` (*«la Promesa no es algo rígido ni adulto, sino un acto simbólico…»*) · **`info-box` 🕊️ — la segunda fórmula oficial**: *«Prometo amar la vida y ayudar a los demás»*, para cuando la familia no nombra a Dios; *«ambas formas de la Promesa nacen del mismo principio»* (§3.1.1, p. 17). Cierra con: pregúntale a la familia **antes** de la Investidura, no el día de la ceremonia · `heading` «La Ley del Cachorro» · **`policy-quote`** §3.1.2, p. 17 — *«El Cachorro es alegre. El Cachorro cuida la naturaleza.»* · `paragraph` (*«No es una ley distinta, sino una síntesis adecuada a la edad»*) · `paragraph` (cómo funciona la síntesis: la alegría es *ante las dificultades*, no ante todo) · `info-box` «Por qué dos y no diez» · `heading` «El Saludo» · `paragraph` (mano derecha al hombro, índice y medio juntos; **similar** al saludo tradicional) · `paragraph` (el porqué: *«cuando crezcan y pasen a la Manada, abrirán sus dedos»*) · `heading` «El lema y el color» · `paragraph` («Siempre Alegres» §6.1.1, p. 35; naranja §6.1.2, p. 36).

**Reflexión:** explicarle a Salomé, de 5 años, qué quiere decir «El Cachorro cuida la naturaleza» — sin usar «medio ambiente».

**Quiz (2):** P1 — un papá dice que la Ley «está incompleta» ✅ *no es una ley distinta ni recortada, es la misma síntesis en el lenguaje de un niño de cinco años*. P2 — la mamá de una Cachorra dice, tres días antes de la Investidura, que en su casa no se habla de Dios ✅ *le ofreces la segunda fórmula oficial —la que dice amar la vida— y acuerdas con ella cuál usará su hija*.

> **Nota sobre P2 (auditoría pedagógica, H2).** La versión anterior preguntaba qué ocurre en la Ceremonia de Investidura (*«recibe su pelaje y realiza su Promesa»*) — contenido que **no está en esta lección** sino en el `method-grid` de la L6, tres lecciones después, y que además estrenaba la palabra «pelaje» sin haberla explicado nunca (H13). La pregunta nueva evalúa lo que la L3 **sí** enseña a fondo, la segunda fórmula de la Promesa, y convierte el ítem en una decisión real ante una familia.

**Logro:** 🤝 "Digo la Promesa y la Ley".

---

### 4.5 Lección 4 — 🎲 El juego: así se aprende a los cinco años (5 min)

**Idea central:** el juego no es el envoltorio del Método. En primera infancia, el juego *es* el Método.

`info-box` · `paragraph` (los dos usos que lo desperdician: premio y relleno) · **`policy-quote`** §4.11, p. 27 — *«Para el Escultismo, el juego es la forma más cercana del elemento del Método Scout "Aprender haciendo"»* · `heading` «Las cuatro actividades rectoras» · `paragraph` (las *«actividades rectoras»* que el MEN propone para la primera infancia — la palabra queda **fuera** de las comillas porque el original dice «propuesta», errata de la fuente) · **`list` de 4**: Juego · Literatura · Arte · Exploración del medio · `info-box` (esto alinea la rama con el referente pedagógico nacional) · `heading` «DURASLID en la Familia» · `paragraph` (los ocho atributos aterrizados a la edad, §4.9–4.10, pp. 23–25) · `paragraph` (la prueba de fuego: quita el juego; si la actividad sigue igual, era decoración. **Cierra con Salomé**: no va a recordar la explicación sobre cuidar la naturaleza, va a recordar la tarde en que salió a buscar tesoros de la selva — H7).

**Reflexión:** la última reunión de tu unidad — ¿el juego era el método o el premio? Rediseñarla.

**Quiz (2):** P1 — actividad sobre cuidar la naturaleza ✅ *salida a buscar «tesoros de la selva»*. P2 — un plan de sábado con juego, dibujo y salida al parque: ¿cuál de las cuatro actividades rectoras falta? ✅ *la literatura: no hay cuento ni relato que le dé sentido y escenario a lo que van a jugar*.

> **Nota sobre P2 (auditoría pedagógica, H5).** Antes pedía **recitar** la lista de las cuatro actividades rectoras, con la respuesta calcada del cuerpo de la lección (solape jac=0,88). Ahora pide **usarlas** para auditar un plan concreto. El argumento de la correcta reformula la propia lista de la lección, así que no introduce doctrina nueva.

**Logro:** 🎲 "El juego es mi método".

---

### 4.6 Lección 5 — 🐾 Camadas, Círculo de Familia y Encuentro del Cubil (5 min)

**Idea central:** a los cinco años el sistema de equipos ya funciona — pero con otra forma que en las ramas mayores.

`info-box` · **`heading` «El Sistema de Familia»** · `paragraph` (el sistema de la rama tiene nombre propio: *todos comparten el mismo espacio*; §5.2.1, p. 29) · `heading` «Las Camadas» · `paragraph` (son **ratos, no estructura**, y **no tienen jefe**: *«no son dirigidas por ningún Cachorro, ni Viejo Lobo»*) · **`policy-quote`** §5.2.2, p. 29 · `paragraph` (se nombran por cualidades, con lema elegido por ellos; *«escoger valores no es una camisa de fuerza»*) · `info-box` (ojo con traer el molde de la Manada: las seisenas son estables, las Camadas no) · `heading` «El Círculo de Familia» · **`policy-quote`** §5.2.3, p. 29 · `paragraph` (el que dirige va en el centro; los demás Viejos Lobos **detrás, como símbolo de protección**) · `heading` «El Encuentro del Cubil» · **`policy-quote`** §5.4, p. 32 · `paragraph` (lo conforman todos; los adultos *«facilitan la expresión simbólica, lúdica y afectiva»*) · `paragraph` (no es una asamblea en miniatura. **Cierra con Salomé hablando**: no va a decir *«propongo una salida»*, va a dibujar un río y decir *«quiero ir allá»* — eso ya es una propuesta, y tu trabajo es oírla como tal — H7).

**Reflexión:** cómo preguntarle a tu unidad qué quiere hacer, sin levantar la mano y votar.

**Quiz (2):** P1 — Camadas fijas todo el año ✅ *son grupos voluntarios que pueden tener distintos integrantes*. P2 — vas a dirigir el Círculo y otro Viejo Lobo te pregunta dónde se paran ellos ✅ *detrás del círculo: ahí la Familia se ve reunida y ellos son símbolo de protección*.

> **Nota sobre P2 (auditoría pedagógica, H5 y H11).** La versión anterior **describía** la escena pero no pedía decidir —por eso inflaba el recuento de escenarios en 1— y repetía seis tokens seguidos del cuerpo de la lección. La nueva pone al adulto a responderle a un compañero, y su tercer distractor («que aprovechen para alistar material») ya no queda descolgado del enunciado.

**Logro:** 🐾 "Sostengo el Círculo".

---

### 4.7 Lección 6 — 📖 Los Hermanos de Mowgli y el Eo-Wawa (5 min)

**Idea central:** el marco simbólico es el idioma en que ocurre la unidad, no su decoración.

`info-box` · **`paragraph` — el nombre correcto primero**: el marco simbólico de la Familia se llama **la Fantasía** y su ambiente de referencia son los **Relatos Infantiles** (§6.1, p. 35). La historia que lo llena es Los Hermanos de Mowgli · **`policy-quote`** §6.3.1, pp. 36–37, con `label` **«📋 Por qué Los Hermanos de Mowgli no es decoración»** — *«…no es simplemente un cuento para ambientar reuniones; es el fundamento simbólico que da identidad, coherencia y profundidad a la Rama Cachorros»* · `paragraph` (Familia y Manada **comparten** el Libro como **fondo motivador**; lo propio de Familia es el capítulo de los Hermanos de Mowgli y los Nombres de Caza) · `heading` «El Eo-Wawa» · **`policy-quote`** §6.4, p. 38 · `paragraph` (se hace siempre que haya motivo para celebrar; «Siempre Alegres» volviéndose práctica) · `heading` **«Las ceremonias»** · `paragraph` con la cita literal de §6.5, p. 42: *«Existen **tres ceremonias básicas**…»* · **`method-grid` de 3**: 🎽 Investidura · 🏅 **Fase Máxima de Progresión** (§6.5, p. 42 y §8.14, p. 67) · 🚪 Paso · `paragraph` (esas tres van ante el Grupo Scout; dentro del Cubil hay dos más: dentelladas y fases de progresión) · `paragraph` (la huella, §6.6.1, p. 42) · `info-box` (el riesgo: usar el marco como adorno en vez de como el idioma en que se dan las instrucciones. **Cierra con una prueba en voz de Salomé**: si contara en su casa lo que pasó el sábado, ¿contaría una reunión o algo que ocurrió en la Selva? — H7).

**Reflexión:** escribir una instrucción cotidiana de tu unidad dicha en el idioma de la Selva.

**Quiz (2):** P1 — «el marco simbólico está bien para ambientar» ✅ *no ambienta la actividad: es el lenguaje en el que ocurre*. P2 — el Eo-Wawa ✅ *el grito de felicidad de los Cachorros*.

**Logro:** 📖 "Hablo el idioma de la Selva".

---

### 4.8 Lección 7 — 🌱 Cómo crece un Cachorro (6 min)

**Idea central:** la progresión no es una carrera. Es un camino con tres tramos y cinco huellas.

`info-box` · `heading` «Las cinco Dimensiones» · `paragraph` (*«La Guía las define así:»*) · **`policy-quote`** §8.5, p. 54 — la definición de Dimensión · **`list` de 5**: Corporal · Cognitiva · Ética · Socio-Afectiva · Espiritual · `paragraph` (por qué en el Curso 6 eran seis áreas y aquí cinco dimensiones) · **`list` del mapeo** (p. 55): Corporalidad→Corporal · Creatividad→Cognitiva · Carácter→Ética · **Sociabilidad + Afectividad→Socio-Afectiva** · Espiritualidad→Espiritual · `paragraph` (no son dos sistemas que compiten) · `heading` **«El camino del Cachorro»** · `paragraph` (Etapa de Adaptación, **~2 meses**) · **`policy-quote`** §8.6, p. 57 — a qué está orientada esa etapa · `paragraph` (es tiempo para conocer, explorar y sentirse parte, no para evaluar; termina con la Investidura) · `heading` «Los tres tramos» · `paragraph` (*«estas fases no representan grados rígidos ni comparaciones entre compañeros»*) · **`list` de 3**: 👁️ **Mirada de Raksha** → Reconoce · 🐺 **Aullido de Papá Lobo** → Expresa · 🐾 **Fuerza del Cubil** → Comparte · `paragraph` (tres fases, tres verbos — §8.6, p. 56 y §8.7, pp. 59–60 — y a cada verbo del niño le corresponde uno tuyo: **Apoyar** en Reconoce, **Acompañar** en Expresa, **Enlazar** en Comparte) · `heading` «Las cinco Dentelladas» · `paragraph` · **`list` de 5**: 💧 Agua (corporalidad) · 🌱 Tierra (creatividad) · 🔥 Fuego (carácter) · 😊 Felicidad (afectividad y sociabilidad) · 🌬️ Aire (espiritualidad) · `info-box` **«Y sí, son insignias»** (la Guía **recomienda** entregarlas de a una; lo que niega es otra cosa: *«no es un sistema de requisitos acumulativos»*, p. 56) · `heading` **«¿Y cómo se pasa de una fase a la otra?»** · `paragraph` (Dentelladas **y especialidades**: una para el Aullido de Papá Lobo, tres para la Fuerza del Cubil — §8.6, p. 58) · `paragraph` (la fórmula: **SABE** 2 · **DEMUESTRA** 2 · **COMPARTE** 1; *«4 a 6 semanas»*, *«no necesita trámites complejos»*; sale del interés del niño — §8.10, pp. 63–64) · `info-box` 🎖️ (las especialidades **no llevan insignia**: *«no cuentan con insignias físicas; sin embargo, es fundamental reconocer y valorar los logros»*; ahí está **Enlazar** en esta rama) · `paragraph` (Etapa de Transición, **Cachorro Explorador**) · **`policy-quote`** §8.15, p. 67 — el paso a la Manada no es una ruptura · `paragraph` (*«La Guía pone fecha:»*) · **`policy-quote`** §8.15, p. 68 — el paso *«al cumplir los 7 años»* · `paragraph` (la flexibilidad *«máxima de hasta tres meses»* después de esa edad y solo con razones pedagógicas claras, §8.15, p. 68 — tres meses es el margen, no una puerta abierta) · `heading` «Qué esperamos al final» · **`policy-quote`** §8.3, p. 53 (perfil de egreso) · `info-box` 🐺 (aquí Salomé cruza la Ceremonia de Paso; del otro lado empieza el Curso 8 con Andrés).

**Reflexión:** un Cachorro concreto, con nombre y cara —**o, si todavía no tienes unidad, un niño de cinco años que conozcas**—: ¿en cuál de las cinco dimensiones lo has visto crecer, y en cuál no te has fijado nunca? Cierra pidiendo **una sola cosa que vayas a mirar en esa dimensión la próxima reunión**, «del tamaño de un sábado».

> **Nota sobre la reflexión (auditoría pedagógica, H8).** Era la única de las siete que **no hacía ensayar**: diagnosticaba y se detenía, dejando al adulto con una omisión nombrada en absoluto (*«nunca»*) y ninguna acción. Y presuponía una unidad ya observada «este trimestre», cuando parte de la audiencia son quienes **abren** una Familia nueva. La versión nueva quita el absoluto, abre la puerta a quien no tiene unidad y termina en un ensayo del tamaño de una reunión.

**Quiz (2):** P1 — el Viejo Lobo que lleva la cuenta de insignias **y las compara** ✅ *la progresión se acompaña por dimensiones y ritmos propios, no como una carrera*. P2 — la Etapa de Adaptación ✅ *dos meses*.

> **Nota sobre P1:** el fallo que la pregunta señala es **la comparación**, no el registro. Llevar registro es legítimo (§8.9, p. 62); comparar está desaconsejado en tres lugares distintos de la Guía (§8.6 p. 57, §8.12 p. 66, §8.13 p. 67). Por eso la pregunta sigue siendo correcta después de que la lección enseñe que las Dentelladas sí son insignias.
>
> Su tercer distractor se cambió por la auditoría pedagógica (**H10**): el anterior —*«que ese registro debería llevarlo en la herramienta oficial de la Dirección Nacional»*— inventaba una herramienta que el curso nunca nombra y desviaba hacia el registro, que no es el fallo. El nuevo —*«que reconozca en público al Cachorro que va primero»*— **codifica la comparación misma**, que sí es el error que la pregunta persigue.

> **Nota sobre las cuatro `policy-quote` nuevas (auditoría pedagógica, mitigación de H4).** La L7 llevaba ~165 palabras de cita literal incrustadas en línea. Las cuatro citas largas —definición de Dimensión (§8.5, p. 54), Etapa de Adaptación (§8.6, p. 57), Etapa de Transición (§8.15, p. 67) y edad de paso (§8.15, p. 68)— pasaron a `policy-quote` con `label` y `source` propios, **sin cambiar una palabra, una cifra ni una página**: saca ~85 palabras del flujo siempre visible, porque el motor las pliega por defecto. La lección pasa de 26 a **32 secciones**. *(Ojo: esto **no** resuelve H4, que es partir la lección; eso sigue siendo decisión humana — ver §10.)*

**Logro:** 🌱 "Acompaño su crecimiento".

---

### 4.9 Lección 8 — 🛡️ Un Cubil seguro y tu primer paso (5 min)

**Idea central:** con niños de cinco años, la regla de los dos adultos no es un trámite. Es parte de la actividad.

`info-box` · `heading` «Las reglas que no se negocian» · **`policy-quote`** **§11.7 Presencia Mínima de Adultos**, p. 78 — *«siempre deben estar presentes al menos dos adultos… un adulto por cada cinco Cachorros; en ningún caso un adulto debe permanecer solo con un niño o con la Familia»* *(la Guía numera **dos** secciones distintas como §11.7 en esa misma página, por eso la cita lleva el nombre)* · `paragraph` (los tres propósitos: protege a los menores, protege a los Viejos Lobos, garantiza transparencia) · `paragraph` (contacto físico: *«debe evitarse de manera general»*; *«en lo posible, se debe advertir previamente al niño»*, §11.10, p. 79) · `paragraph` · **`list` de 3**: 🚻 el baño (*«únicamente hasta la puerta»*, nunca entrar) · 👶 esfínteres (*«exclusivamente los padres o acudientes»*) · 🤝 entrega y recepción (*«por ningún motivo se permite que el niño se retire solo»*) — §11.9, pp. 78–79 y §11.7 *Responsabilidad y Custodia*, p. 78 · `heading` «Los padres, aliados» · **`policy-quote`** §1.4, p. 11 · `paragraph` (aliado no es codirigente: *«no está orientada a dirigir, corregir o intervenir en la dinámica pedagógica»*) · `info-box` 🔗 **dónde sigue esto** (la conducta ante una revelación la enseña Transversales, Curso 03 — ADR-038; **cierra avisando que esa línea todavía se está construyendo y que la ruta de reporte de aquí abajo ya existe y ya se puede usar** — H9) · `paragraph` (la ruta existe y tiene nombre: botón **«Me Pongo A Salvo del Peligro»** y `asalvodelpeligro@scout.org.co`, §11.5, p. 77) · `heading` «¿Vas a abrir una Familia?» · `paragraph` (DNPJ-2026-065) · **`list` ordenada de 3**: Intención · Decisión · Acción · `mission-box` 🎯 (tu primer paso: una sola cosa el sábado, **con el eco del hook** y la invitación a escoger «la cosa que haga que el sábado se juegue más» — H3).

**Reflexión / compromiso:** tres cosas cortas — el Nombre de Caza, UNA cosa que vas a cambiar en la próxima reunión, y **la próxima salida de tu unidad: cuántos Cachorros van, cuántos adultos hacen falta según la proporción, quiénes son y quién los confirma esta semana**.

> **Nota sobre el punto 3 (auditoría pedagógica, H6-A).** La L1 promete *«planear una actividad que cumpla las reglas de entorno seguro»* — un verbo de ejecución — y lo que el punto 3 pedía antes era reconocimiento (*«cómo vas a verificar…»*). Ahora pide el plan real, con nombres y fecha, que es lo prometido. *(Queda para el auditor doctrinal confirmar que pedir «cuántos adultos según la proporción» para una salida concreta no exige matices —transporte, pernocta— que este curso remite al Curso 25.)*

**Quiz (2):** P1 — salida con 12 Cachorros ✅ *tres adultos, porque la proporción es de uno por cada cinco*. P2 — Salomé corre a abrazar a su Viejo Lobo **delante de todos** ✅ *responder al abrazo con naturalidad y en corto, ahí mismo, donde el otro Viejo Lobo y las familias los ven*.

> **Nota sobre P2 (auditoría pedagógica, H1 — el hallazgo más grave del informe).** La correcta anterior —*«agacharse a su altura… sin cargarla ni levantarla… siempre a la vista»*— introducía **tres especificaciones que el cuerpo de la L8 nunca enseña**. El adulto podía descartar la prohibición total, pero entre las otras dos opciones no tenía con qué decidir: el motor lo marcaba en rojo sin explicar, en la última pregunta del curso y sobre contacto físico con niños de cinco años. Justo el material donde §7.2 pide lo contrario.
>
> La reescritura **no toca doctrina**: cambia solo las opciones, y sus tres discriminadores son reglas que la lección ya enseña y ya cita — *«el afecto se maneja con límites sanos, no se prohíbe»* descarta la op0, y la transparencia de §11.7 (*«Garantiza transparencia en todas las interacciones»*, *«en ningún caso un adulto debe permanecer solo con un niño»*) descarta la op2, que codifica el error real de buscar privacidad. El enunciado añade *«delante de todos»* para fijar la escena.
>
> **Pendiente para el auditor doctrinal:** la frase anterior se atribuía a §11.10, p. 79. La alternativa a esta reescritura sería llevar esas tres conductas **al cuerpo** de la lección con su cita, en vez de evaluarlas sin enseñarlas. Lo decide el orquestador.

**Logro final:** 🐻✨ "Viejo Lobo de Familia" (`unlockOnModule: -1`).

---

## 5. Logros (achievements)

| id | Nombre | Emoji | `unlockOnModule` |
|---|---|---|---|
| `achievement-1` | Me paro como mediador | 🧒 | 2 |
| `achievement-2` | Digo la Promesa y la Ley | 🤝 | 3 |
| `achievement-3` | El juego es mi método | 🎲 | 4 |
| `achievement-4` | Sostengo el Círculo | 🐾 | 5 |
| `achievement-5` | Hablo el idioma de la Selva | 📖 | 6 |
| `achievement-6` | Acompaño su crecimiento | 🌱 | 7 |
| `achievement-7` | Viejo Lobo de Familia | 🐻✨ | -1 |

---

## 6. Conexiones cross-course

### 6.1 Hacia atrás (dentro de la Línea PJ)
- **Curso 5 (Método Scout)** — los 8 elementos, aquí aterrizados a 5–6 años: L4 es *Aprender Haciendo*; L5, *Sistema de Equipos*; L6, *Marco Simbólico*.
- **Curso 6 (PNPJ y Modelo de Aplicación)** — DURASLID y las 6 áreas de crecimiento. La L7 explica cómo esas seis se vuelven cinco dimensiones en esta rama.
- **Curso 7 (Mi Compromiso)** — el plan personal sugiere el curso de rama; este es el de quien sirve en Familia.

### 6.2 Hacia adelante (dentro del Nivel 2)
- **Curso 8 (Manada)** — **empalme directo**: la Ceremonia de Paso con la que cierra la L7 es el punto donde arranca Manada. Salomé sale del Cubil; Andrés entra a la Manada por la misma puerta.
- **Curso 13 (Seguimiento de la Progresión Personal)** — las cinco Dimensiones y las Dentelladas se acompañan con las herramientas de ese curso.
- **Curso 14 (Planeación de Reuniones)** — la Hoja de Ruta y el Botón A Salvo del Peligro aplicados a una reunión de Familia.

### 6.3 Cross-línea
- **Políticas Transversales, Curso 03 (`adulto-garante-entorno-seguro`)** — la conducta ante una revelación, la posición de garante y el límite del rol. Este curso **enlaza y no reexplica** (ADR-038). *Pendiente de secuencia: esa línea está en repo privado y sin publicar, así que hoy el estudiante no puede llegar.*
- **Curso 25 (A Salvo del Peligro aplicado al Programa)** — protocolo de actividades, transporte y pernoctas. Recomendado en paralelo; **no habilitante** (ADR-019).

---

## 7. Tipos de sección utilizados

| Tipo | Usos | Para qué |
|---|---|---|
| `paragraph` | 48 | Cuerpo explicativo |
| `heading` | 23 | Estructura interna de cada lección |
| `info-box` | 18 | Idea central, anti-definición, avisos |
| `policy-quote` | 16 | Textos oficiales con fuente y página del PDF |
| `list` | 7 | Enumeraciones (actividades rectoras, dimensiones, fases, dentelladas, reglas) |
| `method-grid` | 2 | Los tres roles del adulto (L2) y las tres ceremonias (L6) |
| `mission-box` | 2 | Cierre de intro y cierre de curso |

**Total: 116 secciones**, repartidas 6 · 10 · 14 · 10 · 15 · 13 · **32** · 16. *(Contadas sobre el JSON el 15-sep-2026, después de la auditoría pedagógica. Las cifras anteriores de esta tabla —47 `paragraph` y 8 `list`— venían de la reconstrucción del diseño y estaban desfasadas en uno; manda el JSON.)*

> Las **16** `policy-quote` traen `label` propio, así que la etiqueta por defecto del motor (*«Ver lo que dice la política textualmente»*) no se dispara — lo cual importa porque una Guía de Dirigente no es una política.
>
> Las **cuatro últimas** son de la mitigación de H4: citas que ya estaban en el curso, en línea dentro de un `paragraph` de la L7, movidas a su propio contenedor **sin cambiar una palabra ni una página**. Todas las páginas se citan «del PDF», por la razón del encabezado de este documento.

---

## 8. Multimedia requerido

Ninguno en la v1. Si más adelante se consigue material de la DNPJ, los candidatos naturales son: una foto real de un Círculo de Familia y el esquema del Saludo del Cachorro.

---

## 9. Validación contra el marco metodológico

| Criterio | Cómo lo cumple |
|---|---|
| **Microlearning** | 8 lecciones de 3–6 min. La más larga (L7) queda en la banda de 5–7 min, así que no hace falta partirla. ⚠️ **La auditoría pedagógica discute esta fila** (H4 y H12): mide la L7 en ~1.126 palabras / 32 secciones y estima ~11 min, y el curso entero en ~46 min al ritmo implícito de Manada. **Decisión humana pendiente — ver §10.** |
| **Anti-definición antes de la definición** | L1 dice qué **no** es la Familia; L3 desmonta «la Ley está incompleta»; L4, «el juego es el premio»; L6, «el marco simbólico ambienta»; L7, «la progresión es una carrera». |
| **Aprendizaje de adultos (Knowles)** | Cada lección cierra en algo aplicable el sábado siguiente; las reflexiones piden un caso propio. |
| **Auto-eficacia (Bandura)** | Las reflexiones hacen **ensayar** la conducta (la instrucción en idioma de Selva, la pregunta sin votación, el plan de adultos de la próxima salida), no juzgarla. Desde la auditoría pedagógica son **6 de 7**: la de la L7 dejó de diagnosticar y pide ahora una cosa concreta que mirar la próxima reunión (H8). |
| **Quizzes de escenario** | **12 de 14** describen una situación concreta con personas y piden decidir — medido, no estimado. Las dos excepciones (**L6-P2** y **L7-P2**) verifican texto oficial. *(Antes eran 10 declaradas y **9 reales**: L5-P2 describía una escena pero no pedía decidir. H2, H5 y H11 cerraron esa brecha.)* |
| **Educación por el amor** | Ningún distractor ridiculiza al adulto: todos son errores bienintencionados y frecuentes (abotonar el pelaje, camadas fijas, el juego como premio, comparar insignias). |
| **Ejemplifica el Método que enseña** | El curso usa el marco simbólico como hilo (Salomé, el Cubil, la Selva) en vez de hablar de él desde afuera. |
| **Compuertas de paridad** | **0/14 en las dos** (extremo de longitud y oveja negra). La tercera compuerta, sesgo de longitud, queda en 7/14 — el umbral salta en 8. **Vuelto a medir después de aplicar la auditoría pedagógica: 0/14 · 0/14 · 7/14, idéntico.** Cambió la composición del sesgo, no el número: sale L5-P2 (reescrita) y entra L8-P2 con margen +4 sobre el distractor más largo, muy por debajo de los 12 caracteres que activan la compuerta de extremo. Ninguna reescritura alargó una opción correcta. |

---

## 9-bis. Auditoría pedagógica (15-sep-2026)

**Primera pasada:** APTO CON MEJORAS MENORES — 2 altos, 7 medios, 4 bajos. **Re-auditoría: APTO.**

| Métrica | Antes | Después |
|---|---|---|
| Preguntas de escenario | 9/14 *(el diseño declaraba 10 — estaba inflado en 1)* | **12/14** |
| Comprensión/aplicación por demanda real | 7/14 | **10/14** |
| Recall efectivo | 7/14 | **4/14** |
| Respuestas calcadas del texto | 5 | **4** |
| Extremo de longitud · Oveja negra · Sesgo de longitud | 0 · 0 · 7 | **0 · 0 · 7** |

**Los dos hallazgos altos, que son los que enseñan algo:**

- **H1 — el quiz de L8 evaluaba una conducta que la lección nunca enseñó.** La opción correcta exigía *agacharse a su altura*, *sin cargarla ni levantarla* y *siempre a la vista*: **cero apariciones en el cuerpo de la lección**. El adulto podía descartar la prohibición total, pero entre las otras dos no tenía con qué decidir. Grave por dónde estaba: última pregunta del curso, sobre contacto físico con niños de cinco años, justo donde §7.2 pide no atrapar al adulto. **Y tiene una historia:** esa opción la introdujo la *corrección doctrinal* (M4) para que el quiz fuera fiel a §11.10. Al serlo, creó el defecto pedagógico. Reescrita con tres discriminadores que la lección **sí** enseña y cita.
- **H2 — el quiz de L3 preguntaba por contenido de L6.** Reemplazado por una decisión real sobre la segunda fórmula de la Promesa, que es lo que L3 sí enseña a fondo.

**Y el que más sorprende: el hook existía y el estudiante nunca lo leía.** Cero apariciones en el JSON — vivía solo en este documento. Ahora se enuncia textual en L1 y cierra con eco **literal** en el `mission-box` de L8.

**Lo demás aplicado:** el recuento de escenarios estaba inflado en 1 (L5-P2 describía una escena pero no pedía decidir) · dos de las cinco promesas de L1 se cumplían a medias · **Salomé desaparecía en L4, L5 y L6** — justo en la lección que argumenta que el marco simbólico no es decoración — y ahora además **habla** en L5 · la reflexión de L7 cerraba en un déficit sin acción y dejaba fuera a quien aún no tiene unidad · el puntero a Transversales avisa de que esa línea aún se construye · y un distractor de relleno en L7-P1.

**Colateral de la propia mitigación, que vale registrar:** al plegar cuatro citas largas de L7 en `policy-quote` —que el motor renderiza como `<details>` **sin** `open`— el flujo visible perdió el antecedente de *«esa edad»* y la reformulación de la Etapa de Transición. **Mover texto de contenedor no es gratis cuando el contenedor se cierra solo.** Ambos restituidos.

**Pendiente de decisión humana:** partir la L7 (1.126 palabras, 32 secciones) y, con ello, la duración declarada. El auditor calcula ~46 min reales contra los 40 declarados, y partirla llevaría a 9 módulos y ~44 min, por encima del tope del CHECKLIST. **El punto de corte es el `heading` «Las cinco Dentelladas», sección 16 de 32.**

**Nota de motor, fuera de este curso:** con 2 preguntas por quiz, `engine.core.js` anuncia *«Necesitas 70% para continuar»* cuando en la práctica es 100%. Afecta a los 19 cursos publicados de las tres líneas.

---

## 10. Estado

1. ~~Diseño~~ · ~~JSON~~ · ~~Build~~ — hechos.
2. ~~**Auditoría doctrinal**~~ — hecha el 15-sep-2026: **REQUIERE CORRECCIÓN** (4 críticos, 7 mayores, 13 menores). Correcciones aplicadas.
3. ~~**Re-auditoría**~~ — hecha el 15-sep-2026: **APTO CON CORRECCIONES MENORES** (0 críticos). Los menores se cerraron después.
4. ~~**Auditoría pedagógica**~~ — hecha el 15-sep-2026: primera pasada **APTO CON MEJORAS MENORES** (2 altos, 7 medios, 4 bajos); mejoras aplicadas y **re-auditoría APTO**. Escenarios 9/14 → **12/14**. Ver §9-bis.
5. **Pendiente: auditoría funcional** (suite E2E, sumando el `courseId` al workflow).
6. **Pendiente: compuerta humana**, y solo después `status: "active"` en `02-Plataforma-Web/cursos.json`.

### 10.1 Decisiones humanas abiertas de la auditoría pedagógica

| # | Qué decide | Por qué no se aplicó |
|---|---|---|
| **H4** | **Partir la L7** — el informe propone el corte entre las secciones 12 y 13 de la numeración vieja, es decir **justo antes del `heading` «Las cinco Dentelladas»**. ⚠️ Los índices del informe (0–12 / 13–25) **ya no sirven**: al aplicar la mitigación la lección pasó de 26 a 32 secciones y ese `heading` es ahora la **[16]**. | Es estructural: lleva el curso a **9 módulos** y **16 preguntas**, y con eso a ~44 min, por encima del tope de 40 del CHECKLIST. Lo decide Máximo. **La mitigación sí se aplicó** (las cuatro citas a `policy-quote`), y es independiente de esta decisión. |
| **H12** | **La duración declarada.** Va junto con H4. | El cuerpo es 47 % mayor que el de Manada pero declara solo 14 % más tiempo; al ritmo implícito de Manada son ~46 min y la L7 sola ~11, no 6. El auditor sugiere **45 min** si se parte la L7, o subir la L7 a 8 min y el curso a 45 si no. **`duration` se dejó en «40 minutos»**, y ni la `description` ni el `info-box` de la L1 se tocaron en lo que respecta al tiempo. |
| **Motor** | El umbral del 70 % de `engine.core.js`. | Con 2 preguntas por quiz el motor anuncia *«Puntuación: 50%. Necesitas 70% para continuar»* — un 70 % que en la práctica es 100 %. **Afecta a las tres líneas y a los 19 cursos publicados**, así que no se toca desde un curso: se trata aparte, en `_MOTOR/`. |

### 10.2 Para el auditor doctrinal (abierto por la auditoría pedagógica)

1. **L8-P2** — la correcta anterior afirmaba tres conductas (*agacharse a su altura*, *sin cargarla ni levantarla*, *siempre a la vista*) que el cuerpo de la L8 no enseña; el diseño las atribuía a §11.10, p. 79. La reescritura de H1 evita el problema usando solo reglas ya citadas en la lección. **La alternativa —llevar esa frase al cuerpo con su cita— la decide el orquestador.**
2. **H6-A** — confirmar que pedir «cuántos adultos según la proporción» para una salida concreta no exige matices (transporte, pernocta) que este curso remite al Curso 25.
3. **Mitigación de H4** — las cuatro citas nuevas quedan **plegadas por defecto** por ser `policy-quote`. Verificar si alguna debía quedar siempre visible. Y cotejar la única normalización tipográfica que se hizo al moverlas: **punto final** en las tres que son oración completa, y **puntos suspensivos** de elisión en las que son fragmento (§8.6 p. 57, §8.15 p. 67, §8.15 p. 68), siguiendo la convención que el curso ya usaba en §5.2.3 y §6.4. **No se cambió ninguna palabra, cifra ni página.**
