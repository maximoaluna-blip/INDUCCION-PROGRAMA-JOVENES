# Diseño del Curso 20 — 🕸️ Red de Jóvenes: coordinar y comunicar

> **Línea:** Programa de Jóvenes · **Nivel 3** · Curso **20** de 25 — **el que cierra el Nivel 3**
> **`courseId`:** `red-de-jovenes`
> **Diseño pedagógico:** Claude Code, con autonomía de punta a punta otorgada por el dueño el 27-sep-2026 hasta cerrar el Nivel 3.
> **Estado:** diseño · pendiente JSON, build y las tres auditorías.

El plan lo titula *«Coordinador y Comunicador de la Red de Jóvenes»*, para **Rovers en cargos RDJ regional y nacional**. Es el segundo curso cuyo destinatario principal es un joven. El Curso 19 enseñó el **asiento juvenil en los Consejos**; este enseña **la Red**: el espacio propio de los Rovers, con sus coordinadores, comunicadores, asesores de eje y asambleas, de donde salen —y ante el que responden— los representantes juveniles.

---

## 0. La situación de fuentes

| Fuente | Qué aporta |
|---|---|
| **Reglamento Red Nacional de Jóvenes** (Acuerdo CSN 556, 30-nov-2022) | Qué es la Red (*«El órgano operativo de la Comisión Nacional Rover»*, Art. 1), objetivos (Arts. 2–3), miembros (todo Rover; colaboradores), **niveles regional y nacional** (Arts. 12–14), **Equipo Nacional** (Art. 15), **Asamblea Nacional Rover** (Arts. 16–18: dos delegados por región, una vez al año en los tres primeros meses, antes de la Asamblea Scout Nacional; evalúa gestiones, elige), **Asamblea Regional Rover** (Art. 19: dos votos por Grupo), perfiles y funciones del **Coordinador** (Arts. 21–22) y el **Comunicador** nacionales (Arts. 24–25), vacancias (Arts. 23, 26), elección (Art. 31), reforma (Art. 32: 75 % y luego el CSN), representación internacional (Art. 36: la elige el Jefe Scout Nacional). |
| **Manual de Cargos y Funciones Red de Jóvenes** (2.ª ed., 2024) | Estructura **Proyectos Rovers → Equipo Regional → Equipo Nacional**; coordinación y comunicación **regional (1 año, 18 a 21 años y 2 meses)** y **nacional (2 años, 18 a 20 años y 2 meses)** con sus funciones; **asesores de eje**: **transversal, Viaje y Enlace Internacional (VyE), Servicio y Empresa**. |
| **Reglamento de Asambleas Rover y Elección de Representantes Juveniles** (2022) | Asamblea Regional Rover: una vez al año, **a más tardar el 31 de enero**, antes de la Asamblea Scout Regional; conformación, quórum, actas avaladas por el Comisionado Regional Rover; elige Coordinador, Comunicador y **asesor de cada eje estructural** cada año, y **un** delegado a la Asamblea Nacional Rover (Art. 5.2.5); sin quórum en la ordinaria, extraordinaria inmediata con los Clanes presentes (Art. 5.3.4); las extraordinarias se citan con un mes, por escrito. Dice que la Asamblea Nacional elige cuatro delegados Rover a la Asamblea Scout Nacional, apoyándose en el Estatuto anterior: **el Estatuto 2025 (Arts. 31 y 33) no los contempla** — misma discrepancia que la CNVC, y el curso la trata igual. |
| **Estatuto 2025** y **Reglamento Nacional 2026** | Art. 70 del Estatuto: la **CNVC** tiene siete integrantes elegidos por cuatro años, **al menos uno menor de 30**. Reglamento Nacional, Art. 19 (jerarquía: el Estatuto por encima de reglamentos y manuales) y Art. 246 (un año para actualizar reglamentos). |

### Lo que este curso tiene que resolver

