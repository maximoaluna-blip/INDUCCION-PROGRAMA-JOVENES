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
| Duración | **40 minutos** |
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

---

## 3. Hook pedagógico

> **«A los cinco años no se aprende escuchando. Se aprende jugando — y eso no es una concesión a la edad: es el método.»**

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

**Total: 40 minutos.** *(Medido sobre el texto real del JSON, no estimado: ~5.400 palabras ≈ 34 min de lectura pura más reflexiones y quizzes. La L7 sola pasa de 1.100 palabras. Para calibrar: Manada, publicado con «35 minutos», tiene 3.898 palabras.)*

---

### 4.2 Lección 1 — 🐾 Bienvenida al Cubil (3 min, `isIntro: true`)

**Idea central:** este no es un curso sobre cuidar niños pequeños; es sobre educarlos.

1. **`info-box`** — ⏱️ ~40 minutos, con lo que el adulto va a poder hacer al final.
2. **`paragraph`** — Salomé, 5 años, primer día en el Cubil; dentro de dos años cruza hacia la Manada, que es donde arranca el Curso 8.
3. **`paragraph`** — El malentendido a desarmar: *«a los cinco años todavía no se puede hacer escultismo de verdad; toca esperar a que crezcan»*.
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

**Quiz (2):** P1 — un papá dice que la Ley «está incompleta» ✅ *no es una ley distinta ni recortada, es la misma síntesis en el lenguaje de un niño de cinco años*. P2 — en la Investidura el Cachorro ✅ *recibe su pelaje y realiza su Promesa*.

**Logro:** 🤝 "Digo la Promesa y la Ley".

---

### 4.5 Lección 4 — 🎲 El juego: así se aprende a los cinco años (5 min)

**Idea central:** el juego no es el envoltorio del Método. En primera infancia, el juego *es* el Método.

`info-box` · `paragraph` (los dos usos que lo desperdician: premio y relleno) · **`policy-quote`** §4.11, p. 27 — *«Para el Escultismo, el juego es la forma más cercana del elemento del Método Scout "Aprender haciendo"»* · `heading` «Las cuatro actividades rectoras» · `paragraph` (las *«actividades rectoras»* que el MEN propone para la primera infancia — la palabra queda **fuera** de las comillas porque el original dice «propuesta», errata de la fuente) · **`list` de 4**: Juego · Literatura · Arte · Exploración del medio · `info-box` (esto alinea la rama con el referente pedagógico nacional) · `heading` «DURASLID en la Familia» · `paragraph` (los ocho atributos aterrizados a la edad, §4.9–4.10, pp. 23–25) · `paragraph` (la prueba de fuego: quita el juego; si la actividad sigue igual, era decoración).

**Reflexión:** la última reunión de tu unidad — ¿el juego era el método o el premio? Rediseñarla.

**Quiz (2):** P1 — actividad sobre cuidar la naturaleza ✅ *salida a buscar «tesoros de la selva»*. P2 — las cuatro actividades rectoras ✅ *juego, arte, literatura y exploración del medio*.

**Logro:** 🎲 "El juego es mi método".

---

### 4.6 Lección 5 — 🐾 Camadas, Círculo de Familia y Encuentro del Cubil (5 min)

**Idea central:** a los cinco años el sistema de equipos ya funciona — pero con otra forma que en las ramas mayores.

`info-box` · **`heading` «El Sistema de Familia»** · `paragraph` (el sistema de la rama tiene nombre propio: *todos comparten el mismo espacio*; §5.2.1, p. 29) · `heading` «Las Camadas» · `paragraph` (son **ratos, no estructura**, y **no tienen jefe**: *«no son dirigidas por ningún Cachorro, ni Viejo Lobo»*) · **`policy-quote`** §5.2.2, p. 29 · `paragraph` (se nombran por cualidades, con lema elegido por ellos; *«escoger valores no es una camisa de fuerza»*) · `info-box` (ojo con traer el molde de la Manada: las seisenas son estables, las Camadas no) · `heading` «El Círculo de Familia» · **`policy-quote`** §5.2.3, p. 29 · `paragraph` (el que dirige va en el centro; los demás Viejos Lobos **detrás, como símbolo de protección**) · `heading` «El Encuentro del Cubil» · **`policy-quote`** §5.4, p. 32 · `paragraph` (lo conforman todos; los adultos *«facilitan la expresión simbólica, lúdica y afectiva»*) · `paragraph` (no es una asamblea en miniatura).

