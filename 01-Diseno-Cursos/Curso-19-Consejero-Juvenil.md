# Diseño del Curso 19 — 🪑 Consejero Juvenil

> **Línea:** Programa de Jóvenes · **Nivel 3** · Curso **19** de 25
> **`courseId`:** `consejero-juvenil`
> **Diseño pedagógico:** Claude Code, con autonomía de punta a punta otorgada por el dueño el 27-sep-2026 hasta cerrar el Nivel 3.
> **Estado:** diseño · pendiente JSON, build y las tres auditorías.

Es el primer curso de la plataforma cuyo destinatario principal es **un joven**: el **Rover mayor de edad** que ocupa —o va a ocupar— el asiento juvenil de un Consejo. Y, en segundo lugar, los adultos que lo acompañan. Enseña qué es ese asiento, cómo se llega, qué se puede y se debe hacer en él, y cómo se rinde cuentas a quienes te eligieron.

---

## 0. La situación de fuentes

**No hay una sola fuente angular: hay una cadena normativa**, y el curso la sigue en su orden (Reglamento Nacional 2026, Art. 19):

| Nivel | Fuente | Qué aporta |
|---|---|---|
| 1 | **Estatuto 2025** (CSN) | Art. 48: el CSN tiene **nueve miembros**, entre ellos **un miembro juvenil, mayor de edad, elegido por sus pares, por un año, sin reelección inmediata**, *«en representación de los miembros infantiles y juveniles»*. Arts. 51–52: requisitos (**mayor de edad**, no sancionado por faltas muy graves, afiliado) y elección *«por sus pares de acuerdo con la normativa vigente»*. Art. 33: la región va a la Asamblea Nacional con su Presidente y su **Miembro Juvenil del Consejo Scout Regional**. Art. 27: los **«Consejeros Juveniles de los grupos»** participan en la elección de delegados de los grupos adscritos a la nación. |
| 2 | **Reglamento Nacional 2026** (Acuerdo CSN 684) | Art. 81: **prácticas prohibidas para los consejeros** (dádivas, uso de información privilegiada o confidencial, proselitismo político aprovechando el cargo). Art. 82: **declarar el conflicto de intereses**. Art. 138: el consejero juvenil regional delega su poder **solo en otro miembro activo juvenil de la región**. |
| 3 | **Reglamento Nacional de Grupos** 5.1.2 | En el Consejo de Grupo: *«Un (1) Rover como representante de los Miembros Juveniles mayores de edad, elegido en votación uninominal realizada por sus pares inscritos en el Grupo, para un período de un (1) año»*; si no hay Rovers, la Asamblea elige un miembro adicional. |
| 4 | **Reglamento de la Red Nacional de Jóvenes** (Acuerdo CSN 556, 2022) · **Reglamento de Asambleas Rover y Elección de Representantes Juveniles** (2022) | El **Consejero Juvenil Nacional**: perfil (Rover, **18 a 21 años y 2 meses**, un año de inscripción, experiencia en participación juvenil), funciones (representar a **todos** los miembros juveniles ante el CSN; llevar sus propuestas, preguntas y solicitudes, y las de la Red), elección en la **Asamblea Nacional Rover**, suplencia por la segunda votación, renuncia a cargos regionales. Es *«integrante del Consejo con plenos deberes y derechos»* (Asambleas, Art. 4.2). La **Asamblea Regional Rover** elige cada año al **Miembro Juvenil del Consejo Scout Regional** y evalúa su gestión. |
| — | ***Modelo de Aplicación*** 2026 §15 | Niveles de participación (**consultiva, activa, corresponsable, autónoma**), espacios y el rol del adulto (**apoyar, acompañar, enlazar**; *«El adulto no sustituye la voz de los jóvenes»*). |

### Lo que este curso tiene que resolver

1. **La *Política Nacional de Participación Juvenil* vigente no está publicada.** El *Modelo* cita una de **2022**; en el corpus solo hay la de **2016**, y la biblioteca oficial (comprobado el 27-sep-2026) **no publica ninguna de las dos**. El curso **no enseña desde la de 2016** como si fuera vigente: dice que la política existe, que la citan el *Modelo* y los reglamentos, y que el adulto la pida a su región si la necesita.
2. **Tres nombres para el mismo asiento**: el Estatuto dice *«Consejeros Juveniles de los grupos»* y *«Miembro Juvenil»* del Consejo Regional y del CSN; el Reglamento de Grupos, *«Rover como representante de los Miembros Juveniles mayores de edad»*; los reglamentos de la Red, *«Consejero Juvenil Nacional/Regional»*. El curso los enseña como equivalentes, sin arbitrar.
3. **Edades distintas por nivel**: el Estatuto pide **mayor de edad**; la Red pone **18 a 21 años y 2 meses** para el nacional; el Reglamento de Asambleas menciona que la ley colombiana considera joven a quien tiene **14 a 28**. El curso da cada edad con su fuente.
4. **El asiento juvenil tiene voto pleno.** Es fácil pensarlo como un observador o un «portavoz de los rovers»: el Reglamento de Asambleas dice *«plenos deberes y derechos»* y las funciones *«propias de los consejeros»*. Y representa a **todos los miembros juveniles** —también a los niños—, no solo al Clan.

### Lo que este curso NO puede decir

- **No citar la Política de Participación Juvenil de 2016 como vigente.**
- **No que el consejero juvenil representa solo a los Rovers.**
- **No detallar la Red de Jóvenes, sus coordinadores, comunicadores y ejes**: es el **Curso 20**. Aquí la Red aparece como uno de los espacios de donde sale la voz.
- **No el miembro juvenil ante la Comisión Nacional de Vigilancia y Control**: su discrepancia con el Estatuto 2025 (Art. 70) se trata en el Curso 20.
- **No enseñar gobierno corporativo en general**: el funcionamiento de los Consejos es de Desarrollo Institucional (su Curso 7, Gobernanza Práctica, publicado). Aquí, lo propio del asiento juvenil.
- **No pedir en las reflexiones nombres de personas.**

