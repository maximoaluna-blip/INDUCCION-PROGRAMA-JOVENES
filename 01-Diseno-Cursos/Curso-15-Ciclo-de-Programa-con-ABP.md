# Diseño del Curso 15 — 🎯 Ciclo de Programa con ABP

> **Línea:** Programa de Jóvenes · **Nivel 2** · Curso **15** de 25 — **el que cierra el Nivel 2**
> **`courseId`:** `ciclo-programa-abp`
> **Diseño pedagógico:** Claude Code, por decisión explícita del dueño en la sesión del **17-sep-2026** (excepción del §1.4 de `CREAR-CURSO.md`; mismo precedente que los Cursos 8 a 14).
> **Estado:** diseño · pendiente JSON, build y las tres auditorías.

Es el **tercero y último de los cursos pedagógicos operativos** (13, 14, 15), y **cierra el Nivel 2**. El Curso 13 enseñó a mirar lo que pasa en la reunión; el 14, a decidir la reunión antes de que pase; este enseña **de dónde salen las reuniones**: de un proyecto que la unidad eligió y sostiene durante meses.

---

## 0. La situación de fuentes

**Fuente angular:** ***Modelo de Aplicación «El Gran Juego para la Vida»***, **Capítulo 11, pp. 75–80 del PDF** (DNPJ-2026-024). **Comprobado el 17-sep-2026 contra la biblioteca: sha256 idéntico** (`fae1b783…`) y confirmado en el barrido de las ocho fuentes angulares de la línea (**ADR-056**).

> ⚠️ **Este curso NO se construye desde el plan de línea.** La fila del Curso 15 en el §4.2 del plan está **marcada como decisión abierta** desde el 16-sep-2026: describe el ciclo con los cinco momentos de la **nomenclatura anterior** —*propuesta, decisión, preparación, desarrollo, evaluación*— y enumera las 4 Dinámicas empezando por **«Objetivos Educativos»**, que el *Modelo* declaró superada (pp. 27 y 51). **Las dos frases se ignoran a propósito**: el curso sale del Cap. 11 del *Modelo*, y las Dinámicas se nombran como las dejó el Curso 5 tras su re-auditoría.

**Fuentes de apoyo, todas vigentes y verificadas:**

| Fuente | Qué aporta |
|---|---|
| ***Modelo*** **Cap. 10, pp. 68–74** | **DURASLID**, que el §11.2b invoca como filtro obligatorio de la planificación. Ya es materia del Curso 14 |
| **Guía del Dirigente de Familia** §11.4, p. 76 | Los **cuatro momentos** de la rama, con los criterios DURASLID nombrados en el momento 2 |
| **Guía de Dirigente de Manada** §11.1, pp. 61–63 | Los cuatro momentos en prosa —*«comprender la realidad, decidir juntos qué vivir, organizarlo con intención y, finalmente, experimentar y evaluar»*— y la **duración**: 3 a 4 meses, 12 a 16 reuniones |
| **Guía de Dirigente de Tropa** §§11.2–11.3, p. 59 | Cuatro fases —*«conocer la realidad, planificar, realizar y evaluar»*— y la misma duración de 3 a 4 meses. *(Esta Guía entró al corpus el 17-sep-2026, **ADR-057**.)* |
| **Guía de Dirigente de Comunidad**, pp. 44–47 | Los cuatro momentos, el **énfasis del ciclo** y el organismo de gobierno que fija la duración |
| **Guía de Dirigente de Clan** §11.1, p. 60 *(ed. vigente de 68 pp.)* | La **nota histórica**: el ciclo de **4 momentos** que en **2009** la Región Interamericana **formalizó a 3** |

### Lo que este curso tiene que resolver, y es una promesa hecha

