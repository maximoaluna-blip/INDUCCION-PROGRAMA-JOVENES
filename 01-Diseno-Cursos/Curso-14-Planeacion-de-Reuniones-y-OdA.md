# Diseño del Curso 14 — 📋 Planeación de Reuniones y Oportunidades de Aprendizaje

> **Línea:** Programa de Jóvenes · **Nivel 2** · Curso **14** de 25
> **`courseId`:** `planeacion-reuniones-oda`
> **Diseño pedagógico:** Claude Code, por decisión explícita del dueño en la sesión del **17-sep-2026** (excepción del §1.4 de `CREAR-CURSO.md`; mismo precedente que los Cursos 8 a 13).
> **Estado:** diseño · pendiente JSON, build y las tres auditorías.

Es el **segundo de los tres cursos pedagógicos operativos** (13, 14, 15). El Curso 13 enseñó a mirar lo que pasa en la reunión; este enseña a **decidir la reunión antes de que pase**. Sirve a las cinco ramas a la vez.

---

## 0. La situación de fuentes

**Fuente angular:** `Planeación de Reunión y Oportunidades de Aprendizaje.xlsx` — **DNPJ-2026-020**, 8 hojas. **Comprobado contra la biblioteca el 17-sep-2026: sha256 idéntico** (`1f294137…`), es la edición vigente.

> ⚠️ **La comprobación de esta fuente salió limpia, pero el barrido que la acompañó no.** Aplicar el §12.3 a **las ocho** fuentes angulares de la línea encontró que la *Guía de Dirigente de Clan* del corpus estaba atrasada y que la *Guía de Dirigente de Tropa* **existía y no la teníamos** (**ADR-056**, **ADR-057**). Este curso **no cita ninguna de las dos**, así que no queda afectado — pero sí cambia una cosa para él: **Tropa ya tiene su ambiente de referencia documentado**, y entra en la rejilla de la L5.

**Fuentes de apoyo, todas vigentes y verificadas:**

| Fuente | Qué aporta |
|---|---|
| ***Modelo de Aplicación «El Gran Juego para la Vida»*** **Cap. 10, pp. 68–74** | **El curso entero se sostiene aquí.** Los ocho componentes de **DURASLID** con su definición larga (§10.1, pp. 69–72), **para qué sirve** (§10.2, p. 73) y —lo decisivo— **los tres momentos y un mismo filtro** (§10.3, pp. 73–74): el tablero de ocho preguntas *antes*, la facilitación *durante*, y el cierre *después* apoyado explícitamente en Kolb |
| ***Modelo de Aplicación de Bolsillo*** | El filtro DURASLID «en una sola mirada» (p. 8), en una línea por componente: la versión que cabe en un `method-grid` |
| `Competencias Educativas.xlsx` (DNPJ) | **Descargado el 17-sep-2026: no estaba en el corpus.** Es la **malla completa** —áreas × prioridades educativas × competencias terminales × **competencias intermedias por franja de edad**— y **es la hoja que las *Pautas de Uso* del DNPJ-2026-020 anuncian y el archivo no contiene**. Sin ella, el campo más importante de la Ficha no tiene de dónde llenarse |
| Guías de Dirigente de **Familia**, **Manada**, **Tropa** y **Comunidad** (2026) | El **ambiente de referencia** de cada rama, que la Ficha y la Hoja de Ruta piden en su primera línea |
| **Política Nacional a Salvo del Peligro** (dic-2025, Acuerdo C.S.N. 657) | El nombre vigente del botón —**«Me Pongo A Salvo del Peligro»**, p. 44— y la **medida de protección 2+1** (p. 26), que la Hoja de Ruta invoca sin explicar |
| `Herramienta - Planeacion de Reuniones Scout` — **DNPJ-2026-022 V3.0** (HTML) | **Descargada el 17-sep-2026: tampoco estaba.** La segunda superficie del instrumento. El curso **no se construye sobre ella**, pero existe y hay que decirlo |

