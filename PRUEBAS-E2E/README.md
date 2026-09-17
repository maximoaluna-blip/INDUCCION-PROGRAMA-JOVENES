# PRUEBAS-E2E — Auditoría funcional de la Línea Programa de Jóvenes

> ⚠️ **Sin `ASC_BASE_URL`, esta suite corre contra PRODUCCIÓN** (la URL pública de GitHub Pages), no contra el HTML que acabas de compilar. Un «todo en verde» en local sin esa variable valida lo publicado, no tu cambio. Para probar el repo local haz lo que hace el CI: `python -m http.server 8099` en la raíz del repo y `ASC_BASE_URL=http://127.0.0.1:8099/02-Plataforma-Web/ npx playwright test`. (Aprendido el 14-sep-2026, ADR-034 Fase 1.)


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

## Cursos cubiertos hoy (12 activos)

Nivel 1: `bienvenida-programa-jovenes`, `educacion-por-el-amor`, `como-se-educa-hoy`,
`caracteristicas-esenciales-movimiento-scout`, `metodo-scout-8-elementos`,
`pnpj-gran-juego-para-la-vida`, `mi-compromiso-programa-jovenes`.
Nivel 2 — **las cinco ramas**: `rama-manada-lobatos`, `rama-familia-cachorros`,
`rama-tropa-scout`, `rama-comunidad-nomadas`, `rama-clan-rovers`.

Con los 12 la suite da **123 passed / 0 failed / 2 skipped** (las 2 son las opcionales:
backend de integración y portal).

Todos con `status: "active"` en `02-Plataforma-Web/cursos.json`. El catálogo dinámico
(`_setup-cursos.js`, filtra por `status: "active"/"new"`) y el fallback estático de
`cursos.js` se mantienen en sincronía manual con esa lista — al agregar un curso nuevo,
sumarlo a ambos (ver checklist de `CREAR-CURSO.md`).

## Dos trampas de esta suite (verde no siempre significa probado)

**1. Un curso en `draft` se salta la suite entera (ADR-052).** El catálogo dinámico filtra
por `status: "active"/"new"`, así que un curso en `draft` **no entra en la lista y la suite
pasa en verde sin haberlo tocado**. Es la forma más silenciosa de creer que hay compuerta
cuando no la hay. Para probar un curso **antes** de activarlo:

1. Copiar `02-Plataforma-Web/`, `assets/`, `index.html` y `404.html` a una carpeta temporal.
2. Voltear el `status` **en la copia** — nunca en el catálogo real; ya se quedó puesto una vez.
3. Servir esa copia con **`ThreadingHTTPServer`**, no con `python -m http.server`: el segundo
   es monohilo y obliga a `--workers=1`; con hilos la suite corre en paralelo.
4. Comprobar que **el número de pruebas subió**. Si no subió, no se probó nada.
5. Al terminar, verificar que el catálogo real quedó como estaba.

**2. Una compuerta intermitente deja de ser compuerta (ADR-051).** Hasta el 16-sep-2026 el CI
se veía «en verde» con **13 de 125 pruebas intermitentes**, todas `color-contrast` sobre
`module-0`, y el mismo cuadro en las cuatro líneas — `tests/a11y.spec.js` era **byte-idéntico**
en todas. La causa no era de accesibilidad sino de **orden de las aserciones**: el spec auditaba
`module-0` **antes** de desactivar las animaciones con `addStyleTag`, mientras seguía en su
`fadeIn`, y axe medía el contraste de un texto semitransparente. Los demás módulos sí esperaban
a que el elemento fuera opaco.

Corregido en las cuatro: `addStyleTag` va **por encima** de la primera auditoría, `module-0`
recibe la misma espera de opacidad que sus hermanos, y **una espera fallida es ruidosa** — si el
módulo no llega a ser opaco en 3 s, la prueba registra `no-auditado` como hallazgo **grave** en
vez de saltárselo en silencio. Esa tercera parte es la que impide que el arreglo se convierta en
el defecto siguiente.

> **La regla:** un test que parpadea se arregla o se borra. No falla el CI, pero enseña a
> ignorarlo — y una compuerta que se ignora ya no es una compuerta. Y antes de descartar un
> hallazgo de a11y como ruido, **comprobar si la prueba mide lo que cree medir**.

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
cada push/PR a `main`: recompila los 12 cursos activos con `build-course.js`, los sirve en
`localhost:8099` y corre `npx playwright test`.

La corrida manual contra **producción** (`workflow_dispatch`) de las líneas activas +
portal vive en `INDUCCION-ADULTOS/.github/workflows/revision-plataforma.yml` — PJ ya está
en su matriz (`linea: programa-jovenes`); no hace falta duplicarla aquí.

## Pendiente — Fase 1b (persistencia real en un Sheet de pruebas)

Igual que en Adultos: comprobar que los datos se **escriben** de verdad y que los flujos
de **lectura** (`recover`, `verify`) responden contra un backend de pruebas real. Requiere
tu login de Google una vez. El procedimiento es el mismo que documenta
`INDUCCION-ADULTOS/PRUEBAS-E2E/SETUP-FASE-1B.md` (backend compartido, mismo token); solo
cambia el `course` de prueba a `bienvenida-programa-jovenes` (ya reflejado en
`tests/e2e-integracion.spec.js`).
