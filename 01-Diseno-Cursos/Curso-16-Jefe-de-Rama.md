# Diseño del Curso 16 — 🧭 Jefe de Rama

> **Línea:** Programa de Jóvenes · **Nivel 3** · Curso **16** de 25 — **el que abre el Nivel 3**
> **`courseId`:** `jefe-de-rama`
> **Diseño pedagógico:** Claude Code, por decisión explícita del dueño en la sesión del **27-sep-2026** (excepción del §1.4 de `CREAR-CURSO.md`; mismo precedente que los Cursos 8 a 15). En la misma sesión el dueño decidió que el curso **sirve a las cinco ramas, Familia incluida**, aunque el plan diga «Manada, Tropa, Comunidad, Clan».
> **Estado:** diseño · pendiente JSON, build y las tres auditorías.

Es el **primer curso por cargo**. Los Niveles 1 y 2 le enseñaron al adulto **qué es el Programa** y **cómo se vive en su rama**; los tres operativos (13, 14, 15) le enseñaron a **mirar, planear y sostener un ciclo**. Este curso cambia de sujeto: ya no habla del dirigente frente a los protagonistas, sino del **adulto que responde por la unidad entera** — su equipo, su Jefe de Grupo, sus familias y su continuidad.

---

## 0. La situación de fuentes

**Fuente angular:** ***Manual de Cargos, Perfiles y Funciones por Competencias*** (DNAM, **agosto 2020**, 784 pp.), fichas **2.1.12 Jefe de Manada** (pp. 92–99 del PDF / 84–91 impresas), **2.1.14 Jefe de Tropa**, **2.1.16 Jefe de Comunidad** y **2.1.18 Jefe de Clan**; y **2.1.13 Subjefe de Manada** (pp. 100–101) como contraste.

**Vigencia comprobada el 27-sep-2026 contra la biblioteca** (`scout.org.co/biblioteca/dnam/manual-cargos-perfiles-funciones-por-competencias` → `biblioteca.cdnscout.org/053_0_Manual_de_cargos_y_perfiles_aaeac6e23e.pdf`, 7,6 MB):
- La copia de `DOCUMENTOS BASE/Información para CRAM/…/Documentos Oficiales PNAM 2022/4-Manual de cargos y perfiles.pdf` es **idéntica byte a byte** (sha256 `8e60788a…`).
- La copia de `SCOUTS/ADULTOS EN EL MOVIMIENTO/NACION/4-Manual de cargos y perfiles (1).pdf` tiene **otro sha256** (`67a3bc62…`) porque se **re-guardó en abr-2023**; se comparó el texto extraído de las **784 páginas: 0 diferencias**. Se puede citar cualquiera de las dos; **las páginas son las mismas**.

**Fuentes de apoyo (todas en el corpus, verificadas en el barrido de las ocho fuentes angulares del 17-sep-2026, ADR-056):**

| Fuente | Qué aporta |
|---|---|
| ***Modelo*** §3.1.5, pp. 14–15 | *«El Movimiento es de jóvenes, apoyado por adultos»*; las **tres funciones** del rol adulto (educador · facilitador del grupo · promotor de la actividad) |
| ***Modelo*** §4.3 «Los Dirigentes en la unidad», pp. 21–22 | La **proporción orientadora** por rama, y lo que pasa cuando falta: *«se recarga a un solo dirigente»*. Usa **«Jefe de Unidad»** |
| ***Modelo*** §9.6, pp. 67–68 | *«No "tercerices" tu labor, pero tampoco te la cargues toda. La familia es entorno, no público.»* |
| ***Modelo*** §11.3, p. 78 | *«Los consejos de rama y de grupo garantizan democracia, coherencia y sostenibilidad del proceso»* |
| ***Modelo*** §13.5, pp. 88–89 | *«corresponde a los dirigentes de rama facilitar y promover ese vínculo»* — cuatro orientaciones sobre las familias |
| **Guía de Dirigente de Manada** Cap. 12, pp. 65–68 | La administración de la rama: *«evitar que el funcionamiento dependa de una sola persona»*, **actas del equipo**, **informes por ciclo**, **continuidad «incluso cuando cambian los dirigentes»** |
| **Guía del Dirigente de Familia** pp. 80–83 | El mismo bloque, en su rama: coordinar al equipo adulto, **actas de reuniones con el equipo de Viejos Lobos**, informes por ciclo que *«facilitan la comunicación con el Consejo de Grupo»* |
| **Guía de Dirigente de Tropa** Cap. 0 (pp. 11–12) y §12.6 (pp. 63–65) | La **bienvenida del dirigente nuevo** (lo que el Jefe recibe) y la **memoria de la unidad** —*«Una Tropa sin memoria pierde identidad»*— con la **evaluación del equipo de dirigentes** en tres preguntas |
| **Guía de Dirigente de Clan** Cap. 0 (pp. 9–10) y p. 67 *(ed. vigente de 68 pp.)* | La misma bienvenida, y el mismo bloque de coordinación del equipo |
| **Guía de Dirigente de Comunidad** p. 42 | Remite al **Manual de Cargos (2020)** y pide una *«autoridad legitimada en la confianza y el respeto»* |

