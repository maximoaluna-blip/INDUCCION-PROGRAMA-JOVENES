# Diseño del Curso 13 — 🛠️ Seguimiento de la Progresión Personal

> **Línea:** Programa de Jóvenes · **Nivel 2** · Curso **13** de 25
> **`courseId`:** `seguimiento-progresion-personal`
> **Diseño pedagógico:** Claude Code, por decisión explícita del dueño en la sesión del **17-sep-2026** (excepción del §1.4 de `CREAR-CURSO.md`; mismo precedente que los Cursos 8 a 12).
> **Estado:** diseño · pendiente JSON, build y las tres auditorías.

Es el **primero de los tres cursos pedagógicos operativos** (13, 14, 15) y el primero de la línea que no enseña *qué es* el Programa de Jóvenes sino *cómo se sostiene un martes por la noche*. Las cinco ramas ya están publicadas: este curso sirve a las cinco a la vez.

---

## 0. La situación de fuentes

**Fuente angular:** ***Recursos Educativos para Dirigentes — Herramientas de Seguimiento para la Progresión Personal 2.0*** (DNPJ, **edición publicada de jul-2026, 36 pp.**, código interno impreso CNC-028-1).

> ⚠️ **Esta fuente se cambió el día que empezó el curso.** La copia que el corpus tenía desde mayo **era un borrador de trabajo** —42 pp., sin los Capítulos 1 y 2, y con una nota del redactor a sí mismo impresa dentro del Capítulo 6—. La edición publicada **renombra «Libro de oro» como «Bitácora»** en todo el documento. Ver **ADR-054** y `CHANGELOG-DOCTRINA.md` 2026-09-17. **Todas las páginas que cita este diseño son de la edición publicada**, y van **+1** respecto de cualquier cita anterior al 17-sep-2026.

**Fuentes de apoyo, todas vigentes y verificadas:**

| Fuente | Qué aporta |
|---|---|
| ***Modelo de Aplicación «El Gran Juego para la Vida»*** Cap. 9, pp. 58–67 | El **rol del dirigente**: los tres roles pedagógicos atados a los tres momentos (§9.2, p. 59), observar con intención (§9.3.1, p. 61), Kolb (§9.3.2.1, p. 62), **el ciclo operativo de seis pasos** (§9.5, pp. 66–67) y la frase que sostiene el curso entero (p. 66) |
| `Archivo Base de Oportunidades de Aprendizaje.xlsx` (DNPJ) | **Descargado el 17-sep-2026: no estaba en el corpus.** Es el Anexo 1 del documento angular. **22 competencias × 5 ramas × 3 niveles**, y para cada casilla: facilitación, aplicación en reuniones, **conductas observables** y **herramientas de evaluación** |
| `Registro Acompañamiento Progresión Personal.xlsx` — **DNPJ-2026-021** | El instrumento que el Curso 6 ya le prometió al estudiante. Portada · **Hoja central** (identificación · acompañamiento · registro de progresión · síntesis por áreas) · **OA duplicable** · 5 hojas de rama. **Sin deriva:** su sha256 coincide con el de la biblioteca |
| `Herramienta - Registro y Acompañamiento Progresión Personal` — **DNPJ-2026-025 v1.1** (HTML) | **Descargada el 17-sep-2026: tampoco estaba.** Es la versión **aplicación** del Registro: perfiles, fases, registro de OA, informes por rama y salida en PDF. Existe, y el curso tiene que decirlo |

### Nueve discrepancias y erratas entre fuentes vigentes — se registran, no se armonizan

