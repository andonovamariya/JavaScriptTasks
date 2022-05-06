const numbersArray: number[] = [6, 4, 3, 1, 8, 44, 33, 2];

interface Array<T> {
  findOddElements(): number;
}

Array.prototype.findOddElements = function (): number {
  let oddNumbersCount: number = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) {
      oddNumbersCount++;
    }
  }

  return oddNumbersCount;
};

const oddElements: number = numbersArray.findOddElements();
console.log(oddElements);
