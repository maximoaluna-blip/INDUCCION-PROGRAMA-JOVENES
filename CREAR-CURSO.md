# Manual: Cómo Crear un Curso o Nivel

> Manual operativo de la **Línea Programa de Jóvenes** (Asociación Scouts de Colombia).
> Documenta el proceso completo desde el diseño de un curso hasta su despliegue en producción, **incluyendo las recomendaciones de Cowork** consolidadas de la retrospectiva de las dos líneas hermanas (Política de Adultos y Desarrollo Institucional).

---

## Trigger

Cuando el usuario diga frases como:

- *"vamos a crear el curso N de PJ"*
- *"creemos el curso 2 de la línea Programa de Jóvenes"*
- *"arranquemos el nivel 2 de PJ"*
- *"construyamos el curso de la rama Manada"*
- *"hagamos el curso de Seguimiento de la Progresión"*

…seguir el proceso aquí documentado.

> 🟧 **Patrón de referencia:** el **Curso 1 (Bienvenida al Programa de Jóvenes)** —diseñado en `01-Diseno-Cursos/Curso-01-Bienvenida-al-Programa-de-Jovenes.md`— es el ejemplo canónico. Replicarlo con las adaptaciones que pida cada curso.

---

## Tabla de contenidos

1. [División de roles Cowork ↔ Claude Code](#1-división-de-roles-cowork--claude-code)
2. [Estructura de la carpeta `05-Generador-Cursos/`](#2-estructura-de-la-carpeta-05-generador-cursos)
3. [Caso A — Crear UN curso nuevo](#3-caso-a--crear-un-curso-nuevo)
4. [Caso B — Crear un NIVEL completo](#4-caso-b--crear-un-nivel-completo)
5. [Casos especiales](#5-casos-especiales)
6. [Patrones de diseño que funcionan](#6-patrones-de-diseño-que-funcionan)
7. [Las 3 exigencias propias de la Línea PJ](#7-las-3-exigencias-propias-de-la-línea-pj)
8. [Riesgos y antídotos por curso del Nivel 1](#8-riesgos-y-antídotos-por-curso-del-nivel-1)
9. [Hilos cross-course que deben quedar amarrados](#9-hilos-cross-course-que-deben-quedar-amarrados)
10. [Cómo entregar el contenido a Claude Code](#10-cómo-entregar-el-contenido-a-claude-code)
11. [Checklist final antes de publicar](#11-checklist-final-antes-de-publicar)
12. [Documentos fuente vigentes para PJ](#12-documentos-fuente-vigentes-para-pj)
13. [Tabla de referencia rápida y convención de courseIds](#13-tabla-de-referencia-rápida-y-convención-de-courseids)
14. [Glosario rápido para Cowork](#14-glosario-rápido-para-cowork)
15. [Resumen ejecutivo en 5 puntos](#15-resumen-ejecutivo-en-5-puntos)
16. [Referencias cruzadas](#16-referencias-cruzadas)

---

## 1. División de roles Cowork ↔ Claude Code

Para evitar fricción y duplicación de esfuerzo, los roles están claramente separados. La frontera real es **describir/nombrar (Cowork)** vs **construir/montar/decidir mecánica e imagen (Claude Code)**.

### 1.1 Lo que diseña Cowork

**Contenido pedagógico:**

- **Hook** del curso (una frase ancla, repetible).
- **Lecciones** con su idea central, desarrollo en prosa, ejemplos cotidianos del dirigente.
- **Reflexiones** personales aterrizadas a casos concretos.
- **Quizzes** de 2 preguntas con distractores que desarman la idea vieja.
- **Logros** (4–6 + 1 final) con nombre evocativo.
- **Conexiones cross-course** (cuál anuncia, cuál recoge).
- **Tono, narrativa, ejemplos, voces juveniles cuando aplique.**
- **Las 3 exigencias propias de PJ** (ver sección 7).

**Estructura de cada lección, incluyendo el tipo de sección del motor para cada bloque:**

Cowork **sí nombra** los tipos de sección del motor cuando los conoce del vocabulario del proyecto (`info-box`, `method-grid`, `timeline`, `policy-quote`, `photo-upload`, `self-assessment`, `brujula-display`, `plan-builder`, `mission-box`, `list`, `heading`, `paragraph`, `reflection`, `quiz`). Nombrarlos en el diseño **no es invadir el rol técnico** — es proveer vocabulario compartido que **estandariza la estructura visual de la línea** y agiliza el handoff.

> Ejemplo: en vez de escribir _"aquí va una caja destacada con la idea central"_ (ambiguo: ¿`info-box`? ¿`mission-box`? ¿`policy-quote`? — son cosas distintas), Cowork escribe directamente _"`info-box` con la idea central"_. Claude Code recibe la intención clara y monta la mecánica.

Cowork escribe en **formato libre** (markdown, prosa corrida, outline, bullets). La nominación de los tipos de sección es una **referencia técnica útil**, no una obligación rígida: si Cowork no tiene clara qué sección usar, describe el contenido y Claude Code propone el tipo.

### 1.2 Lo que decide Claude Code (mecánica, imagen, deploy)

Aunque Cowork **nomine** los tipos de sección, las decisiones técnicas internas son siempre de Claude Code:

- **Confirmar o ajustar** el tipo de sección sugerido por Cowork (si hay uno mejor, lo propone).
- **Colores, bordes, layout visual, tipografía.**
- **Estructura JSON, esquema, IDs de logros, `unlockOnModule`.**
- **Mecánica interna** de componentes complejos (`photo-upload`, `plan-builder`, `brujula-display`, `self-assessment`). Cowork dice _"aquí va un `plan-builder` con 22 campos"_; Claude Code define los IDs de cada campo, su validación, su persistencia en localStorage y su renderizado.
- **Encabezados de quiz, etiquetas de botones, copy de UI** que no es contenido pedagógico.
- **Conexiones técnicas cross-course** (qué clave de localStorage lee qué).
- **Build, preview, validación, deploy.**

### 1.3 Beneficio de esta división

- **Cowork** se concentra en pedagogía, narrativa y estructura conceptual.
- **Claude Code** se concentra en mecánica, validación y publicación.
- **La línea entera gana consistencia visual** porque los tipos de sección están nombrados desde el diseño: dos cursos distintos diseñados por Cowork en momentos distintos terminan con la misma estructura visual.
- **El handoff es eficiente**: Claude Code no tiene que adivinar la intención; tiene que ejecutarla y mejorarla donde haya margen.

---

## 2. Estructura de la carpeta `05-Generador-Cursos/`

```
05-Generador-Cursos/
├── build-course.js                       ← Constructor JSON → HTML
├── preview-course.js                     ← Generador de preview (mockup HTML)
├── verificar-backend.js                  ← Validador pre-deploy (ver BACKEND.md)
├── course-schema.json                    ← Esquema de validación
├── course-schema.example.json            ← Ejemplo completo de curso
│
├── templates/
│   ├── styles.css                        ← CSS compartido por todos los cursos
│   └── engine.js                         ← Motor JS (registro, quizzes, photo, etc.)
│
├── borradores/                           ← JSONs fuente de cada curso
│   └── <courseId>.json
│
├── input/         (gitignored)           ← PDFs/MDs fuente para cursos nuevos
└── previews/      (gitignored)           ← HTMLs/PDFs de preview
    ├── preview-<courseId>.html/pdf       ← Iteraciones, work-in-progress
    └── publicadas/                       ← Versión canónica de cursos en producción
        └── preview-<courseId>.html/pdf
```

### Convención de la carpeta `previews/publicadas/`

`previews/` aloja todos los archivos de revisión (HTML interactivo + PDF visual). Dentro hay una **subcarpeta `publicadas/`** que es la **fuente de verdad visual del catálogo activo**: solo deben estar allí los previews de cursos cuya entrada en `02-Plataforma-Web/cursos.json` tenga `status: "active"`.

Flujo:

1. **Curso nuevo en desarrollo** → preview se genera en `previews/` (raíz). El courseId todavía no está en producción.
2. **Iteraciones / ajustes / revisión Cowork** → el preview vive en `previews/` (raíz) y se regenera en cada iteración.
3. **Curso aprobado y publicado** (build + commit + push) → el preview canónico se mueve a `previews/publicadas/`. Si había una versión previa, se reemplaza.
4. **Curso descartado o reemplazado** → su preview se quita de `publicadas/` (puede archivarse en `previews/` raíz como histórico o eliminarse).

Resultado: cualquier persona que abra `previews/publicadas/` ve exactamente lo que el cursante encuentra en GitHub Pages — no se mezcla con versiones en revisión.

### Documentos de diseño paralelos

```
INDUCCION-PROGRAMA-JOVENES/
├── 01-Diseno-Cursos/                     ← Diseños pedagógicos (markdown) de cada curso
│   ├── Curso-01-Bienvenida-al-Programa-de-Jovenes.md
│   ├── Curso-02-La-Educacion-por-el-Amor.md
│   ├── Curso-03-Caracteristicas-Esenciales-del-Movimiento-Scout.md
│   ├── Curso-04-El-Metodo-Scout-y-sus-8-Elementos.md
│   ├── Curso-05-PNPJ-y-El-Gran-Juego-para-la-Vida.md
│   └── Curso-06-Mi-Compromiso-con-el-Programa-de-Jovenes.md
├── Plan-de-Formacion-Linea-Programa-de-Jovenes.md   ← Plan completo de la línea (24 cursos)
├── CREAR-CURSO.md                                    ← Este archivo (consolida diseño + Cowork)
└── BACKEND.md                                        ← (por crear, replicar de DI) Documenta el backend
```

---

## 3. Caso A — Crear UN curso nuevo

### Pasos (12)

#### Fase pedagógica (Cowork)

1. **Definir el curso** en `01-Diseno-Cursos/Curso-NN-<nombre>.md`. Debe contener las **10 secciones estándar** (replicar la estructura del Curso 01):
   1. **Ficha del curso** (courseId, título, subtítulo, icono, duración, lecciones, audiencia primaria, pre-requisitos, logro final).
   2. **Objetivos del curso** (6 verbos de aprendizaje observables).
   3. **Hook pedagógico** (la idea poderosa que sostiene el curso — ver sección 6.1).
   4. **Estructura de lecciones** (mapa general + cada lección con: idea central, secciones en orden con su tipo, reflexión, quiz de 2 preguntas, logro).
   5. **Logros** (4–6 por lección + 1 final con `unlockOnModule: -1`).
   6. **Conexiones cross-course** (hacia adelante, hacia atrás, cross-línea).
   7. **Tipos de sección utilizados** (tabla resumen).
   8. **Multimedia requerido** (imágenes, infografías, videos).
   9. **Validación contra el marco metodológico** (checklist).
   10. **Próximos pasos** (revisión, JSON, HTML, preview, piloto).
2. **Revisión y aprobación** del diseño antes de codificarlo.

#### Fase técnica (Claude Code)

3. **Crear el JSON fuente** en `05-Generador-Cursos/borradores/<courseId>.json` siguiendo `course-schema.json`. Replicar el patrón de `bienvenida-programa-jovenes.json` (cuando se construya).
4. **Validar JSON:**
   ```bash
   python -c "import json; json.load(open('05-Generador-Cursos/borradores/<courseId>.json', encoding='utf-8')); print('OK')"
   ```
5. **Build HTML:**
   ```bash
   node 05-Generador-Cursos/build-course.js <courseId>
   ```
6. **Preview imprimible:**
   ```bash
   node 05-Generador-Cursos/preview-course.js <courseId>
   ```
7. **Generar PDF visual** con Chrome headless:
   ```bash
   "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless --disable-gpu --no-sandbox \
     --print-to-pdf="<ruta>/preview-<courseId>.pdf" --no-pdf-header-footer \
     "file:///<ruta>/preview-<courseId>.html"
   ```
8. **Revisión visual** del PDF con el dueño del proyecto.
9. **Iterar** sobre los ajustes que pida.

#### Fase de publicación

10. **Actualizar `02-Plataforma-Web/cursos.json`** agregando la entrada del curso nuevo con `status: "active"`.
11. **Verificar backend:**
    ```bash
    node 05-Generador-Cursos/verificar-backend.js
    ```
12. **Commit + push** del repo de la línea:
    ```bash
    git add . && git commit -m "Agregar Curso N: <título>" && git push
    ```

GitHub Pages redespliega automáticamente. ~1 min después el curso está vivo.

> ⚠️ **Construir el curso ≠ publicar la línea.** GitHub Pages sirve desde la **raíz** del repo: si la raíz no tiene `index.html`, la URL pública de la línea da 404. Ver §3-bis.

#### Fase de publicación de la LÍNEA (§3-bis) — al estrenar la línea o cambiar el nº de cursos activos

Procedimiento universal en `../MANUAL-CREACION-CURSOS.md` §A.3-bis y `../CLAUDE.md` §7-bis. Datos propios de **Programa de Jóvenes**:

13. **Raíz del repo** (ya existe desde 27-jun-2026): verificar que `index.html` (con botón `.back-portal`) + `404.html` siguen presentes.
14. **Portal** `../PORTAL-ADULTOS-ASC/lineas.json` → entrada `"id": "programa-jovenes"`: mantener `status: "active"`, `url: "https://maximoaluna-blip.github.io/INDUCCION-PROGRAMA-JOVENES/"`, `color: "#00afef"`, y **actualizar `coursesActive`** al nº de cursos con `status: "active"` (`coursesPlanned: 24`). Sincronizar la tabla del `README.md` del portal.
15. Push del repo del portal + **verificar en producción** (landing 200, curso 200, tarjeta clickeable).

---

## 4. Caso B — Crear un NIVEL completo

Cuando se quieren publicar varios cursos del mismo nivel a la vez.

1. Confirmar que el **Plan de Formación de la Línea Programa de Jóvenes** define los cursos del nivel.
2. Para cada curso del nivel, ejecutar los pasos 1-9 del **Caso A**.
3. **Cuando todos los cursos del nivel estén listos**, actualizar `cursos.json` en un solo commit:
   - Marcar todos los del nivel como `status: "active"`.
   - Asegurar que el orden de `cursos.json` refleja el orden pedagógico del nivel.
4. **Verificar conexiones cross-course:** que cada curso del nivel referencie al siguiente correctamente y que los componentes que dependen de otros (ej. `brujula-display` del Curso 6 que lee reflexiones de los Cursos 1–5, `plan-builder` del Curso 6 que integra rama+áreas+rol+reunión+proyecto+par) funcionen.
5. **Pilotear el nivel completo** con 5-10 dirigentes reales antes de cerrar la fase. Para Nivel 1: idealmente 2 dirigentes de Manada, 2 de Tropa, 1 de Comunidad y 1 de Clan, para representar el espectro.

---

## 5. Casos especiales

### A. Curso que reusa un componente especializado (`brujula-display`, `plan-builder`, `self-assessment`)

- Cualquier curso del Nivel 1 puede usar `brujula-display`, `plan-builder` o `self-assessment` (ya están soportados por el motor — no requiere tocar `engine.js`).
- El **Curso 6 (Mi Compromiso)** usa `brujula-display` para recuperar reflexiones de los Cursos 1–5 (`sourceCourses` con los 5 IDs) y `plan-builder` con 22 campos distribuidos en L3-L4-L6.
- Si el componente lee datos de otro curso, usar la clave global de localStorage acordada en el proyecto (ej. `dirigenteProfile` para el cross-course del perfil de dirigente, paralela a `competencyProfile` de la Línea Política de Adultos).
- **Cowork solo dice**: _"aquí va un plan-builder con 22 campos"_ o _"aquí se muestra al adulto sus reflexiones de los cursos 1-5"_. **Claude Code monta** la mecánica.

### B. Curso con video

- Subir los videos a `02-Plataforma-Web/<courseId>/videos/`.
- En el JSON, usar el tipo `video` con `data-src` para lazy loading.
- Solo el módulo activo del curso carga sus videos (lazy).
- Para PJ: los videos sugeridos son **testimonios de protagonistas y de dirigentes que han dejado huella** (no videos institucionales formales). La alianza joven-adulto se vive en el material, no solo se enseña.

### C. Curso por rama (Cursos 7–11 del Nivel 2)

- Cada curso de rama (Familia, Manada, Tropa, Comunidad, Clan) usa la **Guía de Dirigente oficial 2026** correspondiente como fuente angular.
- Estructura recomendada de 8 lecciones siguiendo los 8 elementos del Método aplicados a la rama + transiciones (entrada y salida).
- Marco simbólico, Promesa y Ley, grupo natural, ceremonias propias deben aparecer explícitamente con sus textos oficiales en `policy-quote`.
- **Riesgo común**: tratar el marco simbólico como decoración. Cowork debe diseñarlo como **lenguaje principal** de la rama, no como adorno.

### D. Curso habilitante (Curso 24 — A Salvo del Peligro)

- El Curso 24 es **prerrequisito real** para avanzar al Nivel 2. La plataforma debe **bloquear el acceso** a los Cursos 7–14 si el adulto no ha completado el 24.
- En `cursos.json`, marcar el Curso 24 con `gates: ["nivel-2"]` o equivalente que el motor reconozca.
- Construir el Curso 24 **en paralelo al Nivel 1**, no esperar a terminar todo el Nivel 1.

### E. Curso que reemplaza a otro

- No borrar el curso viejo del repo. Mover su entrada en `cursos.json` a `status: "archived"` o `"coming-soon"`.
- Mantener el HTML por compatibilidad con enlaces externos.

---

## 6. Patrones de diseño que funcionan

Esta sección recoge los patrones del Curso 01 (canónico) y de las dos líneas hermanas (Adultos y DI) que sí funcionaron con dirigentes reales. **Replicarlos en cada curso nuevo.**

### 6.1 Hook de una frase, repetible

En el Curso 1 de PJ, el hook es:

> _"El Programa de Jóvenes no es un libro que se sigue. Es una alianza que se vive entre quien crece y quien acompaña. Y esa alianza la firmas tú cada reunión, cada campamento, cada conversación, lo nombres así o no."_

**Recomendación:** cada curso necesita **un hook así** — una sola frase potente que:

- Se enuncie textualmente en la **intro** o en la **lección 2**.
- Se **referencie** al menos una vez más a lo largo del curso.
- **Cierre** el último módulo, idealmente con un eco que el adulto pueda recordar al día siguiente.

Es el **ancla emocional del curso**. Sin hook, el contenido se vuelve enciclopédico.

### 6.2 Anti-definición antes de la definición técnica (con discernimiento)

Citar textualmente la PNPJ o las Características Esenciales OMMS en seco asusta y aleja. El patrón general es:

1. **Anti-definición** o **apertura preparatoria** (ver dos variantes abajo).
2. **Ejemplos cotidianos** de la unidad scout que ilustran el concepto.
3. **Cita oficial textual** dentro de un `policy-quote` plegable (el lector decide si entra al detalle).
4. **Reformulación accesible** o **info-box operativo de cierre** (ver dos variantes abajo).

**Las citas oficiales son insumo, no contenido principal.** El flujo principal habla en lenguaje del dirigente; la cita rigurosa siempre está disponible un clic abajo.

#### Variante A — Fórmula literal "Si abres…" + "En palabras simples…"

Usar cuando la cita oficial es **densa, abstracta o técnica**, y el lector promedio podría cerrar el navegador si la encuentra en seco.

- **Anti-definición:** _"Si abres The Scout Method de la OMMS vas a leer 'sistema de autoeducación progresiva basado en la interacción de elementos igualmente importantes que funcionan como un sistema cohesivo'. Es exacto. Y, si nunca has hecho un curso así, es difícil de digerir en frío. Vamos a llegar a esa frase, pero por el camino aterrizado."_
- **Reformulación accesible:** _"En palabras simples: el Método Scout es la forma en que el Movimiento educa. No es una lista de técnicas que tú escojas — es un sistema de 8 piezas que se sostienen mutuamente."_

**Ejemplo de aplicación en PJ**: Curso 04 L2 (Método Scout — la cita oficial es la definición técnica más densa del Nivel 1).

#### Variante B — Apertura narrativa contextual + Cierre operativo accionable

Usar cuando la lección abre con **contexto histórico, normativo o lógico** que ya prepara al lector antes de la cita, o cuando el curso es **operativo más que doctrinal**.

- **Apertura narrativa contextual:** _"El 11 de diciembre de 2024, el Consejo Scout Nacional aprobó el Acuerdo C.S.N. N° 617. Ese acuerdo es lo que hoy conocemos como Política Nacional de Programa de Jóvenes."_ (Curso 05 L2)
- **Cierre operativo accionable** (típicamente montado como `info-box`): _"En el Curso 12 del Nivel 2 vas a aprender estas técnicas en profundidad. Hoy solo guarda el principio: la progresión se observa, no se examina."_ (Curso 05 L4)

Lo central pedagógicamente es la **función**: preparar al lector antes de la cita y aterrizar la idea al final. El componente concreto (`info-box`, `mission-box`, etc.) lo nomina Cowork según el inventario del motor; Claude Code lo monta.

**Ejemplos de aplicación en PJ**: Curso 02 (curso histórico-narrativo), Curso 03 (apertura por preguntas — _"Antes de hablar de cómo se hace, conviene saber para qué"_), Curso 05 (curso operativo con contexto normativo).

#### Cuándo usar cada variante

| Característica del curso | Variante recomendada |
|---|---|
| Cita oficial **densamente doctrinal**, abstracta, en lenguaje técnico-burocrático | **A — literal** (_"Si abres… Es exacto y pesado."_) |
| Lección con **contexto histórico, normativo o lógico** que ya prepara al lector | **B — narrativa** |
| Curso **operativo** (planeación, seguimiento, herramientas) más que doctrinal | **B — narrativa** |
| Curso de **integración personal** sin cita doctrinal nueva (ej. plan personal) | Ninguna de las dos aplica obligatoriamente |
| Lección de **bienvenida** o **cierre** del curso | Ninguna de las dos aplica obligatoriamente |

**Regla práctica:** si el dirigente promedio, al encontrar la cita en seco, podría pensar _"esto no es para mí"_, usar **Variante A**. Si la cita llega después de que el lector ya entendió el contexto, **Variante B** basta.

#### Documentar la elección

En la sección _Validación contra el marco metodológico_ del archivo `Curso-NN-<nombre>.md`, registrar explícitamente qué variante del patrón 6.2 se aplica y por qué. Esto evita auditorías futuras que confundan "no aplicó la fórmula literal" con "no aplicó el patrón".

### 6.3 Estructura interna de cada lección (7 bloques)

Toda lección de contenido sigue esta receta:

| Bloque | Contenido | Quién lo escribe |
|---|---|---|
| 1 — Anclaje | Tiempo estimado + idea central en 1 frase | Cowork |
| 2 — Desarrollo | 200–400 palabras, prosa práctica con ejemplos | Cowork |
| 3 — Cita oficial (cuando aplica) | Texto literal del documento doctrinal | Cowork |
| 4 — Reformulación accesible | _"En simple, esto significa..."_ | Cowork |
| 5 — Reflexión personal | Pregunta aterrizada a la unidad o rama del adulto | Cowork |
| 6 — Mini-quiz | 2 preguntas, 3 opciones cada una, distractores con la idea vieja | Cowork |
| 7 — Logro al completar | Frase de 2-4 palabras | Cowork |

Lo que viene después (tipo de sección visual, colores, IDs, layout) lo monta Claude Code. **No es responsabilidad de Cowork.**

### 6.4 Reflexiones que aterrizan en realidad concreta

**Lo que funciona:**

> _"Recuerda una situación reciente donde, por la prisa o por evitar el error, hiciste por un protagonista lo que él hubiera podido hacer solo o con apoyo. Escribe brevemente: ¿qué pasó? ¿Qué hubieras hecho distinto sabiendo lo que sabes ahora?"_ (Curso 04 L3)

**Lo que NO funciona:**

> _"Reflexiona sobre tu rol como dirigente."_

**Recomendación:** toda reflexión debe forzar al adulto a pensar en **un caso concreto** que conoce: una reunión específica, un protagonista con nombre, un proyecto fallido. Si la respuesta puede ser genérica, la pregunta está mal hecha. Pedir **especificidad** (un nombre, una fecha, una rama, una situación).

### 6.5 Quiz que enseña, no que castiga

Las 2 preguntas de cada lección **no son evaluación** — son ancla del concepto. Cada distractor debería ser plausible: idealmente, **uno de los distractores debe ser la idea vieja que el curso está tratando de desarmar**.

Ejemplo del Curso 01 de PJ:

> _"Un dirigente se sienta 20 minutos con un scout a preguntarle qué le gustaría aprender este trimestre. Según esta lección, ¿está haciendo Programa de Jóvenes?"_
>
> a) _No, eso es solo una conversación informal._ ← idea vieja (escultismo = actividades formales)
> b) _Solo si el resultado queda registrado en el cuaderno del scout._ ← idea burocrática
> c) **_Sí, está aplicando el elemento del Método Scout llamado Progresión Personal._** ✅

**Recomendación:** diseñar las preguntas pensando _"¿qué quiero que recuerden en 6 meses?"_ — no _"¿qué leyeron en este párrafo?"_.

### 6.6 Compromiso aterrizado en cada curso

Cada curso del Nivel 1 cierra con un **compromiso firmable** (no abstracto):

- Curso 1: _"Esta semana voy a __________ con __________ y la señal será __________."_
- Curso 2: _"Voy a reemplazar la práctica __________ por __________."_
- Curso 3: una frase propia de definición del Movimiento.
- Curso 4: un ajuste a la próxima reunión, fortaleciendo un elemento del Método.
- Curso 5: el mapa personal del Modelo (rama, áreas prioritarias, rol).
- Curso 6: el Plan Personal de Dirigente completo (22 campos) + Promesa personal del Nivel 1.

**Recomendación:** ningún curso de PJ debería terminar sin un compromiso que el adulto pueda **mostrar a su consejo de grupo** o **revisar en una semana**.

---

## 7. Las 3 exigencias propias de la Línea PJ

A las decisiones pedagógicas globales del proyecto (lecciones cortas, auto-guardado, mini-quiz, etc.), la Línea Programa de Jóvenes **añade tres exigencias específicas** derivadas de su naturaleza pedagógica. Todo curso de esta línea debe satisfacerlas o justificar explícitamente su ausencia.

### 7.1 Cada curso debe ejemplificar el Método que enseña

- Las lecciones se diseñan con la lógica **DURASLID** (Desafiante, Útil, Recompensante, Atractiva, Segura, Lúdica, Inclusiva, Diversa).
- Cuando es posible, las lecciones siguen el ciclo **Vivir → Mirar → Comprender → Proyectar** del Modelo de Aplicación de Bolsillo.
- Si un curso enseña Sistema de Equipos pero se vive en formato 100 % individual, está contradiciendo lo que enseña.

### 7.2 Educación por el amor, no por el temor

- Ningún curso se construye con tono prescriptivo-sancionatorio.
- Los quiz no buscan "atrapar" al adulto en error: muestran la idea vieja como distractor para que pueda nombrarla y soltarla.
- Las reflexiones invitan a la auto-revisión honesta, no a la culpa.
- Cuando un curso señala una práctica indebida (ej. avergonzar a un lobato, decidir por el rover), lo hace con compasión, mostrando el camino, no juzgando a quien lo ha hecho.

### 7.3 Alianza joven-adulto explícita

- En cursos donde aplique, se incluyen **testimonios y aportes de jóvenes** (rovers, miembros juveniles ante el CSN, protagonistas de cada rama).
- El lenguaje nunca trata al protagonista como objeto: se habla de **acompañar a alguien que crece**, no de "trabajar con grupos de jóvenes".
- El adulto se presenta como **apoyo** (los 3 roles: Apoyar, Acompañar, Enlazar), no como autoridad central.

---

## 8. Riesgos y antídotos por curso del Nivel 1

### 8.1 Mapa rápido

| Curso | Riesgo principal | Antídoto que se le pide a Cowork |
|---|---|---|
| **1 — Bienvenida al PJ** | Sonar a "club juvenil con uniforme". | **5 mitos del dirigente nuevo** desarmados con ejemplos cotidianos. Hook explícito sobre alianza (no manual). _Curso ya diseñado — patrón canónico._ |
| **2 — La Educación por el Amor** | Sonar a clase de historia de B-P. | **Anti-definición histórica** (qué pasaba en 1922, por qué urgía) + contraste vivo de los 4 motores del temor con prácticas escolares contemporáneas. Las citas de B-P van en `policy-quote`. _Curso ya diseñado._ |
| **3 — Características Esenciales** | Sonar a manual doctrinal seco. | **Los 6 elementos definitorios** con un **NO-ejemplo** por elemento (campamento militar = rompe voluntario; grupo confesional excluyente = rompe abierto). Test de pertenencia accionable al final. _Curso ya diseñado._ |
| **4 — Método Scout y sus 8 elementos** | El más extenso (40 min). Riesgo de "manual de oficina". | Estructurar los 8 elementos en **4 parejas** (cada lección dos elementos relacionados) + cada elemento aterrizado a **una práctica concreta de la rama**. Cierre con **checklist de 8 preguntas** para la próxima reunión. _Curso ya diseñado._ |
| **5 — PNPJ y "El Gran Juego para la Vida"** | El más documental. Riesgo de volverse lectura de actas. | **Infografía única "Mapa del Modelo"** (5 ramas + 6 áreas + 3 etapas + 3 momentos) descargable. Las novedades de la PNPJ enunciadas con un ejemplo, no con una definición. _Curso ya diseñado._ |
| **6 — Mi Compromiso con el PJ** | Riesgo de "compromiso vacío" o de exceso de campos. | `plan-builder` de **22 campos distribuidos en 3 lecciones** (no en una sola), con `brujula-display` que recupera las reflexiones de los Cursos 1–5 como insumo. Cierre con **Promesa personal del Nivel 1** firmable. _Curso ya diseñado._ |

### 8.2 Riesgos transversales del Nivel 1 PJ

- **Densidad doctrinal**: los Cursos 2, 3 y 4 manejan mucho material doctrinal (B-P, OMMS, Método). Cowork debe **alternar prosa con method-grid**, no acumular bloques de texto.
- **Marco simbólico ignorado**: en los Cursos 4 y 5 aparecen los marcos simbólicos por rama. Cowork debe **nombrarlos con respeto, no con condescendencia** ("eso es de niños" es el tono a evitar).
- **Citas en cascada**: cuando un curso necesita varias citas (Curso 02 tiene 5, Curso 04 tiene 6), Cowork debe **agruparlas por lección, no concentrarlas**. Una cita por lección como máximo, dos solo si son contrastantes.

### 8.3 Riesgos esperados del Nivel 2 (cursos 7–14)

Aún no diseñados. Lista para anticipar al construirlos:

| Curso | Riesgo anticipado | Antídoto sugerido |
|---|---|---|
| **7–11 (Ramas)** | Cada curso de rama puede caer en "leer la guía oficial en voz alta". | Cada rama con **un protagonista narrativo** (un cachorro real, un lobato, un scout, un nómada, un rover) cuya progresión hila el curso. |
| **12 — Seguimiento de la Progresión** | Riesgo de volverse manual de Excel. | Las 9 técnicas de las Herramientas 2.0 con **un ejemplo vivo por técnica** (un anecdotario real, una rúbrica real, una conversación real). |
| **13 — Planeación de Reuniones** | Riesgo de volverse tutorial de software. | El Excel oficial DNPJ como **soporte, no como tema**. El tema es: cómo se planea pensando en los 8 elementos + DURASLID. |
| **14 — Ciclo de Programa con ABP** | Riesgo de "ABP como moda pedagógica". | ABP **aterrizado al proyecto scout real**: propuesta-decisión-preparación-desarrollo-evaluación con ejemplos colombianos. |

---

## 9. Hilos cross-course que deben quedar amarrados

Cada curso del Nivel 1 cierra con un anuncio del siguiente (1–2 frases). En particular:

- **Última lección del Curso 1** anuncia los Cursos 2–6 con sus emojis e iconos (lista visual).
- **Última lección del Curso 2** anuncia: _"En el Curso 3 vas a conocer la identidad doctrinal del Movimiento. En el Curso 4, su método. En el Curso 5, cómo Colombia lo aplica."_
- **Última lección del Curso 3** anuncia: _"En el Curso 4 vas a aprender el Método Scout: la herramienta práctica con la que aterrizas el Propósito y los Principios a una reunión real."_
- **Última lección del Curso 4** anuncia: _"En el Curso 5 vas a ver cómo Colombia aterriza el Método al Modelo de Aplicación 2026, las 5 ramas y las 6 áreas de crecimiento."_
- **Última lección del Curso 5** anuncia: _"En el Curso 6 vas a convertir todo lo aprendido en un Plan Personal de Dirigente firmable."_
- **Última lección del Curso 6** anuncia:
  - **Inmediato**: Curso 24 (A Salvo del Peligro — habilitante).
  - **Próximo mes**: tu curso de rama del Nivel 2 + un curso pedagógico operativo (12, 13 o 14).
  - **Próximos meses**: el resto del Nivel 2, el Nivel 3 (cuando ejerzas un cargo) y los demás cursos del Nivel 4.

### 9.1 Hilos de datos (responsabilidad de Claude Code)

- El **`brujula-display` del Curso 6** lee las reflexiones de cierre de los Cursos 1, 2, 3, 4 y 5 (`sourceCourses` con los 5 IDs).
- El **`plan-builder` del Curso 6** persiste en `localStorage` con clave `dirigenteProfile` y es leído más adelante por los cursos del Nivel 2 (para sugerir el curso de rama y los cursos operativos prioritarios).
- El **Curso 24** marca el flag `aSalvoCompleted` que la plataforma usa para desbloquear los Cursos 7–14.

---

## 10. Cómo entregar el contenido a Claude Code

Cuando un curso esté completo en Cowork, **tráelo todo de una vez** (las 6–8 lecciones, intro, reflexiones, quizzes, achievements y descripción del certificado). **No por lecciones sueltas.**

### 10.1 Beneficios de entregar el curso completo

- Claude Code va una sola vez por mapeo a section types.
- Se hace un solo preview PDF para revisión visual.
- Mejor coherencia de tono entre lecciones.
- Si hay ajustes globales (longitud, lenguaje, hook), se aplican una vez.

### 10.2 Formato libre

Puede ser markdown, prosa corrida, outline, lista de bullets. Claude Code organiza. Lo importante es que estén:

- Las **10 secciones estándar** del archivo `Curso-NN-<nombre>.md`.
- El **hook** explícito.
- Cada lección con sus **7 bloques** (sección 6.3).
- Las **conexiones cross-course** hacia adelante y hacia atrás.

### 10.3 Si falta algo

Si falta algún elemento (por ejemplo, una pregunta de quiz para una lección, una reflexión, un ejemplo concreto), Claude Code lo señala y propone opciones para validación de Cowork. No inventa contenido pedagógico sin validar.

---

## 11. Checklist final antes de publicar

### Checklist pedagógico (responsabilidad Cowork)

- [ ] El curso cumple las **10 secciones estándar** del archivo `Curso-NN-<nombre>.md`.
- [ ] Hook **enunciado al menos una vez** explícitamente en una lección + **referenciado** al cierre.
- [ ] Cada lección tiene los **7 bloques** (anclaje, desarrollo, cita oficial cuando aplica, reformulación, reflexión, quiz, logro).
- [ ] **Patrón 6.2 (anti-definición + reformulación accesible)** aplicado en su variante apropiada (A literal o B narrativa) y **documentado** en la sección de Validación del archivo de diseño. Para cursos de integración personal o de bienvenida, justificar la no-aplicación.
- [ ] Lecciones entre 3 y 7 min cada una (óptimo 5).
- [ ] Curso total entre 20 y 40 min (excepción Curso 04 — Método: 40 min justificados por centralidad).
- [ ] Mini-quiz tiene **mínimo 2 preguntas** por lección (excepto intro), **con al menos un distractor que sea la idea vieja**.
- [ ] Reflexión personal por lección (excepto intro), **forzando a un caso concreto**.
- [ ] Logros: 4-6 + 1 final con `unlockOnModule: -1`. (Excepción documentada: Curso 04 con 7+1.)
- [ ] Conexiones cross-course con el curso anterior y siguiente verificadas (sección 9).
- [ ] El curso cumple las **3 exigencias propias de la Línea PJ** (sección 7): DURASLID, educación por el amor, alianza joven-adulto.
- [ ] `policy-quote` apuntan a documentos vigentes (sección 12).
- [ ] **Compromiso aterrizado** al cierre del curso (no abstracto).

### Checklist técnico (responsabilidad Claude Code)

- [ ] JSON valida contra `course-schema.json`.
- [ ] Build de HTML sin errores ni warnings.
- [ ] Preview PDF revisado y aprobado visualmente.
- [ ] `cursos.json` actualizado con la entrada del curso.
- [ ] `verificar-backend.js` retorna 4/4 OK.
- [ ] Certificado final tiene `courseName` y `description` específicos del curso.
- [ ] Commit con mensaje descriptivo.
- [ ] Push.
- [ ] HTTP 200 al URL público del curso (`curl -I https://maximoaluna-blip.github.io/INDUCCION-PROGRAMA-JOVENES/02-Plataforma-Web/<courseId>.html`).

### Checklist de coherencia con la línea

- [ ] Si el curso es de rama (Cursos 7–11), incluye marco simbólico, Promesa/Ley y grupo natural de la rama.
- [ ] Si el curso depende de A Salvo del Peligro (Cursos 7–14), valida el prerrequisito.
- [ ] Si el curso usa `brujula-display` o `plan-builder`, los `sourceCourses` están bien encadenados.

---

## 12. Documentos fuente vigentes para PJ

Toda cita doctrinal dentro de `policy-quote` debe apuntar a uno de estos documentos. Verificar siempre vigencia antes de citar.

### 12.1 Documentos nacionales (DNPJ / CSN)

- **Política Nacional de Programa de Jóvenes (PNPJ)** — Acuerdo C.S.N. N° 617 del 11 de diciembre de 2024.
- **Modelo de Aplicación "El Gran Juego para la Vida"** — DNPJ-2026-024 (109 pp).
- **Modelo de Aplicación de Bolsillo** — DNPJ-2026-063 (14 pp).
- **Guía del Dirigente de Familia** (DNPJ 2026, 83 pp) + **Cómo crear una Familia de Cachorros** (DNPJ-2026-065).
- **Guía de Dirigente de Manada** (DNPJ 2026, 69 pp) + **Manual de Presentación y Buen Orden de la Manada**.
- **Guía de Buenas Prácticas para Jefes de Tropa** (DNPJ 2026, Módulo 1, 32 pp).
- **Guía de Dirigente de Comunidad** (DNPJ 2026, 48 pp).
- **Guía de Dirigente de Clan** (DNPJ 2026, 63 pp).
- **Recursos Educativos para Dirigentes — Herramientas de Seguimiento para la Progresión Personal 2.0** (DNPJ, 42 pp).
- **Registro de Acompañamiento a la Progresión Personal** (DNPJ-2026-021, Excel).
- **Planeación de Reunión y Oportunidades de Aprendizaje** (DNPJ, Excel).
- **Reglamento de la Red Nacional de Jóvenes** (Acuerdo C.S.N. N° 556).
- **Manual de Cargos y Funciones de la Red de Jóvenes** (2da edición 2024).
- **Reglamento para la Realización de Asambleas Rover y Elección de Representantes Juveniles** (2022).
- **Manual de Implementación del Marco de Mundo Mejor** (junio 2021, 68 pp).
- **Kit de Acción Constructores de Paz** (Mensajeros de la Paz).
- **Kit He For She** (alianza ONU Mujeres).
- **Kit de Acción Patrimonito** (alianza UNESCO).
- **Política Nacional A Salvo del Peligro** + Manual Operativo + Guía de Prevención y Atención del Daño (DNDI).

### 12.2 Documentos internacionales (OMMS / Interamericana)

- **Características Esenciales del Movimiento Scout** (OMMS, Oficina Scout Mundial, Kuala Lumpur, noviembre 2019).
- **The Scout Method** (OMMS, 2019 — Resolución 41ª Conferencia Scout Mundial 2017-04).
- **La Educación por el Amor en sustitución de la Educación por el Temor** (Baden-Powell, Ginebra, 1 de agosto de 1922 — reedición OMMS 2007).
- **Plan Trienal Mundial OMMS 2021–2024** ("Recuperación. Sostenibilidad. Impacto.").
- **Plan Regional Interamericano 2022–2025** ("Reunir, Reconectar, Recuperar").

### 12.3 Verificación de vigencia

Antes de publicar, verificar contra https://scout.org.co/biblioteca/dnpj que los documentos citados siguen siendo la versión vigente. Si una guía de rama o un manual se actualiza, abrir tarea para revisar todos los cursos que lo citen.

---

## 13. Tabla de referencia rápida y convención de courseIds

### 13.1 Comandos técnicos

| Acción | Comando |
|---|---|
| Validar JSON | `python -c "import json; json.load(open('05-Generador-Cursos/borradores/<id>.json', encoding='utf-8'))"` |
| Build HTML | `node 05-Generador-Cursos/build-course.js <courseId>` |
| Preview imprimible | `node 05-Generador-Cursos/preview-course.js <courseId>` |
| PDF visual | Chrome headless con `--print-to-pdf` (ver paso 7 del Caso A) |
| Validar backend | `node 05-Generador-Cursos/verificar-backend.js` |
| Push del backend | Ver `BACKEND.md` (clasp push -f + crear deployment nuevo desde UI) |

### 13.2 Convención de courseIds (slugs en kebab-case)

| Nivel | Curso | `courseId` propuesto |
|---|---|---|
| 1 | 01 Bienvenida al Programa de Jóvenes | `bienvenida-programa-jovenes` |
| 1 | 02 La Educación por el Amor | `educacion-por-el-amor` |
| 1 | 03 Características Esenciales del Movimiento Scout | `caracteristicas-esenciales-movimiento-scout` |
| 1 | 04 El Método Scout y sus 8 elementos | `metodo-scout-8-elementos` |
| 1 | 05 La PNPJ y "El Gran Juego para la Vida" | `pnpj-gran-juego-para-la-vida` |
| 1 | 06 Mi Compromiso con el Programa de Jóvenes | `mi-compromiso-programa-jovenes` |
| 2 | 07 Rama Familia (Cachorros) | `rama-familia-cachorros` |
| 2 | 08 Rama Manada (Lobatos) | `rama-manada-lobatos` |
| 2 | 09 Rama Tropa Scout | `rama-tropa-scout` |
| 2 | 10 Rama Comunidad (Nómadas) | `rama-comunidad-nomadas` |
| 2 | 11 Rama Clan (Rovers) | `rama-clan-rovers` |
| 2 | 12 Seguimiento de la Progresión Personal | `seguimiento-progresion-personal` |
| 2 | 13 Planeación de Reuniones y OdA | `planeacion-reuniones-oda` |
| 2 | 14 Ciclo de Programa con ABP | `ciclo-programa-abp` |
| 3 | 15 Jefe de Rama | `jefe-de-rama` |
| 3 | 16 Asistente y acompañamiento de la progresión personal | `asistente-acompanamiento-progresion` |
| 3 | 17 Comisionado de Programa de Jóvenes | `comisionado-programa-jovenes` |
| 3 | 18 Consejero Juvenil | `consejero-juvenil` |
| 3 | 19 Coordinador y Comunicador RDJ | `coordinador-comunicador-rdj` |
| 4 | 20 Marco de Mundo Mejor y ODS | `marco-mundo-mejor-ods` |
| 4 | 21 Kit Constructores de Paz | `kit-constructores-paz` |
| 4 | 22 Kit HeForShe y enfoque de género | `kit-heforshe-genero` |
| 4 | 23 Kit Patrimonito y Patrimonio | `kit-patrimonito-patrimonio` |
| 4 | 24 A Salvo del Peligro aplicado al Programa | `a-salvo-del-peligro-programa` |

---

## 14. Glosario rápido para Cowork

| Término del proyecto | Qué significa |
|---|---|
| **Línea** | Una de las 4 líneas formativas del portal: Política de Adultos, **Programa de Jóvenes**, Desarrollo Institucional, Políticas Transversales. |
| **Nivel** | Cada línea tiene 4 niveles. En PJ: Fundamentación (1), Profundización por rama y práctica pedagógica (2), Especialización por cargo (3), Transversales (4). |
| **Curso** | Una unidad formativa de 20–40 min, 5–8 lecciones cortas. |
| **Lección** | Bloque de 3–8 minutos con una idea central, reflexión y mini-quiz. |
| **Hito pedagógico** | El "aha moment" que la lección busca producir en el adulto. |
| **Hook** | La frase clave que abre y cierra el curso. |
| **Protagonista de programa** | Niña, niño, adolescente o joven que vive el Programa en una unidad. Nunca decir "participante", "alumno" o "usuario". |
| **Rama** | Cada una de las 5 secciones por edades: Familia (5-6), Manada (7-10), Tropa (11-14), Comunidad (15-17), Clan (18-20). |
| **Grupo natural** | El pequeño grupo donde el protagonista vive su rama: Camada, Seisena, Patrulla, equipos de Comunidad/Clan. |
| **Marco simbólico** | El universo narrativo de la rama: Hermanos de Mowgli, Libro de las Tierras Vírgenes, Aventura y Ciudadanía, etc. |
| **Áreas de crecimiento** | Las 6 dimensiones del desarrollo integral: Corporalidad, Creatividad, Carácter, Afectividad, Sociabilidad, Espiritualidad. |
| **3 roles del dirigente** | Apoyar, Acompañar, Enlazar (Modelo de Aplicación 2026). |
| **DURASLID** | Filtro de calidad de toda oportunidad de aprendizaje: Desafiante, Útil, Recompensante, Atractiva, Segura, Lúdica, Inclusiva, Diversa. |
| **Plan-builder** | Componente interactivo donde el adulto arma su plan personal (en PJ: 22 campos en el Curso 6). |
| **Brujula-display** | Componente que muestra al adulto sus reflexiones acumuladas de cursos anteriores. |
| **Self-assessment** | Autodiagnóstico interactivo con dimensiones y grados. |
| **Policy-quote** | Cita textual de un documento oficial, plegable por defecto. |
| **Photo-upload** | Espacio para subir un dibujo o imagen del adulto (se guarda en su navegador). |
| **Achievement** | Logro que se desbloquea al completar una lección o un curso. |
| **Cross-course** | Conexión técnica entre cursos (el resultado de uno alimenta al siguiente). |
| **Curso habilitante** | Curso que es prerrequisito real para avanzar al siguiente nivel (en PJ: Curso 24 — A Salvo del Peligro). |

---

## 15. Resumen ejecutivo en 5 puntos

1. **Hook por curso.** Una frase. Repetible. Anclada en la intro, referenciada en el medio, eco al cierre.
2. **Ejemplos antes que definiciones.** Anti-definición → ejemplos cotidianos → cita oficial plegable → reformulación accesible. En ese orden. El patrón admite **dos variantes** (literal "Si abres…" o narrativa contextual) — elegir según densidad de la cita y registrar la elección en la Validación.
3. **Reflexiones aterrizadas.** Forzar al adulto a pensar en un caso concreto (un protagonista con nombre, una reunión específica, una rama particular).
4. **Quizzes que enseñan.** Distractores con la idea vieja que el curso desarma. Pensar a 6 meses, no a 6 minutos.
5. **Entregar el curso completo, no por pedazos.** Claude Code lo traduce una sola vez, mapea a section types una sola vez, hace un solo preview PDF.

A esto, la Línea PJ añade las **3 exigencias propias** (sección 7): cada curso ejemplifica el Método que enseña; educa por el amor, no por el temor; sostiene la alianza joven-adulto explícita.

---

## 16. Referencias cruzadas

- [`Plan-de-Formacion-Linea-Programa-de-Jovenes.md`](Plan-de-Formacion-Linea-Programa-de-Jovenes.md) — Los 24 cursos planeados (4 niveles).
- [`01-Diseno-Cursos/Curso-01-Bienvenida-al-Programa-de-Jovenes.md`](01-Diseno-Cursos/Curso-01-Bienvenida-al-Programa-de-Jovenes.md) — **Ejemplo canónico de diseño pedagógico**. Replicar para cursos nuevos.
- [`01-Diseno-Cursos/Curso-02-La-Educacion-por-el-Amor.md`](01-Diseno-Cursos/Curso-02-La-Educacion-por-el-Amor.md) — Patrón de curso doctrinal con varias citas oficiales.
- [`01-Diseno-Cursos/Curso-04-El-Metodo-Scout-y-sus-8-Elementos.md`](01-Diseno-Cursos/Curso-04-El-Metodo-Scout-y-sus-8-Elementos.md) — Patrón de curso extenso (8 lecciones) con justificación documentada.
- [`01-Diseno-Cursos/Curso-06-Mi-Compromiso-con-el-Programa-de-Jovenes.md`](01-Diseno-Cursos/Curso-06-Mi-Compromiso-con-el-Programa-de-Jovenes.md) — Patrón de curso integrador con `brujula-display` y `plan-builder`.
- `BACKEND.md` — (por crear, replicar de DI) Detalles del Apps Script, sheet, deployment.
- `../INDUCCION-DESARROLLO-INSTITUCIONAL/CREAR-CURSO.md` — Documento equivalente de la línea hermana DI, usado como base para este manual.
- `../INDUCCION-DESARROLLO-INSTITUCIONAL/Recomendaciones-Cowork-Diseno-Cursos.md` — Documento de coordinación de DI, cuyas recomendaciones quedaron **integradas en este `CREAR-CURSO.md` de PJ** (secciones 1, 6, 8, 9, 10, 14, 15).
- `../INDUCCION-ADULTOS/CREAR-CURSO.md` — Documento equivalente de la línea más antigua (Política de Adultos).

---

_Documento operativo de la Línea Programa de Jóvenes — Asociación Scouts de Colombia. Versión inicial — 28 de mayo de 2026. **Consolida en un solo manual** el `CREAR-CURSO.md` técnico y las `Recomendaciones-Cowork-Diseno-Cursos.md` pedagógicas que en la Línea DI viven como dos documentos separados. Para PJ se decidió unificarlos para evitar dispersión documental al inicio de la línea._