El **Curso 11 (Comunidad), publicado**, dice textualmente que si al adulto le quedó el ciclo con **cinco** momentos del Curso 6 y en su Guía lo ve en **cuatro**, *«no te lo estás inventando: son dos textos vigentes que lo cuentan distinto, y ahí es donde el **Curso 15 pondrá orden**»*. **Este curso tiene que cumplir eso.**

Y el problema es más grande de lo que esa frase sugiere: **no son dos textos, son seis.**

| Documento | Momentos |
|---|---|
| ***Modelo*** §11.2 | **cinco** — diagnóstico participativo · planificación con ABP · ejecución iterativa · **presentación pública** · evaluación y transferencia |
| Guía de **Familia** | cuatro |
| Guía de **Manada** | cuatro |
| Guía de **Tropa** | cuatro |
| Guía de **Comunidad** | cuatro |
| Guía de **Clan** | registra que fueron cuatro y que en 2009 se formalizaron a **tres** |

**El orden que el curso pone no es armonizar por decreto: es explicar la resta.** Alineados, los cuatro de las Guías y los cinco del *Modelo* son el mismo ciclo, y **lo que falta en las Guías es siempre el mismo momento**:

| *Modelo* (5) | Guías de rama (4) |
|---|---|
| a. Diagnóstico participativo | Momento 1 — análisis de la unidad |
| b. Planificación con ABP | Momento 1 (selección) + Momento 2 (organización) |
| c. Ejecución iterativa | Momento 3 — realización |
| **d. Presentación pública** | **— no existe** |
| e. Evaluación y transferencia | Momento 4 — evaluación |

**Ese cuarto momento —el que sobra en la cuenta de las Guías— es exactamente lo que ABP le añade al ciclo de siempre.** (**Cuarto**, no quinto: en el *Modelo* §11.2 el quinto es *evaluación y transferencia*. El diseño lo llamó «quinto» en tres sitios y lo corrigió su auditoría doctrinal, hallazgo **M1**.) No es un trámite extra: el propio *Modelo* titula su §11.2 «El Ciclo de Programa **amalgamado con** ABP». Eso es el hook, la tesis y la razón de ser del curso.

### Lo que este curso NO puede decir

- **No «Objetivos Educativos»**, ni siquiera citando el plan. Se dice **competencias educativas** (*Modelo* §3.2, p. 16), y las 4 Dinámicas se nombran como las dejó el **Curso 5**: *Competencias Educativas · Oportunidades de Aprendizaje · Vida en Grupo · Estructura y Funcionamiento*.
- **No los cinco momentos en nomenclatura anterior** —*propuesta, decisión, preparación, desarrollo, evaluación*—. Es lo que el **Curso 7 tenía publicado** y se corrigió el 16-sep-2026.
- **No decir que las Guías están mal.** Son cinco documentos vigentes de la misma DNPJ. El curso **explica la diferencia**, no la arbitra — es lo mismo que la plataforma hace con el acrónimo DURASLID y con las edades del Rover.
- **No prometer sincronía entre ciclo y progresión.** El *Modelo* lo prohíbe expresamente (§11.4, p. 79): *«No hay obligación de sincronizar progresión personal con el calendario del ciclo»*.
- **No la conducta ante una revelación** ni el protocolo de salidas: son de Transversales C03 y del Curso 25 (**ADR-038**). El §11.5 del *Modelo* toca seguridad; el curso enlaza y no reexplica.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `ciclo-programa-abp` |
| Título | Ciclo de Programa con ABP |
| Subtítulo | De dónde salen las reuniones que ya sabes planear |
| Icono | 🎯 |
| Nivel / orden | 2 · Curso **15** — cierra el Nivel 2 |
| Duración declarada | **se mide al cerrar las tres auditorías** (ADR-047). *La estimación de trabajo se ha equivocado las cuatro últimas veces; no se declara.* |
| Módulos | 8 (1 de registro + **7 de contenido**) |
| Destinatario | **Todo dirigente de unidad, de cualquiera de las cinco ramas** |
| Recomendado antes | El **Curso 13** y el **Curso 14**, que son sus hermanos, y el curso de tu rama. Ninguno bloquea (ADR-019) |
| `contentVersion` | 2026-09-17 |