1. **Tres vocabularios vivos para los mismos tres niveles.** El *Modelo* dice **Exploro / Aplico / Profundizo** cuando habla del protagonista (§8.1.2.1, p. 47; §9.2, p. 59) — es el vigente según `GLOSARIO-ASC.md` §E — y **Exploración / Aplicación / Profundización** cuando los presenta como los **tres niveles de desempeño** (§8.1.2, pp. 46–47; reaparece en §9.3.1, p. 61, y §9.5, p. 67): la forma en sustantivo **también es del Modelo**, no solo de las *Herramientas 2.0* y de las columnas del Archivo Base. El Registro DNPJ-2026-021, en su «Nivel de desempeño», dice **Explora / Aplica / Profundiza**; la herramienta web rotula **Exploro / Aplico / Profundizo**. **El curso usa el del Modelo y nombra los otros dos**, porque el dirigente va a abrir los tres archivos el mismo día. Mismo tratamiento que *evaluativo/valorativo*. Y son **niveles secuenciales**, no tres etapas dentro de una reunión: una misma oportunidad se registra **en un solo nivel** (*Modelo* §8.1.2, pp. 47–49; `GLOSARIO-ASC.md` §E).
2. **Rovers: el anexo dice una cosa y el Excel hace otra.** El Anexo 1 del PDF (p. 35) afirma que en Rovers *«se presenta directamente Profundización, porque el enfoque es más integrado»*. **La hoja «Rovers» del Archivo Base real trae las tres columnas llenas**, y es la más extensa (956 filas contra 289). El curso enseña lo que el instrumento hace.
3. **Los dos Excel no rotulan igual sus hojas.** El Archivo Base va por **rama** (Cachorros · Lobatos · Scouts · Nómadas Scout · Rovers); el Registro, por **unidad** (Familia · Manada · Tropa · Comunidad · Clan). Ninguno está mal —es la distinción del *Modelo*, p. 106—, pero el dirigente abre los dos y conviene decírselo.
4. **La fila de aplicación cambia de nombre en Rovers:** «Aplicación en reuniones» en las otras cuatro, **«Diseño de Actividades Educativas»** en Rovers. Coherente con una rama que no trabaja por reuniones.
5. **En Cachorros se llama «Dimensión», no «Competencia»** — en las dos herramientas y en el glosario del propio documento angular (p. 33). No es descuido: es el vocabulario de la rama.
6. **Erratas de la edición publicada, que obligan a parafrasear en vez de citar:** *«cada nivel de despeño»* (p. 3), *«Protagonistas de Programa»* en singular a lo largo de todo el texto, y *«comUnidad»* con U mayúscula. **Ninguna de esas frases se cita literal**; donde hace falta la idea, se parafrasea.
7. **El documento se confunde a sí mismo en la FAQ 1** (p. 29): pregunta *«¿Tengo que usar todas las técnicas del Archivo Base de Oportunidades de Aprendizaje?»* cuando las técnicas están en su **Capítulo 4** y el Archivo Base es el Excel de competencias. **Al citar, decir «el banco de técnicas del Cap. 4»**, nunca «las técnicas del Archivo Base».
8. **La fuente angular no tiene Capítulo 3.** El PDF salta del **Cap. 2 (p. 2)** al **Cap. 4 (p. 3)**. No afecta a ninguna cita de este curso; se registra para que nadie lo busque.
9. **Familia no trae lo mismo en los dos instrumentos.** El Archivo Base (hoja *Cachorros*) da **6 áreas × 22 dimensiones**; el Registro (hoja *Familia*) resume en **5 áreas × 5 dimensiones**, porque **junta Afectividad y Sociabilidad en «Socioafectividad»** —lo confirma su hoja «OA duplicable»—. Las otras cuatro ramas coinciden. **El curso lo dice en la L9**: el Archivo Base para decidir qué mirar, el Registro para anotar.

### Lo que este curso NO puede decir

