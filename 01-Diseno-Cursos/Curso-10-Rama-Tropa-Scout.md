# Diseño del Curso 10 — ⚜️ Rama Tropa Scout

**Línea:** Programa de Jóvenes · **Nivel:** 2 (Profundización por rama y práctica pedagógica) · **Posición:** tercer curso de rama construido, después de Manada (8) y Familia (9).

> La rama de la adolescencia temprana: **11 a 14 años**. Se llama **Rama Scouts**; su unidad es la **Tropa**.

---

## 0. La situación de fuentes, que en esta rama es distinta

**Tropa es la única de las cinco ramas sin «Guía de Dirigente» 2026.** Lo que hay:

| Fuente | Qué cubre | Peso |
|---|---|---|
| **Guía de Buenas Prácticas para Jefes de Tropa** (DNPJ 2026, **Módulo 1**, 32 pp.) | Edad, presentación y buen orden, elementos de identidad, Sistema de Equipos, progresión y especialidades | **Angular** para lo propio de la rama |
| **Modelo de Aplicación 2026** (109 pp.) | Identidad de la rama, marco general | Manda en la estructura de secciones y ramas |
| **PNPJ 2024** | Promesa y Ley Scout completas | Textos oficiales |
| ~~Guía para el Dirigente de Tropa **2018**~~ | — | **Referencia histórica. NO se cita como vigente.** |

La propia Guía de Buenas Prácticas lo dice de sí misma (p. 3): *«una recopilación de los documentos que actualmente se encuentran **en proceso de revisión y actualización**»*, y sus temas *«serán socializados en los módulos organizados de nuestro INDABA NACIONAL»*. **Es Módulo 1 de una serie que aún no está completa.** Por eso este curso enseña a fondo lo que sí está documentado y **no rellena** lo que no.

### Tres discrepancias entre fuentes vigentes — resueltas a propósito, y marcadas

1. **La edad.** El **Modelo 2026 (p. 19 del PDF)** dice *«Sección 11 a 14 años: Rama Scouts»*. La **Guía de Buenas Prácticas (p. 4)** dice *«de 10 años de edad hasta los 14»*. **El curso enseña 11–14**, porque el Modelo es internamente consistente (5-6 · 7-10 · **11-14** · 15-17 · 18-20) y el «10» de la Guía **solaparía con la Manada**. Marcado para el auditor doctrinal.
2. **Cómo se llama el que recibe al Scout en Travesía.** La Guía (p. 4) dice *«compartiendo con los **Caminantes** de la rama»*; el Modelo llama a esa rama **Nómadas Scout**. **El curso evita el término obsoleto sin usar ninguno de los dos: dice siempre «la Comunidad»**, que es el nombre de la *unidad* y es igualmente correcto — verificado, cero apariciones de «Nómadas» y de «Caminantes». Marcado.
3. **El marco simbólico de la Tropa sigue sin fuente limpia**, y es un hallazgo abierto del proyecto (apareció auditando `metodo-scout-8-elementos`). Lo más cercano es la Guía, p. 8: *«la "aventura fantástica" que se vive en la tropa está relacionada con la toma de conciencia del scout de su propia naturaleza y trascendencia»* — pero la Guía **no lo llama marco simbólico**, y aparece dentro del bloque de ELEMENTOS DE IDENTIDAD, explicando el color verde. **Por eso el curso no dice nada del marco simbólico de la Tropa, ni cita esa frase: cero apariciones.** Es la decisión correcta mientras no haya fuente, y el Modelo la respalda (p. 19 del PDF): *«los pormenores específicos de cada rama —su marco simbólico, su organización interna, sus dinámicas y los recursos concretos para dirigentes— serán desarrollados en las Guías para Dirigentes de Rama»*. Tropa es justamente la rama que todavía no tiene una.

### Dos cosas que la Guía nombra pero no desarrolla — y que el curso no inventa

**El Consejo de Patrulla y la Corte de Honor de la Tropa.** La Guía (p. 9) los presenta como *«dos organismos de gobierno que están basados en la democracia representativa»* y ahí se detiene en una sola cosa: **no dice quién los compone**. De su funcionamiento sí deja rastro, y el curso lo usa: en el Consejo de Patrulla se eligen los cargos (p. 11) y se lleva un libro de actas que firman el Guía y el Tesorero (p. 13); en la Corte de Honor los Scouts deciden el lema de la Tropa (p. 8) y en qué ocasiones se porta la banda (p. 21). Y **tienen cero apariciones en el Modelo 2026** (verificado). El curso enseña que existen, qué son y para qué, **sin inventarles reglamento**.

