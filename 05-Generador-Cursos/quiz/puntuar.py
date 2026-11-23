"""Uso: python puntuar.py clave.json respuestas.json  -> aciertos por pregunta y quizzes 3/3.
respuestas.json: {"<mod>.<n>": "A"|"B"|..., ...}"""
import json, sys
from collections import defaultdict
c = json.load(open(sys.argv[1], encoding='utf-8')); r = json.load(open(sys.argv[2], encoding='utf-8'))
ok = {k: (ord(str(r.get(k, '?')).strip()[:1].upper()) - 65) == v for k, v in c.items()}
por = defaultdict(list)
for k, v in ok.items(): por[k.split('.')[0]].append(v)
apr = sum(all(v) for v in por.values())
print(f'aciertos {sum(ok.values())}/{len(ok)}  quizzes aprobados (100%) {apr}/{len(por)}')
print('fallos:', [k for k, v in ok.items() if not v])