- **No «las 9 técnicas»**, ni ningún número. El Cap. 4 se presenta como *«una pequeña muestra de técnicas a manera de banco»* y recomienda *«escoger una o dos»* (p. 3). Es lista **abierta**. Ya se corrigió una vez, en el Curso 6, el 28-jun-2026.
- **No «obligatorio para Asesores Personales».** La fila del Curso 13 en el plan lo dice y **está marcada como decisión abierta** (v1.2, punto 2): «asesor personal» no es rol del Programa de Jóvenes y «obligatorio» choca con el **ADR-019**. El curso no importa esa frase; su destinatario es **todo dirigente de unidad**.
- **No «Libro de oro»** para el instrumento de seguimiento: es **bitácora**. El *Libro de Oro* de la Manada y el de la Patrulla siguen existiendo con ese nombre —son **símbolos de rama**, no instrumentos de registro (*Guía de Manada* p. 31; *Guía de Tropa* pp. 9, 10 y 12)— y el curso lo aclara en una línea, porque los Cursos 8 y 10 ya los enseñaron así.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `seguimiento-progresion-personal` |
| Título | Seguimiento de la Progresión Personal |
| Subtítulo | Mirar con intención, registrar lo justo, acordar un paso |
| Icono | 🛠️ |
| Nivel / orden | 2 · Curso **13** |
| Duración declarada | **60 minutos — medidos al cerrar las tres auditorías**, como manda el ADR-047. El borrador cerró en **6.923 palabras** y las correcciones de la doctrinal y la pedagógica añadieron **861**: hoy son **7.784**. A 55 min el ritmo sería de **141,5 palabras/minuto**, fuera de la banda de los cinco cursos de rama medidos con la misma extracción (Manada 131,6 · Tropa 131,9 · Comunidad 135,9 · Familia 136,2 · Clan 129,6); a **60 min** queda en **129,7**, que es justo el valor del Curso 12. *La estimación inicial de trabajo era ~40 min: la medida la descartó dos veces.* |
| Módulos | 9 (1 de registro + **8 de contenido**) |
| Destinatario | **Todo dirigente de unidad, de cualquiera de las cinco ramas** |
| Recomendado antes | Nivel 1 completo y **el curso de tu rama** (8–12). Ninguno bloquea: son recomendaciones (ADR-019) |
| `contentVersion` | 2026-09-17 |

---

## 2. Objetivos del curso

Al terminar, el adulto podrá:

1. **Escribir una conducta observable** con sus tres piezas —verbo claro, contexto y señal verificable— y reconocer los tres errores que la arruinan.
2. **Elegir una técnica** del banco según la experiencia que tiene enfrente, en vez de intentar usarlas todas.
3. **Armar el kit mínimo de su propia rama** y sostenerlo un mes.
4. **Repartir el seguimiento en tres momentos** —antes, durante y después— para que no aparezca de golpe al final del mes.
5. **Dar una devolución** con la estructura «Vi – Logró – Próximo paso», y ajustarla al nivel de progresión del protagonista.
6. **Acompañar una experiencia de fuera del Movimiento** sin invadir, con las tres puertas de entrada y el cierre de Kolb en cuatro preguntas.
7. **Decidir qué NO se registra**, dónde se guarda y quién puede leerlo.
8. **Abrir los tres instrumentos oficiales** sabiendo qué hace cada uno y cuál necesita hoy.

---

## 3. Hook pedagógico

> **«"Hoy quiero ver esto." Esa frase, dicha antes de la reunión, es más seguimiento que cualquier formato llenado después.»**

**Por qué este.** Es la tesis literal de la fuente. El Cap. 6.1 (p. 14) pone el trabajo decisivo **antes**: *«se elige qué se quiere observar»*. El ejemplo *«hoy quiero ver cómo asumen roles»* está en el **§4.1 (p. 3)** —en la p. 14 lo que aparece es *«cómo asumen roles sin recordatorios»*—. La receta del §4.9 (p. 10) y la FAQ 15 (p. 32) dicen lo mismo con otras palabras: una conducta, una técnica, una pregunta de cierre. Y ataca de frente el riesgo del curso —volverse manual de Excel—: **el instrumento no es el seguimiento; la frase decidida antes sí**.

**Dónde vive:** enunciado literal en la **L1** y en la **L5**; cobrado en la **L9**, donde la **reflexión** —que es el único campo escribible y autoguardado de esa lección— le pide al adulto escribir **esa misma frase** para su próxima reunión. El `mission-box` de la L9 queda para la **tarea de la semana**: el compromiso va donde se puede escribir, no donde solo se puede leer.

**Verificación anti-ADR-044 — barridos sobre los 12 cursos publicados:**

