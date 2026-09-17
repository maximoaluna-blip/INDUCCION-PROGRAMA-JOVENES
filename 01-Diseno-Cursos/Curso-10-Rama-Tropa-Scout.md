# Diseño del Curso 10 — ⚜️ Rama Tropa Scout

**Línea:** Programa de Jóvenes · **Nivel:** 2 (Profundización por rama y práctica pedagógica) · **Posición:** tercer curso de rama construido, después de Manada (8) y Familia (9).

> La rama de la adolescencia temprana: **11 a 14 años**. Se llama **Rama Scouts**; su unidad es la **Tropa**.

---

## 0. La situación de fuentes, que en esta rama es distinta

> 🔴 **LEER ANTES QUE NADA — este §0 fue falso durante cinco meses (corregido el 17-sep-2026, ADR-057).**
>
> **La *Guía de Dirigente de Tropa* existe**: 68 páginas, creada el **20-abr-2026**, con los mismos doce capítulos que las otras cuatro Guías de Rama. **No estaba en el corpus**, y nadie fue a buscarla a la biblioteca. El curso se construyó entero sobre la *Guía de Buenas Prácticas para Jefes de Tropa*, que **no es de 2026: es del 25-oct-2023** —el año se le adjudicó por estar en la carpeta `2026/`— y que en su p. 3 **se declara a sí misma** *«una recopilación de los documentos que actualmente se encuentran en proceso de revisión y actualización»*, con **«Módulo 1»** en la portada.
>
> **Qué se corrigió el 17-sep-2026:** la **L7 y la L8 se rehicieron desde cero** (el sistema de progresión de la rama es otro: **seis Rutas** con **territorios** y tres niveles **Descubro/Construyo/Conquisto**, y las insignias son **Vigía del Valle · Explorador de Cumbres · Navegante de Horizontes · Maestro de la Aventura**); la **L5 recibió el marco simbólico** —**La Aventura**, Cap. 6— y perdió un `info-box` que mandaba al dirigente a preguntarle a su Comisionado un dato que estaba impreso; siete etiquetas de fuente pasaron a decir **2023**; y el certificado cambió *«la Travesía hacia la Comunidad»* por *«el paso hacia la Comunidad de Nómadas Scout»*.
>
> **Regla que dejó este caso, y que vale para las cinco ramas:** donde las dos Guías hablan del mismo asunto **manda la de 2026**; donde solo habla la de 2023 y la de 2026 calla —buen orden, silbatos, formaciones, cargos, especialidades— el contenido se conserva **citado como lo que es**. La L6 entera está en ese segundo caso y lo dice en un `info-box`.
>
> **Lo que sigue de este §0 se conserva porque explica cómo quedó el curso, no porque sea cierto.**

~~**Tropa es la única de las cinco ramas sin «Guía de Dirigente» 2026.**~~ Lo que hay:

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
3. ~~**El marco simbólico de la Tropa sigue sin fuente limpia**~~ **CERRADO el 17-sep-2026: es «La Aventura»**, y la *Guía de Dirigente de Tropa* le dedica el **Capítulo 6 entero** más la tabla de la p. 32, donde además consta que su **fondo motivador «No aplica para la rama»** — la única de las cinco. Entró en la **L5**. Lo que sigue era el razonamiento de entonces: , y es un hallazgo abierto del proyecto (apareció auditando `metodo-scout-8-elementos`). Lo más cercano es la Guía, p. 8: *«la "aventura fantástica" que se vive en la tropa está relacionada con la toma de conciencia del scout de su propia naturaleza y trascendencia»* — pero la Guía **no lo llama marco simbólico**, y aparece dentro del bloque de ELEMENTOS DE IDENTIDAD, explicando el color verde. **Por eso el curso no dice nada del marco simbólico de la Tropa, ni cita esa frase: cero apariciones.** Es la decisión correcta mientras no haya fuente, y el Modelo la respalda (p. 19 del PDF): *«los pormenores específicos de cada rama —su marco simbólico, su organización interna, sus dinámicas y los recursos concretos para dirigentes— serán desarrollados en las Guías para Dirigentes de Rama»*. Tropa es justamente la rama que todavía no tiene una.

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
| Duración | **45 minutos** (excede el tope de 40 del CHECKLIST — justificado en el **ADR-046**) |
| Lecciones | 8 (1 intro + 7 de contenido) |
| Nivel | 2 · `order` 10 · `contentVersion` 2026-09-15 |
| Audiencia primaria | Jefes y subjefes de Tropa |
| Recomendado antes | Nivel 1 completo (Cursos 1–7) — **recomendado, no exigido** |
| Logro final | ⚜️✨ Jefe de Tropa |