---

## 2. Objetivos del curso

Al terminar, el adulto podrá:

1. **Explicar por qué su Guía de rama cuenta cuatro momentos y el *Modelo* cinco**, y cuál es el que falta.
2. **Formular con su unidad una pregunta guía** que nazca de una necesidad real y no de una ocurrencia.
3. **Nombrar el destinatario y los criterios de éxito** de un proyecto antes de empezarlo.
4. **Partir el proyecto en tramos** con metas intermedias y un cierre reflexivo en cada hito.
5. **Preparar una presentación pública** que sea un acto de ciudadanía y no un espectáculo.
6. **Cerrar el ciclo con evidencias y transferencia**, respondiendo qué hizo la unidad, para quién, qué aprendió y qué hará ahora.
7. **Elegir el ritmo del ciclo** —micro, meso o macro— que su unidad pueda sostener con calidad.
8. **Reconocer los cinco desaciertos frecuentes** antes de que se le instalen.

---

## 3. Hook pedagógico

> **«El ciclo de tu rama tiene cuatro momentos. El del *Modelo* tiene cinco. El que falta es contarlo en público — y no es un trámite añadido: es lo que convierte un plan de actividades en un proyecto.»**

**Por qué este.** Cumple la promesa que el **Curso 11 dejó por escrito**, resuelve de verdad la duda que un dirigente tiene delante cuando abre dos documentos vigentes, y ataca el riesgo que `CREAR-CURSO.md` §8.3 le asigna a este curso —**«ABP como moda pedagógica»**— por el único camino que funciona: **ABP no es una metodología importada que se le añade al ciclo scout; es el nombre de lo que le faltaba al ciclo scout para que lo hecho le sirva a alguien**.

**Dónde vive:** enunciado en la **L1** con la tabla de las seis fuentes; cobrado en la **L5**, que es la lección del cuarto momento; y cerrado en la **L8**, donde el compromiso le pide al adulto la pregunta guía y el destinatario de su próximo ciclo.

**Verificación anti-ADR-044 — barridos sobre los 14 cursos publicados:**

- **Curso 6** (`pnpj-gran-juego-para-la-vida`) **ya enseñó los cinco momentos con la nomenclatura correcta**: *«diagnóstico participativo… planifica el proyecto… lo ejecuta paso a paso… lo presenta en público; y al final evalúa y transfiere»*. **Este curso continúa; no reintroduce nada.**
- **Curso 11** (`rama-comunidad-nomadas`) promete que el 15 *«pondrá orden»* en el 5-contra-4. **Es el encargo, y la L1 lo cumple.**
- **Curso 13** (`seguimiento-progresion-personal`) promete *«cómo el ciclo de programa de tu unidad ordena el año entero»*. Lo cobra la **L7**.
- **Curso 14** (`planeacion-reuniones-oda`, publicado hoy) cierra diciendo *«¿de dónde salen las reuniones? … Eso es el ciclo de programa, y es el Curso 15»*. **La L1 lo recoge literalmente.**
- **Curso 7** enruta a Jefes y Subjefes de Rama al 14 y luego al 15.
- **Cursos 8 y 12** llevan punteros *«(En camino…)»* y *«están por construirse»* sobre este curso. **Colaterales de publicación.**
- **«ABP» y «Aprendizaje Basado en Proyectos»:** solo en los Cursos 6 y 11, y en los dos como **anuncio**, nunca desarrollado. No hay definición previa que contradecir.

**Hilo narrativo: el consejo de unidad de un Grupo cualquiera**, no un dirigente solo. Es deliberado y distinto de los dos cursos hermanos —Marcela en el 13, Diana en el 14—: **un ciclo de programa no lo sostiene una persona**, y el tercer desacierto del *Modelo* es justamente *«todo recae en los dirigentes»*. El hilo sigue **un proyecto real de principio a fin** —una unidad que decide hacer algo con la quebrada del barrio— y cada lección lo retoma donde lo dejó la anterior. **Cada lección de contenido cierra con «Y en tu rama»**, las siete.

