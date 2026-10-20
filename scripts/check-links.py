"""Check built internal links, fragments, canonicals and the inventory download."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import csv,json

root=Path('dist')
class Document(HTMLParser):
    def __init__(self, text):
        super().__init__();self.links=[];self.ids=set();self.canonicals=[];self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.add(a['id'])
        if tag=='a' and 'href' in a:self.links.append(a['href'])
        if tag=='link' and a.get('rel')=='canonical':self.canonicals.append(a['href'])

documents={p:Document(p.read_text()) for p in root.rglob('*.html')}
errors=[]
for path,doc in documents.items():
    route='/' + str(path.relative_to(root)).removesuffix('index.html')
    if path.name!='404.html' and doc.canonicals!=['https://whaling.watch'+route]:
        errors.append((str(path),'canonical',doc.canonicals))
    for href in doc.links:
        url=urlsplit(href)
        if url.scheme or url.netloc:continue
        if not url.path:target=path
        elif url.path.startswith('/'):target=root/unquote(url.path.lstrip('/'))
        else:target=path.parent/unquote(url.path)
        if target.is_dir():target=target/'index.html'
        if not target.exists():errors.append((str(path),href,'missing path'))
        elif url.fragment and target.suffix=='.html' and unquote(url.fragment) not in documents[target].ids:
            errors.append((str(path),href,'missing fragment'))
with (root/'countries/history.csv').open() as f:rows=list(csv.DictReader(f))
entries=json.loads(Path('src/data/country-history.json').read_text())
assert len(rows)==len(entries)
for row,entry in zip(rows,entries):
    assert row['place']==entry['name'] and row['limitations']==entry['limits']
if errors:raise SystemExit(json.dumps(errors,indent=2))
print(f'Internal links, fragments and canonicals passed on {len(documents)} HTML pages; CSV matches {len(rows)} entries.')
