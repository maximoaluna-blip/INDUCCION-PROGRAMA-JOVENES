# Diseño del Curso 17 — 👣 Acompañar la Progresión Personal

> **Línea:** Programa de Jóvenes · **Nivel 3** · Curso **17** de 25
> **`courseId`:** `acompanamiento-progresion-personal`
> **Diseño pedagógico:** Claude Code, con **autonomía de punta a punta otorgada por el dueño el 27-sep-2026** hasta cerrar el Nivel 3 (incluye la excepción del §1.4 de `CREAR-CURSO.md`).
> **Estado:** diseño · pendiente JSON, build y las tres auditorías.

El plan titula este curso *«Asistente y acompañamiento de la progresión personal»* y en la misma fila lo describe como **«función del dirigente… no como un cargo aparte»**. El *Manual de Cargos* **no tiene cargo de «Asistente»** (decisión abierta desde el ADR-083). **Se resuelve con la salida (a) de esa decisión, que es la que el propio plan ya describe:** el curso es para **todo dirigente de unidad** —Jefe, Subjefe y el resto del equipo— y el título deja de nombrar un cargo que no existe. Se registra en un ADR y se corrigen los punteros publicados que lo nombran.

---

## 0. La situación de fuentes

**Fuente angular:** ***Modelo de Aplicación*** (DNPJ-2026-024) — **§8.1** *Etapas de vida en la unidad* (pp. 45–53: adaptación, progresión, transición), **§9.1–9.4** (pp. 58–66: el dirigente como acompañante, los tres roles, la reflexión, la inclusión), **Cap. 12** *Reconocimiento* (pp. 81–85) y **§13.4** *Familia y progresión personal* (p. 88). Vigencia comprobada el 17-sep-2026 (ADR-056) y sin cambios en el manifiesto del 27-sep-2026.

**Fuentes de apoyo — las cinco Guías de Dirigente 2026, por su capítulo de transición:**

| Guía | Qué aporta |
|---|---|
| **Familia** §8.13 y §8.15, pp. 67–68; p. 57 | El **adulto garante del ritmo personal** (*«Hoy lo hiciste mejor que la vez pasada»*); la **Etapa de Adaptación**; la transición **«Cachorro Explorador»**: paso **al cumplir 7 años**, flexibilidad máxima de **tres meses**, analizada por Viejos Lobos de Familia y Manada **con el Jefe de Grupo** |
| **Manada** §8.7, pp. 51–53 | Familia→Manada en **uno o dos meses**; Manada→Tropa **«Lobo solitario»**, ~**seis meses**, ceremonia **«Gran Salto»**; **8.7.3 El papel del dirigente en la transición**; y la etapa introductoria **«Lobezno»** para quien no pasó por Familia, que culmina en la Investidura |
| **Tropa** §8.11, pp. 51–53; p. 42 | *«Educar en el tránsito, no en el salto»*; insignias **«Lobo Solitario»** (10½–11) y **«Viajero del Territorio»** (14½); **8.11.4 El papel del dirigente: tejer continuidad** (cinco acciones) |
| **Comunidad** pp. 37–38 | Tropa→Comunidad con **Viajero del Territorio**; Comunidad→Clan con **«Ciudadano Scout»**, entre **seis y tres meses** antes de los 18, en **tres pasos: Legado, Asentamiento, Ciudadanía** |
| **Clan** §8.15, p. 53; p. 49 | La transición del Clan es **la partida hacia la vida adulta**; los recién llegados están *«en la etapa de adaptación como Ciudadanos Scouts o aspirantes»* |

### Lo que este curso tiene que resolver

**1 · No repetir el Curso 13.** El 13 enseña a **mirar la reunión**: conducta observable, banco de técnicas, retroalimentación *Vi – Logró – Próximo paso*, qué se registra y qué no, los instrumentos. **Este curso mira el camino de una persona a lo largo del tiempo**: cómo llega, cómo elige su camino, cómo se le reconoce y cómo pasa a la siguiente rama. Cuando necesite observar o registrar, **remite al 13** en una línea.

**2 · Los tres roles ya los enseñaron nueve cursos.** *Apoyar, acompañar, enlazar* aparecen en el Nivel 1 y en las cinco ramas. Lo que ninguno dice, y la fuente sí: **los niveles son por competencia** (*Modelo* §8.1.2: *«Un Protagonista de Programa puede acercarse a una determinada competencia en tres niveles»*; *«no existe un orden específico para iniciar el abordaje de las competencias»*). Así que **el mismo dirigente, con el mismo protagonista, apoya en una competencia y enlaza en otra a la vez**. Es la idea nueva de la L4.

**3 · La transición es lo más nuevo del *Modelo*** (*«Uno de los aportes significativos… es la incorporación de la Transición como un momento educativo en sí mismo»*, §8.1.3) y **las cinco Guías la desarrollan con nombre propio**. Es el corazón del curso (L7).

### Lo que este curso NO puede decir

