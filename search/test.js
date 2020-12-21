import { getRandArray, getRandInt } from './helpers';
import binarySearch from './binarySearch';
import linearSearch from './linearSearch';

test('search must work', () => {
  const randSortedArray = getRandArray(100, 1000).sort((a, b) => (a >= b ? 1 : -1));
  const randomInt = getRandInt(0, 100);
  expect(binarySearch(randSortedArray, randSortedArray[randomInt]).result).toBe(randomInt);
  expect(linearSearch(randSortedArray, randSortedArray[randomInt]).result).toBe(randomInt);
});

test('100 items binary max steps log100, linear max steps 100', () => {
  const randSortedArray = getRandArray(100, 1000).sort((a, b) => (a >= b ? 1 : -1));
  const randomInt = getRandInt(0, 100);
  expect(binarySearch(randSortedArray, randSortedArray[randomInt]).steps)
    .toBeLessThanOrEqual(7);
  expect(linearSearch(randSortedArray, randSortedArray[randomInt]).steps)
    .toBeLessThanOrEqual(100);
});

test('1000 items binary max steps log1000, linear max steps 1000', () => {
  const randSortedArray = getRandArray(1000, 10000).sort((a, b) => (a >= b ? 1 : -1));
  const randomInt = getRandInt(0, 1000);
  expect(binarySearch(randSortedArray, randSortedArray[randomInt]).steps)
    .toBeLessThanOrEqual(100);
  expect(linearSearch(randSortedArray, randSortedArray[randomInt]).steps)
    .toBeLessThanOrEqual(1000);
});

test('10000 items binary max steps log10000, linear max steps 10000', () => {
  const randSortedArray = getRandArray(10000, 100000).sort((a, b) => (a >= b ? 1 : -1));
  const randomInt = getRandInt(0, 10000);
  expect(binarySearch(randSortedArray, randSortedArray[randomInt]).steps)
    .toBeLessThanOrEqual(14);
  expect(linearSearch(randSortedArray, randSortedArray[randomInt]).steps)
    .toBeLessThanOrEqual(10000);
});
