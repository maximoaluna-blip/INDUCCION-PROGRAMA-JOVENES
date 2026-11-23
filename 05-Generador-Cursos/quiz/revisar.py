"""Revisión sin escribir nada (sustituye a correr el build): python revisar.py <curso>
Comprueba respaldo literal, longitudes, oveja negra y reparto de correctIndex."""
import json, re, sys, html
from collections import Counter
from pathlib import Path
BASE = Path(__file__).resolve().parent.parent / 'borradores'
d = json.loads((BASE / f'{sys.argv[1]}.json').read_text(encoding='utf-8'))
def norm(s):
    s = re.sub(r'<[^>]*>', ' ', str(s)); s = re.sub('[«»“”"]', '"', s); s = re.sub('[‘’]', "'", s)
    s = re.sub(r'\s+', ' ', s); s = re.sub(r' ([,.;:!?)])', r'\1', s); return s.strip().lower()
av, pos, largo, total = [], Counter(), 0, 0
for m in d['modules']:
    q = m.get('quiz')
    if not q: continue
    resto = {k: v for k, v in m.items() if k != 'quiz'}
    txt = norm(json.dumps(resto, ensure_ascii=False).replace('\n', ' ').replace('\\"', '"'))
    for i, p in enumerate(q['questions']):
        total += 1; k = f'{m["id"]}.{i+1}'; ops = [re.sub('<[^>]*>', '', o) for o in p['options']]; c = p['correctIndex']; pos[c] += 1
        ev = p.get('evidencia', '')
        if not ev.strip(): av.append(f'{k}: sin evidencia')
        elif norm(ev) not in txt: av.append(f'{k}: evidencia NO literal en la lección')
        L = [len(o) for o in ops]
        if max(L) > min(L) * 1.2: av.append(f'{k}: longitudes dispares {L}')
        if L[c] == max(L) and L.count(max(L)) == 1: largo += 1
        pw = [o.split()[0].lower() if o.split() else '' for o in ops]
        if pw.count(pw[c]) == 1 and len(set(pw[j] for j in range(len(pw)) if j != c)) == 1: av.append(f'{k}: oveja negra (primera palabra)')
        if re.search(r'<(strong|em)\b', ''.join(p['options'])): av.append(f'{k}: <strong>/<em> en opciones')
if largo * 2 > total: av.append(f'la correcta es la más larga en {largo}/{total}')
if max(pos.values()) * 2 > total: av.append(f'correctIndex concentrado {dict(pos)}')
print(f'{total} preguntas; avisos: {len(av)}'); [print(' -', a) for a in av]
