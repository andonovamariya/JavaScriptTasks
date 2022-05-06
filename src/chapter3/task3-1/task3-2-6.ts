const arrayOfNumbers: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const PERCENT: number = 50;

interface Array<T> {
  removeInnerPercentage(percentage: number): number[];
}

Array.prototype.removeInnerPercentage = function (percent: number): number[] {
  let percentage: number = (percent / 100) * this.length;
  const middle: number = Math.floor(percentage / 2);
  let result: number[] = [...this.slice(0, middle), ...this.slice(-middle)];
  return result;
};

const arrayWithoutInnerPercentage: number[] =
  arrayOfNumbers.removeInnerPercentage(PERCENT);
console.log(arrayWithoutInnerPercentage);
