/* eslint-disable no-return-assign */

export const memoMap = (fn) => {
  const cashe = new Map();
  return (number) => {
    if (cashe.has(number)) {
      return cashe.get(number);
    }
    const result = fn(number);
    cashe.set(number, result);
    return result;
  };
};

export const memoObj = (fn) => {
  const cashe = {};
  return (number) => {
    if (number in cashe) {
      return cashe[number];
    }
    return cashe[number] = fn(number);
  };
};
