export function mode<T>(items: readonly T[]): T {
  if (!Array.isArray(items) || !items.length) throw new RangeError('Expected nonempty array');
  const counts = new Map<T, number>();
  let best = items[0]!,
    max = 0;
  for (const item of items) {
    const count = (counts.get(item) ?? 0) + 1;
    counts.set(item, count);
    if (count > max) {
      best = item;
      max = count;
    }
  }
  return best;
}
