import List from './List';
import { reverseRecursive, reverseIterative } from './reverse';

const list = new List('test1', new List('test2', new List('test3')));

it('list', () => {
  expect(list.getValue()).toBe('test1');
  expect(list.getTail().getValue()).toBe('test2');
  expect(list.getTail().getTail().getValue()).toBe('test3');
});

it('reverse recursive', () => {
  const reversedList = reverseRecursive(list);
  expect(reversedList.getValue()).toBe('test3');
  expect(reversedList.getTail().getValue()).toBe('test2');
  expect(reversedList.getTail().getTail().getValue()).toBe('test1');
});

it('reverse iterative', () => {
  const reversedList = reverseIterative(list);
  expect(reversedList.getValue()).toBe('test3');
  expect(reversedList.getTail().getValue()).toBe('test2');
  expect(reversedList.getTail().getTail().getValue()).toBe('test1');
});