### Lo que este curso tiene que resolver

**1 · El nombre del cargo no es uno solo, y los tres son correctos.** El *Manual* no tiene un cargo llamado «Jefe de Rama»: tiene **Jefe de Manada, de Tropa, de Comunidad y de Clan**, y usa **«Jefe de Rama»** como genérico (ficha del Jefe de Grupo, p. 76). El *Modelo* dice **«Jefe de Unidad»** (§4.3). El **Curso 4** ya le dijo al adulto que *«Jefe de Tropa» o «Jefe de Rama» son los nombres reales de los cargos en la ASC*. **El curso nombra los tres y dice que designan lo mismo.**

**2 · Familia no tiene ficha en el Manual, y el curso lo dice.** El *Manual* es de 2020: **«cachorr» aparece 0 veces** en sus 784 páginas. **Decisión del dueño, 27-sep-2026: en Familia, donde no haya referencia clara, manda la *Guía del Dirigente de Familia*.** El curso no inventa una ficha ni toma prestada la de Manada: remite a la Guía, que nombra al **«Jefe de Unidad (Raksha o Papá Lobo)»** (p. 38) y le pide al equipo de Viejos Lobos *«decidir juntos, dejar actas, distribuir responsabilidades, evitar que todo dependa de quien más hace»* (p. 80).

**3 · La ficha usa vocabulario que el *Modelo* 2026 superó en parte, y el curso la traduce sin corregirla.** La competencia específica 1 habla de la **«malla de objetivos educativos»** y de las **«fases y etapas de progresión personal»**. Es el *Manual* de 2020, vigente, redactado antes del *Modelo*. **El cambio real es malla de objetivos → competencias educativas** (*Modelo* §6.3). **Las fases NO se superaron**: el *Modelo* §8.1.2 (PDF 49–50) mantiene *«4 fases de Progresión Personal… con nombres particulares para cada Unidad»*; hoy son **tres piezas** —las etapas (adaptación, progresión y transición), los niveles Exploro/Aplico/Profundizo en cada área y las fases que cada rama nombra a su manera —el *Modelo* dice cuatro; la **Guía de Familia trae tres** (§8.7, p. 59), discrepancia que se cuenta y no se arbitra— (Manada p. 44, Tropa p. 45, Comunidad p. 36)—. **El curso cita la ficha con su letra cuando cita, y enseña con el vocabulario vigente**, explicando la equivalencia en un `info-box`. Es el mismo trato que la plataforma le da a DURASLID/DURALSID: **explicar la diferencia, no arbitrarla**.

**4 · Las cuatro fichas no son idénticas.** Se compararon: difieren en el **requisito de formación** —Manada: *profesional, tecnológica o técnica*; Tropa: *bachiller, preferiblemente estudios superiores*; Comunidad y Clan: *tecnológica, preferiblemente estudios superiores*— y Tropa, Comunidad y Clan añaden *«Contar con las competencias esenciales para desempeñar el cargo o demostrar interés para desarrollarlas»*. Misión, funciones y competencias **sí coinciden**.

### Lo que este curso NO puede decir