---

## 1. Ficha

| Campo | Valor |
|---|---|
| `courseId` | `consejero-juvenil` |
| Título | Consejero Juvenil |
| Subtítulo | Una silla en el Consejo, y la voz de todos los que no están |
| Icono | 🪑 |
| Nivel / orden | 3 · Curso 19 |
| Destinatario | Rovers en el asiento juvenil del Consejo de Grupo, del Consejo Regional o del CSN, quienes se postulan, y los adultos que los acompañan |
| Recomendado antes | Curso 12 (Clan) y, de Desarrollo Institucional, Gobernanza Práctica |
| Duración | se mide al cerrar las auditorías |

---

## 2. Objetivos

1. **Ubicar** el asiento juvenil en los tres Consejos y reconocer sus tres nombres.
2. **Explicar** cómo se llega: requisitos, elección por pares, periodo e incompatibilidades.
3. **Ejercer** el asiento con voz y voto plenos, en todos los temas del Consejo.
4. **Recoger** la voz de los miembros juveniles —todos, no solo los Rovers— antes de llevarla.
5. **Rendir cuentas** ante la asamblea que te eligió.
6. **Cuidar** lo que el cargo prohíbe: conflictos de interés, información confidencial, proselitismo.
7. **Distinguir**, siendo adulto que acompaña, entre apoyar la voz juvenil y sustituirla.

---

## 3. Hook

> **«Tu silla en el Consejo no es la del Clan: es la de todos los niños y jóvenes que no pueden sentarse ahí.»**

Anclado en el Estatuto Art. 48 (*«en representación de los miembros infantiles y juveniles»*) y en la Red Art. 28.1 (*«Representar a todos los miembros juveniles»*). Ataca dos riesgos: el consejero juvenil que se vuelve **delegado del Clan** y el que se vuelve **invitado decorativo** que solo habla de «temas de jóvenes». Enunciado en L1, probado en L4 (recoger la voz) y L3 (voto pleno), cobrado en L7, cerrado en L8.

**Hilo narrativo: Daniela, rover de 19 años, recién elegida por la Asamblea Regional Rover como Miembro Juvenil del Consejo Scout Regional.** Y su dirigente de Clan, que la acompaña sin hablar por ella.

---

## 4. Lecciones

| # | Lección | Contenido |
|---|---|---|
| 1 | 🪑 Una silla en tres Consejos | Registro. Hook. El asiento en el **Grupo**, la **Región** y la **Nación**; sus nombres; a quién representa. La Política de Participación Juvenil, sin inventarla. Qué no es este curso. |
| 2 | 🗳️ Cómo se llega | Requisitos por nivel (Estatuto 51; Red 27; Grupos 5.1.2), elección por pares en la Asamblea Rover o entre los Rovers del Grupo, un año, sin reelección inmediata en el CSN, suplencia, renuncia a cargos regionales. |
| 3 | ✋ Voz y voto plenos | *«plenos deberes y derechos»*: votas en todo lo que decide el Consejo —presupuesto, planes, nombramientos—, no solo en «temas de jóvenes». Qué es el Consejo en cada nivel (Grupo: administración; CSN: dirige y administra la Asociación). Puente a Gobernanza Práctica de DI. |
| 4 | 👂 Llevar la voz de todos | Representar a **todos** los miembros juveniles: cómo escuchar a los que no votan (niños, adolescentes). Espacios: **asambleas rover, foros de jóvenes, la Red de Jóvenes, los organismos de gobierno de cada rama**. Niveles de participación del *Modelo* §15.2. |
| 5 | 📋 Rendir cuentas a quien te eligió | La Asamblea Rover **evalúa** la gestión del consejero con sus informes (Red Art. 18.1; Asambleas 5.2). Qué lleva un informe de un consejero juvenil. |
| 6 | ⚖️ Lo que el cargo te prohíbe | Reglamento Nacional Arts. 81–82: dádivas, **información confidencial**, **proselitismo político**, **conflicto de intereses**. La delegación de poder (Art. 138). Qué hacer cuando un tema te toca de cerca. |
| 7 | 🤝 Los adultos que te acompañan | *Modelo* §15.5: apoyar, acompañar, enlazar; *«El adulto no sustituye la voz de los jóvenes»*. Para el Rover: a quién pedir apoyo. Para el adulto: cómo acompañar sin hablar por él. **Se cobra el hook**. |
| 8 | ✅ Tu primer Consejo | Compromiso: preparar la primera sesión — qué voz llevas, de quién la recogiste, qué vas a preguntar. Qué viene: el Curso 20 (Red de Jóvenes). |

---

## 5. Colaterales

Workflow, catálogo, portal y panel (19), README/CLAUDE de línea y raíz, ledger, trazabilidad (cada artículo citado), glosario: los tres nombres del asiento juvenil y el aviso de la Política de Participación Juvenil no publicada. **ADR** propio o dentro del ADR-090 (Nivel 3).

---

## 6. Marco

Knowles: el destinatario tiene 18–21 años y una responsabilidad real; el curso le habla de su primera sesión, no de teoría. Bandura: Daniela se equivoca (llega con la voz del Clan y no la de la región) y corrige. Quizzes: decisión, casos nuevos, sin «solo/nada/nadie» en los distractores ni justo medio sistemático. Reflexiones: sin nombres de personas.

---

_Documento de diseño v1.0 — 27 de septiembre de 2026._