> ⚠️ **Trampa conocida (el patrón de los Cursos 8 a 12, que costó tres críticos en el Curso 10 esta misma semana): importar vocabulario de otra rama.** Aquí el riesgo vuelve a ser alto porque el curso las toca todas. Vocabulario verificado: **Familia = camada · Manada = seisena, Consejo de Roca · Tropa = patrulla, Consejo de Patrulla y Corte de Honor · Comunidad = equipo, Consejo de Equipo y Congreso de Comunidad · Clan = Consejo de Clan**, y el rover **se asocia**, no pertenece. **Barrer los órganos y los cargos de las cinco Guías antes de auditar**, no solo los nombres de los grupos naturales.

---

## 4. Estructura de lecciones

| # | Lección | Contenido | Fuente |
|---|---|---|---|
| **1** | 🎯 Cuatro momentos, o cinco | Registro. **Hook literal** y la tabla de las **seis fuentes**: el *Modelo* con cinco, **cuatro** Guías con cuatro, y la de **Clan**, que **no los enumera** y solo registra que en 2009 fueron tres. **La resta, explicada**: alineados, lo que falta en las Guías es siempre el mismo momento — la **presentación pública**. Recoge la promesa del **Curso 11** («aquí es donde el Curso 15 pone orden»), la del **Curso 14** («de dónde salen las reuniones») y la del **Curso 13**. Qué NO es este curso: ni una metodología de moda ni un calendario. | *Modelo* §11.2, pp. 76–77; Guías de las cinco ramas; Cursos 6, 11, 13 y 14 |
| **2** | ❓ La pregunta que lo sostiene todo | Qué es **ABP en sintonía Scout** (§11.1): una **pregunta guía**, un **producto o servicio con destinatario definido**, **evidencias observables** y una **difusión pública**. *Si falta alguno, no hay ABP* — que es el Desacierto 1 dicho al derecho. **ABP no compite con el Método: lo afina**, y el *Modelo* enumera cómo toca cada elemento. Y el **primer momento**: la unidad lee su entorno y formula la pregunta —*¿qué duele?, ¿qué falta?, ¿qué queremos mejorar?, ¿a quién servirá lo que hagamos?*—. El **énfasis del ciclo**, que es como lo llaman las Guías. | *Modelo* §11.1 p. 75 y §11.2a p. 76; Guías de Manada §11.1.1 p. 62 y Comunidad p. 45 |
| **3** | 🎯 Para quién, y cómo sabremos que salió bien | El **segundo momento**: productos, **destinatarios**, necesidades, **criterios de éxito en lenguaje claro**, metas con riesgos y apoyos, **roles asignados**. Y el filtro: *«se verifica la presencia de DURASLID»* — **puente directo con el Curso 14**, que es donde el adulto aprendió a usarlo. El aviso del *Modelo* sobre el dirigente: *«tu participación directa puede variar, sin embargo tu apoyo siempre está presente»* — enfocar, cuidar la seguridad y **generar alianzas**. | *Modelo* §11.2b, pp. 76–77 y Cap. 10; Guías de Familia y Comunidad, momento 2 |
| **4** | 🔁 Por tramos, no de un tirón | El **tercer momento**: **tramos cortos con metas intermedias y pruebas reales**, y **cada hito cierra con reflexión**. Lo que hace el dirigente aquí, textual: *«haces preguntas poderosas, moderas los comentarios, garantizas accesibilidad e inclusión, cuidas el clima emocional y el ritmo»*. **Puente con el Curso 13**: las evidencias que se recogen en cada hito son las conductas observables que allí aprendió a mirar. | *Modelo* §11.2c, p. 77; Curso 13 |
| **5** | 📣 Contarlo en público | **La lección que justifica el curso — el cuarto momento.** Se comparte el producto **con su destinatario**: feria, demostración, piloto en campo, entrega a una institución, celebración de unidad. El foco: **servir y explicar por qué se tomaron ciertas decisiones**. `policy-quote` con *«Es un acto de ciudadanía, no un show»*. Por qué las Guías de rama no lo traen y por qué eso no las hace estar mal. Y el **Desacierto 5**: sin reconocimiento real, el proyecto pierde sentido para quien lo hizo. | *Modelo* §11.2d p. 77 y §11.6 desacierto 5, p. 80 |
| **6** | 🎒 Qué se llevan a casa | El **quinto momento del Modelo**, que es el que cierra: **evidencias observables sobre proceso, producto y competencias movilizadas**, y la **transferencia** — *¿qué te llevas a casa, a la escuela, a tu equipo?*. El **Desacierto 4, la evaluación decorativa**: formularios largos al final sin conversación, contra cierres de reflexión en cada hito. La **familia como aliada con tareas concretas**, no como público de aplausos (§11.5). Y las **cuatro preguntas del cierre operativo**: qué hizo la unidad, para quién, qué aprendió, qué hará ahora. | *Modelo* §11.2e p. 77, §11.5 p. 79, §11.6 desacierto 4 p. 80, §11.7 p. 80 |
| **7** | ⏱️ Cuánto dura un ciclo | Los **tres ritmos** (§11.4): **microciclos de 4 a 12 semanas**, **mesociclos de 8 a 16**, **macrociclos anuales**, y la regla que los elige: *«el ritmo que puedes sostener con calidad»*. Lo que dicen las Guías: **Manada y Tropa, de 3 a 4 meses, entre 12 y 16 reuniones**; en **Comunidad la fijan los propios jóvenes a través de su organismo de gobierno**; y **la Guía de Clan no fija ninguna** — comprobado, y el curso lo dice en vez de rellenarlo. Y el aviso que evita un error caro: **no hay obligación de sincronizar la progresión con el calendario del ciclo** — *«el ciclo multiplica oportunidades; la progresión acredita evidencias a ritmos distintos»*. Aquí se cobra la promesa del **Curso 13**. | *Modelo* §11.4, pp. 78–79; Guías de Manada p. 61, Tropa §11.3 p. 59, Comunidad p. 44 |
| **8** | ⚠️ Los cinco desaciertos, y tu próximo ciclo | Los **cinco desaciertos** del §11.6 con su corrección, en un `method-grid`: llamar «proyecto» a cualquier cosa · **sobreambición** · **cansancio del equipo adulto** · evaluación decorativa · falta de reconocimiento. El tercero se subraya, porque es el que **este curso previene con su propio hilo narrativo**. Las **4 Dinámicas** nombradas como las dejó el Curso 5, para cerrar el Nivel 2 amarrando con el Nivel 1. Qué viene después: el **Nivel 3 por cargo** y el **Curso 25**. **Compromiso:** la pregunta guía y el destinatario del próximo ciclo. | *Modelo* §11.6 pp. 79–80, §11.7 p. 80; Curso 5 |

