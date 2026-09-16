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

12 cursos activos: Nivel 1 "Fundamentación" completo (7 cursos) + Nivel 2 con 5 de sus 8: el **Curso 8 (Rama Manada)**, el **Curso 9 (Rama Familia)**, el **Curso 10 (Rama Tropa Scout)**, el **Curso 11 (Rama Comunidad · Nómadas Scout)** y el **Curso 12 (Rama Clan · Rovers)**, los dos del 16-sep-2026 y los dos con las tres auditorías. **Las cinco ramas están cerradas.** El Curso 12 es además **el más largo de la plataforma** (65 min). El menú (`index.html`) agrupa por nivel con chips de navegación. Plan total 25 cursos.

> **Rama Manada es el Curso 8 — decidido el 15-sep-2026 (ADR-043).** En el Nivel 2 el número sigue al **orden de publicación**, no a la edad de la rama: Manada se publicó como Curso 8 y su certificado lo dice, así que **Rama Familia es el 9**. Tropa 10, Comunidad 11, Clan 12. Aun así, **cita por `courseId`**: es lo único que no se ha movido nunca.