- **No que el Jefe de Rama nombra a su equipo.** En el *Manual*, al Jefe **y** al Subjefe los nombra el **Jefe de Grupo** (pp. 92 y 100). La bienvenida de las Guías de Tropa y Clan dice *«nombramiento oficial por parte de tu jefe inmediato»*; el curso **no reproduce esa frase** como regla del cargo.
- **No «Objetivos Educativos» ni «malla»** como vocabulario propio del curso (ver punto 3). Tampoco **«Coordinador de Sección»** ni **«Equipo de Sección»** (`GLOSARIO-ASC.md`, términos superados).
- **No un cargo de «Asistente».** El *Manual* **no lo tiene**; el acompañamiento es función de todo dirigente y es materia del **Curso 17**. Aquí se habla del **Subjefe de Rama** y de **los dirigentes de la unidad**.
- **La proporción de Familia sigue a su Guía** (decisión del dueño, 27-sep-2026): **al menos dos adultos y uno por cada cinco cachorros** (§11.7, p. 78). El *Modelo* (§4.3) dice uno por cada 6; el curso lo menciona entre paréntesis y dice que **para Familia manda la Guía**.
- **No reenseñar los roles Apoyar/Acompañar/Enlazar** (Cap. 9 del *Modelo*): son el Curso 17. **No reenseñar** la Ficha de planeación (Curso 14) ni el ciclo con ABP (Curso 15): este curso enseña **qué hace el Jefe para que su equipo los sostenga**.
- **No la conducta ante una revelación** ni el protocolo de A Salvo del Peligro: son de Transversales C03 y del Curso 25 (**ADR-038**). La Función 1 del cargo —*«Vela por la integridad física, psicológica y moral de los jóvenes»*— se nombra y se enlaza.
- **No el ciclo de vida del adulto en detalle**: es de la línea Política de Adultos (`ciclo-adulto`). La Función 4 lo remite ahí, y el curso también.
- **No «Fiscal» ni «Revisor Fiscal» de Grupo** (ADR-022), si el curso llega a mencionar el Consejo.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `jefe-de-rama` |
| Título | Jefe de Rama |
| Subtítulo | Responder por la unidad sin que dependa de ti |
| Icono | 🧭 |
| Nivel / orden | 3 · Curso **16** — abre el Nivel 3 |
| Duración declarada | **55 minutos, medidos al cerrar las auditorías** (ADR-047): 7.354 palabras, 133,7 pal/min, dentro de la banda 127–134 de los Cursos 13–15. El borrador declaraba 45: medir la subió |
| Módulos | 8 (1 de registro + **7 de contenido**) |
| Destinatario | **Jefes y Subjefes de Rama de las cinco ramas**, y quien se prepara para serlo |
| Recomendado antes | El curso de tu rama (8–12) y los tres operativos (13–15). Ninguno bloquea (ADR-019) |
| `contentVersion` | 2026-09-27 |

---

## 2. Objetivos del curso

Al terminar, el adulto podrá:

1. **Distinguir los tres nombres vigentes de su cargo** —Jefe de Manada/Tropa/Comunidad/Clan, Jefe de Rama, Jefe de Unidad— y ubicar a quién responde y quién le responde.
2. **Explicar sus seis funciones** por la pregunta que cada una responde, no como una lista.
3. **Coordinar a su equipo de dirigentes** con reuniones, actas y reparto de tareas que no dependan de él.
4. **Recibir a un dirigente nuevo** sabiendo qué le toca a él y qué al Jefe de Grupo.
5. **Rendir cuentas hacia arriba** —Jefe de Grupo y Consejo— con un informe por ciclo que diga algo.
6. **Sostener el vínculo con las familias** como aliadas educativas, no como público ni como proveedoras.
7. **Dejar memoria** para que la unidad sobreviva a un cambio de dirigentes.
8. **Ubicarse frente al perfil del cargo** y elegir por qué competencia empezar.

---

## 3. Hook pedagógico

> **«Ser Jefe de Rama no es ser el mejor dirigente de la unidad. Es responder por una unidad que funcione aunque tú faltes.»**

