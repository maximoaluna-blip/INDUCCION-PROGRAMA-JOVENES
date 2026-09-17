# Diseño del Curso 12 — 🏔️ Rama Clan (Rovers)

**Línea:** Programa de Jóvenes · **Nivel:** 2 (Profundización por rama y práctica pedagógica) · **Posición:** quinto y último curso de rama. Con él se cierran las cinco ramas.

> La sección de **Jóvenes Adultos: 18 a 20 años**. La **Rama** es Rovers y la **Unidad** es el **Clan**. Es la única rama cuyos protagonistas son mayores de edad — y eso cambia todo lo demás.

---

## 0. La situación de fuentes

**Clan tiene Guía de Dirigente 2026**, y es la más extensa de las cinco: **68 páginas**.

> 🔴 **Este diseño se escribió sobre una edición que no era la vigente (corregido el 17-sep-2026, ADR-056).**
>
> El curso se construyó sobre una copia de **63 páginas**; la que publica la biblioteca tiene **68** desde el 23-jul-2026, y **no es solo paginación: cambió contenido**. Lo que la reedición tocó y afectaba al curso: la **segunda fase del PARCE** pasó de «cuatro competencias + dos áreas» a **cuatro áreas en exploración y una en aplicación** (§8.7.2); el **capítulo de A Salvo del Peligro se reescribió entero**, de modo que dos frases que el curso citaba entrecomilladas **ya no existen**; el acrónimo pasó de **DURALSID a DURASLID**; se añadió el **trámite de la venera BP** (Rover → Jefe de Grupo → Oficina Scout Nacional); «Ciudadanía Activa» pasó a **«Ciudadanía Global»** en tres sitios; y **la errata aritmética que este diseño registra como discrepancia 5 la corrigió la propia fuente**.
>
> **Lo que enseñó, y es la regla que dejó:** las quince `policy-quote` estaban protegidas por su campo `source` y por su fila de trazabilidad, y **las quince sobrevivieron**. Las dos que murieron eran **comillas angulares dentro de un párrafo**, sin `source` y sin fila, invisibles a cualquier barrido de páginas. **Un fragmento entrecomillado que se atribuye a la fuente es una cita, lleve o no `source`, y por tanto lleva fila en `TRAZABILIDAD.csv`.**
>
> **Lo que sigue se conserva porque explica cómo quedó el curso.**

| Fuente | Qué cubre | Peso |
|---|---|---|
| **Guía de Dirigente de Clan** (DNPJ 2026, **68 pp.** — el curso se construyó sobre la de 63) | Todo lo propio de la rama, incluidos el **PARCE** y los cuatro ritos que el dirigente prepara | **Angular** |
| **Modelo de Aplicación 2026** | Sección/Rama/Unidad y el lugar del Clan en el recorrido | Manda en la estructura de ramas |
| **PNPJ 2024** | Marco de política | Textos oficiales |
| **Guía de Dirigente de Comunidad** (DNPJ 2026) | El otro lado de la transición de entrada | Se cita solo para eso |
| *Roverismo hacia el éxito* (B-P, 1922) · *Rover Scouts* (Gilcraft, 1938) · *Rover Scouts, lo que son y lo que hacen* (B-P, 1932) | Citados **por la propia Guía** como fundamento de la canoa, la vigilia y las ceremonias | Históricos, citados a través de la Guía |

**Paginación:** a diferencia de la Guía de Comunidad, esta **no imprime números de página extraíbles**. Las citas del curso dicen **«p. N del PDF»**, que es la convención que ya usa el Curso 10.

### Ocho discrepancias entre fuentes vigentes

Ninguna se inventa ni se esconde. Las que el adulto va a encontrarse al leer los documentos se le dicen dentro del curso.