**Carga:** siete lecciones de contenido. Los cinco momentos **no ocupan una lección cada uno** —eso convertiría el curso en un recorrido del capítulo, que es justo el defecto que el Curso 14 tuvo que esquivar—: el primero va con la definición de ABP porque comparten la pregunta guía, y el cuarto y el quinto se separan porque **el cuarto es la tesis del curso**. **La duración se mide al final** (ADR-047).

---

## 5. Logros

| id | `unlockOnModule` | Nombre |
|---|---|---|
| `achievement-1` | 2 | Sé preguntar |
| `achievement-2` | 3 | Tengo destinatario |
| `achievement-3` | 4 | Voy por tramos |
| `achievement-4` | 5 | Lo cuento en público |
| `achievement-5` | 6 | Cierro con transferencia |
| `achievement-6` | 7 | Elijo mi ritmo |
| `achievement-7` | 8 | Veo venir el desacierto |
| `achievement-8` | **−1** | Sostengo un ciclo |

> **Excepción documentada:** 7 + 1, no 4–6 + 1. Misma forma y misma razón que los Cursos 11 a 14 — un logro por lección de contenido.

---

## 6. Conexiones cross-course

**Hacia atrás:**
- **Curso 5 — Método Scout:** las 4 Dinámicas, con los nombres corregidos, cierran el curso.
- **Curso 6 — PNPJ y el Modelo:** enseñó los cinco momentos. Este los opera.
- **Curso 11 — Comunidad:** le debe a este curso el «orden» del 5-contra-4. **Es la deuda que la L1 salda.**
- **Curso 13 — Seguimiento:** las evidencias de cada hito; y el aviso de que ciclo y progresión no se sincronizan.
- **Curso 14 — Planeación:** DURASLID y la Ficha. **Una reunión es un tramo de un ciclo**, y ese es el puente.