**Por qué este.** Cada pieza está en la fuente, y en varias:
- La misión del cargo lo hace **«responsable del Equipo de Dirigentes que coordina la Rama… de la totalidad de la gestión de la rama»** (*Manual*, p. 92): el objeto del cargo es **el equipo**, no la reunión.
- De las siete competencias esenciales del perfil, la **única en grado 4** es **Trabajo en Equipo** (p. 97); **Planeamiento Estratégico está en 2** (p. 96). El Manual le pide más al Jefe como **coordinador de adultos** que como planificador.
- Las Guías de Manada (p. 66) y Familia (p. 80) dicen que la administración sirve para **«evitar que el funcionamiento dependa de una sola persona»**, y para la continuidad **«incluso cuando cambian los dirigentes»**.
- El *Modelo* (§4.3) nombra el riesgo: cuando la proporción falta, **«se recarga a un solo dirigente»**. Y el **Curso 15** ya enseñó el tercer desacierto del ciclo: el **cansancio del equipo adulto**.

**Ataca el riesgo del curso por cargo:** que el adulto confunda **ascenso** con **hacer más**. El Jefe que lo hace todo es el que deja la unidad sin sucesión.

**Dónde vive:** enunciado en la **L1**; puesto a prueba en la **L3** (el equipo) y en la **L7** (la memoria), que es donde **se cobra**; y cerrado en la **L8**, cuyo compromiso le pide al adulto **una tarea que hoy solo hace él y a quién se la va a enseñar**.

**Verificación anti-ADR-044 — barridos sobre los 15 cursos publicados (27-sep-2026):**
- **Curso 4** (`caracteristicas-esenciales-movimiento-scout`): *«Puede que tu nombramiento diga «Jefe de Tropa» o «Jefe de Rama» — son los nombres reales de los cargos en la ASC»*. **Coincide; la L1 lo continúa.**
- **Curso 7** (`mi-compromiso-programa-jovenes`): enruta *«Si eres Jefe o Subjefe de Rama → Curso 14 y luego Curso 15»*, y promete *«Los cursos del Nivel 3 directamente, porque ahí está el detalle de cada cargo»*. **Este curso cobra esa promesa.** Su lista de cargos incluye **«Asistente»**, que el *Manual* no tiene: queda anotado para el Curso 17, no se toca aquí.
- **Curso 15** (`ciclo-programa-abp`): *«Lo que sigue es el Nivel 3, que ya no va por rama sino por el cargo que ejerces — jefe de rama, asistente, comisionado…»*. **Colateral de publicación**: comprobar si hay que voltear el puntero.
- **Ningún curso publicado define las funciones del Jefe de Rama.** La línea de Política de Adultos, `competencias-esenciales`, trae una tarjeta «Jefe de rama (Manada, Tropa, Comunidad, Clan)» con las competencias específicas: **leerla antes de auditar** y no contradecirla.

**Hilo narrativo: Julián, recién nombrado Jefe de Tropa, que hereda la unidad de una jefa que se muda de ciudad.** Es deliberado: el cargo se ve mejor en el **traspaso**, porque ahí aparece todo lo que la anterior jefa sostenía sola y nadie había escrito. Distinto de los cursos hermanos —Marcela (13), Diana (14), el consejo de unidad (15)—. **Cada lección de contenido cierra con «Y en tu rama»**, las siete, para las cinco ramas.

> ⚠️ **Trampa conocida (Cursos 8 a 14): importar vocabulario de otra rama.** Aquí el riesgo cambia de sitio: ya no son los grupos naturales sino **los nombres de los adultos y de los órganos**. Verificar antes de auditar: **Familia** — Jefe de Unidad (Raksha o Papá Lobo), equipo de **Viejos Lobos**; **Manada** — Viejos Lobos, Consejo de Roca; **Tropa** — jefe de Tropa, Corte de Honor; **Comunidad** — Jefe de Unidad, Congreso de Comunidad; **Clan** — dirigente de Clan / adulto acompañante, Consejo de Clan. **Barrer los cargos y órganos de las cinco Guías**, no solo los nombres de los grupos naturales.

---

## 4. Estructura de lecciones

