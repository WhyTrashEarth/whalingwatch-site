import entries from '../../data/country-history.json';
import sources from '../../data/history-sources.json';
export function GET() {
  const rows = [
    ['place', 'entity_type', 'documented_period', 'evidence_status', 'documented_evidence', 'limitations', 'source_urls', 'research_review_date'],
    ...entries.map(entry => [entry.name, entry.kind, entry.period, 'Documented episode only; not a complete national history', entry.evidence, entry.limits, entry.sources.map(id => sources[id as keyof typeof sources].url).join(' ; '), '2026-10-09'])
  ];
  const csv = rows.map(row => row.map(value => `"${value.replaceAll('"', '""')}"`).join(',')).join('\r\n') + '\r\n';
  return new Response(csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
}