- **No «Asistente»** como cargo. Tampoco «ayudante» sin fuente.
- **No que la transición es automática ni que la fija solo la edad.** El *Modelo* dice que conviven **el tiempo cronológico y el acompañamiento adulto**, y **la única excepción es el Clan**, cuyo ingreso fija la mayoría de edad.
- **No arbitrar plazos entre documentos.** El *Modelo* aconseja **~6 meses**; la Guía de Manada da **uno o dos meses** para Familia→Manada; la Guía de Familia fija el paso **al cumplir 7 con hasta tres meses de flexibilidad**. **En Familia manda su Guía** (ADR-083); en el resto, cada Guía para su rama.
- **No mezclar «fases» con «niveles».** Niveles (Exploro/Aplico/Profundizo) son **por competencia**; fases son **hitos de la rama** con nombre propio (y **tres** en Familia, frente a cuatro en el *Modelo*).
- **No psicologizar.** *«Valida emociones sin psicologizar»* (§9.3.2.2). Ante un riesgo o una revelación, el curso **remite** a Transversales C03 y al Curso 25 (ADR-038), no enseña la conducta.
- **No «Akela» como nombre de un cargo**, ni vocabulario de una rama en otra.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `acompanamiento-progresion-personal` |
| Título | Acompañar la Progresión Personal |
| Subtítulo (catálogo) | Del día que llega al día que pasa de rama |
| Icono | 👣 |
| Nivel / orden | 3 · Curso **17** |
| Duración declarada | **se mide al cerrar las auditorías** (ADR-047) |
| Módulos | 8 (1 de registro + **7 de contenido**) |
| Destinatario | **Todo dirigente de unidad** de las cinco ramas: Jefe, Subjefe y cualquier adulto del equipo |
| Recomendado antes | El **Curso 13** (seguimiento) y el curso de tu rama. Ninguno bloquea (ADR-019) |
| `contentVersion` | 2026-09-27 |

---

## 2. Objetivos

1. **Distinguir** las tres etapas de vida en la unidad —adaptación, progresión, transición— y qué pide cada una del adulto.
2. **Recibir** a un protagonista que llega de modo que la investidura sea la culminación de una acogida y no un trámite.
3. **Dejar al protagonista elegir** su camino entre competencias, sin imponerle un orden.
4. **Ajustar tu rol por competencia**, no por persona: apoyar, acompañar y enlazar a la misma persona a la vez.
5. **Cuidar el ritmo propio** de cada uno, sin comparaciones y sin dejar a nadie fuera.
6. **Reconocer** nombrando competencias y evidencias, no coleccionando insignias.
7. **Acompañar el paso a la siguiente rama** coordinando con el equipo que recibe.
8. **Reconocer los límites** de tu papel.

---

## 3. Hook pedagógico

> **«La unidad avanza cuando cada quien avanza — y cada quien avanza por su propio camino, a su propio ritmo.»**

La primera mitad es **literal del *Modelo*** (Cap. 12, p. 85: *«la unidad avanza cuando cada quien avanza»*); la segunda condensa §8.1.2 (*«construya su propio camino de desarrollo, eligiendo y avanzando según sus intereses, ritmos y motivaciones»*) y §8.1.3 (*«La Transición no tiene un calendario fijo ni idéntico para todos»*).

**Ataca el riesgo** de la progresión como **carrera colectiva**: la unidad que entrega insignias a todos el mismo día, el paso de rama por cumpleaños, el dirigente que compara. **Enunciado en L1**, **puesto a prueba en L4 y L5** (roles por competencia, ritmo propio), **cobrado en L7** (la transición, que es donde el calendario tienta más) y **cerrado en L8**.

**Verificación anti-ADR-044 (barrido de los 16 publicados, 27-sep-2026):** los tres roles en 9 cursos, sin contradicción con «por competencia» (se leerán antes de auditar); «etapa de adaptación» en 4; «entrevista» en 13 y 15; «Asistente» en 1, 7 y 15 — **punteros a voltear al publicar**. El **Curso 16** anuncia *«el Curso 17, trata del acompañamiento uno a uno de la progresión personal —los roles de apoyar, acompañar y enlazar del Modelo—, que es función de todo dirigente de tu equipo»*: **coincide**.

**Hilo narrativo: Sofía, que llega a la Manada con ocho años sin haber pasado por la Familia, y Andrés, un Viejo Lobo que no es el Jefe.** Se la sigue del día que llega (Lobezno) al Gran Salto hacia la Tropa. **Que Andrés no sea el Jefe es deliberado**: el curso enseña una función de todo dirigente. Cada lección de contenido cierra con **«Y en tu rama»**.

---

## 4. Estructura de lecciones