| # | Lección | Contenido | Fuente |
|---|---|---|---|
| **1** | 🧭 Lo que dice tu nombramiento | Registro. **Hook literal.** Julián abre su nombramiento y encuentra un nombre que no es el que usa su Guía. **Los tres nombres** (Manual por rama · «Jefe de Rama» genérico · «Jefe de Unidad» del *Modelo*) y la continuación del Curso 4. **Familia, dicho sin rodeos**: la Guía nombra al Jefe de Unidad (Raksha o Papá Lobo) y el Manual de 2020 no tiene su ficha. La **misión literal** (`policy-quote`). **La cadena**: te nombra el **Jefe de Grupo**; respondes al **Consejo Scout de Grupo** y al **Jefe de Grupo**; te responde el **Subjefe de Rama**. Y el requisito que sorprende: *«No formar parte del Consejo Scout de Grupo»*. Qué NO es este curso: ni un curso de planeación (14, 15) ni de acompañamiento de la progresión (17). | *Manual* pp. 76, 92; *Modelo* §4.3 p. 22; Guía de Familia p. 38; Curso 4 |
| **2** | 🗂️ Seis funciones, seis preguntas | Las **seis funciones** del Manual en un `method-grid`, cada una por **la pregunta que responde**: ¿se cumplen las normas y está cuidado cada joven? (F1) · ¿funciona el equipo? (F2) · ¿quién habla por la unidad? (F3) · ¿crece cada adulto del equipo? (F4) · ¿están las familias adentro? (F5) · ¿se hacen bien las actividades? (F6). **La F6 es la misma que la del Subjefe** (F2 de su ficha). **Lo exclusivo del Jefe es la F2 (coordinar al equipo) y la F3 (representar a la rama)**; la F1, la F4 y la relación con las familias **las comparte el Subjefe** (ficha 2.1.13, PDF 100–101), pero de ellas responde el Jefe. Un `paragraph` separa **tarea** de **responsabilidad**: que una función sea solo del Jefe no quiere decir que haga él cada tarea — *las tareas se reparten; la responsabilidad, no*. El `info-box` de **traducción** (ordenado para que la idea principal vaya primero: *el cambio de verdad es uno*, malla → competencias educativas; lo de fases y etapas *sigue ahí, con otros nombres*): la *malla de objetivos educativos* es hoy **competencias educativas**; las *fases y etapas de progresión* son hoy tres piezas —**etapas**, **niveles** y las **fases** que cada rama nombra a su manera (cuatro en el *Modelo*, tres en la Guía de Familia) (*Modelo* §8.1.2)—. La caja «Y en tu rama» trae el **requisito de formación de cada ficha** (antes en la L1). | *Manual* pp. 92–94, 98–101; *Modelo* §6.3, §8.1 |
| **3** | 👥 El equipo que conduces | **F2 y la parte de equipo de la F4.** Coordinar planificación, ejecución y evaluación **sin hacerlas todas**; **convocar las reuniones del equipo**; distribuir tareas administrativas; fijar canales. La **proporción orientadora** del *Modelo* por rama y lo que produce su falta —*«se recarga a un solo dirigente»*—. **Actas** del equipo (Manada, Tropa, Familia, Clan). Las **tres preguntas** para evaluar al equipo (Tropa §12.6.5). Y el dato del perfil: **Trabajo en Equipo en grado 4**, con sus conductas —*«se anticipa a los conflictos»*, *«plantea abiertamente los conflictos»*—. **Aquí se pone a prueba el hook**: Julián descubre que la jefa anterior convocaba, decidía y guardaba todo ella — y la lección cierra mostrándolo **resolverlo** (su primera reunión de equipo, con tareas a nombre de otros). | *Manual* pp. 93, 97; *Modelo* §4.3 pp. 21–22; Guía de Manada §12.1 y §12.4; Guía de Tropa §12.6.1 y §12.6.5 |
| **4** | 🌱 Cuando llega alguien nuevo | **F4 — apoyar la gestión de los adultos de su equipo.** Lo que la **Guía de Tropa y la de Clan** le piden al dirigente que llega (registro en Talento 360 y SiScout, Compromiso de Acuerdo Mutuo, inducción en Universidad Scout, los **cuatro módulos de A Salvo del Peligro**, asesor personal, valoración inicial) **leído desde el lado del Jefe**: qué le toca recibir, qué le toca acompañar. **Los primeros tres meses** con su jefe inmediato: ese acompañamiento le toca al Jefe de Rama, aunque el nombramiento lo firme el Jefe de Grupo. **Quién hace qué**: el nombramiento es del **Jefe de Grupo**; el acompañamiento del ciclo de vida sigue la **Política de Adultos** — puente a la línea PA (`ciclo-adulto`), sin reexplicarla. Competencia específica **4, Asesoría personal**. | *Manual* pp. 93, 99, 100; Guía de Tropa Cap. 0 pp. 11–12; Guía de Clan Cap. 0 pp. 9–10 |
| **5** | 🏛️ Hacia arriba: Jefe de Grupo y Consejo | **F3 — representar a la Rama**: participar en las instancias, *asumir compromisos en nombre de la Rama*, *ser vocero de sus decisiones*, *responder por sus actuaciones*. **Lo que el Jefe de Grupo hace contigo** (su ficha): *organiza y convoca las reuniones de Jefes de Rama* y *supervisa el diligenciamiento y seguimiento del plan de rama*. **Rendir cuentas**: la conducta *«Genera y presenta informe de los resultados de su cargo»* y el **informe por ciclo** de las Guías (planificado · ejecutado · resultados · mejoras). Los **consejos de rama y de grupo** como garantía de democracia (§11.3) — y la voz juvenil que llega al Consejo de Grupo desde la rama, con un `paragraph` que reformula la cita (*el Consejo de Grupo apoya lo que la unidad decidió; no lo decide por ella*). Cierra con Julián leyendo un informe de cuatro líneas al ciclo siguiente. | *Manual* pp. 77–78, 93, 96; Guía de Manada §12.4 p. 68; Guía de Familia p. 82; *Modelo* §11.3 p. 78 |
| **6** | 👨‍👩‍👧 Hacia afuera: las familias | **F5 — vías de comunicación efectivas con las familias**: *comunica personalmente* lo necesario para la **vinculación y la permanencia**, garantiza la **retroalimentación permanente** *«incluso en el momento de su retiro»*. Las **cuatro orientaciones** del *Modelo* §13.5 (valorarlas como actores educativos, escucharlas, orientar su participación, medirla y retroalimentarla). La frase que ordena la lección: *«No "tercerices" tu labor, pero tampoco te la cargues toda. La familia es entorno, no público.»* Los documentos que protegen: directorio, fichas de salud, autorizaciones. Cierra con el equipo de Julián repartiéndose las familias y enterándose a tiempo de la siguiente que se va. | *Manual* pp. 93–94; *Modelo* §9.6 p. 67, §13.5 pp. 88–89; Guía de Manada §12.3.1 p. 67 |
| **7** | 📚 Que la unidad no dependa de ti | **La lección que cobra el hook.** La **memoria de la unidad**: *«Una Tropa sin memoria pierde identidad»* —fotografías, historias, logros, **cambios de guías y dirigentes**— separada del **archivo** (actas de la Corte de Honor, planificaciones, evaluaciones, documentos oficiales; las actas del equipo de dirigentes van aparte, §12.6.1). **Lecciones aprendidas** por ciclo. La continuidad **«incluso cuando cambian los dirigentes»**. **El traspaso**: qué le dejó a Julián la jefa anterior y qué no, y qué le va a dejar él a quien venga. | Guía de Tropa §12.6.2 y §12.6.4 pp. 63–64; Guía de Manada p. 66; Guía de Familia p. 80 |
| **8** | ✅ Tu perfil, y tu primera tarea delegada | Las **siete competencias esenciales con su grado** y las **cinco específicas**, en una tabla para **autoubicarse** —puente con `competencias-esenciales` de la línea PA, que no se contradice—. La **autoridad** que pide la Guía de Comunidad: *legitimada en la confianza y el respeto*. Qué viene: el **Curso 17** (acompañar la progresión uno a uno) y el **Curso 18** (Comisionado). **Compromiso** (`mission-box`): una tarea que hoy solo haces tú, a quién se la vas a enseñar y cuándo — *la tarea cambia de manos; de que se haga sigues respondiendo tú* —, con **eco literal del hook** («una unidad que funciona aunque tú faltes») y la invitación a escribirla en el **Compromiso Personal** del certificado. La reflexión se limita a las **dos competencias cuyas conductas mostró el curso** (Trabajo en Equipo, grado 4; Planeamiento Estratégico, grado 2). | *Manual* pp. 94–99; Guía de Comunidad p. 42; PA `competencias-esenciales` |