- **Curso 6** (`pnpj-gran-juego-para-la-vida`) ya prometió este curso con estas palabras: *«En el Curso 13 del Nivel 2 vas a aprender estas técnicas en profundidad. Hoy solo guarda el principio: **la progresión se observa, no se examina**»*. El Curso 13 **recoge esa frase en su L1** y la desarrolla; no la contradice.
- El mismo curso ya enseña el **banco de técnicas** con siete ejemplos, ya dice *«no hay que usarlas todas: se eligen una o dos»* y ya nombra el **Registro DNPJ-2026-021**. El Curso 13 **continúa**, no reintroduce.
- **Curso 8** (`rama-manada-lobatos`) promete *«las técnicas concretas para observar y registrar este avance»* por las Sendas. Coherente.
- **Curso 7** (`mi-compromiso-programa-jovenes`) enruta: *«si tu foco es acompañar la progresión personal → empieza por el Curso 13»*, y lo tiene como respuesta correcta de un quiz. Coherente.
- **«2+1»: cero apariciones literales** en los doce cursos. La **coevaluación 2+1** entra aquí por primera vez, así que el curso la nombra **siempre con apellido** —*coevaluación 2+1*— para no chocar con la **medida de protección 2+1** de A Salvo del Peligro (glosario §E, dos acepciones).
- **«Libro de oro»:** solo en los Cursos 8 y 10, y como **símbolo de rama**. No hay contradicción que corregir.

**Hilo narrativo: Marcela, jefa de Tropa**, que abre el curso con una carpeta de formatos en blanco y la sensación de ir atrasada. Vuelve **abriendo** las cuatro lecciones densas —L5, L6, L7 y L8— con una escena de tres o cuatro líneas puesta **antes** del contenido, que es lo que pide la variante B del patrón 6.2. Se eligió una dirigente —no un protagonista— porque el curso sirve a las cinco ramas: **cada lección de contenido cierra con una caja «Y en tu rama»** —las ocho, sin excepción— que traduce lo visto a **la unidad donde el adulto acompaña: Familia, Manada, Tropa, Comunidad o Clan**, con el vocabulario propio de cada una.

> ⚠️ **Trampa conocida (patrón de los Cursos 8–12): importar vocabulario de otra rama.** Aquí es el riesgo principal, porque el curso las toca todas: **Familia = Camada** (no estable a propósito), **Manada = seisena**, **Tropa = patrulla**, **Comunidad = equipo**, **Clan = ninguno**: el Curso 12 enseña que el rover **no pertenece**, se asocia — los clubes y equipos de proyecto son transitorios. No escribir «tu club». Barrer antes de auditar.

---

## 4. Estructura de lecciones

