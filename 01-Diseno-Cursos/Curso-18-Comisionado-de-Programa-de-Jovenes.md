# Diseño del Curso 18 — 🗺️ Comisionado de Programa de Jóvenes

> **Línea:** Programa de Jóvenes · **Nivel 3** · Curso **18** de 25
> **`courseId`:** `comisionado-programa-jovenes`
> **Diseño pedagógico:** Claude Code, con autonomía de punta a punta otorgada por el dueño el 27-sep-2026 hasta cerrar el Nivel 3.
> **Estado:** diseño · pendiente JSON, build y las tres auditorías.

Es el primer curso de la línea cuyo destinatario **no trabaja en una unidad**. Los Cursos 16 y 17 hablan de quien está frente a una rama; este habla de quien **hace que el Programa se aplique bien en unidades que no dirige**: el comisionado de Programa de Jóvenes, en la región o en la nación.

---

## 0. La situación de fuentes

**Fuente angular:** ***Manual de Cargos, Perfiles y Funciones por Competencias*** (DNAM, ago-2020, vigencia comprobada el 27-sep-2026, ADR-083), fichas:
- **2.2.16 Comisionado Regional de Programa de Jóvenes** (PDF pp. 274–282 / impresas 266–274).
- **2.2.17–2.2.21** comisionados regionales de rama y de Mundo Mejor; **2.2.22** Miembro de Comisiones Regionales de PJ (PDF 324).
- **2.3.17 Director Nacional de Programa de Jóvenes** (PDF 539–547); **2.3.18–2.3.25** comisionados nacionales de rama y de programas.

**Y la norma que está por encima del *Manual*:** el ***Reglamento Nacional*** (Acuerdo CSN 684, 22-jun-2026; Resolución CSN 016-2026), descargado por la sesión de Desarrollo Institucional el 27-sep-2026. **Art. 19**: jerarquía normativa — el Reglamento es nivel 2 y *«Políticas y manuales operativos»* nivel 4. **Art. 69** (los comisionados son «cargos en estamentos»), **Art. 71** (quien ejerce cargo operativo no integra el Consejo de su nivel), **Art. 72** (no se pueden ostentar a la vez cargos de dirección o liderazgo en la nación y en la región; se exceptúa la participación como integrantes de equipos), **Art. 123** (Director/a Nacional), **Art. 124** (Comisionada/o Nacional: *«Responsable de coordinar, acompañar y supervisar la aplicación del Programa de Jóvenes [en] su respectiva rama o asunto»*), **Art. 126** (el Jefe Scout Nacional dirige las Direcciones), **Art. 128** (directores y comisionados nacionales: cargos **voluntarios**, periodo **máximo de dos años**; no cubre a miembros de comisiones).

**Y la política que el cargo desarrolla:** ***PNPJ*** (DNPJ-2026-023) **§7.1 y §7.2** (pp. 36–38 impresas; §7.2 en p. 38 impresa, p. 41 del PDF): designar *«un responsable Nacional»* / *«Regional del Programa de Jóvenes y un equipo»*; crear *«una red de animación territorial»*; en la región, *«un plan de animación territorial»* diseñado con el equipo nacional.

### Lo que este curso tiene que resolver

1. **Los nombres no cuadran entre las fichas, y el curso lo dice.** La ficha regional (2.2.16) responde a un *«Comisionado Nacional de Programa de Jóvenes»*; la ficha nacional del mismo *Manual* se titula **Director Nacional** de Programa de Jóvenes (2.3.17), y el Reglamento 2026 distingue **Director/a** (Art. 123) de **Comisionada/o** nacional *«de su respectiva rama o asunto»* (Art. 124). El curso explica la estructura —una Dirección Nacional con comisionados nacionales por rama o asunto; un comisionado regional de PJ con comisionados regionales por rama— y cuenta la diferencia de nombre sin arbitrarla.
2. **Los nombres de rama del *Manual* son de 2020.** Sus comisionados de rama son de **Lobatos, Scout, Caminantes, Rover y Mundo Mejor**; **«Caminantes» es el nombre viejo de la rama que hoy es Nómadas Scout** (Curso 11 y su nota). **No hay ficha de comisionado de Familia**. El curso lo dice.
3. **La relación con los Jefes de Rama.** La ficha 2.2.16 pone a los **Jefes de Rama** entre quienes *«le responden»*, y la del Comisionado Regional de Lobatos a los **Jefes de Manada**; la ficha del Jefe de Rama (Curso 16) dice que responde **al Consejo Scout de Grupo y al Jefe de Grupo**. Las dos cosas están en el mismo *Manual*. **El curso no las arbitra**: explica que el comisionado acompaña **el Programa** en las unidades de su región, y que el Jefe de Rama no deja de responder a su Grupo.

