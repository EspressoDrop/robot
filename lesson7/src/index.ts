import { sumOfArray } from './functions.ts';
import { sumOfArrayArrow } from './arrow-functions.ts';

const c = [1, 2, 3, 4, 5];

const d = ['This', ' ', 'is', ' ', 'an', ' ', 'array', '.'];

console.log(sumOfArray(c));
console.log(sumOfArray(d));
console.log(sumOfArrayArrow(c));
console.log(sumOfArrayArrow(d));

