# PRUEBAS-E2E — Auditoría funcional de la Línea Programa de Jóvenes

Suite de [Playwright](https://playwright.dev) que verifica la plataforma de forma
repetible: la tercera pata de calidad, junto a la **doctrinal** (`/auditar-curso`) y la
**pedagógica** (`/auditar-pedagogia`). Responde a "¿funciona?", no a "¿es verdad?" ni
"¿enseña bien?". **No reemplaza el piloto humano** (Parte L del `CHECKLIST-CALIDAD-CURSO.md`).

Es una copia adaptada de `INDUCCION-ADULTOS/PRUEBAS-E2E`: la mayoría de los archivos son
**idénticos** porque esa suite ya se diseñó agnóstica de línea (lee el catálogo de cursos
en runtime vía `ASC_BASE_URL`). Solo se adaptaron los defaults propios de esta línea
(`playwright.config.js`, `tests/_setup-cursos.js`, `tests/cursos.js`,
`tests/e2e-integracion.spec.js`).

## Estado: Fase 0 + Fase 1a (sin backend real)

Corre contra el sitio **público** (GitHub Pages). **No escribe nada** en el backend de
Apps Script: en Fase 1a las llamadas se interceptan con `page.route()` (`tests/_backend.js`).
La línea PJ comparte backend y token (`ADULTOS_ASC_2026`) con Política de Adultos durante
el piloto — ver `PORTAL-ADMIN-ASC/README.md`.

**Fase 0 — verificación estática:**

| Archivo | Qué verifica | Checklist |
|---|---|---|
| `tests/smoke.spec.js` | Cada curso carga, título no vacío, sin excepciones JS | §G |
| `tests/links.spec.js` | 0 enlaces internos rotos (externos: solo se reportan) | §M |
| `tests/a11y.spec.js` | Accesibilidad axe WCAG A/AA, claro + oscuro | §H |
| `tests/responsive.spec.js` | Sin scroll horizontal en móvil (Pixel 5) y escritorio | §H |
| `tests/persistence.spec.js` | La preferencia de tema sobrevive a recarga (localStorage) | §F, §H |
| `tests/portal.spec.js` | El portal carga, `lineas.json` válido y enlaces de líneas activas (solo si `ASC_PORTAL_URL`) | §G, §M |

**Fase 1a — flujo del alumno (backend interceptado, sin escribir en prod):**

| Archivo | Qué verifica | Checklist |
|---|---|---|
| `tests/e2e-flujo.spec.js` | Registro → responder cada quiz ≥70% → recorrer módulos → certificado `ASC-AAAA-XXXXX`. Verifica el contrato POST (`register`/`quiz`/`progress`/`certificate` + `token` + `course`), idempotencia del certificado incluida. Corre sobre **todos los cursos activos** del catálogo. | §F, §G |
| `tests/e2e-plan-builder.spec.js` | Descubre en runtime el curso con `plan-builder` (en PJ: **Curso 6, `mi-compromiso-programa-jovenes`**, 22 campos) y verifica que persiste tras recargar | §F |
| `tests/_backend.js` | Helper: intercepta y captura las llamadas a Apps Script | — |

## Cursos cubiertos hoy (8 activos)

Nivel 1: `bienvenida-programa-jovenes`, `educacion-por-el-amor`, `como-se-educa-hoy`,
`caracteristicas-esenciales-movimiento-scout`, `metodo-scout-8-elementos`,
`pnpj-gran-juego-para-la-vida`, `mi-compromiso-programa-jovenes`.
Nivel 2: `rama-manada-lobatos` (primer curso de rama).

Todos con `status: "active"` en `02-Plataforma-Web/cursos.json`. El catálogo dinámico
(`_setup-cursos.js`, filtra por `status: "active"/"new"`) y el fallback estático de
`cursos.js` se mantienen en sincronía manual con esa lista — al agregar un curso nuevo,
sumarlo a ambos (ver checklist de `CREAR-CURSO.md`).

## Instalación

```bash
cd PRUEBAS-E2E
npm install
npx playwright install chromium
```

## Uso

```bash
npm test              # toda la suite
npm run smoke         # solo smoke
npm run links         # solo enlaces
npm run a11y          # solo accesibilidad
npm run responsive    # solo responsive
npm run persistence   # solo persistencia
npm run report        # abrir el último reporte HTML
```

Apuntar a otro entorno (la suite estática es agnóstica de línea, así que también sirve
para Adultos o DI cambiando `ASC_BASE_URL`):

```bash
# Producción de esta línea (default si no se define ASC_BASE_URL)
npm test

# Un build local servido en localhost
ASC_BASE_URL="http://localhost:8099/02-Plataforma-Web/" npm test

# Smoke del portal central
ASC_PORTAL_URL="https://maximoaluna-blip.github.io/PORTAL-ADULTOS-ASC/" npx playwright test portal
```

## Proyectos (navegadores/viewports)

- `desktop-chromium` — Chrome de escritorio.
- `movil-android` — Pixel 5 (audiencia principal). Los tests marcados
  `@solo-escritorio` (enlaces, a11y, persistencia, flujo E2E) no se duplican en móvil.

## CI

`.github/workflows/pruebas-e2e.yml` (en la raíz de este repo) corre la suite completa en
cada push/PR a `main`: recompila los 7 cursos activos con `build-course.js`, los sirve en
`localhost:8099` y corre `npx playwright test`.

La corrida manual contra **producción** (`workflow_dispatch`) de las 3 líneas activas +
portal vive en `INDUCCION-ADULTOS/.github/workflows/revision-plataforma.yml` — PJ ya está
en su matriz (`linea: programa-jovenes`); no hace falta duplicarla aquí.

## Pendiente — Fase 1b (persistencia real en un Sheet de pruebas)

Igual que en Adultos: comprobar que los datos se **escriben** de verdad y que los flujos
de **lectura** (`recover`, `verify`) responden contra un backend de pruebas real. Requiere
tu login de Google una vez. El procedimiento es el mismo que documenta
`INDUCCION-ADULTOS/PRUEBAS-E2E/SETUP-FASE-1B.md` (backend compartido, mismo token); solo
cambia el `course` de prueba a `bienvenida-programa-jovenes` (ya reflejado en
`tests/e2e-integracion.spec.js`).
