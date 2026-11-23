# Quizzes con respaldo en la lección (ADR-162, 22/11/2026)

Regla del dueño: **«se debe garantizar que la respuesta se encuentra en la lección»**, y el
quiz no debe poder aprobarse sin leerla. Antes, un lector sin la lección acertaba 428 de 453
preguntas de la línea por tono, largo o sentido común.

## Herramientas

| Comando | Qué hace |
|---|---|
| `python revisar.py <curso>` | Sin escribir nada: `evidencia` literal en su lección, largos parejos (±20 %), oveja negra, `<strong>`/`<em>` en opciones, correcta más larga en más de la mitad, concentración de `correctIndex`. Meta: 0 avisos. |
| `python extraer.py <curso> <dir> <etiqueta>` | Escribe `<et>-ciego.md` (solo preguntas), `<et>-con-leccion.md` (texto de la lección + quiz) y `<et>-clave.json`. |
| `python puntuar.py <clave.json> <respuestas.json>` | Aciertos y quizzes aprobados (3/3). |

`build-course.js` avisa «⚠️ Respaldo» si una pregunta no tiene `evidencia` o si no está literal
en su lección. El campo no se publica.

## Cómo se escribe cada pregunta

1. Idea central de la lección → dato decisivo que la lección da y que **no se adivina** (nombre
   propio, número, quién decide, qué órgano, orden, documento, rama).
2. Un caso donde haya que aplicar ese dato.
3. Tres opciones **idénticas salvo ese dato**: misma apertura, estructura, tono y cola. Los
   distractores son tan conciliadores y pedagógicos como la correcta.
4. Si difieren en dos datos, la correcta no es la combinación más repetida (1+1 frente a 2+1 y 2+2).
   Ni el número intermedio ni «lo más reciente u oficial» como respuesta sistemática.
5. `evidencia`: fragmento literal (8–40 palabras) de esa lección que deja **una sola** opción
   defendible. Se lee, no se infiere.
6. Como máximo una pregunta de dato puro por quiz; ninguna idea central se cambia por organigrama.
7. Seguridad: ningún distractor vuelve razonable una práctica insegura (regla 2+1, nada «a solas»).
8. Ni la correcta ni un distractor dependen de un punto en consulta oficial (lista en
   `docs/decisiones-2026-11/correo-consultas-fuentes-PJ.md` de la raíz).

## Cómo se mide

Dos lectores externos (Sonnet), sin más contexto que el archivo:
- **Ciego**: solo `-ciego.md`, elige por sentido común. Meta: ≤ 30 % de quizzes aprobados y ≤ 65 % de aciertos.
- **Con lección**: solo `-con-leccion.md`, responde con el texto de la lección. Meta: todo acertado y sin dudas de fondo.

La medición propia del escritor no cuenta. Máximo 4 vueltas; la excepción se decide y se anota en el ADR.