**Carga:** siete lecciones de contenido. **Las seis funciones no ocupan una lección cada una** —sería recorrer la ficha, el defecto de «tutorial» que el Curso 14 tuvo que esquivar—: la L2 las ordena, y las lecciones 3 a 7 se organizan **por hacia dónde mira el Jefe** (su equipo, el que llega, hacia arriba, hacia afuera, hacia después). **La F1 y la F6 no tienen lección propia**: la F1 se enlaza a A Salvo del Peligro y la F6 es la que el Jefe comparte con el Subjefe y ya enseñaron los operativos. **La duración se mide al final** (ADR-047).

---

## 5. Logros

| id | `unlockOnModule` | Nombre |
|---|---|---|
| `achievement-1` | 2 | Leo mi cargo |
| `achievement-2` | 3 | Conduzco un equipo |
| `achievement-3` | 4 | Recibo al que llega |
| `achievement-4` | 5 | Rindo cuentas |
| `achievement-5` | 6 | Tengo a las familias adentro |
| `achievement-6` | 7 | Dejo memoria |
| `achievement-7` | 8 | Conozco mi perfil |
| `achievement-8` | **−1** | Respondo por la unidad |

> **Excepción documentada:** 7 + 1, no 4–6 + 1. Misma forma y misma razón que los Cursos 11 a 15 — un logro por lección de contenido.

