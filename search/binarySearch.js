const binarySearch = (array, searchedValue) => {
  console.log(array);
  console.log(searchedValue);
  let stepCounter = 0;
  let beginIndex = 0;
  let endIndex = array.length - 1;

  while (beginIndex <= endIndex) {
    stepCounter += 1;
    console.log('step:', stepCounter);
    const midIndex = Math.floor((endIndex + beginIndex) / 2);
    const guessValue = array[midIndex];
    console.log('item:', guessValue);
    if (guessValue === searchedValue) {
      return { result: midIndex, steps: stepCounter };
    }
    if (guessValue > searchedValue) {
      endIndex = midIndex - 1;
    } else {
      beginIndex = midIndex + 1;
    }
  }
  return null;
};

export default binarySearch;