**Hilo narrativo:** **Andrés**, el lobato del Curso 8, dio su **Gran Salto** y llega a la Tropa a los 11. A los **catorce y medio** empezará su **paso** hacia la Comunidad — que es donde arrancará el **Curso 11 (Comunidad)**, todavía por construirse. La cadena queda completa: Salomé (Familia) → Andrés (Manada → **Tropa**) → Comunidad.

---

## 2. Objetivos del curso

1. **Distinguir** qué cambia a los 11 años y por qué lo que funcionaba en la Manada deja de funcionar.
2. **Decir** la Promesa Scout y los **diez** artículos de la Ley, y explicar por qué aquí ya son diez y en Familia eran dos.
3. **Formar** patrullas de 6 a 8 por afinidad, con Guía y Subguía elegidos por ellos, y repartir los cargos.
4. **Nombrar** los símbolos que construyen Espíritu de Patrulla y explicar para qué sirve cada uno.
5. **Reconocer** las señales de silbato de la Tropa y **explicar** por qué la formación se dispone como se dispone.
6. **Acompañar** la progresión por sus **cuatro fases** y orientar la obtención de especialidades.
7. **Preparar** el **paso** de un Scout de catorce y medio hacia la Comunidad, mirando si está listo y no solo si tiene la edad.

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
| 7 | 🎖️ Cómo crece un Scout | **Seis Rutas** (= las 6 áreas) con **territorios** (= competencias) · tres niveles **Descubro · Construyo · Conquisto** · las cuatro insignias **Vigía del Valle · Explorador de Cumbres · Navegante de Horizontes · Maestro de la Aventura** · **Diario de Exploración** · «no hay reloj» |
| 8 | 🌄 **El paso a la Comunidad** | Los **últimos seis meses**, a los **catorce y medio** · el criterio va **más allá de la edad** · insignia **Viajero del Territorio** (y **Lobo Solitario** como la de entrada) · campamento seguro y el compromiso |

---

### 4.2 Lección 1 — 🏕️ Bienvenida a la Tropa (`isIntro: true`)

`info-box` (duración + lo que va a poder hacer) · `paragraph` (Andrés, 11 años, acaba de dar el Gran Salto desde la Manada; a los catorce y medio empieza su paso hacia la Comunidad, cuyo curso todavía está por construirse) · `paragraph` **con el hook textual** y «todo este curso sale de esa frase» · `info-box` anti-definición — la Tropa **no** es «la Manada con niños más grandes», **no** es una unidad militar aunque tenga formaciones y silbatos, **no** es un club de campamentos · `paragraph` (lo que sí es: una unidad con Promesa y Ley completas, gobierno propio y un sistema donde los jóvenes mandan de verdad) · `mission-box` (cada lección termina en algo que probar el sábado, **y cómo funciona el quiz: dos preguntas por lección, hay que acertar las dos, y reintentar no penaliza**).

---

### 4.3 Lección 2 — 🧭 Qué cambia a los once

**Idea central:** el adulto deja de ser el centro, y eso no es soltar: es otro trabajo.