| # | Lección | Contenido | Fuente (p. del PDF salvo nota) |
|---|---|---|---|
| **1** | 🛠️ La carpeta en blanco | Registro. Hook literal. Marcela y sus formatos vacíos. **Qué NO es este curso:** no es un tutorial de Excel — los instrumentos llegan al final, en la L9, y a propósito. Recoge la promesa del Curso 6: *la progresión se observa, no se examina*. **Puente con el curso de tu rama:** los cinco nombres del camino de progresión —**Sendas** en Manada, **Travesías** en Tropa, **Rumbos** en Comunidad, **fases de progresión** en Familia y **PARCE** en Clan—, para decir que este curso no trae otro camino, sino la forma de ver por dónde va cada quien. Las tres preguntas que el seguimiento responde. | Cap. 1, p. 2; Cursos 8–12 |
| **2** | 👀 Qué es una conducta observable | Las **tres piezas**: verbo claro + contexto + señal verificable, con los dos ejemplos de la fuente. Los **tres errores**: rasgos generales, metas demasiado grandes para la edad, y mezclar tres ideas en una frase. **«La edad cambia la forma, no el sentido»**, con las cinco ramas en un `method-grid`. El estándar de registro: una nota breve con fecha y contexto, y dos o tres observaciones por ciclo. | Cap. 2, pp. 2–3; Modelo §9.5 p. 66 (2–3 conductas por competencia) |
| **3** | 🧰 Un banco, no una lista | El Cap. 4 como **ocho propósitos**, no como inventario de técnicas: observar y registrar · instrumentos simples · auto y coevaluación · bitácoras y reflexión · evidencias · hábitos · retro externa · acuerdos. **Un ejemplo vivo por propósito.** `policy-quote` con *«una pequeña muestra de técnicas a manera de banco… la idea no es usarlo todo»*. La receta del §4.9: **una conducta, una técnica, una pregunta de cierre**. | Cap. 4, §§4.1–4.9, pp. 3–11 |
| **4** | 🎒 El kit mínimo de tu rama | La lógica del kit —**una herramienta para mirar, una para conversar, una para guardar evidencia**— y los cinco kits en un `method-grid`, cada uno con su «cómo se ve en la práctica». El **«mínimo mínimo»** de un mes para equipos saturados. Aquí cae la aclaración de **bitácora ≠ Libro de Oro**. | Cap. 5, §§5.1–5.5, pp. 11–14 |
| **5** | ⏱️ Antes, durante y después | Abre con Marcela escribiendo una sola frase en el reverso de la hoja de la reunión. Los tres momentos, con el hook enunciado otra vez en el «antes». **Frecuencia realista** (por reunión · cada 2–3 semanas · por salida · por proyecto). **Qué técnica según el tipo de experiencia**, las cinco combinaciones de la fuente. Cuántas evidencias por ciclo, rama por rama. El puente al *Modelo* queda en **una cláusula** dentro del «después», no en un esquema aparte: el **ciclo operativo de seis pasos** no lo enseñó ningún curso previo, así que aquí sería un séptimo esquema nuevo, usado una vez y nunca cobrado. Cierra con la caja «Y en tu rama» del «antes». | Cap. 6, §§6.1–6.4, pp. 14–17; Modelo §9.5, pp. 66–67 |
| **6** | 💬 Vi – Logró – Próximo paso | Abre con Marcela mordiéndose el «Juan, tú siempre te desconectas»: no le faltan ganas, le falta la estructura. La estructura en tres pasos con el ejemplo completo de Scouts. **La retroalimentación cambia con el nivel de progresión**, y ahí se enganchan los **tres roles del dirigente** del *Modelo*: Apoyar↔Exploro, Acompañar↔Aplico, Enlazar↔Profundizo. El tono: por qué «eres», «siempre» y «nunca» cierran la conversación. **Cuando toca corregir:** hecho · impacto · marco · acción concreta. Cerrar con un paso pequeño y dos preguntas. | Cap. 7, §§7.1–7.6, pp. 17–21; Modelo §9.2, p. 59 |
| **7** | 🚪 Lo que pasa fuera de la reunión | Abre con la scout que, camino a casa, le cuenta a Marcela que discutió con su papá y que esta vez no gritó. Las experiencias externas como material educativo. **Las tres conductas de cuidado antes de preguntar**: ofrecer elección, delimitar el propósito, cuidar la privacidad. **Las tres puertas** —un momento que te marcó · un reto que apareció · algo que salió distinto—, cada una con su pregunta base y su «cómo usarla sin invadir». **Una experiencia, una competencia educativa.** Cierre con el **ciclo de cuatro pasos** —experiencia concreta · observación reflexiva · conceptualización · **experimentación activa**—, enlazado con el **Vivir → Mirar → Comprender → Proyectar** que el Curso 6 ya enseñó, y con el aviso de que ese cuarto paso **no** es el momento «Aplico» de la progresión. | Cap. 9, §§9.1–9.5, pp. 23–28 (los cuatro pasos, §9.5, pp. 27–28); *Modelo de Aplicación de Bolsillo*, p. 3 |
| **8** | 🔐 Lo que no se registra | Abre con los tres renglones sobre la separación de unos papás que dejó escritos la jefa anterior, legibles dos años después. **La lección que separa este curso de un tutorial.** Qué es educativo y qué es íntimo, con la regla práctica de la fuente. Hechos, no etiquetas. **Los tres acuerdos** de dónde se guarda: quién registra, quién puede leer, cuánto se conserva. Evidencias visuales y el cuidado extra en Cachorros y Lobatos. Conversaciones sensibles: **se enlaza y no se reexplica** la conducta ante una revelación — eso es de Transversales C03 y del Curso 25 (**ADR-038**). | Cap. 8, §§8.1–8.6, pp. 21–23; Cap. 6.5, p. 17; Cap. 11, p. 32 |
| **9** | 📄 Tus tres instrumentos, y tu próxima reunión | **Ahora sí los archivos.** `Archivo Base` (qué observar y con qué, por rama, área y nivel: 22 competencias × 3 niveles) · `Registro DNPJ-2026-021` (sus cuatro secciones y la hoja de OA) · la **herramienta HTML DNPJ-2026-025 v1.1**, que existe y casi nadie sabe. **Dónde se consiguen los tres:** la biblioteca virtual de la Asociación, sección DNPJ, con el nombre exacto de cada uno — el curso llegaba hasta la puerta y no entregaba la llave. Los **tres vocabularios** de los tres **niveles**, dichos de una vez, con el aviso de que son **secuenciales** y no etapas de una reunión. El aviso para **Familia**: el Registro resume las seis áreas en cinco. Caja «Y en tu rama»: qué hoja abrir en cada uno de los dos Excel. **Compromiso:** la frase del hook escrita para una reunión concreta, **en la reflexión**, que es donde el adulto puede escribirla y donde se le guarda; el `mission-box` queda para la **tarea de la semana** —llenar el instrumento para un solo protagonista, y sostener una herramienta un mes—. Qué viene en los Cursos 14 y 15. | Anexos, pp. 34–36; los tres archivos; *Modelo* §8.1.2, pp. 46–47 |

