export default class List {
  constructor(value, node = null) {
    this.value = value;
    this.tail = node;
  }

  getValue() {
    return this.value;
  }

  getTail() {
    return this.tail;
  }
}