`info-box` · `heading` «La edad de la rama» · **`policy-quote`** Modelo §4.2, p. 19 — *«Sección 11 a 14 años: Rama Scouts. Es la rama de la adolescencia temprana, en la que la vida en patrullas y la aventura al aire libre permiten experimentar la autonomía, el liderazgo y la cooperación activa.»* · `paragraph` (los tres sustantivos de la cita: autonomía, liderazgo y cooperación) · `paragraph` (**rama y unidad no son lo mismo**: la rama se llama **Scouts** y la unidad **Tropa**; por eso decimos «Jefe de Tropa» y no «Jefe de Scouts») · `paragraph` (qué trae la adolescencia temprana: el lobato decide **dentro** del juego que tú propones; el Scout quiere decidir **cuál** es el juego) · `heading` «Entonces, ¿qué haces tú?» · `paragraph` (no conduce la patrulla: conduce a los **Guías**; las funciones del Guía en la Guía, p. 11, citadas **en infinitivo** como están en la fuente) · `paragraph` (**los tres roles del dirigente** — *apoyar, acompañar y enlazar*, Modelo Cap. 9, p. 58 — dichos en clave de Tropa) · **`method-grid` de 3** — **Lo que hacías en la Manada** (llevabas las decisiones al Consejo de Roca y sostenías el marco) · **Lo que ya no funciona** (decidir por ellos: a los 11 lo leen como desconfianza) · **Lo que sí funciona** (preparar a los Guías y dejar que la patrulla se equivoque).

**Reflexión:** piensa en la última vez que decidiste algo que la patrulla podía haber decidido. ¿Qué habría pasado si te aguantas? Y **anota por qué** no te aguantaste: prisa, miedo a que saliera mal, o que de verdad no podía esperar.

**Quiz (2):** escenario sobre un Guía que planea mal una actividad · escenario sobre un Jefe de Tropa que habla uno a uno con los treinta en vez de preparar a los Guías.

---

### 4.4 Lección 3 — 🤝 La Promesa y la Ley, completas

**Idea central:** en Familia eran dos artículos; aquí son diez, y el salto es el punto.

`info-box` · **`policy-quote`** PNPJ §4.4 — la **Promesa Scout** literal · `paragraph` · `heading` «La Ley Scout» · **`policy-quote`** PNPJ §4.5 — **los diez artículos** · `paragraph` (por qué diez y no dos: a los 11 años ya se puede sostener un código largo, y la Ley deja de ser una síntesis para volverse un texto que se discute) · `info-box` (el puente con las otras ramas: el Cachorro tenía dos, el Lobato su Ley propia, el Scout los diez completos — es la misma Ley creciendo con quien la vive).

**Reflexión:** escoge **un** artículo de los diez y escribe cómo se lo explicarías a un Scout tuyo con un ejemplo de su patrulla, no con una definición.

**Quiz (2):** escenario sobre un Scout que viene de la Manada y ve la Ley demasiado larga para acordársela · escenario sobre un Scout que dice que el artículo 8 es una bobada.

---

### 4.5 Lección 4 — ⚜️ La Patrulla: la célula de la Tropa

**Idea central:** la patrulla no se arma: se deja armar.

`info-box` · **`policy-quote`** Guía p. 9 — *«La patrulla es la célula de la Tropa pues allí es donde se experimenta la vida de grupo…»* · `paragraph` (**mínimo 6, máximo 8**; *«no se debe forzar a los y las scouts a pertenecer a una patrulla en la cual ellos no se sientan cómodos»*; se agrupan **por afinidad de gustos y lazos de amistad**; pueden ser **heterogéneas en edades y sexo**) · `heading` «Guía y Subguía» · `paragraph` (los elige **la patrulla**; funciones del Guía según la Guía p. 11: representar, contacto directo con el Jefe de Tropa, planear, mantenerse informado, velar por que el sistema funcione) · **`policy-quote`** Guía p. 11 — el Sistema de Patrulla *«como una máquina donde cada integrante es un piñón vital»* · `paragraph` (**el Sistema de Patrulla es el Sistema de Equipos en la Tropa** — uno de los 8 elementos del Curso 5, y así titula la Guía esa sección, p. 9) · `heading` «Los cargos» · `paragraph` (la Guía los ordena en **cargos de ciudad** y **de campamento**, y solo los **seis de ciudad** llevan apodo) · `paragraph` (**los cargos no los reparte el adulto**: se eligen en el **Consejo de Patrulla**, libremente y por aptitud, y **rotan de 6 a 12 meses** — Guía, p. 11) · `list` de cargos (Tesorero, Secretario, Enfermero, Intendente, Cocinero y Ayudante de Cocina, Aguador y Ambientador, Guardián de Leyenda, **Mensajero**, **Leñador** — los once de la Guía, pp. 11–15) · **`info-box`** — la regla que se olvida: *«Todos los scouts deben tener **dos cargos** y actuar como ayudante de cargo de algún otro compañero»* (Guía, p. 15), **con la excepción que la propia Guía escribe** (p. 11): el Guía y el Subguía en principio no llevan cargo, y solo asumen uno si la patrulla es pequeña, *«ya que no pueden quedar cargos vacantes»*.