1. **El eje que el plan nombra mal.** El plan dice *«Vida y Espíritu»*; el Reglamento de la Red (Art. 15) y su Manual de Cargos dicen **«Viaje y Enlace Internacional»**. El curso sigue las fuentes y el plan se corrige al publicar.
2. **El miembro juvenil ante la CNVC.** Los reglamentos de la Red (2022) siguen eligiéndolo en la Asamblea Nacional Rover por un año; el **Estatuto 2025** ya no lo contempla —pide un integrante menor de 30 entre siete elegidos por cuatro años—. Por la **jerarquía normativa** (Reglamento Nacional Art. 19) manda el Estatuto, y el Reglamento Nacional da un año para ajustar los demás reglamentos (Art. 246). **El curso lo cuenta con esa regla y remite a la Comisión Nacional Rover** para saber cómo se está aplicando; no afirma cómo quedó.
3. **Periodos y fechas que no coinciden entre documentos**: la Asamblea Nacional Rover *«durante los tres primeros meses»* (Red, Art. 17) frente a *«a más tardar el 28 de febrero»* (Asambleas, Art. 3.3); el Coordinador Nacional, *«cada dos años»* en los dos. El curso da cada dato con su fuente.
4. **Cuatro años de reglamento contra una norma nueva.** Los reglamentos de la Red citan artículos del Estatuto anterior y una referencia del Manual de la Red apunta al *Modelo* 2020. El curso **no reproduce** esas remisiones.

### Lo que este curso NO puede decir

- **No «Vida y Espíritu»** como eje.
- **No que el miembro juvenil de la CNVC se sigue eligiendo** igual que antes, ni lo contrario: se cuenta la discrepancia y la regla.
- **No dar por vigentes los cuatro delegados Rover a la Asamblea Scout Nacional**: mismo tratamiento que la CNVC.
- **No llamar «adulto voluntario» al Rover** en el texto que pone el motor: el JSON declara `registration.motivationLabel` y `commitmentBox` propios (el compromiso, por roles y no por nombres).
- **No repetir el Curso 19** (el asiento juvenil en los Consejos): aquí el Consejero Juvenil aparece como parte de la Asamblea Nacional Rover y de su rendición de cuentas.
- **No pedir en las reflexiones nombres de personas.**

---

## 1. Ficha

| Campo | Valor |
|---|---|
| `courseId` | `red-de-jovenes` |
| Título | Red de Jóvenes: coordinar y comunicar |
| Subtítulo | Lo que los Rovers hacen juntos, y quién lo sostiene |
| Icono | 🕸️ |
| Nivel / orden | 3 · Curso **20** — cierra el Nivel 3 |
| Destinatario | Rovers en cargos de la Red (coordinación, comunicación, asesoría de eje) regionales y nacionales, quienes se postulan, y los comisionados Rover que los acompañan |
| Recomendado antes | Curso 12 (Clan) y Curso 19 (Consejero Juvenil) |

---

## 2. Objetivos

1. **Explicar** qué es la Red: órgano operativo de la Comisión Rover, sus niveles y quiénes la integran.
2. **Distinguir** los cargos —coordinación, comunicación, asesores de eje— y sus periodos por nivel.
3. **Preparar** una Asamblea Rover y **verificar** que sea válida: convocatoria, quórum, votos y acta.
4. **Coordinar** una red de proyectos, no hacer los proyectos.
5. **Comunicar** para que un proyecto llegue a quien tiene que llegar, cuidando la marca.
6. **Dejar** la Red mejor preparada para el relevo.
7. **Situar** la Red entre la Comisión Rover, la Dirección Nacional y la Red Interamericana.

---

## 3. Hook

> **«La Red no es un club de los Rovers que llegan a las asambleas: es la manera de que los proyectos de todos los Clanes se encuentren.»**

Anclado en el Art. 2 (*«Integrar el trabajo del Roverismo… por medio de proyectos y acciones de servicio»*; el `policy-quote` de la L1 lo cita **completo**, hasta *«…ante la Comisión Nacional Rover y la Red Interamericana de Jóvenes.»*) y en la estructura del Manual (Proyectos → Equipo Regional → Equipo Nacional). Ataca el riesgo de la **Red como élite** que se reúne una vez al año, y la **coordinación que hace los proyectos** en vez de enlazarlos. **Hilo: Sebastián, 20 años, recién elegido Coordinador Regional de la Red**, y la Comunicadora de su región.

---

## 4. Lecciones