### Siete cosas que el instrumento hace y que hay que contar, no tapar

1. **Las *Pautas de Uso* describen un archivo que no es este.** Anuncian *«cuatro hojas de cálculo»* y el archivo tiene **ocho**; anuncian una hoja **«Competencias y Dimensiones»** que **no existe**; y el comentario del campo de competencias remite a *«la hoja en el archivo llamada **Objetivos Educativos**»*, que tampoco existe **y además es nomenclatura superada** (*Modelo* pp. 27 y 51). **La malla sí existe: es un documento aparte**, `Competencias Educativas.xlsx`. El curso lo dice y da el nombre exacto, porque es la diferencia entre poder llenar la Ficha y no poder.
2. **La rúbrica cuantitativa de la Ficha puntúa 7 de los 8 DURASLID: falta «Diversa».** Las celdas M15:M21 listan Desafiante · Útil · Recompensante · Atractiva · Segura · Inclusiva · Lúdica. El *Modelo* dedica su **Capítulo 10 entero** al filtro y lo enuncia con **ocho** (p. 69 y glosario p. 105). **No se armoniza:** el curso enseña los ocho, dice que la hoja trae siete y le pide al dirigente que la octava la responda igual. *La Hoja de Ruta, por su lado, sí pregunta por el enfoque de Diversidad e Inclusión — está, solo que en la otra hoja.*
3. **El botón se llama distinto en el instrumento y en la Política.** La Hoja de Ruta dice tres veces **«Botón A Salvo del Peligro»**; la **Política 2025** lo renombró **«Me Pongo A Salvo del Peligro»** (p. 44) y esa es la vigente. El curso usa el nombre de la Política y **nombra el del instrumento**, porque el dirigente va a leer el segundo en la hoja que tiene delante. Y **no** usa los dos nombres de la pieza QR que el glosario ya descartó.
4. **Familia trae cinco competencias, no veintidós — y esta vez son tres fuentes contra una.** El desplegable de la Ficha para Familia ofrece **una competencia por área y ninguna en Sociabilidad**, lo mismo que el Registro DNPJ-2026-021 y **lo mismo que la malla oficial** `Competencias Educativas.xlsx` para la franja 5–6. El **Archivo Base** es el único que le da 22. El Curso 13 ya enseñó esta discrepancia; **este curso la repite sin ampliarla** y remite allá.
5. **Erratas en los rangos del propio archivo**, que no afectan a ninguna cita pero explican comportamientos raros del desplegable: `Comuniad`, `Sociablidad_Manada`, `Sociablidada_Comunidad`, `Carácter_Topa`, `Corporalidad_Topa`. Además hay **siete rangos que apuntan a un libro externo que no viene con el archivo** (`[1]Ficha de Actividad Educativa`). **Ninguna de esas cadenas se cita**; el curso solo avisa, en una línea, que si un desplegable no carga no es culpa del dirigente.
6. **La evaluación está al principio de la Ficha, y es a propósito.** El comentario del propio campo lo explica: *«¿La evaluación al inicio? ¡Sí! … para que recuerdes que es algo importante; así mismo, en algunos meses, o quizá años, cuando revises esta ficha de actividad, lo primero que encontrarás serán las impresiones que tú, u otros dirigentes, tuvieron al llevarla a cabo»*. Es el mejor argumento pedagógico que trae el instrumento y **es la L7 entera**.
7. **La Ficha está pensada para que la use alguien más.** El comentario del campo *Lugar* pide **denominación genérica** —parque, cancha, salón— *«debido a que quien lea la ficha en otra parte del país o del mundo tal vez no conozca tu ciudad»*. El instrumento no es un archivo personal: es un banco compartible. Eso cambia cómo se escribe, y el curso lo enseña.

### Lo que este curso NO puede decir