**Reflexión:** mira tu tropa. ¿Hay algún Scout sin cargo? Escribe cuál le **propondrías al Consejo de Patrulla** y por qué ese.

**Quiz (2):** escenario de un Jefe que arma las patrullas equilibradas por edad · escenario sobre un Guía que da por terminado el reparto porque cada Scout tiene un cargo.

---

### 4.6 Lección 5 — 🔥 Espíritu de Patrulla

**Idea central:** los símbolos de patrulla no son adorno: son lo que la convierte en un «nosotros».

`info-box` · **`policy-quote`** Guía p. 9 — *«El Espíritu de Patrulla se basa en el sentido de pertenencia y de propiedad que cada Scout sienta por su Propia Patrulla…»* · `list` de los símbolos: **Animal de Patrulla** (la Guía **recomienda** un estudio serio del animal, p. 9), **Grito**, **Lema**, **Banderín**, **Canto**, **Insignia de Patrulla** (círculo de 5 cm, manga izquierda, 2 cm bajo la insignia de rama — p. 10), **Libro de Oro**, **Bordón**, **Rincón** · `paragraph` (el grito: *«A ningún Scout se le permite usar otra llamada que no sea la de su patrulla»*) · `heading` «La Tropa también tiene lo suyo» · `paragraph` — **ELEMENTOS DE IDENTIDAD** (Guía, p. 8): nombre de Tropa, lema (**lo deciden los Scouts en la Corte de Honor**), bandera, y el **color VERDE** por su afinidad con la naturaleza — que es de donde sale la banda verde de la L7 · `heading` «Los dos órganos de gobierno» · `paragraph` + `info-box` — la Guía (p. 9) nombra el **Consejo de Patrulla** y la **Corte de Honor de la Tropa** como *«dos organismos de gobierno que están basados en la democracia representativa acorde a la necesidad de expresión de esta edad»*. El `info-box` dice primero **lo que sí se sabe** (dónde se eligen los cargos, el libro de actas que firman Guía y Tesorero, las dos decisiones de la Corte de Honor) y después **lo único que falta**: **quién compone cada órgano**. Para ese detalle remite al **Comisionado Regional de Programa de Jóvenes**. **El curso no les inventa reglamento.**

**Reflexión:** ¿tus patrullas tienen rincón propio? Escribe qué necesitarías para que cada una tenga uno el próximo campamento — y con quién de tu equipo de dirigentes lo vas a montar.

**Quiz (2):** escenario sobre el animal de patrulla elegido sin conocerlo · escenario sobre un adulto que decide el lema.

---

### 4.7 Lección 6 — 📯 Presentación y buen orden

**Idea central:** la formación no es disciplina militar: es el modo de que 30 adolescentes se oigan sin gritar.

