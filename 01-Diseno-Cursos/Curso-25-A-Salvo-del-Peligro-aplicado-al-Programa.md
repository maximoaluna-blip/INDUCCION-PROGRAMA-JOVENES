# Diseño del Curso 25 — 🛡️ A Salvo del Peligro aplicado al Programa

> **Línea:** Programa de Jóvenes · **Nivel 4 — Transversales** · Curso **25** de 25 — **el primero del Nivel 4** (Hito D del plan: se construye antes que el 21–24 por su valor, no por ser habilitante, que no lo es — ADR-019)
> **`courseId`:** `a-salvo-del-peligro-programa`
> **Diseño pedagógico:** Claude Code, con autonomía de punta a punta renovada por el dueño el 27-sep-2026 para todo el Nivel 4.
> **Estado:** diseño · pendiente JSON, build y las tres auditorías. ADR reservado: **100**.

El alcance lo fijó el **ADR-038** con la regla de la propia Política: *¿el sujeto de la frase es el joven y la unidad, o el adulto y la institución?* Este curso enseña **cómo el Método Scout hace seguro el entorno de la unidad**. Lo que el adulto hace ante una revelación, su posición de garante, el límite de su rol y las señales de abuso son de la línea **Políticas Transversales**, y aquí **se enlazan sin reexplicarse**.

---

## 0. La situación de fuentes

| Fuente | Qué aporta |
|---|---|
| **Política Nacional a Salvo del Peligro** «Haré todo cuanto de mí dependa» (Acuerdo CSN 657, dic-2025) — **fuente angular** | **«Articulación con el Programa de Jóvenes», pp. 26–27: los once ítems** que son el temario (escucha, 2+1, DURASLID, entornos en línea, datos de los jóvenes, informar los mecanismos de reporte, Ley y Promesa, aprendizaje por la acción, educación personalizada, agentes de cambio, pares) y su párrafo de cierre. Definiciones: *entorno seguro* (p. 13) y *entorno inseguro* (p. 15). La ruta oficial de reporte: el botón «Me Pongo A Salvo del Peligro» en la página de Scouts de Colombia (p. 44). **Solo la Comisión Nacional recibe y gestiona reportes a nombre de la ASC** (p. 39). El adulto no investiga ni gestiona el reporte (p. 29, ítem 3). Espacios ¡Óyeme! en eventos (p. 34). |
| **Manual Operativo** (V1, feb-2023) | Vigente en lo que no contradiga la Política (ADR-035). Su «Línea de acción uno» (p. 23 impresa) añade **integridad** a los atributos de la información de los jóvenes y pide *«aplicar instrumentos de identificación, monitoreo y evaluación de los riesgos»*. |
| **Guías de Dirigente de Rama** (2026) | **Familia §11.7–11.11** (pp. 78–79): custodia (entrega y recepción), al menos dos adultos y **un adulto por cada cinco** cachorros, baño, contacto físico, gestión del riesgo. **Manada §11.1.3 y §11.2** (pp. 63–64): preparación con permisos; identificar, evaluar, prevenir y prever antes de salidas y campamentos. **Tropa** Cap. 13.2.1 (p. 66): los **seis elementos** de la gestión del riesgo; §12 (pp. 61–62): fichas médicas, autorizaciones firmadas, contactos de emergencia, listado, centros médicos, protocolos; p. 11: los **cuatro módulos oficiales** de A Salvo del Peligro. **Clan** §8.10–8.11, pp. 48–51: en la vigilia, salud y clima; en el peregrinaje, además, rutas de urgencia y apoyo de un dirigente con conocimientos en gestión del riesgo. **Familia p. 77 / Manada p. 64**: el botón (*«virtual en scout.org.co, físico en los QR que ubicas en los sitios de reunión»*) y el correo **asalvodelpeligro@scout.org.co** para orientación. |
| **Modelo de Aplicación** (DNPJ-2026-024) | §4.3, p. 22: proporción de adultos por rama. Cap. 10, p. 71: **«Seguras»** en DURASLID — *«Seguridad es física, emocional, logística o digital»*. p. 82: chequeo de seguridad (físico, emocional, **digital: consentimiento para imágenes**, cultural). |
| **Curso 14** (`planeacion-reuniones-oda`) y **Curso 03 de PT** (`adulto-garante-entorno-seguro`) | Lo que ya está enseñado y **no se repite**: la Hoja de Ruta y su bloque de entorno seguro, la matriz de riesgo (Curso 14 L6); el 2+1 como concepto y norma, la revelación, el botón como conducta del adulto (PT C03). PT C03 remite **aquí** la aplicación del 2+1 a *«la Hoja de Ruta de Reunión, la pernocta, el transporte, la actividad acuática»*. |

