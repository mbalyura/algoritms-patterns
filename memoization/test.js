import { memoMap, memoObj } from './memo';

const mockFn = jest.fn();

const factorial = (number) => {
  mockFn(number);
  if (number <= 1) return 1;
  return number * factorial(number - 1);
};

test('memo obj', () => {
  const memoizedFactorialWithObj = memoObj(factorial);
  expect(memoizedFactorialWithObj(5)).toBe(120);
  expect(mockFn).toHaveBeenCalledTimes(5);
  mockFn.mockClear();
  expect(memoizedFactorialWithObj(5)).toBe(120); // second call recieve value from cashe
  expect(mockFn).not.toHaveBeenCalled(); // factorial not calling
});

test('memo map', () => {
  const memoizedFactorialWithMap = memoMap(factorial);
  expect(memoizedFactorialWithMap(5)).toBe(120);
  expect(mockFn).toHaveBeenCalledTimes(5);
  mockFn.mockClear();
  expect(memoizedFactorialWithMap(5)).toBe(120); // second call recieve value from cashe
  expect(mockFn).not.toHaveBeenCalled(); // factorial not calling
});