---

> **Numeración:** Curso **10**, por el **ADR-043**. Cítalo por su `courseId`, `rama-tropa-scout`.
> **Sin cursos habilitantes** (ADR-019). Lo que hay son recomendaciones en la ficha.
> **Páginas citadas = páginas del PDF**, como en el Curso 9.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `rama-tropa-scout` |
| Título | Rama Tropa Scout |
| Subtítulo | Formación de Adultos Voluntarios — Asociación Scouts de Colombia |
| Icono | ⚜️ |
| Duración | *(se mide sobre el JSON al terminar, no se estima)* |
| Lecciones | 8 (1 intro + 7 de contenido) |
| Nivel | 2 · `order` 10 · `contentVersion` 2026-09-15 |
| Audiencia primaria | Jefes y subjefes de Tropa |
| Recomendado antes | Nivel 1 completo (Cursos 1–7) — **recomendado, no exigido** |
| Logro final | ⚜️✨ Jefe de Tropa |

**Hilo narrativo:** **Andrés**, el lobato del Curso 8, dio su **Gran Salto** y llega a la Tropa a los 11. A los 14 empezará su **Travesía** hacia la Comunidad — que es donde arrancará el Curso 11. La cadena queda completa: Salomé (Familia) → Andrés (Manada → **Tropa**) → Comunidad.

---

## 2. Objetivos del curso

1. **Distinguir** qué cambia a los 11 años y por qué lo que funcionaba en la Manada deja de funcionar.
2. **Decir** la Promesa Scout y los **diez** artículos de la Ley, y explicar por qué aquí ya son diez y en Familia eran dos.
3. **Formar** patrullas de 6 a 8 por afinidad, con Guía y Subguía elegidos por ellos, y repartir los cargos.
4. **Nombrar** los símbolos que construyen Espíritu de Patrulla y explicar para qué sirve cada uno.
5. **Conducir** una formación de Tropa con señales de silbato y de brazo.
6. **Acompañar** la progresión por sus **cuatro fases** y orientar la obtención de especialidades.
7. **Preparar** la **Travesía** de un Scout de 14 años hacia la Comunidad.

---

## 3. Hook pedagógico

> **«En la Manada ellos decidían contigo. En la Tropa deciden solos — y tu trabajo es que eso salga bien.»**

El error más común del adulto que pasa de Manada a Tropa es seguir siendo el centro. La Guía es explícita en que la patrulla se forma **por afinidad**, elige a su **Guía**, y funciona *«como una máquina donde cada integrante es un piñón vital»*. El Jefe de Tropa no conduce la patrulla: conduce a los Guías.

**Se enuncia textualmente en la L1 y cierra con eco literal en la L8.** *(Lección del Curso 9: allí el hook existía y el estudiante nunca lo leía.)*

*(Hook corregido el 15-sep-2026 por la auditoría doctrinal. El anterior —«en la Manada tú dirigías el juego»— contradecía al **Curso 8**, que está publicado y enseña que en la Manada las decisiones se toman en el **Consejo de Roca**, hasta el punto de marcar como respuesta correcta de quiz «voy a preguntar en el Consejo de Roca quién quiere proponer el juego». Es el tipo de contradicción entre cursos de una misma línea que persigue el **ADR-044**. Lo que cambia de Manada a Tropa no es quién decide, sino la **escala y la formalidad** de esa autonomía.)*

---

## 4. Estructura de lecciones

| # | Lección | Idea central |
|---|---|---|
| 1 | 🏕️ Bienvenida a la Tropa | Andrés llega. Esto ya no es la Manada. `isIntro: true` |
| 2 | 🧭 Qué cambia a los once | La edad de la rama y el adulto que deja de ser el centro |
| 3 | 🤝 La Promesa y la Ley, completas | Aquí ya son diez artículos, y eso es el punto |
| 4 | ⚜️ La Patrulla: la célula de la Tropa | 6 a 8, por afinidad, Guía y Subguía, y todos con cargo |
| 5 | 🔥 Espíritu de Patrulla | Animal, grito, lema, banderín, Libro de Oro, rincón — y los dos órganos de gobierno |
| 6 | 📯 Presentación y buen orden | Silbato en Morse, señales de brazo, formaciones. «El Grande Protege al Pequeño» |
| 7 | 🎖️ Cómo crece un Scout | Cuatro fases: Vigía, Explorador, Excursionista, Expedicionario. Desafíos + Especialidades |
| 8 | 🌄 La Travesía y tu primer paso | El paso a la Comunidad a los 14, la Insignia de Paso, y el compromiso |