### Lo que este curso tiene que resolver

1. **La promesa de los cursos publicados.** Tropa, Comunidad y Clan dicen que *«el protocolo de actividades, transporte y pernoctas»* será materia de este curso. **No hay protocolo nacional de pernoctas publicado en la biblioteca** (lo confirmó también la sesión de DI para su Curso 14). ⚠️ **Corrección del 03-oct-2026:** de transporte sí lo hay —el *Protocolo Nacional de Transporte* (CNGR-022-1, mayo de 2025, «de obligatorio cumplimiento en todos los niveles»), en la biblioteca bajo DNDI › Gestión del Riesgo—; no estaba en el corpus local y lo encontró PT. La L3 lo nombra y resume lo que pide. El curso no inventa uno: enseña a **aplicar el 2+1 y la gestión del riesgo de las Guías** a esos momentos, lo dice con esas palabras, y remite al protocolo del Grupo y de la Región. Se registra en el ADR-100.
2. **Familia: 1 por cada 5 (Guía) o 1 por cada 6 (Modelo).** Misma salida que el Curso 16: **en Familia manda su Guía** (regla del dueño, ADR-083), y se dice que el *Modelo* da otra cifra.
3. **DURASLID «Incluyentes» (Política) / «inclusivas» (Modelo).** Mismo rasgo; el curso usa la forma del documento que cita.
4. **«Informar los mecanismos de reporte» no es recibir reportes.** La Política deja la recepción y gestión **solo** a la Comisión Nacional (p. 39). El curso enseña a **mostrar la puerta**, no a ser la puerta.

### Lo que este curso NO puede decir

- **No reexplicar** la conducta ante una revelación, la posición de garante, la confidencialidad del reporte ni las señales de abuso: se enlaza al Curso 03 de PT.
- **No afirmar un protocolo nacional** de transporte, pernocta o actividad acuática.
- **No decir «activar la ruta»** como acto del adulto: el adulto **reporta**; activar rutas es del Comité de Gestión de Incidentes.
- **No presentarse como el módulo oficial** A Salvo del Peligro, que la Asociación exige y certifica: ningún curso de la plataforma lo reemplaza.
- **No repetir el Curso 14**: la Hoja de Ruta y la matriz se nombran y se usan, no se enseñan.
- **No pedir en las reflexiones nombres, fechas que identifiquen ni confidencias** (ADR-087).
- **No definir «grooming» con una fuente que no tenemos**: la Política lo nombra sin definirlo; el curso trabaja las estrategias de cuidado que pide, no los signos (que son de PT).

---

## 1. Ficha

| Campo | Valor |
|---|---|
| `courseId` | `a-salvo-del-peligro-programa` |
| Título | A Salvo del Peligro aplicado al Programa |
| Icono | 🛡️ |
| Nivel / orden | 4 — Transversales · Curso **25** |
| Duración | **55 min** (medida después de las auditorías, ADR-047: 7.332 palabras, como el Curso 16) |
| Destinatario | Todo dirigente de unidad, de cualquier rama |
| Recomendado antes | Curso 14 (Planeación de Reuniones) y, de Políticas Transversales, el Curso 03 (El Adulto como Garante) |
| Logro final | Mi unidad, a salvo |

---

## 2. Objetivos

1. **Reconocer** que la Política pide la protección **a través** del Método, no a pesar de él: los once ítems de su articulación con el Programa.
2. **Construir** en la unidad una cultura donde se pueda hablar: escucha, pares que se cuidan y protagonistas como agentes.
3. **Aplicar** el 2+1 al planear una reunión, una salida, una pernocta y un traslado, buscando en el horario los momentos en que alguien quedaría solo.
4. **Cuidar** la vida en línea de la unidad: canales, contacto adulto-joven, imágenes, ciberacoso y grooming.
5. **Proteger** la información médica, dietética y de desarrollo sin que deje de estar a mano cuando se necesita.
6. **Informar** a protagonistas y familias por dónde se reporta, sin convertirte en quien recibe el reporte.

