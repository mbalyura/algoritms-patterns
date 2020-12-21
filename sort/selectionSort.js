const findSmallest = (array) => array
  .reduce((acc, num, i) => (array[acc] < num ? acc : i), 0);

const selectionSort = (array) => {
  const arrayCopy = [...array];
  const sortedArray = [];
  for (let index = 0; index < array.length; index += 1) {
    const smallestIndex = findSmallest(arrayCopy);
    sortedArray.push(arrayCopy[smallestIndex]);
    arrayCopy.splice(smallestIndex, 1);
  }
  return sortedArray;
};

export default selectionSort;