---

## 6. Conexiones cross-course

**Hacia atrás:**
- **Curso 4** — los nombres reales del cargo.
- **Curso 7** — la ruta del Jefe y Subjefe de Rama, y la promesa del «detalle de cada cargo».
- **Cursos 8 a 12** — el vocabulario de cada rama en las cajas «Y en tu rama».
- **Cursos 13, 14 y 15** — lo que el equipo sostiene: el seguimiento, la reunión y el ciclo. **Este curso no los reenseña: enseña a coordinar a quienes los hacen.**

**Hacia adelante:** **Curso 17** (acompañamiento de la progresión uno a uno, Cap. 9 del *Modelo*), **Curso 18** (Comisionado de PJ) y **Curso 25** (A Salvo del Peligro aplicado al Programa).

**Cross-línea:**
- **Política de Adultos** — `ciclo-adulto` (la F4 remite ahí) y `competencias-esenciales` (la L8 se apoya en ella).
- **Desarrollo Institucional** — su **Curso 16 «Jefe de Grupo»** está **planificado, no construido**: el interlocutor hacia arriba de este curso. Anunciar sin prometer fecha.
- **Políticas Transversales C03** — `adulto-garante-entorno-seguro`, para la F1 (ADR-038).

### Colaterales obligatorios al publicar

1. **`ciclo-programa-abp`** y **`mi-compromiso-programa-jovenes`** hablan del Nivel 3 en futuro: comprobar si hay que voltear algún puntero.
2. **Sumar `jefe-de-rama`** al bucle de `.github/workflows/pruebas-e2e.yml`.
3. **`coursesActive` a 16** en `PORTAL-ADULTOS-ASC/lineas.json` y su `README.md`, **y en `PORTAL-ADMIN-ASC/dashboards.json`** (`courseIds` + `coursesActive`) — **avisar antes a la sesión del panel**, que está trabajando en ese repo.
4. `cursos.json` de la línea con `level: 3` y el `levelName` del plan: **«Especialización por cargo»**. **Es el primer curso del Nivel 3**: comprobar que la landing pinte el nivel nuevo con su chip (lo vigila `landing.spec.js`).
5. **`GLOSARIO-ASC.md`**: registrar la **equivalencia de los tres nombres** del cargo, anclada en el *Manual* y el *Modelo* (nunca en este curso, ADR-049), y el aviso de la **ficha que falta para Familia**.
6. **`TRAZABILIDAD.csv`**: filas **al cerrar la auditoría** (ADR-050), incluidas las citas entrecomilladas dentro de un párrafo (ADR-056). Solo agregar: el archivo es compartido.
7. **`INVENTARIO-DOCUMENTOS-BASE.md`** l. 88 le asigna al Curso 16 el *Manual de Cargos y Funciones Red de Jóvenes*: es del **Curso 20**. Corregir.

