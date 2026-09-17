# Línea Programa de Jóvenes · ASC

Plataforma de formación online de la **Línea Programa de Jóvenes** de la Asociación Scouts de Colombia. Cursos cortos para adultos que dirigen las ramas: qué es el Programa de Jóvenes, el Método Scout, la PNPJ y el Modelo de Aplicación 2026, y —desde el Nivel 2— la profundización por rama.

🌐 **Producción:** https://maximoaluna-blip.github.io/INDUCCION-PROGRAMA-JOVENES/

## Estado actual

**13 cursos activos** al 17-sep-2026, `status: "active"` en `cursos.json` y publicados en GitHub Pages. **Nivel 1 — Fundamentación** completo (7 cursos, **220 min ≈ 3.7 h**) y **Nivel 2** con 6 de sus 8: **las cinco ramas, cerradas el 16-sep-2026** (250 min ≈ 4.2 h), más el **Curso 13 — Seguimiento de la Progresión Personal** (60 min), **el primero de los tres operativos y el primero que sirve a las cinco ramas a la vez**. El menú de la línea agrupa por nivel. Del Nivel 2 faltan los tres cursos de práctica pedagógica (13–15); el plan total son 25 cursos.

| # | Curso | Nivel | Duración | Estado |
|---|-------|-------|----------|--------|
| 1 | 🎒 Bienvenida al Programa de Jóvenes | 1 | 25 minutos | ✅ Activo |
| 2 | 💗 La Educación por el Amor | 1 | 30 minutos | ✅ Activo |
| 3 | 🎓 Cómo se Educa Hoy | 1 | 30 minutos | ✅ Activo |
| 4 | 🌟 Características Esenciales del Movimiento Scout | 1 | 30 minutos | ✅ Activo |
| 5 | 🧭 El Método Scout y sus 8 elementos | 1 | 40 minutos | ✅ Activo |
| 6 | 📜 La PNPJ y "El Gran Juego para la Vida" | 1 | 35 minutos | ✅ Activo |
| 7 | 🗺️ Mi Compromiso con el Programa de Jóvenes | 1 | 30 minutos | ✅ Activo |
| 8 | 🐺 Rama Manada (Lobatos) | 2 | 35 minutos | ✅ Activo |
| 9 | 🐻 Rama Familia (Cachorros) | 2 | 45 minutos | ✅ Activo |
| 10 | ⚜️ Rama Tropa Scout | 2 | 45 minutos | ✅ Activo |
| 11 | 🧗 Rama Comunidad (Nómadas Scout) | 2 | 60 minutos | ✅ Activo |
| 12 | 🏔️ Rama Clan (Rovers) | 2 | 65 minutos | ✅ Activo |

> **Los siete cursos del Nivel 1 y el Curso 8 se re-auditaron el 16-sep-2026** — **19 críticos, 52 mayores y 61 menores**, todos corregidos y verificados en producción **salvo el texto del certificado del Curso 8**, que es decisión del dueño. Los ocho llevan `contentVersion: 2026-09-16`. Detalle en `CHANGELOG-DOCTRINA.md` (asiento 2026-09-16) y `ESTADO-AUDITORIA.md`; lo que quedó abierto, en el bloque **«Decisiones abiertas»** de `DECISIONES.md`.

> **Cita siempre por `courseId`.** Es lo único que no se ha movido nunca: los nombres de archivo de `01-Diseno-Cursos/` **no se renombraron a propósito** y están corridos —hay **dos `Curso-03-`**, y `Curso-04-El-Metodo…` es el **Curso 5**—. El mapeo nombre → número está en el árbol de `CREAR-CURSO.md`.

## Estructura del proyecto

```
INDUCCION-PROGRAMA-JOVENES/
├── index.html                          # Landing público (GitHub Pages, agrupado por nivel)
├── 404.html
├── assets/                             # Logos, favicon, dark theme
├── 01-Diseno-Cursos/                   # Diseños pedagógicos .md, uno por curso
├── 02-Plataforma-Web/                  # HTMLs públicos
│   ├── cursos.json                     # Catálogo (courseId, level, order, status...)
│   └── *.html                          # Un HTML por curso
├── 05-Generador-Cursos/                # Pipeline de construcción
│   ├── build-course.js                 # JSON → HTML (+ actualiza cursos.json)
│   ├── preview-course.js               # HTML → preview imprimible
│   ├── templates/{engine.js, styles.css}
│   ├── borradores/                     # Fuentes de verdad (JSON)
│   └── previews/                       # (gitignored)
├── PRUEBAS-E2E/                        # Auditoría funcional (Playwright + axe)
└── .github/workflows/pruebas-e2e.yml   # CI en cada push/PR
```

## Pipeline para crear/actualizar un curso

Ver el procedimiento completo (13 pasos, incluida la auditoría funcional) en [`CREAR-CURSO.md`](CREAR-CURSO.md). Resumen técnico:

```bash
# 1. Validar y compilar
python -c "import json; json.load(open('05-Generador-Cursos/borradores/<id>.json', encoding='utf-8'))"
node 05-Generador-Cursos/build-course.js <courseId>

# 2. Preview imprimible
node 05-Generador-Cursos/preview-course.js <courseId>

# 3. Auditoría funcional (sumar el courseId a PRUEBAS-E2E primero)
cd PRUEBAS-E2E && npx playwright test --reporter=list
```

## Backend

Comparte, durante el piloto, el mismo endpoint de Google Apps Script y token (`ADULTOS_ASC_2026`) que Política de Adultos y Desarrollo Institucional. Los registros se diferencian por `courseId`.

## Documentación

- [`CLAUDE.md`](CLAUDE.md) — ancla de contexto para sesiones de Claude Code en este repo.
- [`CREAR-CURSO.md`](CREAR-CURSO.md) — manual operativo completo de la línea.
- [`Plan-de-Formacion-Linea-Programa-de-Jovenes.md`](Plan-de-Formacion-Linea-Programa-de-Jovenes.md) — plan completo (25 cursos, 4 niveles).
- [`PRUEBAS-E2E/README.md`](PRUEBAS-E2E/README.md) — auditoría funcional.
- Documentos rectores del ecosistema (stack, terminología, ADRs): repo `DOCS-MAESTRAS-ASC`.

---

© 2026 Asociación Scouts de Colombia