**Carga:** ocho lecciones de contenido; el material del Cap. 4 es el más voluminoso y por eso se reparte entre la L3 (los propósitos) y la L4 (los kits), en vez de concentrarse. **La duración se mide al final**, con el curso ya auditado, y se declara entonces (ADR-047).

---

## 5. Logros

| id | `unlockOnModule` | Nombre |
|---|---|---|
| `achievement-1` | 2 | Escribo lo que se ve |
| `achievement-2` | 3 | Elijo una, no todas |
| `achievement-3` | 4 | Tengo kit |
| `achievement-4` | 5 | Decido antes |
| `achievement-5` | 6 | Devuelvo sin juzgar |
| `achievement-6` | 7 | Abro la puerta sin entrar |
| `achievement-7` | 8 | Sé lo que no escribo |
| `achievement-8` | 9 | Abro el archivo correcto |
| `achievement-9` | **−1** | Acompaño la progresión |

> **Excepción documentada:** 8 + 1, no 4–6 + 1. Es la misma forma de los Cursos 11 y 12 —un logro por lección de contenido— y la razón es idéntica: con ocho lecciones, agrupar logros deja módulos sin reconocimiento.

---

## 6. Conexiones cross-course

**Hacia atrás:**
- **Curso 5 — Método Scout:** *Progresión Personal* es uno de los 8 elementos; aquí se vuelve operación.
- **Curso 6 — PNPJ y el Modelo:** las 6 áreas, las competencias educativas y los tres momentos. **Este curso cobra literalmente la promesa que aquel dejó** y usa su misma frase de cierre.
- **Curso 7 — Mi Compromiso:** el adulto ya declaró si su foco es acompañar la progresión; ese enrutamiento lo trae aquí.
- **Cursos 8–12 — las cinco ramas:** el kit mínimo de la L4 es el puente; cada rama reconoce su propio vocabulario.

**Hacia adelante:** **Curso 14** (planear la reunión donde se mira) y **Curso 15** (el ciclo donde el seguimiento se ordena). Se anuncian sin prometer fechas.

**Cross-línea:** **Políticas Transversales C03** y **Curso 25** para la conducta ante una revelación — enlace, no reexplicación (ADR-038).

### Colaterales obligatorios al publicar

1. **`rama-manada-lobatos`** es el único curso con marcas **«(En camino — te avisamos cuando esté listo.)»** sobre el Curso 13: hay que voltearlas en el mismo commit. *Es exactamente el puntero que el Curso 11 tenía sobre el 12.*
2. **Sumar `seguimiento-progresion-personal` al bucle de recompilación** de `.github/workflows/pruebas-e2e.yml` — el paso que se olvidó con `rama-clan-rovers` (memoria del 17-sep).
3. **Actualizar `coursesActive` a 13** en `PORTAL-ADULTOS-ASC/lineas.json` y la tabla de su `README.md`.
4. **`GLOSARIO-ASC.md`:** ampliar la fila **Exploro / Aplico / Profundizo** con los otros dos vocabularios vivos, y registrar en §C los **dos instrumentos nuevos** (Archivo Base y herramienta HTML DNPJ-2026-025).
5. **`TRAZABILIDAD.csv`:** las filas se escriben **al cerrar la auditoría**, no después (ADR-050). Este curso debería quedar en el rango de 45–60 filas de los construidos con la práctica actual.