- **No «Objetivos Educativos».** Ni como sinónimo de competencias, ni citando el comentario del instrumento que lo usa. El *Modelo* declaró superada esa nomenclatura (pp. 27 y 51) y `metodo-scout-8-elementos` llegó a tenerla **certificada como respuesta correcta de un quiz**. Se dice **competencias educativas**.
- **No «2+1» a secas.** Aquí es siempre **medida de protección 2+1** (Política ASP, p. 26). La **coevaluación 2+1** es del Curso 13 y es otra cosa (`GLOSARIO-ASC.md` §E, dos acepciones).
- **No la conducta ante una revelación.** El curso enseña que el mecanismo de reporte existe, que se prepara y que todos deben saber usarlo. **Qué hacer cuando un protagonista revela un daño se enlaza y no se reexplica**: es de Políticas Transversales C03 y del Curso 25 (**ADR-038**).
- **No prometer que el Excel es la única superficie.** Existe la herramienta **DNPJ-2026-022 V3.0** y el curso la nombra.
- **No inventar el ambiente de referencia del Clan.** Su Guía usa el término **una sola vez** y no como capa de rama (p. 53, para la temática de la Cena Rover). Donde la fuente no alcanza, se dice.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `planeacion-reuniones-oda` |
| Título | Planeación de Reuniones y Oportunidades de Aprendizaje |
| Subtítulo | Decidir antes lo que la reunión no te va a dejar decidir después |
| Icono | 📋 |
| Nivel / orden | 2 · Curso **14** |
| Duración declarada | **se mide al cerrar las tres auditorías** (ADR-047). Estimación de trabajo, no declarable: 45–50 min |
| Módulos | 8 (1 de registro + **7 de contenido**) |
| Destinatario | **Todo dirigente de unidad, de cualquiera de las cinco ramas** |
| Recomendado antes | Nivel 1 completo, **el curso de tu rama** (8–12) y el **Curso 13**. Ninguno bloquea: son recomendaciones (ADR-019) |
| `contentVersion` | 2026-09-17 |

---

## 2. Objetivos del curso

Al terminar, el adulto podrá:

1. **Distinguir las dos preguntas** que el instrumento separa —*qué va a pasar* (Hoja de Ruta) y *para qué* (Ficha)— y saber cuál de las dos hojas necesita en cada momento.
2. **Llenar una Hoja de Ruta** completa: información general con su ambiente de referencia, bloque de entorno seguro y el guion de la reunión con hora, actividad, descripción, responsable y materiales.
3. **Pasar una idea por el tablero DURASLID** de ocho preguntas antes de meterla en el plan, y reconocer cuándo una idea todavía no está lista.
4. **Escribir la información educativa de una Ficha**: un objetivo, una conducta observable como foco y **una o dos competencias educativas** elegidas de la malla oficial de su rama.
5. **Aterrizar una actividad en el ambiente de referencia** de su unidad y escribir un paso a paso que otra persona pueda ejecutar.
6. **Valorar el riesgo** de una actividad distinguiendo peligro de riesgo, calculando el nivel con probabilidad × consecuencia y escribiendo medidas de control concretas.
7. **Cerrar la actividad** con la evaluación de la Ficha y el ciclo de cuatro preguntas, y dejar registrada una novedad que le sirva a quien la use después.
8. **Abrir las dos superficies oficiales** del instrumento sabiendo qué hace cada una y dónde se descargan.

---

## 3. Hook pedagógico

> **«La Hoja de Ruta dice qué va a pasar. La Ficha dice para qué. Con la primera tienes una agenda; con las dos, una oportunidad de aprendizaje.»**

**Por qué este.** Es la distinción que el instrumento hace y que casi nadie ve: son **dos hojas porque son dos preguntas**, no porque una sea el resumen de la otra. Sus propios comentarios lo dicen — la Hoja de Ruta *«actúa como un guion o itinerario»* (D3) y la sección educativa de la Ficha es *«la columna vertebral de la planeación, centrada en el propósito formativo»* (A26). Y ataca de frente el riesgo que `CREAR-CURSO.md` §8.3 le asigna a este curso —**volverse tutorial de software**—: si las dos hojas son dos preguntas, el tema deja de ser el Excel.