1. **El plan de línea tenía inventado el nombre del PARCE — y se corrigió antes de diseñar.** Decía *«Plan de Aprendizaje y Reconocimiento Comunitario Equilibrado»*; la Guía dice **«Proceso Autónomo del Rover en Competencias para su Evolución»** (§4.2, §5.2, §8.9 y §11.2 — siete veces en todo el documento: pp. 8, 21, 25, 40, 41, 44 y 57). *Es el hallazgo que más justifica leer la fuente antes que el plan: de haber seguido el plan, el error entraba al curso y de ahí al certificado.*
2. ~~**El acrónimo de las actividades se escribe de dos maneras.**~~ **RESUELTO por la edición vigente: escribe DURASLID** (6 veces, y deja una DURALSID residual en la p. 26). Lo que decía, sobre la edición de 63 pp.: Esta Guía escribe **DURALSID** (7 veces, 0 de DURASLID); las de Comunidad, Manada y Familia escriben **DURASLID**, y así lo dicen **los 7 cursos publicados** de la plataforma. Son **los mismos ocho criterios** — solo cambian de sitio la L y la S. *Se enseña **DURASLID**, que es la forma mayoritaria y la que el adulto ya vio, y se avisa de que su Guía lo escribe al revés.*
3. **Scouts por los ODS: dos iniciativas, cuatro o seis, según qué se lea.** La Guía de Comunidad describe **dos** (Mensajeros de Paz y Tribu Tierra) más dos reconocimientos mundiales, y así lo enseña el **Curso 11, publicado ayer**. Esta Guía anuncia *«seis iniciativas»* y a continuación **describe cuatro**: Mensajeros de la Paz, Tribu Tierra, **LifeLeaders** y **HealthAllies** (pp. 57–61). *Se enseñan las cuatro que la fuente describe, se dice que el marco creció desde lo que vio en el Curso 11, y **se dice dentro del curso que la Guía anuncia seis y describe cuatro**; no se enseñan como seis, porque la propia Guía no las lista.*
4. **La edad de egreso no cuadra consigo misma.** §8.3 fija *«edad máxima de egreso del movimiento scout hasta los 20 años»*; §8.11 exige para el BP *«edad no superior a los 20 años y 8 meses»*; §8.12 permite que la Partida se haga hasta los **21 años y 2 meses**; y §8.7.1 admite a un aspirante que ingresa *«antes de cumplir 21 años»*. El plan de línea escribe la rama como **«18–20/21 años»**. *Se enseña la banda 18–20 como sección y **se dicen los tres topes reales** —20 y 8 meses para el BP, 21 y 2 meses para la Partida—, porque un dirigente que no los sepa deja a un Rover sin su insignia máxima por un trámite tardío.*
5. ~~**La aritmética del PARCE tampoco cuadra consigo misma.** La Guía describe fase por fase cuántas competencias educativas se llevan a cada nivel. En **exploración** suman 4 (RP) + 2 (RT) = **6**, y en **profundización** 1 (RT) + 5 (BP) = **6**: cierran contra las **seis áreas de crecimiento**. Pero en **aplicación** suman 2 (RP) + 3 (RT) + 2 (BP) = **siete**, y áreas solo hay seis. *No se armoniza po