`info-box` · `paragraph` (el prejuicio a desarmar: silbatos y formaciones suenan a cuartel) · `heading` «Señales de silbato» · `paragraph` (**Código Morse**: raya = silbido largo, punto = corto y seco) · `list` — ATENCIÓN `_` · LLAMADO A TODA LA TROPA `_. _. _.` · FIRME `_.` · DESCANSAR `._` · GUÍA DE PATRULLA `..._` (Guía, p. 5) · `heading` «Señales de brazo» · `paragraph` (*«generalmente están precedidas de una Señal de Silbato»*; sirven *«para evitar ruidos innecesarios»*) · **`info-box`** — **honestidad sobre la fuente: la Guía no dibuja cuáles son las señales de brazo**, y el curso no se las inventa; remite al Jefe de Grupo o al **Comisionado Regional de Programa de Jóvenes** · `heading` «Las formaciones» · **`policy-quote`** Guía p. 6 — la disposición por patrullas: el **Guía al costado derecho**, los Scouts **en orden de antigüedad**, el **Sub-Guía cierra**, de modo que *«el muchacho que lleva menos tiempo en la Patrulla formará al lado izquierdo del Guía»* · **`info-box`** — el porqué, que es lo que convierte una fila en un gesto de cuidado: *«El Grande Protege al Pequeño»* · `paragraph` (y no es solo para izar bandera: *«Gran parte de la actividad de la Tropa se desarrolla o inicia en una formación»*, p. 5 — ahí se entregan las etapas de progresión y los reconocimientos).

**Reflexión:** aprende **una** señal de silbato esta semana y úsala el sábado. Escribe cuál y para qué momento.

**Quiz (2):** escenario sobre un papá que dice que esto parece militar · escenario sobre un Scout nuevo que se pone al final de la fila — dónde va su puesto y por qué.

---

### 4.8 Lección 7 — 🎖️ Cómo crece un Scout

> **Rehecha entera el 17-sep-2026 (ADR-057).** El guion anterior describía *«cuatro fases, dos ejes: Desafíos y Especialidades»*, con las insignias Vigía/Explorador/**Excursionista**/**Expedicionario** — un sistema que la *Guía de Dirigente de Tropa* reemplazó y cuyos dos últimos nombres **no aparecen ni una vez** en ella.

**Idea central:** seis Rutas, tres niveles y ninguna carrera.

`info-box` · `paragraph` (Andrés a los cuatro meses: la pregunta no es qué nota saca, es **por dónde va**) · `heading` · `paragraph` (las seis áreas del Curso 6, aquí llamadas **Rutas**, como los Rumbos de Comunidad) · **`method-grid`** con las seis: **Temple** (Corporalidad) · **Ingenio** (Creatividad) · **Forja** (Carácter) · **Lazos** (Afectividad) · **Patrulla** (Sociabilidad) · **Horizonte** (Espiritualidad) · **`policy-quote`** §8.6.1 p. 44 (qué hay dentro de cada Ruta) · `paragraph` (**territorio = competencia educativa**, con la frase de la propia Guía: *«ambos términos describen lo mismo»*; **travesía** = la experiencia que se vive) · **`info-box` de aviso** (⚠️ ojo con la palabra «travesía»: **no** es el paso a la Comunidad) · `heading` · **`method-grid`** de los tres niveles **Descubro · Construyo · Conquisto**, cada uno con su equivalencia *Exploración / Aplicación / Profundización* entre paréntesis · `paragraph` (y **no basta una travesía**: hacen falta dos territorios de la misma Ruta en el mismo nivel) · `heading` · `list` ordenada con **las cuatro insignias y sus requisitos del §8.7** · `paragraph` (**«no hay reloj»**, conservado palabra por palabra del guion anterior) · **`policy-quote`** §8.6.2 p. 45 (que lo respalda) · `heading` · `paragraph` (**Diario de Exploración**) · **`info-box` de honestidad** (Desafíos y Especialidades **no desaparecen**, pero lo que las detallaba es el documento de 2023).

**Reflexión:** un Scout concreto, con nombre. Algo que le hayas visto hacer este mes: ¿en qué **Ruta** cae y en qué **nivel** está? Y **una travesía** que puedas proponerle el próximo mes. Si no sabes por dónde va, esa es la tarea — y no se averigua revisando papeles.

**Quiz (2):** un Scout cree que «terminó» una Ruta con una sola travesía · dos Scouts del mismo mes con insignias distintas, y un papá que pregunta si el segundo va atrasado.

---

### 4.9 Lección 8 — 🌄 El paso a la Comunidad

