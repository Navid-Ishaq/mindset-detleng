"""Verify DOCX blocks against site data and the fingerprinted browser render snapshot.
The snapshot was captured from the rendered page, not generated from source text.
Changing website files requires a new browser snapshot before verification passes.
"""
import argparse, hashlib, json, re, zipfile
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
TOOLS = ROOT / 'tools'
def sha(data): return hashlib.sha256(data).hexdigest()
def normal(text): return re.sub(r'\s+', ' ', text).strip()
parser = argparse.ArgumentParser()
parser.add_argument('--source', default=r'D:\Web-Sites-Ideas\mindset\Apni Soch Badlo - Roman Hindi Urdu.docx')
args = parser.parse_args()
manifest = json.loads((TOOLS/'source-manifest.json').read_text(encoding='utf-8'))
source = Path(args.source)
with zipfile.ZipFile(source) as archive:
    root = ET.fromstring(archive.read('word/document.xml'))
ns = {'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
blocks = [''.join(t.text or '' for t in p.findall('.//w:t', ns)) for p in root.findall('.//w:p', ns)]
blocks = [p for p in blocks if p.strip()]
assert sha(source.read_bytes()) == manifest['sourceSHA256'], 'Source DOCX changed'
assert [normal(x) for x in blocks] == [normal(x) for x in manifest['roman']], 'Extracted source mismatch'
script = (ROOT/'content.js').read_bytes()
marker = b'\n// Exact Roman Hindi/Urdu DOCX blocks, in original document order.\n'
prefix, data = script.split(marker, 1)
assert sha(prefix) == manifest['originalContentPrefixSHA256'], 'English/Urdu content prefix changed'
site_blocks = json.loads(data.decode('utf-8').split('window.MINDSET_CONTENT.roman=',1)[1].rstrip().removesuffix(';'))
assert site_blocks == blocks, 'Website data differs from DOCX'
snapshot = json.loads((TOOLS/'rendered-content.json').read_text(encoding='utf-8'))
for file, expected in snapshot['fingerprints'].items():
    assert sha((ROOT/file).read_bytes()) == expected, f'{file} changed after browser verification'
rendered = snapshot['blocks']
missing = [i for i, text in enumerate(blocks) if i >= len(rendered) or rendered[i]['index'] != i or normal(rendered[i]['text']) != normal(text) or not rendered[i]['visible']]
assert len(rendered) == len(blocks) and not missing, f'Missing or changed rendered blocks: {missing}'
assert (ROOT/'CNAME').read_text().strip() == 'mindset.detleng.com', 'CNAME incorrect'
print(f'Roman source blocks: {len(blocks)}')
print(f'Roman website blocks: {len(rendered)}')
print(f'Missing Roman blocks: {len(missing)}')
print('All blocks match in original order; fingerprinted browser snapshot verified.')
print('Original English/Urdu content.js prefix preserved exactly.')
