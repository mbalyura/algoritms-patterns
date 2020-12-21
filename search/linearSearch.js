const linearSearch = (array, searchedValue) => {
  console.log(array);
  console.log(searchedValue);
  let stepCounter = 0;

  for (let index = 0; index <= array.length; index += 1) {
    stepCounter += 1;
    const guessValue = array[index];
    if (guessValue === searchedValue) {
      return { result: index, steps: stepCounter };
    }
  }

  return null;
};

export default linearSearch;