> **Rehecha entera el 17-sep-2026 (ADR-057).** Se llamaba *«La Travesía y tu primer paso»*. Tres cosas cambiaron: **«travesía» significa otra cosa** en la Guía vigente (es la oportunidad de aprendizaje, y así lo enseña ya el Curso 13), la transición **empieza a los catorce y medio** y no al cumplir 14, y la insignia es **«Viajero del Territorio»**, no la «Insignia de Paso», que **no aparece** en la Guía. Y el criterio se invirtió: el guion anterior enseñaba *la edad manda sobre la progresión*; la Guía pide mirar *«más allá de la edad»*.

**Idea central:** el paso a la Comunidad no es una despedida ni un trámite de cumpleaños: mira al Scout, no al calendario.

`info-box` · `heading` «Cuándo empieza» · `paragraph` (los **últimos seis meses**, a los **catorce y medio**, con invitaciones a actividades conjuntas) · **`policy-quote`** §8.11.3 p. 51 · `paragraph` (**el criterio**: no *¿ya tiene la edad?* sino *¿está listo?* — las competencias personales y sociales) · `paragraph` (se coordina **entre las dos ramas**; el dirigente de Tropa motiva, no empuja ni retiene) · `heading` · `paragraph` (**Viajero del Territorio**: no premia lo hecho, señala que ya va de camino) · **`info-box`** (**Lobo Solitario**, la simétrica de entrada desde Manada, que ningún curso enseñaba) · `heading` «Un campamento seguro» + `paragraph` + **`info-box`** de frontera con Transversales *(los tres, conservados del guion anterior)* · **`mission-box`** *(conservado)*.

**Reflexión / compromiso:** tres cosas cortas — el Scout más cercano a los **catorce y medio**, con nombre; qué vas a hacer esta semana para prepararle el paso (una llamada al dirigente de Comunidad cuenta, y es la más útil); y **una cosa que hayas visto en él** que te diga si ya está listo. *La tercera es la que importa: la edad la sabe cualquiera.*

**Quiz (2):** su Guía propone que se quede a cerrar la Ruta que lleva a medias — ¿qué mira la Guía de Dirigente? · cuál es la insignia que recibe quien empieza el paso.

**Logro final:** ⚜️✨ «Jefe de Tropa».

---

## 5. Logros

| id | Nombre | Emoji | `unlockOnModule` |
|---|---|---|---|
| 1 | Dejo de ser el centro | 🧭 | 2 |
| 2 | Digo la Ley completa | 🤝 | 3 |
| 3 | Dejo armar la patrulla | ⚜️ | 4 |
| 4 | Enciendo el Espíritu | 🔥 | 5 |
| 5 | Sé por qué formamos | 📯 | 6 |
| 6 | Acompaño su progresión | 🎖️ | 7 |
| 7 | Jefe de Tropa | ⚜️✨ | -1 |

---

## 6. Conexiones cross-course

**Hacia atrás:** Curso 5 (Método Scout — aquí el Sistema de Equipos en su forma más pura) · Curso 6 (las seis áreas de crecimiento, que son donde viven los Desafíos) · **Curso 8 (Manada)** — empalme directo: Andrés da el Gran Salto allá y llega aquí.
**Hacia adelante:** **Curso 11 (Comunidad)**, todavía por construirse — la Travesía con la que cierra la L8 es donde arrancará ese curso · Cursos 13–15 (operativos).
**Cross-línea:** Transversales C03 para la conducta ante una revelación (ADR-038) · Curso 25 (A Salvo del Peligro), **todavía por construirse**; recomendado, **no habilitante**.

---

## 7. Validación contra el marco metodológico

Se completa al medir el JSON. Compromisos de diseño, tomados de lo aprendido en el Curso 9:

- **El hook va dentro del curso**, textual en L1 y con eco literal en L8.
- **Ninguna respuesta de quiz puede exigir algo que su propia lección no enseñe** — fue el hallazgo alto del Curso 9.
- **El hilo narrativo (Andrés) aparece en las ocho lecciones.**
- **La duración se mide sobre el JSON**, no se estima.
- **Compuertas de paridad en 0/14** antes de dar por cerrado el build.
- **Medido el 15-sep-2026, tras la corrección pedagógica:** extremo de longitud **0/14** · oveja negra **0/14** · sesgo de longitud **3/14** — bajó de 5/14 al reescribir L2-Q2 y L3-Q1.
- **Citas oficiales plegables (`policy-quote`): 10** — L2, L3 (×2), L4 (×2), L5, L6, L7 (×2), L8. *(Medido sobre el JSON el 15-sep-2026: son diez, no ocho.)*