**Hacia adelante:** **Nivel 3** (cursos por cargo, 16–20) y **Curso 25** (A Salvo del Peligro aplicado al Programa). Se anuncian sin prometer fechas.

**Cross-línea:** **Políticas Transversales C03** para la conducta ante una revelación (ADR-038).

### Colaterales obligatorios al publicar

1. **`rama-manada-lobatos`** y **`rama-clan-rovers`** llevan punteros *«(En camino…)»* / *«están por construirse»* sobre el Curso 15: voltearlos y recompilar.
2. **`planeacion-reuniones-oda`** dice *«todavía está por construirse, y te avisamos aquí mismo cuando esté»*: voltearlo.
3. **`rama-comunidad-nomadas`** dice *«que sirve a todas las ramas y todavía está por construirse»*: voltearlo — **y comprobar que lo que este curso enseña es lo que allí se prometió**.
4. **Sumar `ciclo-programa-abp`** al bucle de `.github/workflows/pruebas-e2e.yml`.
5. **`coursesActive` a 15** en `PORTAL-ADULTOS-ASC/lineas.json`, su `README.md`, **y `PORTAL-ADMIN-ASC/dashboards.json`** — el tercer repo, que no está en el checklist viejo y cuyo olvido deja al panel sin los alumnos del curso.
6. **`GLOSARIO-ASC.md`:** registrar en §E el **ciclo de programa con sus dos recuentos** (cinco del *Modelo*, cuatro de las Guías, tres en la nota histórica del Clan), los **tres ritmos** y la **pregunta guía**.
7. **`TRAZABILIDAD.csv`:** las filas se escriben **al cerrar la auditoría**, no después (ADR-050). Y por la regla del **ADR-056**: **también las citas entrecomilladas que vivan dentro de un párrafo**, no solo las `policy-quote`.

---

## 7. Validación contra el marco metodológico