> ⚠️ **RESUELTA por la edición vigente (ADR-056):** la segunda fase pasó a **cuatro áreas en exploración y una en aplicación** (§8.7.2, p. 45) y las tres columnas cierran en seis. El curso dejó de denunciarla el 17-sep-2026.r cuenta propia —la fuente es la que manda—, pero **se dice dentro del curso**, porque la propia lección invita a sumar y el adulto va a llegar al mismo siete. Lo que sí queda claro en la Guía, y es lo que se enseña como meta, es el destino: **las seis áreas en los tres niveles**.*
6. **El artículo 4 de la Ley cambia una palabra entre guías.** Aquí dice *«sin distinción de credo, **raza**, nacionalidad o clase social»*; la Guía de Comunidad dice *«credo, **etnia**, nacionalidad o clase social»*. *Se cita la Ley del Rover tal como la imprime **su** Guía, y no se armoniza por cuenta propia: es texto ritual.*
7. **La progresión Rover tiene dos nombres entre guías.** La Guía de **Comunidad** manda al Nómada a preguntar *«¿cómo funciona el **Plan de Progresión Personal Rover**?»* — y así quedó escrito en el Curso 11. La Guía de **Clan** la llama **PARCE** en todo el documento. *Se enseña PARCE y se dice que es lo mismo que el Curso 11 anunció con el otro nombre.*
8. ~~**Dos erratas de edición que confunden al leer.**~~ **LAS DOS CORREGIDAS en la edición vigente** — hoy son «**10.2** Rol del Dirigente…» (p. 57) y «**12.4 Comisiones** Regionales Rover» (p. 68). ⚠️ *Pero la vigente estrena otra:* los apartados **13.1, 13.2 y 13.2.1** (pp. 65–66) están impresos **dentro del Capítulo 11**, así que no falta un capítulo 13: está mal numerado. ⚠️ *Y una señal sobre el corpus:* esa edición arrastra **13 instrucciones de edición sin ejecutar** dentro del texto («Nota para insertar como pie de página…»), contra 2 de la anterior — es el patrón del **ADR-054**, con la diferencia de que **esta sí es la que publica la biblioteca**. Lo que decía: El §10.2 aparece numerado **«0.2»**, y el §12.4 se titula **«omisiones Regionales Rover»** —le falta la C de Comisiones—. *No afectan al contenido; se anotan aquí para que nadie crea que se saltó una sección.*

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `rama-clan-rovers` |
| Título | Rama Clan (Rovers) |
| Icono | 🏔️ |
| Nivel / orden | 2 · Curso **12** |
| Duración declarada | **65 minutos** — **remedida tras las auditorías**, que es lo que manda el ADR-047, y por eso cambió: el borrador cerró en 7.652 palabras y declaró 60 min; las dos vueltas de corrección doctrinal y la pedagógica sumaron unas 470, y hoy son **8.118 palabras** equivalentes al método con que se midieron sus hermanos. A 60 min el ritmo sería de **135 palabras/minuto**, fuera de la banda de las otras cuatro ramas (Manada 119 · Tropa 126 · Familia 129 · Comunidad 130); a **65 min** queda en **125**, dentro. **Es el curso más largo de la plataforma** |
| Módulos | 10 (1 de registro + **9 de contenido**) |
| Destinatario | Dirigentes de Clan y quienes van a abrir uno |
| `contentVersion` | 2026-09-17 |

**Decisión de alcance (del dueño, 16-sep-2026):** el curso va **completo y largo**, con el PARCE y los cuatro ritos dentro —la Guía cuenta **cinco** ceremonias, porque suma la entrega de insignias del PARCE—, **aceptando de antemano que pudiera quedar por encima del Curso 11**. Se evaluó partirlo en dos —el inventario de sistemas enumerables de esta rama lo justificaba— y se descartó para no renumerar el plan. *Al cerrar el borrador había quedado al revés —más corto que el Curso 11—, pero las correcciones de las tres auditorías lo devolvieron por encima: hoy son 8.118 palabras contra 7.831. La decisión se cumplió, aunque no por donde se esperaba.*

---

## 2. Objetivos del curso

Al terminar, el adulto podrá:

1. **Explicar qué cambia cuando el protagonista es mayor de edad**, y por qué aquí el dirigente se vuelve deliberadamente prescindible.
2. **Usar la Ley del Rover** para conversar y no para juzgar, y saber que su Promesa tiene **dos fórmulas oficiales** y cuándo ofrecer cada una.
3. **Hacer funcionar el gobierno del Clan**: Consejo de Clan, Comité de Clan, carta constitutiva y clubes Rovers.
4. **Usar el marco simbólico** —la Ciudadanía Activa— y sus símbolos, sin reducir el referente de inspiración a uno solo.
5. **Acompañar un PARCE**: sus cuatro fases, qué exige cada una y en qué orden se entregan sus insignias.
6. **Preparar una vigilia y un peregrinaje** que sean seguros, individuales e irrepetibles — y saber **qué está prohibido** en una ceremonia.
7. **Conducir una Partida Rover** como la Guía la describe, incluida la formación que **no** se usa.
8. **Sostener el Clan por dentro**: las herramientas mínimas de administración y las buenas prácticas.

---

## 3. Hook pedagógico

> **«En la Comunidad todavía te necesitaban. En el Clan tu trabajo es volverte innecesario — y la Partida Rover es donde se comprueba si lo lograste.»**

**Por qué este.** Es lo que la Guía repite en tres sitios distintos: *«la participación del dirigente se desvanece progresivamente, aunque su presencia es permanente»*, *«la presencia del dirigente se vuelve más sutil»*, *«los adultos no sustituyen el liderazgo juvenil, sino que lo potencian»* (cap. 10). Y tiene un final concreto y verificable: **la Partida**, la única ceremonia de la plataforma en la que el protagonista se va.