**Reflexión:** cómo preguntarle a tu unidad qué quiere hacer, sin levantar la mano y votar.

**Quiz (2):** P1 — Camadas fijas todo el año ✅ *son grupos voluntarios que pueden tener distintos integrantes*. P2 — los demás Viejos Lobos en el Círculo ✅ *detrás, como símbolo de protección*.

**Logro:** 🐾 "Sostengo el Círculo".

---

### 4.7 Lección 6 — 📖 Los Hermanos de Mowgli y el Eo-Wawa (5 min)

**Idea central:** el marco simbólico es el idioma en que ocurre la unidad, no su decoración.

`info-box` · **`paragraph` — el nombre correcto primero**: el marco simbólico de la Familia se llama **la Fantasía** y su ambiente de referencia son los **Relatos Infantiles** (§6.1, p. 35). La historia que lo llena es Los Hermanos de Mowgli · **`policy-quote`** §6.3.1, pp. 36–37, con `label` **«📋 Por qué Los Hermanos de Mowgli no es decoración»** — *«…no es simplemente un cuento para ambientar reuniones; es el fundamento simbólico que da identidad, coherencia y profundidad a la Rama Cachorros»* · `paragraph` (Familia y Manada **comparten** el Libro como **fondo motivador**; lo propio de Familia es el capítulo de los Hermanos de Mowgli y los Nombres de Caza) · `heading` «El Eo-Wawa» · **`policy-quote`** §6.4, p. 38 · `paragraph` (se hace siempre que haya motivo para celebrar; «Siempre Alegres» volviéndose práctica) · `heading` **«Las ceremonias»** · `paragraph` con la cita literal de §6.5, p. 42: *«Existen **tres ceremonias básicas**…»* · **`method-grid` de 3**: 🎽 Investidura · 🏅 **Fase Máxima de Progresión** (§6.5, p. 42 y §8.14, p. 67) · 🚪 Paso · `paragraph` (esas tres van ante el Grupo Scout; dentro del Cubil hay dos más: dentelladas y fases de progresión) · `paragraph` (la huella, §6.6.1, p. 42) · `info-box` (el riesgo: usar el marco como adorno en vez de como el idioma en que se dan las instrucciones).

**Reflexión:** escribir una instrucción cotidiana de tu unidad dicha en el idioma de la Selva.

**Quiz (2):** P1 — «el marco simbólico está bien para ambientar» ✅ *no ambienta la actividad: es el lenguaje en el que ocurre*. P2 — el Eo-Wawa ✅ *el grito de felicidad de los Cachorros*.

**Logro:** 📖 "Hablo el idioma de la Selva".

---

### 4.8 Lección 7 — 🌱 Cómo crece un Cachorro (6 min)

**Idea central:** la progresión no es una carrera. Es un camino con tres tramos y cinco huellas.

