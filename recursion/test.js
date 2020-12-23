import sum from './sum';

test('sum', () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [-5, 56, 88, -43, 11];
  expect(sum(array1)).toBe(15);
  expect(sum(array2)).toBe(107);
});
