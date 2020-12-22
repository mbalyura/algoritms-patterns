import { getRandArray } from '../helpers/helpers';
import selectionSort from './selectionSort';
import quickSort from './quickSort';

test('sorting must work', () => {
  const randArray = getRandArray(100, 1000);
  const randSortedArray = [...randArray].sort((a, b) => (a >= b ? 1 : -1));
  expect(selectionSort(randArray)).toEqual(randSortedArray);
  expect(quickSort(randArray)).toEqual(randSortedArray);
});
