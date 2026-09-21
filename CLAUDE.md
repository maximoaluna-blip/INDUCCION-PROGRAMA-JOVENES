# CLAUDE.md — Línea Programa de Jóvenes

> Ancla local, no la fuente completa de reglas. El documento rector del proyecto vive en el repo raíz **`DOCS-MAESTRAS-ASC`** (`CLAUDE.md`, `ECOSISTEMA.md`, `DECISIONES.md`, `GLOSARIO-ASC.md`) — léelo primero si esta sesión se abrió aislada en este repo y esos archivos no aparecieron solos.
>
> El manual operativo real de esta línea es **[`CREAR-CURSO.md`](CREAR-CURSO.md)** — es el más completo de las 3 líneas (650+ líneas) y absorbe lo que en Política de Adultos y Desarrollo Institucional vive repartido en `BACKEND.md`, `INDICE-PROYECTO.md` y `Recomendaciones-Cowork-Diseno-Cursos.md` por separado.

## Qué es

Una de las 3 líneas activas de formación digital para adultos voluntarios de la Asociación Scouts de Colombia (junto a Política de Adultos y Desarrollo Institucional). Cursos cortos, certificables y autoservicio sobre el Programa de Jóvenes: qué es, las 5 ramas, el Método Scout, la PNPJ y el Modelo de Aplicación 2026.

**En vivo:** https://maximoaluna-blip.github.io/INDUCCION-PROGRAMA-JOVENES/

## Comparte con Política de Adultos y Desarrollo Institucional

- Mismo motor, pero desde el 03-ago-2026 con **fuente única** (ADR-025): el núcleo `engine.core.js` vive en `_MOTOR/` del repo raíz `DOCS-MAESTRAS-ASC` y se propaga con `sincronizar-motor.py`. Lo que aquí hay en `05-Generador-Cursos/templates/engine.core.js` es una **copia: no editarla**. Lo propio de esta línea va en `engine.linea.js`. `build-course.js` y `styles.css` siguen copiados por línea (los vigila `verificar-motor.py`), pero el `plan-builder` ya no está en ellos: lo renderiza `templates/render.plan-builder.js`, copia sincronizada de `_MOTOR/`, **sin vocabulario** — los textos del componente van en `labels` dentro del JSON del curso (ADR-034 Fase 1).
- Mismo backend de Google Apps Script + Sheet, mismo token (`ADULTOS_ASC_2026`) durante el piloto compartido.
- Mismo pipeline de publicación — `CLAUDE.md` raíz §7-bis.
- Sin cursos habilitantes ni piloto humano obligatorio (ADR-019, `DECISIONES.md` raíz) — las 3 auditorías automatizadas son la compuerta de calidad.

## Es la línea más madura en auditoría (12-jul-2026)

Es la única con las **3 auditorías** (doctrinal `/auditar-curso`, pedagógica `/auditar-pedagogia`, funcional `PRUEBAS-E2E/`) documentadas como rutina repetible en su propio `CREAR-CURSO.md`, con checklist y comandos. El patrón de suite E2E se copió desde `INDUCCION-ADULTOS` y ya está listo para portar a Desarrollo Institucional.

## Específico de esta línea

| Documento | Para qué |
|---|---|
| `CREAR-CURSO.md` | Manual operativo completo: roles, pipeline, checklist de publicación, comandos, glosario propio |
| `Plan-de-Formacion-Linea-Programa-de-Jovenes.md` | Plan completo de la línea (**v1.1**, 25 cursos, 4 niveles — renumerado por el ADR-041) |
| `01-Diseno-Cursos/` | Diseño pedagógico `.md` de cada curso construido |
| `PRUEBAS-E2E/README.md` | Auditoría funcional — corre en cada push/PR |

## Estado

> **La página que verifica los certificados vive en la RAÍZ del repo** (`verificar-certificado.html`) y se enlaza desde el pie del `index.html` — **ADR-070, 20-sep-2026**. El certificado le dice al adulto *«verifica este certificado ingresando el código en la plataforma web»*, así que la página es la otra mitad de esa promesa. ⚠️ Hasta ese día **apuntaba al backend de Rover** (1 certificado) en vez de al de la plataforma (21), así que **ningún certificado real se podía validar**; y **nadie la enlazaba desde ningún sitio**. Al tocar esa página, comprobar las dos cosas: el `SCRIPT_URL` y que siga enlazada.