**Verificación anti-ADR-044.** Se revisaron los **once cursos publicados**:
- El **Curso 11** ya dice *«Tu trabajo ya no es sostener el marco ni preparar a los Guías. Es abrir puertas y después quitarte»*. Este hook **escala** eso, no lo contradice: allá te apartas, aquí sobras.
- El **Curso 5** ya da al Clan *«la Ley y la Promesa llevadas a la vida real, con sus momentos propios: Vigilia, Peregrinaje y Partida»* — las tres coinciden con la Guía.
- Los **Cursos 1 y 6** ya dan el marco como **La Ciudadanía Activa**, corregido el 16-sep en el barrido del ADR-047.
- El **Curso 6** da la rama como *«18–20/21 años»*, que es la banda ampliada que la discrepancia 4 explica.

**Protagonista: Sebastián**, que es el Nómada del quiz de la L8 del Curso 11 — el que *«cumple 18 en cinco meses»* y empieza su Etapa de Transición. El Curso 12 lo recoge el día que llega al Clan.

---

## 4. Estructura de lecciones

| # | Lección | Contenido | Fuente (p. del PDF) |
|---|---|---|---|
| **1** | 🏔️ Bienvenida al Clan | Registro. Hook literal. Sebastián llega. Qué es y qué no es este curso. | — |
| **2** | 🎓 Cuando el protagonista ya es adulto | 18–20 años, jóvenes adultos. El rol del dirigente que se desvanece. Los tres topes de edad y el egreso. Sección / Rama / Unidad. | 9–12, 53–55 |
| **3** | 🤝 La Ley y la Promesa en clave Rover | Los 10 artículos. **Las dos fórmulas**, en cita plegada palabra por palabra. La Ley como brújula que *«no impone, orienta; no castiga, inspira»* y como herramienta de diálogo. | 18–20 |
| **4** | 🏛️ Un Clan se gobierna solo | **Consejo de Clan** y sus 8 funciones · **Comité de Clan** elegido cada año · la **carta constitutiva** · clubes Rovers y equipos de proyecto · los ámbitos externos, incluido el **Sistema Nacional de Juventudes**. | 25–27 |
| **5** | ⚜️ La Ciudadanía Activa | El marco simbólico y su materialización: **el servicio**. Los símbolos: canoa, cuerno, horquilla, búho, color rojo, la Oración (**VINOREFUGE**), el lema *Servir*. Saulo de Tarso **y la invitación expresa a no quedarse en él**. Ceremonias **SABER**. | 28–32 |
| **6** | 🌍 Aprender haciendo, y hacerlo afuera | Oportunidad de Aprendizaje. **DURASLID** (con la nota de lectura del acrónimo *después* de la mnemotecnia, no antes). El juego a los veinte. La naturaleza como *«aula viva»*. **Scouts por los ODS**: las cuatro iniciativas que la Guía describe. | 21–24, 33–34, 57–61 |
| **7** | 🛶 El PARCE | Qué significa la sigla y de dónde sale (foro nacional 2025). Tres niveles de desempeño. El **invariante** —las seis áreas en los tres niveles, y el 7≠6— **antes** del bloque de fases. **Las cuatro fases** —RC, RP, RT y BP-Ciudadano Global— en un **`method-grid`** de cuatro tarjetas, cada una con su **tope en meses**; los conteos finos por nivel y la ubicación de cada insignia bajan a un `info-box` de consulta. Apoyo / Acompañamiento / Enlace. | 35–43, 54 |
| **8** | 🔥 Vigilia y peregrinaje | Cómo se diseña una experiencia individual e irrepetible. Lo privado de la vigilia y el riesgo de los «grupos con denominación especial». El peregrinaje y los cinco objetivos del desarrollo espiritual, dichos en una línea. **Lo que está prohibido en una ceremonia.** | 43–47 |
| **9** | 🌄 La Partida Rover | Cuándo, quién la pide y hasta cuándo. La ceremonia paso a paso: dos filas, la calle de honor, las banderas, el símbolo de despedida, la canción. **La formación en «Y» que NO se hace.** Los estímulos. Cierra cobrando la tercera promesa del hook: la Partida es donde se comprueba. | 47–49 |
| **10** | 🧰 Sostener el Clan y tu primer paso | Las herramientas mínimas de administración en tres bloques. Buenas prácticas. A Salvo del Peligro y gestión del riesgo. Enlaces a los Cursos 15 y 25 y a Transversales. Misión. | 53, 61–63 |