- **Patrón 6.2 — variante B (apertura narrativa + cierre operativo).** Corresponde: es un curso **operativo**, y su fuente está escrita en lenguaje de dirigente. Cada lección abre con el proyecto de la quebrada donde lo dejó la anterior, y cierra con algo accionable.
- **Andragogía (Knowles):** el destinatario ya hace ciclos, los llame así o no. El curso no le enseña a planear: le muestra **el momento que le falta** y por qué su Guía no se lo pedía.
- **Microlearning:** siete lecciones cortas, cada una con una decisión.
- **Ausubel:** el andamiaje se apoya en lo que ya tiene — DURASLID del 5 y el 14, las áreas y los momentos del 6, las conductas observables del 13, la Ficha del 14.
- **Bandura:** las cuatro preguntas del cierre operativo, la pregunta guía y los cinco desaciertos son guiones literales que el adulto puede llevarse al consejo de unidad.
- **DURASLID y educación por el amor:** el curso pasa su propio filtro, y los cinco desaciertos se presentan **con su corrección al lado**, nunca como reproche. El tercero —*cansancio del equipo adulto*— se trata con cuidado explícito: *«menos, pero mejor, también educa»* es de la fuente.
- **Alianza joven-adulto (§7.3):** es estructural, no decorativa. El §11.3 del *Modelo* dice que los protagonistas son **autores de las preguntas, diseñadores de soluciones y voceros del resultado**, y el curso lo gradúa por edades en las siete cajas «Y en tu rama».
- **Quizzes:** 2 por lección de contenido (**14**), con **un distractor que sea la idea vieja** — «ABP es una metodología de moda», «la presentación es el acto de clausura», «el ciclo debe cuadrar con la progresión», «evaluar es pasar un formulario al final» — y pasando las tres compuertas de paridad del build. **Se empareja moviendo distractores, nunca la correcta.**
- **Reflexiones:** una por lección, forzando un caso concreto — el último ciclo real de su unidad, con fechas y nombres.

---

## 8. Estado

1. **Diseño** — este documento. Se commitea **antes** de tocarlo con scripts *(lección del Curso 9)*.
2. **Hecho el 17-sep-2026:** JSON y build · **auditoría doctrinal** (2 críticos, 7 mayores, 13 menores, 6 no verificables) · **auditoría pedagógica** (4 altos, 9 medios, 4 bajos) · **48 correcciones aplicadas** · **auditoría funcional** (ADR-052, sobre copia con el `status` volteado) · **duración medida** (ADR-047): **6.384 palabras → 50 minutos**, no los 55 del borrador ni los ~45 que estimó este diseño.
3. **Pendiente:** compuerta humana y publicación con sus **siete** colaterales.

> **Los dos críticos, para que no se repitan.** (1) El curso decía que DURASLID entra en la planificación **«no al final»**. Es falso: el *Modelo* §10.3 (p. 73) lo titula *«Tres momentos y un mismo filtro»* —diseño, facilitación y cierre— y el certificado del **Curso 14, ya publicado**, dice *«en sus tres momentos»*. El curso convertía un «además» en un «en vez de», contra la plataforma y contra el glosario, que ya traía el aviso. (2) El curso decía **«cuatro momentos, las cinco»** Guías. La *Guía de Clan* **no los enumera**: su §11.1 (p. 60) define el ciclo por «fases sucesivas» sin contarlas, y lo único parecido a cuatro es una instrucción de lectura de su p. 6. **Este mismo documento lo tenía bien** —su §0 nunca contó a Clan entre las cuatro— y la deriva se introdujo al escribir el JSON, de donde pasó al **texto del certificado**.

---

_Documento de diseño v1.0 — 17 de septiembre de 2026._

---

> **Dos cosas que quedaron señaladas y no se tocaron, porque no son de este curso.**
>
> **1 · El mensaje del 70 %.** La caja de entrada promete —y es verdad— que *«hay que acertar las dos para seguir»*. Pero cuando el estudiante falla una, `engine.core.js` le responde *«Puntuación: 50 %. **Necesitas 70 % para continuar**»*, una segunda regla que nadie le explicó y que en la práctica es un 100 %. Es del **núcleo compartido**, así que afecta a las **cuatro líneas**: se arregla en `_MOTOR/` y se propaga, no aquí.
>
> **2 · Los «20 minutos más» de las reflexiones.** La caja de entrada dice *«y unos 20 más si escribes las reflexiones»*. Con **siete** reflexiones eso son menos de tres minutos cada una, y varias piden tres elementos escritos: lo realista está entre **30 y 40**. La cifra es la misma en los **Cursos 13 y 14, ya publicados**, así que cambiarla solo aquí rompería la coherencia del trío. **Es decisión del dueño**, y por eso queda registrada en vez de aplicada.
