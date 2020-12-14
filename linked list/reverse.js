import List from './List';

export const reverseRecursive = (list) => {
  const iter = (node, tail = null) => {
    if (node === null) {
      return tail;
    }
    const value = node.getValue();
    const head = node.getTail();
    return iter(head, new List(value, tail));
  };
  return iter(list);
};

export const reverseIterative = (list) => {
  let reversed = null;
  let node = list;
  while (node) {
    const value = node.getValue();
    node = node.getTail();
    reversed = new List(value, reversed);
  }
  return reversed;
};