`info-box` · `heading` «Las cinco Dimensiones» · `paragraph` con la definición literal (§8.5, p. 54) · **`list` de 5**: Corporal · Cognitiva · Ética · Socio-Afectiva · Espiritual · `paragraph` (por qué en el Curso 6 eran seis áreas y aquí cinco dimensiones) · **`list` del mapeo** (p. 55): Corporalidad→Corporal · Creatividad→Cognitiva · Carácter→Ética · **Sociabilidad + Afectividad→Socio-Afectiva** · Espiritualidad→Espiritual · `paragraph` (no son dos sistemas que compiten) · `heading` **«El camino del Cachorro»** · `paragraph` (Etapa de Adaptación, ~2 meses, §8.6, p. 57) · `heading` «Los tres tramos» · `paragraph` (*«estas fases no representan grados rígidos ni comparaciones entre compañeros»*) · **`list` de 3**: 👁️ **Mirada de Raksha** → Reconoce · 🐺 **Aullido de Papá Lobo** → Expresa · 🐾 **Fuerza del Cubil** → Comparte · `paragraph` (tres fases, tres verbos — §8.6, p. 56 y §8.7, pp. 59–60 — y a cada verbo del niño le corresponde uno tuyo: **Apoyar** en Reconoce, **Acompañar** en Expresa, **Enlazar** en Comparte) · `heading` «Las cinco Dentelladas» · `paragraph` · **`list` de 5**: 💧 Agua (corporalidad) · 🌱 Tierra (creatividad) · 🔥 Fuego (carácter) · 😊 Felicidad (afectividad y sociabilidad) · 🌬️ Aire (espiritualidad) · `info-box` **«Y sí, son insignias»** (la Guía **recomienda** entregarlas de a una; lo que niega es otra cosa: *«no es un sistema de requisitos acumulativos»*, p. 56) · `heading` **«¿Y cómo se pasa de una fase a la otra?»** · `paragraph` (Dentelladas **y especialidades**: una para el Aullido de Papá Lobo, tres para la Fuerza del Cubil — §8.6, p. 58) · `paragraph` (la fórmula: **SABE** 2 · **DEMUESTRA** 2 · **COMPARTE** 1; *«4 a 6 semanas»*, *«no necesita trámites complejos»*; sale del interés del niño — §8.10, pp. 63–64) · `info-box` 🎖️ (las especialidades **no llevan insignia**: *«no cuentan con insignias físicas; sin embargo, es fundamental reconocer y valorar los logros»*; ahí está **Enlazar** en esta rama) · `paragraph` (Etapa de Transición, **Cachorro Explorador**, §8.15, p. 67) · `paragraph` (el paso *«al cumplir los 7 años»*, con flexibilidad *«máxima de hasta tres meses»*, §8.15, p. 68) · `heading` «Qué esperamos al final» · **`policy-quote`** §8.3, p. 53 (perfil de egreso) · `info-box` 🐺 (aquí Salomé cruza la Ceremonia de Paso; del otro lado empieza el Curso 8 con Andrés).

**Reflexión:** un Cachorro concreto, con nombre y cara: ¿en cuál de las cinco dimensiones lo has visto crecer, y en cuál no te has fijado nunca?

**Quiz (2):** P1 — el Viejo Lobo que lleva la cuenta de insignias **y las compara** ✅ *la progresión se acompaña por dimensiones y ritmos propios, no como una carrera*. P2 — la Etapa de Adaptación ✅ *dos meses*.

> **Nota sobre P1:** el fallo que la pregunta señala es **la comparación**, no el registro. Llevar registro es legítimo (§8.9, p. 62); comparar está desaconsejado en tres lugares distintos de la Guía (§8.6 p. 57, §8.12 p. 66, §8.13 p. 67). Por eso la pregunta sigue siendo correcta después de que la lección enseñe que las Dentelladas sí son insignias.

**Logro:** 🌱 "Acompaño su crecimiento".

---

### 4.9 Lección 8 — 🛡️ Un Cubil seguro y tu primer paso (5 min)

**Idea central:** con niños de cinco años, la regla de los dos adultos no es un trámite. Es parte de la actividad.

`info-box` · `heading` «Las reglas que no se negocian» · **`policy-quote`** **§11.7 Presencia Mínima de Adultos**, p. 78 — *«siempre deben estar presentes al menos dos adultos… un adulto por cada cinco Cachorros; en ningún caso un adulto debe permanecer solo con un niño o con la Familia»* *(la Guía numera **dos** secciones distintas como §11.7 en esa misma página, por eso la cita lleva el nombre)* · `paragraph` (los tres propósitos: protege a los menores, protege a los Viejos Lobos, garantiza transparencia) · `paragraph` (contacto físico: *«debe evitarse de manera general»*; *«en lo posible, se debe advertir previamente al niño»*, §11.10, p. 79) · `paragraph` · **`list` de 3**: 🚻 el baño (*«únicamente hasta la puerta»*, nunca entrar) · 👶 esfínteres (*«exclusivamente los padres o acudientes»*) · 🤝 entrega y recepción (*«por ningún motivo se permite que el niño se retire solo»*) — §11.9, pp. 78–79 y §11.7 *Responsabilidad y Custodia*, p. 78 · `heading` «Los padres, aliados» · **`policy-quote`** §1.4, p. 11 · `paragraph` (aliado no es codirigente: *«no está orientada a dirigir, corregir o intervenir en la dinámica pedagógica»*) · `info-box` 🔗 **dónde sigue esto** (la conducta ante una revelación la enseña Transversales, Curso 03 — ADR-038) · `paragraph` (la ruta existe y tiene nombre: botón **«Me Pongo A Salvo del Peligro»** y `asalvodelpeligro@scout.org.co`, §11.5, p. 77) · `heading` «¿Vas a abrir una Familia?» · `paragraph` (DNPJ-2026-065) · **`list` ordenada de 3**: Intención · Decisión · Acción · `mission-box` 🎯 (tu primer paso: una sola cosa el sábado).

