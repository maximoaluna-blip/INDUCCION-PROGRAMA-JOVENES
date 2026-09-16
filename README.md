# Línea Programa de Jóvenes · ASC

Plataforma de formación online de la **Línea Programa de Jóvenes** de la Asociación Scouts de Colombia. Cursos cortos para adultos que dirigen las ramas: qué es el Programa de Jóvenes, el Método Scout, la PNPJ y el Modelo de Aplicación 2026, y —desde el Nivel 2— la profundización por rama.

🌐 **Producción:** https://maximoaluna-blip.github.io/INDUCCION-PROGRAMA-JOVENES/

## Estado actual

**Nivel 1 — Fundamentación** completo (7 cursos, ~3.3 horas). **Nivel 2** con 3 de sus 8 cursos: Rama Manada, Rama Familia y Rama Tropa Scout. 10 cursos activos en total, `status: "active"` en `cursos.json`, publicados en GitHub Pages. El menú de la línea agrupa los cursos por nivel.

| # | Curso | Nivel | Estado |
|---|-------|-------|--------|
| 1 | 🎒 Bienvenida al Programa de Jóvenes | 1 | ✅ Activo |
| 2 | 💗 La Educación por el Amor | 1 | ✅ Activo |
| 3 | 🎓 Cómo se Educa Hoy | 1 | ✅ Activo |
| 4 | 🌟 Características Esenciales del Movimiento Scout | 1 | ✅ Activo |
| 5 | 🧭 El Método Scout y sus 8 elementos | 1 | ✅ Activo |
| 6 | 📜 La PNPJ y "El Gran Juego para la Vida" | 1 | ✅ Activo |
| 7 | 🗺️ Mi Compromiso con el Programa de Jóvenes | 1 | ✅ Activo |
| 8 | 🐺 Rama Manada (Lobatos) | 2 | ✅ Activo |

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
