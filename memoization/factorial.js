const memoMap = (fn) => {
  const cashe = new Map();
  return (number) => {
    if (cashe.has(number)) {
      return cashe.get(number);
    }
    result = fn(number);
    cashe.set(number, result);
    return result;
  }
}

const memoObj = (fn) => {
  const cashe = {};
  return (number) => {
    if (number in cashe) {
      return cashe[number];
    }
    return cashe[number] = fn(number);
  }
}

const factorial = (number) => {
  console.log(`calculation for number ${number}`);
  if (number <= 1) return 1;
  return number * factorial (number - 1);
}

const memoizedFactorial = memoObj(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));

// call with number 5
// call with number 4
// call with number 3
// call with number 2
// call with number 1
// 120
// 120          *** on second call no calculations are made ***