---

## 7. Validación contra el marco metodológico

- **Patrón 6.2 — variante B (apertura narrativa + cierre operativo).** Curso operativo por cargo; cada lección abre con el traspaso de Julián donde lo dejó la anterior y cierra con algo que el Jefe puede hacer esa semana.
- **Andragogía (Knowles):** el destinatario **ya ejerce el cargo** o está por hacerlo; el curso parte de su nombramiento real y le pide su unidad real.
- **Microlearning:** siete lecciones cortas, cada una con una dirección y una decisión.
- **Ausubel:** se apoya en lo que ya tiene — los nombres del Curso 4, la ruta del 7, el vocabulario de su rama, la reunión y el ciclo del 14 y el 15.
- **Bandura:** guiones concretos —las tres preguntas de evaluación del equipo, las cuatro partes del informe por ciclo, la lista de lo que recibe un dirigente nuevo—.
- **Educación por el amor:** el Jefe que lo hace todo **no se presenta como culpable** sino como alguien que se está cansando; el curso muestra la salida, no el reproche.
- **Alianza joven-adulto (§7.3):** el Jefe **no sustituye la voz de los jóvenes** (*Modelo* §3.1.5 y §15.5); la L5 muestra cómo esa voz llega al Consejo de Grupo desde la rama.
- **Quizzes:** 2 por lección de contenido (**14**), con **un distractor que sea la idea vieja** —«el Jefe de Rama nombra a su equipo», «ser Jefe es hacer más», «la familia es público de la ceremonia», «el informe es para el Consejo, no para el equipo»—. **Ninguna pregunta pregunta el número de una función**: se pide la decisión, con la lista en el enunciado cuando haga falta (lección del Curso 13). Pasar las tres compuertas de paridad del build; **se empareja moviendo distractores, nunca la correcta**. *Tras la auditoría pedagógica (27-sep-2026):* **casos nuevos**, no el mismo que la lección ya resolvió; **distractor pasivo** («Nada / Ninguna / Esperar / Seguir») solo donde codifica un error real —quedan **2 de 14**—; y **dos correctas de contención** (L3 P1 «No: …», L7 P2) para que la correcta no sea siempre la «que suena al curso». L2 P1 y L8 P2 evalúan **tarea sí, responsabilidad no**; L7 P2, **memoria frente a archivo**; L8 P1, ubicarse frente a la ficha.
- **Reflexiones:** una por lección, forzando un caso concreto — su equipo, con nombres; su último informe; la última familia que se fue.

---

## 8. Estado

1. **Diseño** — este documento. Se commitea **antes** de tocarlo con scripts *(lección del Curso 9)*.
2. **Hecho el 27-sep-2026:** JSON y build · **auditoría doctrinal** en tres pasadas (1.ª: 1 crítico, 4 mayores, 11 menores; re-auditoría: 2 mayores y 3 menores **introducidos al corregir**; verificación final: 1 mayor y 3 menores, también introducidos) · **auditoría pedagógica** (1.ª: 3 altos, 9 medios, 6 bajos, 79 % de preguntas de comprensión/aplicación; re-auditoría: APTO CON MEJORAS MENORES, **100 %**) · todas las correcciones aplicadas · **duración medida**: 55 min.
3. **Pendiente:** auditoría funcional (ADR-052, copia con el `status` volteado, **contra servidor local**: la suite corre contra producción por defecto) · compuerta humana · publicación con sus colaterales.

---

_Documento de diseño v1.0 — 27 de septiembre de 2026._