---

## 7. Validación contra el marco metodológico

- **Patrón 6.2 — variante B (apertura narrativa + cierre operativo).** Es la que el manual prescribe para cursos operativos, y la que corresponde aquí: ninguna cita de esta fuente es densa ni abstracta —está escrita en lenguaje de dirigente—, así que la fórmula literal *«Si abres… es exacto y pesado»* sería impostada. Cada lección abre con una escena de unidad y cierra con un `info-box` accionable.
- **Andragogía (Knowles):** el destinatario ya acompaña a alguien. El curso no le pide creer: le pide probar una técnica durante un mes y ver qué pasa.
- **Microlearning:** ocho lecciones cortas, cada una con una sola decisión que tomar.
- **Ausubel:** el andamiaje se apoya en lo que el adulto ya tiene del Curso 6 (áreas, competencias, tres momentos) y del curso de su rama (su grupo natural, sus fases).
- **Bandura:** todo se enseña por conducta observable del adulto; las devoluciones de la L6 son modelos literales que puede repetir el sábado.
- **DURASLID y educación por el amor:** el curso trata al dirigente como la fuente trata al protagonista — sin sermón, con un paso pequeño. La L8 es el ejemplo: enseña un límite **cuidando**, no amenazando.
- **Quizzes:** 2 por lección de contenido (16), con **un distractor que sea la idea vieja** —«seguimiento = llenar el formato», «observar = vigilar», «evaluar = poner nota»— y pasando las dos compuertas de paridad del build: ni extremo de longitud ni oveja negra de primera palabra. **Se empareja alargando o acortando distractores, nunca la correcta.** La auditoría pedagógica del 17-sep reescribió **9 de los 16** —cinco de memoria pasaron a decisión, y tres distractores muertos o duplicados se sustituyeron—; los dos emparejamientos que eso obligó se hicieron **moviendo un distractor**, según esta misma regla.
- **Reflexiones:** una por lección, siempre forzando un caso concreto — un protagonista con nombre, una reunión con fecha.

---

## 8. Estado

1. **Diseño** — este documento. Se commitea **antes** de tocarlo con scripts *(lección del Curso 9)*.
2. **JSON y build** — hechos. El build pasa **sin advertencias**: ni sesgo de longitud, ni extremo, ni oveja negra.
3. **Auditoría pedagógica** — hecha el 17-sep-2026: *APTO CON MEJORAS MENORES* (4 altos · 7 medios · 6 bajos). **Las 17 correcciones con texto listo están aplicadas**, más el puente cross-course de la L1 y la corrección doctrinal del `mission-box` de la L1 —que asignaba «club» al Clan y contradecía al Curso 12—. Recompilado y verificado.
4. Pendiente: **auditoría doctrinal** · **auditoría funcional** · **remedir la duración** (ADR-047) · compuerta humana · publicación con sus cinco colaterales.

---

_Documento de diseño v1.1 — 17 de septiembre de 2026._

> **v1.1 (17-sep-2026):** sincronizado con el JSON tras aplicar la **auditoría pedagógica**. Cambios de estructura que tocan esta ficha: el compromiso de la L9 y la tarea de la semana **intercambiaron** bloque (`reflection` ↔ `mission-box`); la L5 pierde el `info-box` del ciclo operativo de seis pasos y gana su caja «Y en tu rama»; la L9 gana la caja «Y en tu rama» y un `info-box` con **dónde descargar los tres instrumentos**; las L5 a L8 ganan una **apertura narrativa** de Marcela; la L1 gana el **puente con los cinco caminos de progresión**. **Ningún módulo se añadió, partió ni reordenó**, así que §5 (Logros) queda igual.