---

## 3. Hook

> **«Tu unidad no se protege a pesar del Método: se protege con él.»**

Anclado en la propia Política (p. 26: *«una vivencia del escultismo centrada en el cuidado propio y del otro, como expresión concreta de la Ley y la Promesa Scout»*; p. 27: que *«la vivencia del Método Scout se traduzca en prácticas reales de cuidado»*). Ataca la idea vieja de **la seguridad como el trámite del final** —la lista que se llena cuando la actividad ya está decidida— y la de **proteger quitando**: menos salidas, menos pantallas, menos confianza. **Hilo: el equipo de Tatiana, Jefa de Tropa, prepara el primer campamento del año.** Alguien del equipo propone lo de siempre: «la seguridad la vemos al final, con la lista».

---

## 4. Lecciones

| # | Lección | Contenido |
|---|---|---|
| 1 | 🛡️ Proteger con el Método | Registro. Hook. El equipo de Tatiana y «la lista del final». Cita p. 26. **Los once ítems en cinco frentes** (`method-grid`): la cultura (1, 10, 11), el plan (2, 3), lo digital (4), los datos (5), la puerta (6); y los tres que no son tareas sino el Método mismo (7 Ley y Promesa, 8 aprendizaje por la acción, 9 educación personalizada). **Entorno inseguro** (p. 15) como lente: falta de protocolos, ausencia de supervisión, normalización, invisibilización — cada una tiene su lección. **Qué NO es este curso**: el módulo oficial (4 módulos, Guía de Tropa p. 11), la revelación y el garante (PT C03, enlace), la Hoja de Ruta (Curso 14). |
| 2 | 👂 Una unidad donde se puede hablar | Una patrulla con apodos que hacen reír a todos, también al del apodo. Ítem 1 (cultura de escucha) en `policy-quote`. **La normalización**: el humor que hiere (Modelo p. 82). La Ley y la Promesa como marco que la unidad ya tiene (ítem 7). **Pares** (ítem 11, cita): la confianza entre ellos detecta antes que cualquier adulto. **Agentes de cambio** (ítem 10). Tres cosas del adulto: nombrar, acordar en el órgano de la unidad, enseñar que contar está bien — y cuando alguien cuenta, el Curso 03 de PT (una línea, enlace). `Y en tu rama`: órganos según el glosario (Encuentro del Cubil, Consejo de Roca, Consejo de Patrulla y Corte de Honor, Congreso de Comunidad y Consejos de Equipo, Consejo de Clan). |
| 3 | 👥 La práctica 2+1 se decide al planear | Ítem 2 (definición, breve: el concepto es de PT C03). La tesis: el 2+1 casi nunca se rompe por mala fe, sino por un **hueco del plan** — el último papá que llega tarde, la noche, el traslado. **Recorrer el horario** buscando los momentos en que alguien quedaría solo. **La reunión**: la Guía de Familia lo baja a normas (custodia, dos adultos, 1 por cada 5, baño, contacto), y el *Modelo* da proporciones para las cinco ramas (en Familia manda su Guía). **La salida y la pernocta**: lo que las Guías piden (Manada p. 64; Tropa pp. 61–62, 66). **El traslado y la actividad acuática**: para el traslado rige el *Protocolo Nacional de Transporte* (CNGR-022-1); para la actividad acuática **no hay protocolo nacional publicado**: se aplican el 2+1 y la gestión del riesgo, y se pide el protocolo del Grupo. «Seguras» en DURASLID (ítem 3): física, emocional, logística o digital (Modelo Cap. 10, p. 71). |
| 4 | 📱 La unidad también está en línea | Ítem 4 completo en `policy-quote`. Cuatro frentes (`method-grid`): **canales institucionales**, **contacto adulto-joven** (el 2+1 alcanza las comunicaciones, p. 26), **imágenes** (consentimiento, Modelo p. 82; la Política pide directrices: pregunta cuáles aplica tu Grupo), **ciberacoso y grooming** (estrategias de cuidado, no diagnóstico; aprendizaje por la acción: *«uso responsable de la tecnología»*, ítem 8; Guía de Tropa §1.5). **Proteger no es quitar la pantalla** (idea vieja). Reunión en línea: ya está en la Hoja de Ruta (Curso 14). |
| 5 | 🩺 Lo que sabes de ellos | Ítem 5 en `policy-quote`: médica, dietética, de desarrollo; **seguridad, confidencialidad, disponibilidad, autenticidad** (`method-grid`, cada una con su escena del campamento). La tensión que la lección resuelve: **confidencial no es inaccesible** — la ficha tiene que estar en el campamento. Lo que las Guías piden (fichas completas y actualizadas, Tropa p. 62; *«condición mínima de seguridad»*, Manada p. 67). Lo «de desarrollo» incluye lo que observas de su progresión (Cursos 13 y 17): no se comenta en el grupo de los papás. |
| 6 | 🔴 Que todos sepan por dónde | Ítem 6 (*«Informar los mecanismos de reporte»*). El botón en la página de Scouts de Colombia (p. 44), el QR en el sitio de reunión (Guías), el correo de orientación. A quién informar: protagonistas (a su edad), familias, el equipo adulto; el bloque de la Hoja de Ruta que lo verifica (Curso 14). **El límite**: mostrar la puerta no es ser la puerta — solo la Comisión recibe y gestiona (p. 39); el adulto reporta y no investiga (p. 29). ¡Óyeme! en eventos (p. 34). |
| 7 | ✅ Tu próxima salida, a salvo | El equipo de Tatiana relee el plan del campamento con las cinco preguntas del curso. **Se cobra el hook.** Vivir → Mirar → Comprender → Proyectar (atribuido al *Modelo de Aplicación de Bolsillo*, p. 3). `Y en tu rama`: lo que cada Guía pide distinto. El módulo oficial, una vez más. Lo que sigue en el Nivel 4 (21–24, por publicarse). Compromiso en `mission-box`. |

