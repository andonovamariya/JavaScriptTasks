const array = [6, 4, 3, 1, 8, 44, 33, 2];

Array.prototype.bubbleSort = function () {
  let i, l, j;
  for (i = 0; i < this.length; i++) {
    for (j = 0; j < this.length; j++) {
      if (this[j] > this[j + 1]) {
        l = this[j];
        this[j] = this[j + 1];
        this[j + 1] = l;
      }
    }
  }
  return this;
};

const sortedElements = array.bubbleSort();
console.log(sortedElements);