**15 cursos activos** (17-sep-2026): Nivel 1 "Fundamentación" completo (7 cursos) + **Nivel 2 COMPLETO, 8 de 8**: el **Curso 8 (Rama Manada)**, el **Curso 9 (Rama Familia)**, el **Curso 10 (Rama Tropa Scout)**, el **Curso 11 (Rama Comunidad · Nómadas Scout)** y el **Curso 12 (Rama Clan · Rovers)**, los dos del 16-sep-2026 y los dos con las tres auditorías. **Las cinco ramas están cerradas.** Y el **Curso 13 (`seguimiento-progresion-personal`)**, del 17-sep-2026 y también con las tres, **abre los tres cursos operativos**: es el primero de la línea que no enseña qué es el Programa de Jóvenes sino cómo se sostiene una reunión, y el primero que sirve a las cinco ramas a la vez. Declara **60 min** (ADR-055). **Su fuente angular estuvo cuatro meses en el corpus siendo un borrador de trabajo** —sin dos capítulos y con una nota del redactor impresa dentro— y nadie podía verlo: el acta del corpus vigila deriva local, y eso era deriva remota (**ADR-054**). Antes de construir un curso, recomprobar su fuente contra la biblioteca — **y no solo la suya: hacerlo sobre toda la línea** (ADR-056). Y el **Curso 14 (`planeacion-reuniones-oda`)**, del 17-sep-2026 y también con las tres, es el **segundo de los tres operativos**: enseña a decidir la reunión antes de que ocurra, sobre el Excel **DNPJ-2026-020**. Declara **60 min**. **Sus tres críticos doctrinales estaban los tres en las cajas «Y en tu rama»** — el patrón de los Cursos 8 a 12, escrito como trampa en su propio diseño y colado igual. Y el **Curso 15 (`ciclo-programa-abp`)**, del 17-sep-2026 y también con las tres, es el **tercero de los operativos** y **cierra el Nivel 2**: enseña de dónde salen las reuniones — del ciclo de programa amalgamado con ABP (*Modelo* Cap. 11). Declara **50 min**, y es **el primer curso de la línea en el que medir BAJÓ la cifra**; las cinco veces anteriores la subió. **Nivel 2 completo: 8 de 8.** El Curso 12 es además **el más largo de la plataforma** (65 min). El menú (`index.html`) agrupa por nivel con chips de navegación. Plan total 25 cursos.

> **Los 7 cursos del Nivel 1 y el Curso 8 se re-auditaron el 16-sep-2026:** **19 críticos, 52 mayores, 61 menores**, todos corregidos y verificados en producción **salvo el texto del certificado del Curso 8**. Los ocho llevan `contentVersion: 2026-09-16`. **No los des por auditados «desde junio»** — el asiento del 27-jun daba el Nivel 1 por cerrado y no lo estaba. Ver `CHANGELOG-DOCTRINA.md` 2026-09-16.

## Trampas de esta línea (cuestan una jornada cada una)

- **El motor NO convierte markdown (ADR-053).** `*«cita»*` llega a la pantalla **con los asteriscos**. En un JSON: `<em>` y `<strong>`, nunca `*` ni `**`. El Curso 12 tuvo **24 marcas literales** y las **tres auditorías lo dejaron pasar**.
- **Un curso en `draft` se salta la suite E2E entera (ADR-052)** — el CI pasa en verde sin haberlo probado. Para probarlo: servir una **copia** con el `status` volteado (nunca el catálogo real), con `ThreadingHTTPServer`, y comprobar que **subió el número de pruebas**.
- **El patrón de error del curso de rama N es importar vocabulario de la rama N−1.** Los dos críticos del Curso 12 fueron eso y solo eso: «Rumbo» y «rojo coral», que son de Comunidad y no aparecen **ni una vez** en la Guía de Clan. **Antes de auditar, barrer el vocabulario propio de las otras cuatro ramas.**
- **El glosario puede estar contaminado (ADR-049).** Una entrada suya se ancla en el documento oficial, **nunca en un curso** — si se copió de un curso, la auditoría aprueba al auditado por coincidir consigo misma. Pasó con la cadena de competencias del Curso 6, aprobado **tres veces**.
- **Lo que dimensiona un curso de rama no es el grosor de su Guía, y la extensión no se estima: se mide, y DESPUÉS de las auditorías** (ADR-047). Las dos Guías más largas dieron los dos cursos más cortos; el Curso 12 pasó de 60 a **65 min** porque las correcciones añadieron ~470 palabras.
- **`status` vive en el catálogo, no en el JSON del curso.** Activar = editar `02-Plataforma-Web/cursos.json`; `build-course.js` preserva el status existente en cada rebuild.

> **Rama Manada es el Curso 8 — decidido el 15-sep-2026 (ADR-043).** En el Nivel 2 el número sigue al **orden de publicación**, no a la edad de la rama: Manada se publicó como Curso 8 y su certificado lo dice, así que **Rama Familia es el 9**. Tropa 10, Comunidad 11, Clan 12. Aun así, **cita por `courseId`**: es lo único que no se ha movido nunca.