### Lo que este curso NO puede decir

- **No que el comisionado dirige las unidades** ni que manda sobre el Jefe de Grupo. Su verbo, en el Reglamento, es *coordinar, acompañar y supervisar*.
- **No «Comisionado Nacional de Programa de Jóvenes»** como nombre del cargo nacional vigente sin explicar la diferencia con «Director».
- **No usar el *Modelo* 2020** (su §14 describía la estructura de la DNPJ) como vigente: está superado por el *Modelo* 2026, que no trae capítulo de estructura.
- **No detallar la Red de Jóvenes ni el Consejero Juvenil**: son los Cursos 19 y 20. Aquí solo el vínculo.
- **No enseñar la conducta ante un caso de A Salvo del Peligro**: la competencia 8 del cargo (*«Remite los casos, activando las rutas determinadas»*) se nombra y se remite a Transversales (ADR-038).
- **No pedir en las reflexiones nombres de personas** (decisión del dueño, 27-sep-2026: iniciales o roles).

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `comisionado-programa-jovenes` |
| Título | Comisionado de Programa de Jóvenes |
| Subtítulo (catálogo) | Que el Programa se aplique bien en unidades que no diriges |
| Icono | 🗺️ |
| Nivel / orden | 3 · Curso **18** |
| Duración | se mide al cerrar las auditorías (ADR-047) |
| Módulos | 8 (1 de registro + 7 de contenido) |
| Destinatario | Comisionados regionales de PJ y de rama, miembros de comisiones regionales y nacionales, y quien se prepara para serlo |
| Recomendado antes | Curso 16 (Jefe de Rama) y los operativos 13–15 |

---

## 2. Objetivos

1. **Ubicar** tu cargo en la estructura: Dirección Nacional, comisiones nacionales por rama o asunto, comisionado regional y comisionados de rama.
2. **Leer** tus cinco funciones por la pregunta que responde cada una.
3. **Diseñar** la animación territorial: acompañar a los grupos para que apliquen el Programa, no aplicarlo por ellos.
4. **Conducir** una comisión de adultos voluntarios.
5. **Cuidar** la seguridad de las actividades de la región y remitir lo que exceda tu papel.
6. **Planear y rendir cuentas** dentro del plan operativo regional.
7. **Articular** hacia arriba y hacia los lados: la Dirección Nacional, la Jefatura y la participación juvenil.
8. **Situar** tus competencias frente a un perfil exigente.

---

## 3. Hook

> **«Un comisionado no aplica el Programa: hace que se aplique bien en unidades que no dirige.»**

Anclado en el Reglamento Art. 124 (*coordinar, acompañar y supervisar la aplicación*), en la F4 de la ficha regional (*«acompañamiento activo de los grupos… (animación territorial)»*) y en la PNPJ §7.2. Ataca el riesgo del cargo: **el comisionado que se vuelve el Jefe de Rama de todas las unidades**, o el que **solo manda circulares**. Se enuncia en L1, se prueba en L3 (animación territorial, con los dos riesgos: el que lo visita todo y el que anima por circulares) y L4 (la comisión), se cobra en L7 y se cierra en L8.

**Hilo narrativo: Liliana, que fue Jefa de Tropa ocho años y acaba de ser nombrada Comisionada Regional de Programa de Jóvenes** en una región con catorce grupos. Continúa el Curso 16 (el que sabe ser Jefe tiene que desaprender a hacerlo todo él) sin repetir su personaje.

**Anti-ADR-044:** el Curso 16 anuncia el 18 como *«el del Comisionado de Programa de Jóvenes»*; el 17 lo anuncia *«que acompaña desde fuera de la unidad»*. Coinciden.

---

## 4. Lecciones