---

### 4.2 Lección 1 — 🏕️ Bienvenida a la Tropa (`isIntro: true`)

`info-box` (duración + lo que va a poder hacer) · `paragraph` (Andrés, 11 años, acaba de dar el Gran Salto desde la Manada; a los 14 empieza la Travesía) · `paragraph` **con el hook textual** y «todo este curso sale de esa frase» · `info-box` anti-definición — la Tropa **no** es «la Manada con niños más grandes», **no** es una unidad militar aunque tenga formaciones y silbatos, **no** es un club de campamentos · `paragraph` (lo que sí es: una unidad con Promesa y Ley completas, gobierno propio y un sistema donde los jóvenes mandan de verdad) · `mission-box` (cada lección termina en algo que probar el sábado).

---

### 4.3 Lección 2 — 🧭 Qué cambia a los once

**Idea central:** el adulto deja de ser el centro, y eso no es soltar: es otro trabajo.

`info-box` · `heading` «La edad de la rama» · **`policy-quote`** Modelo §4.2, p. 19 — *«Sección 11 a 14 años: Rama Scouts. Es la rama de la adolescencia temprana, en la que la vida en patrullas y la aventura al aire libre permiten experimentar la autonomía, el liderazgo y la cooperación activa.»* · `paragraph` (los tres sustantivos de la cita: autonomía, liderazgo y cooperación) · `paragraph` (**rama y unidad no son lo mismo**: la rama se llama **Scouts** y la unidad **Tropa**; por eso decimos «Jefe de Tropa» y no «Jefe de Scouts») · `paragraph` (qué trae la adolescencia temprana: el lobato decide **dentro** del juego que tú propones; el Scout quiere decidir **cuál** es el juego) · `heading` «Entonces, ¿qué haces tú?» · `paragraph` (no conduce la patrulla: conduce a los **Guías**; las funciones del Guía en la Guía, p. 11, citadas **en infinitivo** como están en la fuente) · `paragraph` (**los tres roles del dirigente** — *apoyar, acompañar y enlazar*, Modelo Cap. 9, p. 58 — dichos en clave de Tropa) · **`method-grid` de 3** — **Lo que hacías en la Manada** (llevabas las decisiones al Consejo de Roca y sostenías el marco) · **Lo que ya no funciona** (decidir por ellos: a los 11 lo leen como desconfianza) · **Lo que sí funciona** (preparar a los Guías y dejar que la patrulla se equivoque).

**Reflexión:** piensa en la última vez que decidiste algo que la patrulla podía haber decidido. ¿Qué habría pasado si te aguantas?

**Quiz (2):** escenario sobre un Guía que planea mal una actividad · escenario sobre un adulto que reparte las patrullas él mismo.

---

### 4.4 Lección 3 — 🤝 La Promesa y la Ley, completas

**Idea central:** en Familia eran dos artículos; aquí son diez, y el salto es el punto.

`info-box` · **`policy-quote`** PNPJ §4.4 — la **Promesa Scout** literal · `paragraph` · `heading` «La Ley Scout» · **`policy-quote`** PNPJ §4.5 — **los diez artículos** · `paragraph` (por qué diez y no dos: a los 11 años ya se puede sostener un código largo, y la Ley deja de ser una síntesis para volverse un texto que se discute) · `info-box` (el puente con las otras ramas: el Cachorro tenía dos, el Lobato su Ley propia, el Scout los diez completos — es la misma Ley creciendo con quien la vive).

**Reflexión:** escoge **un** artículo de los diez y escribe cómo se lo explicarías a Andrés con un ejemplo de su patrulla, no con una definición.

**Quiz (2):** escenario sobre un Scout que pregunta por qué la Ley cambió al pasar de rama · verificación del texto de la Promesa.

---

