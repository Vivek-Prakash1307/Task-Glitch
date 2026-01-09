import { Task } from '@/types';

export function toCSV(tasks: ReadonlyArray<Task>): string {
  // BUG FIX: Use fixed header order instead of deriving from first row
  const headers = ['id', 'title', 'revenue', 'timeTaken', 'priority', 'status', 'notes', 'createdAt', 'completedAt'];
  const rows = tasks.map(t => [
    escapeCsv(t.id),
    escapeCsv(t.title),
    String(t.revenue),
    String(t.timeTaken),
    t.priority,
    t.status,
    escapeCsv(t.notes ?? ''),
    t.createdAt,
    t.completedAt ?? '',
  ]);
  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

function escapeCsv(v: string): string {
  // BUG FIX: Properly escape CSV values containing commas, quotes, or newlines
  if (v.includes(',') || v.includes('"') || v.includes('\n') || v.includes('\r')) {
    return `"${v.replace(/"/g, '""')}"`;
  }
  return v;
}

export function downloadCSV(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}


