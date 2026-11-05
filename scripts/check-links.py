"""Check built internal links, fragments, canonicals and the inventory download."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import csv,json

root=Path('dist')
class Document(HTMLParser):
    def __init__(self, text):
        super().__init__();self.links=[];self.ids=set();self.canonicals=[]
        self.directory_links=[];self.directory_depth=0;self.noindex=False;self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='meta' and a.get('name')=='robots' and 'noindex' in a.get('content',''):self.noindex=True
        if tag=='div' and (self.directory_depth or 'page-directory' in a.get('class','').split()):self.directory_depth+=1
        if 'id' in a:self.ids.add(a['id'])
        if tag=='a' and 'href' in a:self.links.append(a['href'])
        if tag=='a' and 'href' in a and self.directory_depth:self.directory_links.append(a['href'])
        if tag=='link' and a.get('rel')=='canonical':self.canonicals.append(a['href'])
    def handle_endtag(self,tag):
        if tag=='div' and self.directory_depth:self.directory_depth-=1

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

# The human directory must cover every indexable HTML route exactly once. This
# catches new static, collection and localized pages omitted from navigation,
# while rejecting external sources, downloads, redirects and error destinations.
eligible={'/' + str(path.relative_to(root)).removesuffix('index.html') for path,doc in documents.items() if not doc.noindex}
directory=documents[root/'all/index.html'].directory_links
if len(directory)!=len(set(directory)):errors.append(('all','duplicate directory destination'))
if set(directory)!=eligible:
    errors.append(('all',{'missing':sorted(eligible-set(directory)),'ineligible':sorted(set(directory)-eligible)}))
with (root/'countries/history.csv').open() as f:rows=list(csv.DictReader(f))
entries=json.loads(Path('src/data/country-history.json').read_text())
assert len(rows)==len(entries)
for row,entry in zip(rows,entries):
    assert row['place']==entry['name'] and row['limitations']==entry['limits']
if errors:raise SystemExit(json.dumps(errors,indent=2))
print(f'Internal links, fragments and canonicals passed on {len(documents)} HTML pages; directory covers {len(eligible)} eligible pages; CSV matches {len(rows)} entries.')
