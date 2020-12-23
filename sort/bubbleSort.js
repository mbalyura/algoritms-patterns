/* eslint-disable no-param-reassign */

const bubbleSort = (array) => {
  let { length } = array;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
    length -= 1; // optimization
  } while (swapped);
  return array;
};

export default bubbleSort;