**Dónde vive:** enunciado literal en la **L1**; cobrado en la **L4**, cuando el adulto ve que el campo *«para qué»* no tiene dónde escribirse en la Hoja de Ruta; y cerrado en la **L8**, donde el compromiso le pide las dos cosas de su próxima reunión.

**Verificación anti-ADR-044 — barridos sobre los 13 cursos publicados:**

- **Curso 5** (`metodo-scout-8-elementos`) ya prometió este curso con estas palabras: *«En el Curso 14 del Nivel 2 —Planeación de Reuniones y Oportunidades de Aprendizaje— vas a aprender a planear reuniones aplicando DURASLID con la herramienta oficial Excel DNPJ. Hoy solo guarda el filtro.»* **Es una promesa doble y este curso la cumple entera**: DURASLID *y* el Excel. Es también la razón de que el curso se construya sobre el Excel y no sobre la herramienta HTML, que no trae DURASLID.
- **Curso 6** (`pnpj-gran-juego-para-la-vida`) enseñó **Vivir → Mirar → Comprender → Proyectar** y dijo: *«Volverás a verlo en el Curso 13 … y en el Curso 14, al planear.»* **La L7 lo cobra**, y lo cobra donde el *Modelo* lo pone: en el cierre (§10.3c, p. 74).
- **Curso 13** (`seguimiento-progresion-personal`) cierra prometiendo: *«En el Curso 14 vas a planear la reunión donde todo esto ocurre, con la herramienta oficial de Planeación de Reunión y Oportunidades de Aprendizaje.»* **La L4 lo recoge literalmente** en el campo *«Conductas observables (foco)»*, que es el puente exacto entre los dos cursos: el 13 enseñó a escribirlas, el 14 enseña dónde se declaran **antes**.
- **Curso 8** (`rama-manada-lobatos`) tiene el puntero **«(En camino — te avisamos cuando esté listo.)»** sobre el Curso 14. **Colateral de publicación**, igual que pasó con el 12 y con el 13.
- **«DURASLID»:** aparece en 8 de los 13 cursos publicados, siempre como **filtro de calidad de una oportunidad de aprendizaje** y siempre con los **ocho** componentes. Este curso **no cambia la definición**: la opera. Y el acrónimo con sus dos formas —DURASLID / DURALSID en la Guía de Clan— ya está registrado en el glosario; **aquí no se reabre**.
- **«Hoja de Ruta»: una sola aparición** en los 13 cursos, y es `mi-compromiso-programa-jovenes` usándola en sentido figurado (*«la hoja de ruta con los cursos que siguen»*). **No hay choque**, pero el curso escribe siempre **«Hoja de Ruta para Reunión»** la primera vez, para separarla.

**Hilo narrativo: Diana, jefa de Manada**, que el miércoles tiene una idea buenísima para el sábado y el domingo no sabe por qué salió mal. Se eligió una **dirigente** —no un protagonista— y una rama **distinta de la del Curso 13** (allí era Marcela, jefa de Tropa) para que las dos historias no se pisen. Sus escenas abren las lecciones densas —L3, L5, L6 y L7— con tres o cuatro líneas puestas **antes** del contenido, que es lo que pide la variante B del patrón 6.2. **Cada lección de contenido cierra con una caja «Y en tu rama»** —las siete, sin excepción— que traduce lo visto a la unidad donde el adulto acompaña.

> ⚠️ **Trampa conocida (patrón de los Cursos 8–12, y motivo de los dos críticos del 12): importar vocabulario de otra rama.** Aquí el riesgo es alto porque el curso las toca todas. Vocabulario verificado que se usa: **Familia = camada · Manada = seisena · Tropa = patrulla · Comunidad = equipo · Clan = ninguno** (el Curso 12 enseña que el rover **se asocia**, no pertenece; los clubes y equipos de proyecto son transitorios — **no escribir «tu club»**). Barrer antes de auditar.

