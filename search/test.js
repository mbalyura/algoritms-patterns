import { getRandArray, getRandInt } from './helpers';
import binarySearch from './binarySearch';

test('must search', () => {
  const randSortedArray = getRandArray(100, 1000).sort((a, b) => (a >= b ? 1 : -1));
  const randomInt = getRandInt(0, 100);
  expect(binarySearch(randSortedArray, randSortedArray[randomInt]).result).toBe(randomInt);
});

test('binary search 100 items max steps < log100', () => {
  const randSortedArray = getRandArray(100, 1000).sort((a, b) => (a >= b ? 1 : -1));
  const randomInt = getRandInt(0, 100);
  expect(binarySearch(randSortedArray, randSortedArray[randomInt]).steps).toBeLessThanOrEqual(7);
});

test('binary search 1000 items max steps < log1000', () => {
  const randSortedArray = getRandArray(1000, 10000).sort((a, b) => (a >= b ? 1 : -1));
  const randomInt = getRandInt(0, 1000);
  expect(binarySearch(randSortedArray, randSortedArray[randomInt]).steps).toBeLessThanOrEqual(10);
});

test('binary search 10000 items max steps < log10000', () => {
  const randSortedArray = getRandArray(10000, 100000).sort((a, b) => (a >= b ? 1 : -1));
  const randomInt = getRandInt(0, 10000);
  expect(binarySearch(randSortedArray, randSortedArray[randomInt]).steps).toBeLessThanOrEqual(14);
});