**Reflexión / compromiso:** tres cosas cortas — el Nombre de Caza, UNA cosa que vas a cambiar en la próxima reunión, y cómo vas a verificar la regla de los dos adultos antes de la próxima salida.

**Quiz (2):** P1 — salida con 12 Cachorros ✅ *tres adultos, porque la proporción es de uno por cada cinco*. P2 — Salomé corre a abrazar a su Viejo Lobo ✅ *agacharse a su altura y devolver el abrazo así, sin cargarla ni levantarla, y siempre a la vista* (§11.10, p. 79).

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
| `paragraph` | 47 | Cuerpo explicativo |
| `heading` | 23 | Estructura interna de cada lección |
| `info-box` | 18 | Idea central, anti-definición, avisos |
| `policy-quote` | 12 | Textos oficiales con fuente y página del PDF |
| `list` | 8 | Enumeraciones (actividades rectoras, dimensiones, fases, dentelladas, reglas) |
| `method-grid` | 2 | Los tres roles del adulto (L2) y las tres ceremonias (L6) |
| `mission-box` | 2 | Cierre de intro y cierre de curso |

> Las **12** `policy-quote` traen `label` propio, así que la etiqueta por defecto del motor (*«Ver lo que dice la política textualmente»*) no se dispara — lo cual importa porque una Guía de Dirigente no es una política.

---

## 8. Multimedia requerido

Ninguno en la v1. Si más adelante se consigue material de la DNPJ, los candidatos naturales son: una foto real de un Círculo de Familia y el esquema del Saludo del Cachorro.

---

## 9. Validación contra el marco metodológico

| Criterio | Cómo lo cumple |
|---|---|
| **Microlearning** | 8 lecciones de 3–6 min. La más larga (L7) queda en la banda de 5–7 min, así que no hace falta partirla. |
| **Anti-definición antes de la definición** | L1 dice qué **no** es la Familia; L3 desmonta «la Ley está incompleta»; L4, «el juego es el premio»; L6, «el marco simbólico ambienta»; L7, «la progresión es una carrera». |
| **Aprendizaje de adultos (Knowles)** | Cada lección cierra en algo aplicable el sábado siguiente; las reflexiones piden un caso propio. |
| **Auto-eficacia (Bandura)** | Las reflexiones hacen **ensayar** la conducta (la instrucción en idioma de Selva, la pregunta sin votación, la verificación de los dos adultos), no juzgarla. |
| **Quizzes de escenario** | 10 de 14 describen una situación concreta con personas y piden decidir. Las cuatro excepciones (L3-P2, L4-P2, L6-P2, L7-P2) verifican texto oficial. |
| **Educación por el amor** | Ningún distractor ridiculiza al adulto: todos son errores bienintencionados y frecuentes (abotonar el pelaje, camadas fijas, el juego como premio, comparar insignias). |
| **Ejemplifica el Método que enseña** | El curso usa el marco simbólico como hilo (Salomé, el Cubil, la Selva) en vez de hablar de él desde afuera. |
| **Compuertas de paridad** | **0/14 en las dos** (extremo de longitud y oveja negra). La tercera compuerta, sesgo de longitud, queda en 7/14 — el umbral salta en 8. |

---

## 10. Estado

1. ~~Diseño~~ · ~~JSON~~ · ~~Build~~ — hechos.
2. ~~**Auditoría doctrinal**~~ — hecha el 15-sep-2026: **REQUIERE CORRECCIÓN** (4 críticos, 7 mayores, 13 menores). Correcciones aplicadas.
3. ~~**Re-auditoría**~~ — hecha el 15-sep-2026: **APTO CON CORRECCIONES MENORES** (0 críticos). Los menores se cerraron después.
4. **Pendiente: auditoría pedagógica** (`/auditar-pedagogia rama-familia-cachorros`).
5. **Pendiente: auditoría funcional** (suite E2E, sumando el `courseId` al workflow).
6. **Pendiente: compuerta humana**, y solo después `status: "active"` en `02-Plataforma-Web/cursos.json`.