| # | Lección | Contenido | Fuente |
|---|---|---|---|
| 1 | 🗺️ Un cargo sin unidad | Registro. Hook. **La estructura**: Dirección Nacional (Director/a) y comisionados nacionales por rama o asunto; comisionado regional de PJ y comisionados regionales de rama y de Mundo Mejor; miembros de comisiones. **Nombres**: aviso breve de que no cuadran; la explicación (la ficha regional dice «Comisionado Nacional de PJ», la nacional «Director»; el Reglamento distingue los dos) va en la L7, tras «Hacia arriba» (auditoría pedagógica H6). **Quién te nombra** (regional: Jefe Scout Regional con aval de la DNPJ; comisionados nacionales de rama: Director Nacional con aval del Jefe Scout Nacional, 2.3.18–2.3.21), a quién respondes (Consejo y Jefe Scout Regional, Dirección Nacional y comisionados nacionales de rama en lo de su rama), **no integras el Consejo** (ficha + Reglamento Art. 71), **no simultáneo un cargo de dirección o liderazgo nacional y regional** (Art. 72; los equipos no cuentan), **dos años máximo** para directores y comisionados nacionales (Art. 128). | Manual 2.2.16, 2.3.17, 2.2.22; Reglamento Arts. 71, 72, 123–128 |
| 2 | 🧭 Cinco funciones, cinco preguntas | F1 plan operativo regional · F2 normas · F3 los adultos de la comisión · F4 la PNPJ en los grupos · F5 crecimiento. Los comisionados de rama tienen cuatro de las cinco funciones, acotadas a su rama: sin la F3 (adultos de la comisión); en Mundo Mejor la de crecimiento cambia por los programas del marco (2.2.17–2.2.21). Los nombres de rama de 2020 («Caminantes» = hoy Nómadas Scout) y **la ausencia de un comisionado de Familia**. | Manual 2.2.16, 2.2.17 |
| 3 | 🌱 Animación territorial | La idea central del cargo. PNPJ §7.1–7.2 (red y plan de animación territorial); F4: difundir la PNPJ, **acompañar activamente** a los grupos, **evaluar** su aplicación en cada grupo, **herramientas**. Acompañar no es inspeccionar ni reemplazar. La relación con Jefes de Grupo y de Rama (lo que dice cada ficha). | PNPJ §7; Manual 2.2.16 F4 y F3 |
| 4 | 👥 Una comisión de voluntarios | F3: acompañar las competencias de su equipo, detectar necesidades, crear equipos de trabajo, comunicación con comisionados, coordinadores de distrito, Jefes de Grupo y de Rama. Competencia específica **4, Asesoría personal**. Lo que el Curso 16 enseñó sobre conducir adultos, en otra escala. | Manual 2.2.16 F3, comp. 4 |
| 5 | 🛡️ Eventos seguros, casos que se remiten | F4: eventos regionales, normas de seguridad, uniformes. Competencias **10 Seguridad y control de actividades** y **8 Garante del debido proceso** (*«Remite los casos, activando las rutas determinadas»*). Qué se remite y a dónde. | Manual 2.2.16 F4, comps. 8 y 10 |
| 6 | 📈 El plan y las cuentas | F1 (proponer proyectos al Jefe Scout Regional, planear, **hacer seguimiento**) y F5 (crecimiento de la membresía, alianzas). Competencia **21 Administración y gestión estratégica**: *«informes de gestión que apoyan la toma de decisiones»*. | Manual 2.2.16 F1, F5, comp. 21 |
| 7 | 🌐 Hacia arriba y hacia los lados | La Dirección Nacional (sus siete funciones, entre ellas alinear con la OMMS y la Región Interamericana, y la Política de Participación Juvenil), la Jefatura (Reglamento Art. 126), la caja «Un nombre que no cuadra» (Director ↔ Comisionado/a Nacional, movida desde la L1), la coordinación con Adultos en el Movimiento y Desarrollo Institucional. La **participación juvenil** como mandato (PNPJ §7.1–7.2) y el puente a los Cursos 19 y 20. **Se cobra el hook**. | Manual 2.3.17; Reglamento Art. 126; PNPJ §7 |
| 8 | ✅ Tu perfil, y tu primer mes | Siete competencias esenciales (**cinco en grado 4**; Aprendizaje y Planeamiento Estratégico en 3 — en el Director, Planeamiento sube a 4) y seis específicas. **Compromiso**: el mapa de tus grupos y tu primera visita de acompañamiento. | Manual 2.2.16, 2.3.17 |

---

## 5. Logros

`Sé dónde estoy` (2) · `Leo mis funciones` (3) · `Animo el territorio` (4) · `Conduzco una comisión` (5) · `Cuido lo que pasa` (6) · `Rindo cuentas` (7) · `Conozco mi perfil` (8) · `Acompaño una región` (−1).

---

## 6. Colaterales al publicar

`pruebas-e2e.yml`; catálogo (level 3); portal y panel (18); README/CLAUDE de la línea; README raíz; ledger; trazabilidad; glosario: registrar **Director Nacional ↔ Comisionado/a Nacional** y el **Reglamento Nacional 2026** en §C si la sesión de DI no lo hizo.

---

## 7. Marco

Variante B. Knowles: el destinatario ya ocupa o va a ocupar el cargo. Bandura: la visita de acompañamiento, el informe de gestión, las tres preguntas de la animación. Quizzes: decisión, casos nuevos, sin distractor pasivo sistemático ni justo medio sistemático (lecciones de los Cursos 16 y 17). Reflexiones: su región real, **sin nombres de personas**.

---

_Documento de diseño v1.0 — 27 de septiembre de 2026._