### 4.5 Lección 4 — ⚜️ La Patrulla: la célula de la Tropa

**Idea central:** la patrulla no se arma: se deja armar.

`info-box` · **`policy-quote`** Guía p. 9 — *«La patrulla es la célula de la Tropa pues allí es donde se experimenta la vida de grupo…»* · `paragraph` (**mínimo 6, máximo 8**; *«no se debe forzar a los y las scouts a pertenecer a una patrulla en la cual ellos no se sientan cómodos»*; se agrupan **por afinidad de gustos y lazos de amistad**; pueden ser **heterogéneas en edades y sexo**) · `heading` «Guía y Subguía» · `paragraph` (los elige **la patrulla**; funciones del Guía según la Guía p. 11: representar, contacto directo con el Jefe de Tropa, planear, mantenerse informado, velar por que el sistema funcione) · **`policy-quote`** Guía p. 11 — el Sistema de Patrulla *«como una máquina donde cada integrante es un piñón vital»* · `paragraph` (**el Sistema de Patrulla es el Sistema de Equipos en la Tropa** — uno de los 8 elementos del Curso 5, y así titula la Guía esa sección, p. 9) · `heading` «Los cargos» · `paragraph` (la Guía los ordena en **cargos de ciudad** y **de campamento**, y solo los **seis de ciudad** llevan apodo) · `paragraph` (**los cargos no los reparte el adulto**: se eligen en el **Consejo de Patrulla**, libremente y por aptitud, y **rotan de 6 a 12 meses** — Guía, p. 11) · `list` de cargos (Tesorero, Secretario, Enfermero, Intendente, Cocinero y Ayudante de Cocina, Aguador y Ambientador, Guardián de Leyenda, **Mensajero**, **Leñador** — los once de la Guía, pp. 11–15) · **`info-box`** — la regla que se olvida: *«Todos los scouts deben tener **dos cargos** y actuar como ayudante de cargo de algún otro compañero»* (Guía, p. 15), **con la excepción que la propia Guía escribe** (p. 11): el Guía y el Subguía en principio no llevan cargo, y solo asumen uno si la patrulla es pequeña, *«ya que no pueden quedar cargos vacantes»*.

**Reflexión:** mira tu tropa. ¿Hay algún Scout sin cargo? Escribe cuál le **propondrías al Consejo de Patrulla** y por qué ese.

**Quiz (2):** escenario de un Jefe que arma las patrullas equilibradas por edad · escenario sobre un Scout sin cargo.

---

### 4.6 Lección 5 — 🔥 Espíritu de Patrulla

**Idea central:** los símbolos de patrulla no son adorno: son lo que la convierte en un «nosotros».

`info-box` · **`policy-quote`** Guía p. 9 — *«El Espíritu de Patrulla se basa en el sentido de pertenencia y de propiedad que cada Scout sienta por su Propia Patrulla…»* · `list` de los símbolos: **Animal de Patrulla** (la Guía **recomienda** un estudio serio del animal, p. 9), **Grito**, **Lema**, **Banderín**, **Canto**, **Insignia de Patrulla** (círculo de 5 cm, manga izquierda, 2 cm bajo la insignia de rama — p. 10), **Libro de Oro**, **Bordón**, **Rincón** · `paragraph` (el grito: *«A ningún Scout se le permite usar otra llamada que no sea la de su patrulla»*) · `heading` «La Tropa también tiene lo suyo» · `paragraph` — **ELEMENTOS DE IDENTIDAD** (Guía, p. 8): nombre de Tropa, lema (**lo deciden los Scouts en la Corte de Honor**), bandera, y el **color VERDE** por su afinidad con la naturaleza — que es de donde sale la banda verde de la L7 · `heading` «Los dos órganos de gobierno» · `paragraph` + `info-box` — la Guía (p. 9) nombra el **Consejo de Patrulla** y la **Corte de Honor de la Tropa** como *«dos organismos de gobierno que están basados en la democracia representativa acorde a la necesidad de expresión de esta edad»*. El `info-box` dice primero **lo que sí se sabe** (dónde se eligen los cargos, el libro de actas que firman Guía y Tesorero, las dos decisiones de la Corte de Honor) y después **lo único que falta**: **quién compone cada órgano**. Para ese detalle remite al **Comisionado Regional de Programa de Jóvenes**. **El curso no les inventa reglamento.**

