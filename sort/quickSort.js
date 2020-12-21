const quickSort = (array) => {
  if (array.length < 2) return array;
  const pivot = array[0];
  const less = array.filter((el) => el < pivot);
  const equal = array.filter((el) => el === pivot);
  const greater = array.filter((el) => el > pivot);

  return [...quickSort(less), ...equal, ...quickSort(greater)];
};

export default quickSort;