| # | Lección | Contenido | Fuente |
|---|---|---|---|
| **1** | 👣 Seguirle el paso a una persona | Registro. Hook. **Para quién es**: todo dirigente; por qué no se llama «Asistente». **El mapa**: las tres etapas de vida en la unidad. **Qué no es**: el Curso 13 (la reunión) — aquí, el camino de una persona. | *Modelo* §8.1, §9.1; plan §5.1 |
| **2** | 🚪 El día que llega | **Etapa de adaptación**: qué aprende (Promesa y Ley, marco simbólico, tradiciones, el Movimiento) y que **culmina en la investidura**. La familia en esa etapa (§13.4). La investidura como **primer reconocimiento** (Cap. 12, tipo 1). Sofía como Lobezna. | *Modelo* §8.1.1 p. 46, §13.4 p. 88, Cap. 12 p. 83; Guía de Manada §8.7.4 p. 53 |
| **3** | 🧭 Un camino que elige quien lo camina | **No hay orden**: el protagonista elige por dónde empezar. La **conversación uno a uno** para acordar el siguiente paso (*«Esto hiciste, así se vio, este es el siguiente paso»*, §9.5 paso 6) — decidir **con** él. La familia por nivel (§13.4). Remite al 13 para el registro. | *Modelo* §8.1.2 p. 47, §9.5 p. 67, §13.4 p. 88 |
| **4** | 🔄 Tres roles, una misma persona | Los niveles son **por competencia**; por eso **el rol también**. Sofía, en el mismo mes: apoyo en una, acompañamiento en otra. Y **fases ≠ niveles**. | *Modelo* §8.1.2 pp. 46–49, §9.2 pp. 58–60; Guías (fases) |
| **5** | ⚖️ Cada uno a su ritmo | **Garante de inclusión** (§9.4): adaptar, valorar la diversidad, acceso real a las fases, **no comparar**. *«Hoy lo hiciste mejor que la vez pasada»* (Guía de Familia). **Detección temprana** (§9.3) y a dónde se remite lo que excede el rol. | *Modelo* §9.3 p. 61, §9.4 p. 66; Guía de Familia §8.13 p. 67 |
| **6** | 🏅 Reconocer sin coleccionar | Cap. 12: **nombrar competencias y evidencias**, los **siete tipos** de reconocimiento, **qué no aporta** (inflación simbólica, protagonismo adulto, comparaciones), las **tres preguntas**. La familia en la ceremonia. | *Modelo* Cap. 12, pp. 81–85 |
| **7** | 🌉 El paso a la otra rama | **La transición** (§8.1.3): tiempo cronológico **y** acompañamiento; ~6 meses; **excepción del Clan**; los cinco aspectos. **Tejer continuidad** con el equipo que recibe. La **ceremonia de paso** (Cap. 12, tipo 2). Sofía, Lobo Solitario → Gran Salto. | *Modelo* §8.1.3 pp. 51–53, Cap. 12 p. 83, §13.4; Guías (transición) |
| **8** | ✅ Lo que te toca, y lo que no | **Límites del rol**: *«tu rol no es ser el centro, sino el facilitador invisible»* (§9.4); validar sin psicologizar; qué se remite (ASP, C03, C25); qué se comparte con el otro equipo y qué no (remite al 13). **Compromiso**: un protagonista, su etapa, dos competencias con su nivel y tu rol en cada una, y la fecha de la próxima conversación. | *Modelo* §9.3.2.2 p. 63, §9.4 p. 66 |

---

## 5. Logros

| id | `unlockOnModule` | Nombre |
|---|---|---|
| `achievement-1` | 2 | Sé recibir |
| `achievement-2` | 3 | Dejo elegir |
| `achievement-3` | 4 | Ajusto mi rol |
| `achievement-4` | 5 | Cuido el ritmo |
| `achievement-5` | 6 | Reconozco con sentido |
| `achievement-6` | 7 | Tejo continuidad |
| `achievement-7` | 8 | Conozco mis límites |
| `achievement-8` | **−1** | Acompaño un camino |

---

## 6. Colaterales obligatorios al publicar

1. **Punteros con «Asistente»**: Curso 1, Curso 7 (lista de cargos), Curso 15 (Nivel 3) — y el título del Curso 17 en el **plan §5.1**.
2. **Curso 16** anuncia el 17: comprobar que dice lo que el curso es.
3. `pruebas-e2e.yml`, `cursos.json` (`level: 3`), portal, panel (`courseIds` + `coursesActive` 17), README/CLAUDE de la línea, README raíz, ledger, glosario (si hace falta), trazabilidad al cerrar la auditoría (ADR-050, ADR-056).
4. **ADR** de la resolución de «Asistente» y cierre de esa decisión abierta (recuento 17 → 16).

---

## 7. Validación contra el marco

- **Variante B** (narrativa + cierre operativo). **Knowles**: el adulto ya acompaña a alguien; el curso le pide ese alguien. **Ausubel**: se apoya en los tres roles y en el Curso 13. **Bandura**: guiones literales (*«Esto hiciste…»*, las tres preguntas del reconocimiento, las cinco acciones de «tejer continuidad»).
- **Quizzes**: 2 por lección (14), de decisión, **sin distractor pasivo sistemático** (lección del Curso 16: la fuga de conjunto), con correctas de contención cuando corresponda y **casos nuevos**, no el de la lección.
- **Reflexiones**: un protagonista real, con nombre.

---

## 8. Estado

1. **Diseño** — este documento, commiteado antes de los scripts.

---

_Documento de diseño v1.0 — 27 de septiembre de 2026._