**Reflexión:** ¿tus patrullas tienen rincón propio? Escribe qué necesitarías para que cada una tenga uno el próximo campamento.

**Quiz (2):** escenario sobre el animal de patrulla elegido sin conocerlo · escenario sobre un adulto que decide el lema.

---

### 4.7 Lección 6 — 📯 Presentación y buen orden

**Idea central:** la formación no es disciplina militar: es el modo de que 30 adolescentes se oigan sin gritar.

`info-box` · `paragraph` (el prejuicio a desarmar: silbatos y formaciones suenan a cuartel) · `heading` «Señales de silbato» · `paragraph` (**Código Morse**: raya = silbido largo, punto = corto y seco) · `list` — ATENCIÓN `_` · LLAMADO A TODA LA TROPA `_. _. _.` · FIRME `_.` · DESCANSAR `._` · GUÍA DE PATRULLA `..._` (Guía, p. 5) · `heading` «Señales de brazo» · `paragraph` (*«generalmente están precedidas de una Señal de Silbato»*; sirven *«para evitar ruidos innecesarios»*) · `heading` «Las formaciones» · **`policy-quote`** Guía p. 6 — la disposición por patrullas: el **Guía al costado derecho**, los Scouts **en orden de antigüedad**, el **Sub-Guía cierra**, de modo que *«el muchacho que lleva menos tiempo en la Patrulla formará al lado izquierdo del Guía»* · **`info-box`** — el porqué, que es lo que salva la lección de ser reglamento: *«El Grande Protege al Pequeño»* · `paragraph` (y no es solo para izar bandera: *«Gran parte de la actividad de la Tropa se desarrolla o inicia en una formación»*, p. 5 — ahí se entregan las etapas de progresión y los reconocimientos).

**Reflexión:** aprende **una** señal de silbato esta semana y úsala el sábado. Escribe cuál y para qué momento.

**Quiz (2):** escenario sobre un papá que dice que esto parece militar · verificación de la disposición en formación.

---

### 4.8 Lección 7 — 🎖️ Cómo crece un Scout

**Idea central:** cuatro fases, dos ejes, y ninguna carrera.

`info-box` · **`policy-quote`** Guía p. 17 — el Plan de Progresión incluye **dos ejes temáticos: Desafíos y Especialidades** · `paragraph` (**Desafíos**: actividades dentro de las **seis áreas de crecimiento**) · `heading` «Las cuatro fases» · `paragraph` (la Guía, p. 17, **solo da los cuatro nombres**, sin describirlos — el curso lo avisa antes de la lista) · `list` — **Vigía** · **Explorador** · **Excursionista** · **Expedicionario**, cada una simbolizada por una insignia · **`policy-quote`** Guía p. 17 — *Expedicionario* es *«la insignia máxima otorgada por el cumplimiento de todos los desafíos del plan de progresión, la obtención de las especialidades correspondientes y reflejar en su estilo de vida y relación con los demás la vivencia de la ley y la promesa scout»* · `paragraph` (el Expedicionario **lo certifica la Comisión Nacional Scout**: se solicita a `scouts@scout.org.co` con los datos del Scout, y responden en **≤5 días hábiles**, Guía p. 18) · `heading` «Las especialidades» · `list` de **las cinco áreas con su color**, avisando que **no son las seis áreas de crecimiento** —las especialidades *«cruzan transversalmente las áreas de crecimiento»*, Guía p. 20—: 🟠 Arte, expresión y cultura · 🟡 Ciencia y tecnología · 🔵 Deportes (*«actividad física y juegos donde se compite»*: la fuente dice «juegos de competencia» y `lexico.json` prohíbe «competencia» a secas) · 🔴 Servicio a los demás · 🟣 Vida en la naturaleza · `paragraph` (**dos tipos de insignia**: individual —círculo de 3 cm, en la banda— y **de área** —3 o más especialidades de la misma área, manga izquierda—; la **banda es verde**, 13 cm, hombro derecho) · `info-box` (**se puede crear una especialidad nueva**: sinodal, ubicarla en una de las cinco áreas, tres fases **Descubrir · Experimentar · Compartir**, diseñar la insignia respetando colores, y el Jefe de Tropa envía el formato — respuesta en ≤8 días).