Cada lección cierra con reflexión (sin nombres ni confidencias, por rol o situación) y dos preguntas; los distractores llevan la idea vieja: *la seguridad es la lista del final*, *proteger es quitar*, *el dirigente filtra el reporte*, *confidencial es no llevarla*.

---

## 5. Colaterales

- **Catálogo** (`cursos.json`, nivel 4 «Transversales», orden 25), **workflow** de la suite, **portal** (`lineas.json` → 21) y **panel** (`dashboards.json`: `courseIds` y `coursesActive`).
- **Barrido de las promesas** (lección del ADR-044): los cursos que dicen *«todavía está por construirse»* o *«cuando se publique»* del 25 — `ciclo-programa-abp`, `pnpj-gran-juego-para-la-vida`, `mi-compromiso-programa-jovenes`, `rama-tropa-scout`, `rama-comunidad-nomadas`, `rama-clan-rovers`, `acompanamiento-progresion-personal` — pasan a presente. Y los que le atribuyen al 25 **la conducta ante una revelación** (`seguimiento-progresion-personal`, `acompanamiento-progresion-personal`, `jefe-de-rama`, `planeacion-reuniones-oda`) se ajustan al ADR-038: esa conducta es de PT; el 25 la enlaza.
- **Avisar a PT** (su C03 remite aquí) y a **DI** (su Curso 14, Gestión del Riesgo, remitirá aquí la protección en la actividad).
- Ledger, trazabilidad, glosario (lo que el curso estrena), plan (§6: estado del 25), README/CLAUDE de la línea, `generar-estado.py`, bitácora. **ADR-100.**

---

_Documento de diseño v1.1 — 27 de septiembre de 2026. La v1.1 recoge la primera vuelta de auditorías: quizzes reescritos contra la fuga del «punto medio» (C1 pedagógico), la cita de los seis elementos resumida en prosa, la Guía de Clan atribuida al peregrinaje, «la práctica 2+1» y no «2+1» a secas, y el traslado sin excepción por urgencia. El JSON manda._