---

## 4. Estructura de lecciones

| # | Lección | Contenido | Fuente |
|---|---|---|---|
| **1** | 📋 Dos hojas, dos preguntas | Registro. **Hook literal.** Diana el domingo, con la reunión ya pasada y la sensación de que faltó algo que no sabe nombrar. **Qué NO es este curso:** no es un tutorial de Excel — es el método de decidir, y el archivo es donde las decisiones se escriben. Las **dos hojas como dos preguntas**, con lo que cada una responde. Recoge las tres promesas: el filtro DURASLID del Curso 5, el ciclo del Curso 6 y las conductas observables del Curso 13. **Puente con el curso de tu rama:** planear no cambia de forma según la rama; cambia **el ambiente, el grado de decisión que toman los protagonistas y el tamaño del paso**. | Pautas de Uso del DNPJ-2026-020; comentarios D3 y A26 |
| **2** | 🗺️ El guion del sábado | La **Hoja de Ruta para Reunión** completa. *Información general*: rama, fecha, lugar, hora y **ambiente de referencia** — aquí se explica el campo, no la doctrina, que es de la L5. El **Desarrollo**: las cinco columnas —**Hora · Actividad · Descripción · Responsable · Materiales**— con lo que el propio instrumento dice de cada una. La columna **Responsable** es la lección dentro de la lección: el comentario del instrumento pide asignar *«a un Dirigente **o a un Protagonista de Programa**»* y advierte que *«dependiendo de la rama … el grado de responsabilidad de los Protagonistas aumentará»*. **Ahí está la alianza joven-adulto, escrita en una celda.** Y la columna **Materiales** como el favor que le haces al Consejo de Grupo: pedir con previsión, no el viernes. | Hoja de Ruta, filas 6–35 y sus comentarios A6, A7, I7, A8, G8, R8, A34, A35, C35, N35, S35 |
| **3** | 🎚️ ¿Esta idea merece entrar? | Abre con Diana defendiendo su idea buenísima ante el consejo de unidad sin poder decir a quién le sirve. **DURASLID como filtro, no como adorno.** Los **ocho** componentes en un `method-grid` con la línea del *Bolsillo*, y dos de ellos —**Desafiante** y **Útil**— desarrollados con el criterio largo del *Modelo*: el desafío es **calibrar**, no endurecer; lo útil obliga a **nombrar al destinatario y la evidencia mínima**. El **tablero de ocho preguntas** del §10.3a como `list` — es la herramienta que el adulto se lleva. **Los tres momentos:** antes, durante y después, **un mismo filtro**. `policy-quote` con la definición del glosario del *Modelo* (p. 105). Y el aviso honesto: **la Ficha puntúa siete; la octava, «Diversa», se responde igual**, y la Hoja de Ruta sí pregunta por el enfoque de Diversidad e Inclusión. | *Modelo* Cap. 10, §10.1 pp. 69–72, §10.2 p. 73, §10.3a pp. 73–74, glosario p. 105; *Bolsillo* p. 8; Ficha M15:M21 |
| **4** | 🎯 Para qué, no qué | La **Información Educativa** de la Ficha, que es *«la columna vertebral»*. Sus tres campos: **Objetivo de la actividad** (uno, en una frase) · **Conductas observables (foco)** —**aquí se cobra el Curso 13**: las tres piezas, verbo claro + contexto + señal verificable, ahora escritas **antes** de la reunión— · **Área(s) de crecimiento y competencias educativas**, con el desplegable encadenado. **Dónde sale la malla:** el documento `Competencias Educativas.xlsx`, con su nombre exacto y dónde se descarga, porque **el instrumento la anuncia y no la trae**. La regla del *Modelo*: **una o dos competencias como foco**, no seis. El aviso de **Familia** (cinco, no veintidós) remitiendo al Curso 13. Y el término: **competencias educativas**, nunca «objetivos educativos» — dicho una vez y sin señalar a nadie. | Ficha, filas 26–36 y comentarios A26, A27, H27, P27; `Competencias Educativas.xlsx`; *Modelo* §10.3a p. 74 |
| **5** | 🎭 El mundo donde ocurre | Abre con Diana entendiendo por qué su juego de piratas no enganchó en una Manada que lleva el trimestre en la selva. El **Desarrollo de la Actividad**: *Contexto desde el ambiente de referencia* y *Paso a paso*. **Las tres capas, otra vez y en una línea** —marco simbólico, fondo motivador, ambiente de referencia—, porque el campo pide la tercera y es la que se confunde: el marco es de la rama y no se elige; **el ambiente de referencia se elige, y se elige por ciclo de programa**, como dice el instrumento. Rejilla de los cinco ambientes con su fuente: **Familia** relatos infantiles · **Manada** relatos fantásticos · **Tropa** historias de aventuras, historias reales, novelas policíacas, cómics, videojuegos y leyendas · **Comunidad** las Historias de la Humanidad · **Clan** — su Guía **no lo declara como capa de rama**, y eso se dice. El **paso a paso** con la exigencia del instrumento: *«qué sucede, quién interviene y qué elementos se usan»*, con tiempos aproximados. Y la regla que cambia la redacción: **escribe el lugar en genérico**, porque la ficha es para que otro la use. | Ficha filas 37–58 y comentarios A37, A38, A46, I9; Guías de Familia §6.1 p. 35, Manada §6.9 p. 30, Tropa Cap. 6 p. 32, Comunidad pp. 19–22; Clan p. 53 |
| **6** | 🦺 Antes de que alguien se lastime | Abre con el tronco mojado del propio instrumento: Diana lo ve, lo rodea y no lo escribe. **Peligro ≠ riesgo**, con el ejemplo literal de la fuente: el tronco mojado es el **peligro**; la posibilidad de caída es el **riesgo**. La matriz: **Probabilidad (1–5) × Consecuencia (1–5) = Nivel de Riesgo**, y las bandas **Bajo 1–5 · Medio 6–10 · Alto 11–15 · Crítico 16–25**. Las **medidas de control** como acciones, no como intenciones. **Adultos requeridos**, internos y externos, con su función y su teléfono. Y el bloque que vive en la **otra hoja**: *A Salvo del Peligro* — el botón **«Me Pongo A Salvo del Peligro»** (nombre de la Política; la hoja lo llama «Botón A Salvo del Peligro»), que **no es un objeto sino un mecanismo que todos deben saber usar**, el minuto al inicio para recordarlo, las **reuniones en línea** con sus cuatro verificaciones, y la **medida de protección 2+1** — con apellido, siempre. **Frontera explícita:** qué hacer cuando un protagonista revela un daño **no es de este curso** (Transversales C03 y Curso 25, ADR-038). | Ficha filas 59–80 y comentarios A59, A60, D60, G60, J60, K60, L60, M60, O60, A73, B74, C74; Hoja de Ruta filas 10–32 y comentarios A10, A11, K11, A12, A13, L13, A15, L16, L18, A20; Política ASP pp. 26 y 44 |
| **7** | 🔁 La evaluación va al principio | Abre con Diana abriendo, dos años después, la ficha de una actividad que no recuerda. **La pregunta del instrumento y su respuesta**, citada: la evaluación está arriba *«para que … lo primero que encontrarás serán las impresiones que tú, u otros dirigentes, tuvieron al llevarla a cabo»*. Las **dos evaluaciones**: la **cualitativa**, un texto libre para tu yo futuro, y la **cuantitativa**, trece criterios de 1 a 5 —los siete de DURASLID más **Seguimiento de Competencias · Programación Oportuna · Coordinación y Logística · Recursos Físicos y Materiales · Recursos Financieros · A Salvo del Peligro**—. **Novedades**: lo que no estaba en el plan, incluidos los conflictos y cómo se manejaron. Y el **cierre con el ciclo de cuatro preguntas** del *Modelo* §10.3c —experiencia · reflexión · comprensión · transferencia—, dicho con los nombres que el adulto ya conoce del Curso 6: **Vivir → Mirar → Comprender → Proyectar**. Cierra enlazando con el Curso 13: **lo que aquí se evalúa de la actividad, allá se registra del protagonista**. | Ficha filas 13–25 y comentarios A13, A14, M14, Q21, A22; *Modelo* §10.3b–c p. 74; *Bolsillo* |
| **8** | 🧰 Tus dos superficies, y tu próxima reunión | **Ahora sí los archivos.** El **Excel DNPJ-2026-020** con sus ocho hojas, y la **herramienta HTML DNPJ-2026-022 V3.0**, que funde las dos hojas en un solo flujo y añade materiales —**y que no trae DURASLID**, por lo que el filtro hay que llevarlo puesto—. **Dónde se descargan las dos, y la malla de competencias**: biblioteca virtual, sección DNPJ, con el nombre exacto de cada una. El aviso de una línea sobre los desplegables que no cargan. **Compromiso:** en la **reflexión** —que es el campo que se guarda—, las dos frases de su próxima reunión: qué va a pasar y para qué. El `mission-box` queda para la **tarea de la semana**: llenar una Hoja de Ruta completa y **una sola** Ficha, y pasarla por el tablero de ocho preguntas. Qué viene en el Curso 15. | Pautas de Uso; biblioteca virtual DNPJ; ADR-056 |