**Reflexión:** escoge un Scout concreto. ¿En qué fase está y qué desafío le falta? Escribe **uno** que puedas proponerle el sábado.

**Quiz (2):** escenario sobre un Scout que quiere una especialidad que no existe · escenario sobre la insignia de área.

---

### 4.9 Lección 8 — 🌄 La Travesía y tu primer paso

**Idea central:** el paso a la Comunidad no es una despedida: es una transición que se prepara.

`info-box` · `heading` «La Travesía» · **`policy-quote`** Guía p. 18 — *«Una vez el Scout ha terminado el proceso en Tropa, inicia su etapa de transición denominada Travesía, que tendrá una duración no mayor a 6 meses»* · `paragraph` (se hace **con invitaciones a actividades de la Comunidad** y **de común acuerdo entre los dirigentes de las dos ramas**, para que el paso ocurra *«sin ninguna dificultad»*) · `paragraph` (la Guía es explícita en que la Travesía empieza **al cumplir 14**, *«sin importar la fase de progresión en la que se encuentre»*, p. 4 — la progresión no retiene a nadie, **con la excepción que la propia Guía escribe**: el Scout que por *«alguna condición cognitiva o emocional»* requiera permanecer más tiempo en la Tropa) · `heading` «La Insignia de Paso» · `paragraph` (la entrega el **Jefe de Tropa** en la ceremonia; tiene **carácter de mención** y *«el único requisito que debe cumplir el Scout es haber hecho parte de la Tropa Scout»*, p. 19) · `heading` «Un campamento seguro» · `paragraph` + enlace a Transversales C03 para la conducta ante una revelación (ADR-038), y la ruta de reporte por su nombre · `mission-box` **con el eco literal del hook**.

**Reflexión / compromiso:** tres cosas cortas — el Scout de tu tropa que está más cerca de los 14, qué vas a hacer esta semana para preparar su Travesía, y UNA cosa que vas a cambiar por lo que viste aquí.

**Logro final:** ⚜️✨ «Jefe de Tropa».

---

## 5. Logros

| id | Nombre | Emoji | `unlockOnModule` |
|---|---|---|---|
| 1 | Dejo de ser el centro | 🧭 | 2 |
| 2 | Digo la Ley completa | 🤝 | 3 |
| 3 | Dejo armar la patrulla | ⚜️ | 4 |
| 4 | Enciendo el Espíritu | 🔥 | 5 |
| 5 | Conduzco una formación | 📯 | 6 |
| 6 | Acompaño su progresión | 🎖️ | 7 |
| 7 | Jefe de Tropa | ⚜️✨ | -1 |

---

## 6. Conexiones cross-course

**Hacia atrás:** Curso 5 (Método Scout — aquí el Sistema de Equipos en su forma más pura) · Curso 6 (las seis áreas de crecimiento, que son donde viven los Desafíos) · **Curso 8 (Manada)** — empalme directo: Andrés da el Gran Salto allá y llega aquí.
**Hacia adelante:** **Curso 11 (Comunidad)** — la Travesía con la que cierra la L8 es donde arrancará ese curso · Cursos 13–15 (operativos).
**Cross-línea:** Transversales C03 para la conducta ante una revelación (ADR-038) · Curso 25 (A Salvo del Peligro), recomendado, **no habilitante**.

---

## 7. Validación contra el marco metodológico

Se completa al medir el JSON. Compromisos de diseño, tomados de lo aprendido en el Curso 9:

- **El hook va dentro del curso**, textual en L1 y con eco literal en L8.
- **Ninguna respuesta de quiz puede exigir algo que su propia lección no enseñe** — fue el hallazgo alto del Curso 9.
- **El hilo narrativo (Andrés) aparece en las ocho lecciones.**
- **La duración se mide sobre el JSON**, no se estima.
- **Compuertas de paridad en 0/14** antes de dar por cerrado el build.
- **Citas oficiales plegables (`policy-quote`): 10** — L2, L3 (×2), L4 (×2), L5, L6, L7 (×2), L8. *(Medido sobre el JSON el 15-sep-2026: son diez, no ocho.)*

---

## 8. Estado

1. Diseño — este documento. **Commiteado antes de tocarlo con scripts** *(lección del Curso 9, donde un script truncó el diseño a cero bytes).*
2. Pendiente: JSON · build · las **tres auditorías** · compuerta humana.
