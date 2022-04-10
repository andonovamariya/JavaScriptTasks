const array = [6, 4, 3, 1, 8, 44, 33, 2];

Array.prototype.toOddElements = function () {
  let oddNumbers = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) {
      oddNumbers++;
    }
  }

  return oddNumbers;
};

const oddElements = array.toOddElements();
console.log(oddElements);
