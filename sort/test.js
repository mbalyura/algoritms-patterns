import { getRandArray } from '../helpers/helpers';
import selectionSort from './selectionSort';
import quickSort from './quickSort';
import bubbleSort from './bubbleSort';

let randArray;
let randSortedArray;

beforeEach(() => {
  randArray = getRandArray(100, 1000);
  randSortedArray = [...randArray].sort((a, b) => (a >= b ? 1 : -1));
});

test('selection must work', () => {
  expect(selectionSort(randArray)).toEqual(randSortedArray);
});

test('quick sorting must work', () => {
  expect(quickSort(randArray)).toEqual(randSortedArray);
});

test('bubble sorting must work', () => {
  expect(bubbleSort(randArray)).toEqual(randSortedArray);
});
