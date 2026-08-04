# CLAUDE.md — Línea Programa de Jóvenes

> Ancla local, no la fuente completa de reglas. El documento rector del proyecto vive en el repo raíz **`DOCS-MAESTRAS-ASC`** (`CLAUDE.md`, `ECOSISTEMA.md`, `DECISIONES.md`, `GLOSARIO-ASC.md`) — léelo primero si esta sesión se abrió aislada en este repo y esos archivos no aparecieron solos.
>
> El manual operativo real de esta línea es **[`CREAR-CURSO.md`](CREAR-CURSO.md)** — es el más completo de las 3 líneas (650+ líneas) y absorbe lo que en Política de Adultos y Desarrollo Institucional vive repartido en `BACKEND.md`, `INDICE-PROYECTO.md` y `Recomendaciones-Cowork-Diseno-Cursos.md` por separado.

## Qué es

Una de las 3 líneas activas de formación digital para adultos voluntarios de la Asociación Scouts de Colombia (junto a Política de Adultos y Desarrollo Institucional). Cursos cortos, certificables y autoservicio sobre el Programa de Jóvenes: qué es, las 5 ramas, el Método Scout, la PNPJ y el Modelo de Aplicación 2026.

**En vivo:** https://maximoaluna-blip.github.io/INDUCCION-PROGRAMA-JOVENES/

## Comparte con Política de Adultos y Desarrollo Institucional

- Mismo motor, pero desde el 03-ago-2026 con **fuente única** (ADR-025): el núcleo `engine.core.js` vive en `_MOTOR/` del repo raíz `DOCS-MAESTRAS-ASC` y se propaga con `sincronizar-motor.py`. Lo que aquí hay en `05-Generador-Cursos/templates/engine.core.js` es una **copia: no editarla**. Lo propio de esta línea va en `engine.linea.js`. `build-course.js` y `styles.css` siguen copiados por línea (los vigila `verificar-motor.py`).
- Mismo backend de Google Apps Script + Sheet, mismo token (`ADULTOS_ASC_2026`) durante el piloto compartido.
- Mismo pipeline de publicación — `CLAUDE.md` raíz §7-bis.
- Sin cursos habilitantes ni piloto humano obligatorio (ADR-019, `DECISIONES.md` raíz) — las 3 auditorías automatizadas son la compuerta de calidad.

## Es la línea más madura en auditoría (12-jul-2026)

Es la única con las **3 auditorías** (doctrinal `/auditar-curso`, pedagógica `/auditar-pedagogia`, funcional `PRUEBAS-E2E/`) documentadas como rutina repetible en su propio `CREAR-CURSO.md`, con checklist y comandos. El patrón de suite E2E se copió desde `INDUCCION-ADULTOS` y ya está listo para portar a Desarrollo Institucional.

## Específico de esta línea

| Documento | Para qué |
|---|---|
| `CREAR-CURSO.md` | Manual operativo completo: roles, pipeline, checklist de publicación, comandos, glosario propio |
| `Plan-de-Formacion-Linea-Programa-de-Jovenes.md` | Plan completo de la línea (25 cursos, 4 niveles) |
| `01-Diseno-Cursos/` | Diseño pedagógico `.md` de cada curso construido |
| `PRUEBAS-E2E/README.md` | Auditoría funcional — corre en cada push/PR |

## Estado

8 cursos activos: Nivel 1 "Fundamentación" completo (7 cursos) + Nivel 2 iniciado con el Curso 8 (Rama Manada, primer curso de rama). El menú (`index.html`) agrupa por nivel con chips de navegación. Plan total 25 cursos.
