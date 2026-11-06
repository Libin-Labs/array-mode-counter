import * as api from '@lp-labs/array-mode-counter';
import { mode } from '@lp-labs/array-mode-counter';
console.log(mode([1, 2, 2, 3]));
// @ts-expect-error invalid argument must be rejected by declarations
api.mode('values');