**Carga:** siete lecciones de contenido. El material de la Ficha es el más voluminoso y por eso se reparte en **cuatro** lecciones según la pregunta que responde cada bloque (para qué · dónde · con qué riesgo · cómo salió), en vez de recorrerla de arriba abajo como haría un tutorial. **La duración se mide al final**, con el curso ya auditado (ADR-047).

---

## 5. Logros

| id | `unlockOnModule` | Nombre |
|---|---|---|
| `achievement-1` | 2 | Tengo guion |
| `achievement-2` | 3 | Filtro antes de meter |
| `achievement-3` | 4 | Sé para qué |
| `achievement-4` | 5 | Ambiento la actividad |
| `achievement-5` | 6 | Veo el tronco mojado |
| `achievement-6` | 7 | Cierro lo que abro |
| `achievement-7` | 8 | Planeo la próxima |
| `achievement-8` | **−1** | Diseño oportunidades |

> **Excepción documentada:** 7 + 1, no 4–6 + 1. Misma forma y misma razón que los Cursos 11, 12 y 13 — un logro por lección de contenido; agrupar deja módulos sin reconocimiento.

---

## 6. Conexiones cross-course

**Hacia atrás:**
- **Curso 5 — Método Scout:** dejó el filtro DURASLID enunciado y prometió este curso por su nombre. Aquí se opera.
- **Curso 6 — PNPJ y el Modelo:** las áreas, las competencias educativas y el ciclo **Vivir → Mirar → Comprender → Proyectar**, que aquí vuelve en el cierre.
- **Curso 7 — Mi Compromiso:** enruta a Jefes y Subjefes de Rama primero al 14 y luego al 15.
- **Curso 13 — Seguimiento:** el puente más fuerte. Las **conductas observables** que allí se aprendieron a escribir, aquí se declaran **antes**, en el campo *foco* de la Ficha.
- **Cursos 8–12 — las cinco ramas:** el ambiente de referencia de la L5 y las cajas «Y en tu rama».

