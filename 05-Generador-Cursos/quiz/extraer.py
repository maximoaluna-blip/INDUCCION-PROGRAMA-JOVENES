"""Uso: python extraer.py <curso> <salida_dir> [etiqueta]
Escribe <etiqueta>-ciego.md (solo preguntas, sin respuestas), <etiqueta>-con-leccion.md
(texto de cada leccion + sus preguntas) y <etiqueta>-clave.json (correctas)."""
import json, re, sys, html
from pathlib import Path
BASE = Path(__file__).resolve().parent.parent / 'borradores'
curso, out = sys.argv[1], Path(sys.argv[2]); et = sys.argv[3] if len(sys.argv) > 3 else curso
d = json.loads((BASE / f'{curso}.json').read_text(encoding='utf-8'))
def texto(o):
    if isinstance(o, str): return [html.unescape(re.sub('<[^>]+>', ' ', o))]
    if isinstance(o, dict): return [s for k, v in o.items() if k not in ('quiz', 'type', 'id', 'icon') for s in texto(v)]
    if isinstance(o, list): return [s for v in o for s in texto(v)]
    return []
ciego, con, clave = [f'# Quizzes de {d["title"]}\n'], [f'# {d["title"]}: lecciones y quizzes\n'], {}
for m in d['modules']:
    q = m.get('quiz')
    if not q: continue
    blk = []
    for i, p in enumerate(q['questions']):
        clave[f'{m["id"]}.{i+1}'] = p['correctIndex']
        blk.append(f'**{m["id"]}.{i+1}** {p["text"]}\n' + '\n'.join(f'  {chr(65+j)}. {o}' for j, o in enumerate(p['options'])))
    ciego.append(f'\n## Lección {m["id"]}\n\n' + '\n\n'.join(blk))
    con.append(f'\n## Lección {m["id"]}: {m.get("title","")}\n\n### Texto de la lección\n\n' + '\n'.join(re.sub(r'\s+', ' ', s).strip() for s in texto(m) if s.strip()) + '\n\n### Quiz\n\n' + '\n\n'.join(blk))
out.mkdir(parents=True, exist_ok=True)
(out / f'{et}-ciego.md').write_text('\n'.join(ciego), encoding='utf-8')
(out / f'{et}-con-leccion.md').write_text('\n'.join(con), encoding='utf-8')
(out / f'{et}-clave.json').write_text(json.dumps(clave), encoding='utf-8')
print(len(clave), 'preguntas')
