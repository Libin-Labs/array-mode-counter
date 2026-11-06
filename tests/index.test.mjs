import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns most frequent value', () => {
  assert.equal(api.mode([1, 2, 2, 3]), 2);
});
test('keeps first tied winner', () => {
  assert.equal(api.mode(['a', 'b']), 'a');
});
test('handles singleton', () => {
  assert.equal(api.mode([9]), 9);
});
test('supports NaN value', () => {
  assert.ok(Number.isNaN(api.mode([NaN, NaN, 1])));
});
test('does not mutate input', () => {
  const x = [2, 2, 1];
  api.mode(x);
  assert.deepEqual(x, [2, 2, 1]);
});
test('rejects empty array', () => {
  assert.throws(() => api.mode([]), RangeError);
});