**Hacia adelante:** **Curso 15** (el ciclo de programa con ABP, donde estas reuniones se ordenan en un proyecto). Se anuncia **sin** describir sus cinco momentos: la fila del plan que los enumera está marcada como decisión abierta por usar la nomenclatura anterior.

**Cross-línea:** **Políticas Transversales C03** y **Curso 25** para la conducta ante una revelación — enlace, no reexplicación (ADR-038).

### Colaterales obligatorios al publicar

1. **`rama-manada-lobatos`** tiene el puntero **«(En camino — te avisamos cuando esté listo.)»** sobre el Curso 14: voltearlo en el mismo commit. *Es el mismo puntero que hubo que voltear con el 12 y con el 13.*
2. **Sumar `planeacion-reuniones-oda`** al bucle de recompilación de `.github/workflows/pruebas-e2e.yml`.
3. **Actualizar `coursesActive` a 14** en `PORTAL-ADULTOS-ASC/lineas.json` y la tabla de su `README.md`.
4. **`GLOSARIO-ASC.md`:** registrar en §E los términos operativos que este curso estrena —**Hoja de Ruta para Reunión**, **Ficha de Oportunidad de Aprendizaje**, **tablero DURASLID**, la matriz **Prob × Cons** con sus bandas— y la discrepancia del **nombre del botón** entre la Política y el instrumento.
5. **`TRAZABILIDAD.csv`:** las filas se escriben **al cerrar la auditoría**, no después (ADR-050).