---

## 7-bis. Las tres auditorías (15-sep-2026)

**Doctrinal:** primera pasada **2 críticos, 10 mayores, 14 menores**; re-auditoría **APTO CON CORRECCIONES MENORES, 0 críticos**.
**Pedagógica:** primera pasada **REQUIERE MEJORA** (3 altos, 7 medios, 10 bajos); re-auditoría **APTO**.
**Funcional:** suite E2E de la línea con el curso incluido — **103 passed / 0 failed / 2 skipped** (las dos saltadas son la integración con el backend y el smoke del portal, condicionadas a variables de entorno). Corrida contra servidor local, con el curso añadido al catálogo solo durante la corrida.

| Métrica | Antes | Después |
|---|---|---|
| Escenario por forma | 10/14 | **13/14** |
| Escenario por demanda real | 6/14 | **10/14** |
| Solape fuerte de la correcta | 6/14 | **3/14** |
| Extremo · Oveja negra · Sesgo de longitud | 0 · 0 · 5 | **0 · 0 · 3** |
| Reflexiones que fuerzan un caso concreto | 5/7 | **7/7** |

**El crítico que enseña algo sobre el propio pipeline:** el hook original decía *«en la Manada tú dirigías el juego»*, y el **Curso 8, publicado**, enseña lo contrario — *«si en tu Manada las decisiones importantes las tomas siempre tú, no hay Consejo de Roca: hay una clase con disfraz de lobo»*, y su quiz marca como **correcta** *«voy a preguntar en el Consejo de Roca quién quiere proponer el juego»*. Es la contradicción entre cursos de una misma línea que persigue el **ADR-044**, y esta vez estaba en la frase más visible del curso, repetida en los dos sitios de más peso.

**El alto pedagógico:** el curso prometía en **cuatro sitios** *conducir una formación con señales de brazo*, y la Guía **no lista ninguna** — dice para qué sirven y pasa a las formaciones. Verificado contra el PDF. Se bajó la promesa y se añadió un `info-box` de honestidad sobre la fuente, el mismo dispositivo que la L5 ya usaba. Ahora es una **convención reconocible del curso**: le enseña al adulto qué hacer cuando la doctrina no alcanza.

**Deuda registrada, no aplicada:** la **L4** queda en **7,4–7,9 min**, fuera de la banda de 5–7, y la **L7** en el borde. Partirlas exigiría dos quizzes nuevos que ninguna auditoría ha visto — el mismo criterio con el que se resolvió el Curso 9 (**ADR-045**). Si alguna vez se parten, el corte de la L4 va entre las secciones **9** y **10** (`heading` «Los cargos»).

---

## 8. Estado

1. Diseño — este documento. **Commiteado antes de tocarlo con scripts** *(lección del Curso 9, donde un script truncó el diseño a cero bytes).*
2. JSON · build · las **tres auditorías** (§7-bis) · compuerta humana — **todo hecho el 15-sep-2026**.
3. **Publicado el 15-sep-2026** como Curso 10 de la línea (`status: active`, `order: 10`). Es el tercer curso de rama y el tercero de PJ con las tres auditorías.

---

> **Revisión del 17-sep-2026 (ADR-057).** Este diseño se corrigió **después** de que el curso llevara dos días publicado, porque su fuente angular no era la que le correspondía. **Lo que falló no fue la redacción ni las auditorías:** el curso fue fiel a la fuente que se le dio y las tres compuertas lo certificaron correctamente. Falló la verificación de que esa fuente fuera la vigente — un PDF de **2023** en una carpeta llamada `2026/`, con la trazabilidad y el glosario repitiendo el año de la carpeta en vez del año del documento. La fecha que lo desmentía (`/CreationDate D:20231025`) estaba dentro del archivo desde el principio, y la autodeclaración provisional, en su página 3.