**Carga:** el borrador cerró en **7.652 palabras**, no en las ~9.000 estimadas: al repartir el contenido en **diez** lecciones ninguna pasó de 912 palabras, y el curso quedó **más corto que el Curso 11** pese a cubrir más sistemas. **Eso se invirtió al auditarlo:** las correcciones de las tres compuertas añadieron unas 470 palabras —el cierre del hook en la L9, el invariante del PARCE, las dos notas de lectura de la L6— y el curso terminó en **8.118**, por encima del Curso 11 (7.831). De ahí la remedición a **65 minutos**. *Segunda lección sobre lo mismo: tampoco la medida del borrador dimensiona: solo la del curso auditado.* *La estimación previa a escribir no sirve para dimensionar: solo sirve la medida.* **La duración se declara al final, midiendo**, no al principio — es la corrección del ADR-047: el piso honesto se recalcula **después** de las tres auditorías, no al cerrar el borrador.

---

## 5. Logros

| id | `unlockOnModule` | Nombre |
|---|---|---|
| `achievement-1` | 2 | Aprendo a sobrar |
| `achievement-2` | 3 | Digo la Ley en clave Rover |
| `achievement-3` | 4 | No presido el Consejo |
| `achievement-4` | 5 | Sé qué es remar la propia canoa |
| `achievement-5` | 6 | Diseño una actividad DURASLID |
| `achievement-6` | 7 | Leo un PARCE |
| `achievement-7` | 8 | Sé qué no se hace en una ceremonia |
| `achievement-8` | 9 | Sé despedir |
| `achievement-9` | **−1** | Dirigente de Clan |

---

## 6. Conexiones cross-course

- **Curso 11 (Comunidad)** — entrada: Sebastián y sus tres pasos. **Al publicarse este curso hay que barrer el `info-box` «🛶 Y al otro lado de la orilla», que dice que el Curso 12 «todavía está por construirse»** — y de paso reconciliar «Plan de Progresión Personal Rover» con **PARCE** (discrepancia 7).
- **Curso 8 (Manada)** — ya corregido el 16-sep: listaba las guías de rama con numeración anterior al ADR-043.
- **Curso 5 (Método Scout)** — los ocho elementos; aquí el capítulo 2 los cruza todos contra todos, que es el tratamiento más completo de las cinco guías.
- **Curso 6 (PNPJ y Modelo)** — las seis áreas de crecimiento y las competencias terminales, que en esta rama son **el perfil de egreso del Movimiento entero**.
- **Curso 25** y **Políticas Transversales, Curso 03** — se enlaza y **no se reexplica** la conducta ante una revelación (ADR-038).

---

## 7. Validación contra el marco metodológico

- **Andragogía:** el destinatario acompaña a adultos; el curso no le pide creer, le pide probar.
- **Patrón anti-definición:** ninguna lección abre definiendo; abren con una escena de Clan.
- **Ausubel:** el andamiaje se apoya en lo que el adulto acaba de ver en Comunidad —niveles, roles, transición— y **nombra** lo que cambia de nombre.
- **Bandura:** los ejemplos son de conducta observable del adulto, y las ceremonias se enseñan por lo que **no** se hace tanto como por lo que sí.
- **Quizzes:** las tres compuertas del build, corregidas **ajustando distractores**, nunca la correcta, y mirando las **dos direcciones** del sesgo.

---

## 8. Estado

1. Diseño — este documento. **Commiteado antes de tocarlo con scripts** *(lección del Curso 9).*
2. Pendiente: JSON · build · las **tres auditorías** · compuerta humana.

---

> **Revisión del 17-sep-2026 (ADR-056).** Las **nueve columnas «Fuente (p. del PDF)» del §4 siguen en la paginación de la edición de 63 pp.** y no se repaginaron aquí: el JSON y `TRAZABILIDAD.csv` sí están al día, y son la fuente operativa. Si alguien reconstruye el curso desde este documento, **debe repaginar contra la edición de 68 pp.** — el desplazamiento medido va de +0 a +5 según el tramo.