---

## 7. Validación contra el marco metodológico

- **Patrón 6.2 — variante B (apertura narrativa + cierre operativo).** Es la que el manual prescribe para cursos **operativos** y la que corresponde: las citas de esta fuente son comentarios de celda escritos en lenguaje de dirigente, no doctrina densa. La única cita que podría pesar —la definición de DURASLID del glosario del *Modelo*— llega en la L3 **después** de los ocho componentes aterrizados, no antes.
- **Andragogía (Knowles):** el destinatario ya planea reuniones, bien o mal. El curso no le enseña a planear desde cero: le da **las decisiones que no está tomando** y un lugar donde escribirlas.
- **Microlearning:** siete lecciones cortas, cada una con una decisión.
- **Ausubel:** el andamiaje se apoya en lo que el adulto ya tiene — DURASLID del Curso 5, áreas y competencias del Curso 6, conductas observables del Curso 13, y el vocabulario de su propia rama.
- **Bandura:** todo se modela con conducta observable del adulto. El tablero de ocho preguntas, la estructura peligro→riesgo→medida y las cuatro preguntas de cierre son guiones literales que puede usar el sábado.
- **DURASLID y educación por el amor:** el curso **se planea a sí mismo con el filtro que enseña** — es la exigencia §7.1 de la línea —, y cuando señala una práctica indebida (planear sin destinatario, no escribir el riesgo que sí se vio) lo hace mostrando el camino, no juzgando.
- **Alianza joven-adulto (§7.3):** no es un párrafo añadido: está en la **columna Responsable** de la L2, donde el propio instrumento pide asignar momentos de la reunión a protagonistas, y crece con la rama.
- **Quizzes:** 2 por lección de contenido (**14**), con **un distractor que sea la idea vieja** — «planear es llenar el formato», «el riesgo es lo que pasa», «la evaluación es lo último», «el ambiente de referencia es la decoración» — y pasando las dos compuertas de paridad del build: ni extremo de longitud ni oveja negra de primera palabra. **Se empareja alargando o acortando distractores, nunca la correcta.**
- **Reflexiones:** una por lección, siempre forzando un caso concreto — una reunión con fecha, una actividad que salió mal, un protagonista con nombre.

---

## 8. Estado

1. **Diseño** — este documento. Se commitea **antes** de tocarlo con scripts *(lección del Curso 9)*.
2. Pendiente: **JSON y build** · **auditoría doctrinal** · **auditoría pedagógica** · **auditoría funcional** · **medir la duración** (ADR-047) · compuerta humana · publicación con sus cinco colaterales.

---

_Documento de diseño v1.0 — 17 de septiembre de 2026._