| # | Lección | Contenido |
|---|---|---|
| 1 | 🕸️ Qué es la Red | Registro. Hook. Órgano operativo de la Comisión Rover; objetivos; todos los Rovers son miembros; colaboradores; niveles regional y nacional; la estructura en pirámide. Qué no es este curso (el 19). Puente al Curso 12 («Si vienes del Curso 12, ya conoces a Sebastián») y recomendación de haber visto los Cursos 12 y 19. |
| 2 | 🧩 Los cargos, y cuánto duran | Coordinación y comunicación, regional (1 año, hasta 21 y 2 meses) y nacional (2 años, hasta 20 y 2 meses), con un párrafo que cierra el «error» de Sebastián haciendo la cuenta de las dos edades; asesores de eje (cada año en la región); el Equipo Nacional; vacancias; elección por hoja de vida y votación; renuncia a cargos regionales. |
| 3 | 🗳️ La Asamblea Rover | Solo la **Regional**, como `timeline` «tu calendario» en el orden en que se actúa: con más de un mes (quién convoca; citación de la ordinaria y de la extraordinaria, con un mes y por escrito) → el día (a más tardar el 31 de enero; primero el quórum por Clanes, después los votos: dos por Grupo; coordinador, comunicador y consejero con voz y sin voto) → si no hay quórum en la ordinaria (extraordinaria inmediata con los Clanes presentes) → lo que se elige (**un** delegado a la Nacional) → el acta en 15 días. La Asamblea Nacional y la caja de las dos fechas pasan a la L7. Hilo: la primera asamblea de Sebastián es una **extraordinaria** para elegir a los asesores de eje que faltaban, citada con una semana: sin quórum y sin elección. La **asamblea siguiente**, citada por escrito con un mes, tiene quórum. |
| 4 | 🧭 Coordinar sin hacer | Funciones de la coordinación: gestionar, animar y acompañar iniciativas; ser puente entre Rovers y comisionado; formar parte de la Comisión Rover; convocar y presidir las asambleas. **Se prueba el hook**, y se nombra: «Eso es la Red: no que Sebastián esté en todos los proyectos, sino que los proyectos se encuentren.» |
| 5 | 📣 Comunicar | Funciones de la comunicación: redes, marca, secretaría de las asambleas, estrategia de difusión, trabajo con el equipo de comunicaciones de la Asociación, que depende de la Jefatura Scout Nacional (Reglamento Nacional 2026, Art. 126). |
| 6 | 🌍 Los cuatro ejes | Transversal, **Viaje y Enlace Internacional**, Servicio, Empresa: qué asesora cada uno (el transversal, ligado al PARCE de cada Rover); turismo responsable, la política A Salvo del Peligro y la gestión del riesgo; servicio que no sea asistencialismo. |
| 7 | 🏛️ Arriba y afuera | Comisión Rover, Dirección Nacional, Red Interamericana (el Jefe Scout Nacional elige la representación internacional, Art. 36). La **Asamblea Nacional Rover** (venida de la L3: dos delegados por región; qué elige y qué evalúa; reformas que luego van al CSN; la caja de las dos fechas). Los representantes juveniles que la Asamblea elige y evalúa. **La CNVC y los cuatro delegados Rover a la Asamblea Scout Nacional**: la discrepancia con el Estatuto 2025 y la regla (Reglamento Nacional, Arts. 19 y 246), en una sola caja «Dos elecciones en revisión». |
| 8 | ✅ Tu año en la Red | Relevo: *«Incentivar la formación de líderes para un adecuado relevo intergeneracional»*. **Se cobra el hook** (caja 🔁, que suma el relevo: a un club lo sostienen los mismos de siempre; a una Red, los que vienen detrás). Compromiso: el mapa de proyectos de tu región y una tarea para quien pueda relevarte, nombrado por su Clan o su cargo, nunca por su nombre. Cierre del Nivel 3. |

---

## 5. Colaterales

Workflow, catálogo, portal y panel (20), README/CLAUDE de línea y raíz, ledger, trazabilidad, glosario (Red de Jóvenes, ejes, asambleas Rover; discrepancia CNVC), **plan**: corregir «Vida y Espíritu» por «Viaje y Enlace Internacional» (líneas del §2 y §5.1). **ADR-090** cierra el Nivel 3.

---

_Documento de diseño v1.0 — 27 de septiembre de 2026._
