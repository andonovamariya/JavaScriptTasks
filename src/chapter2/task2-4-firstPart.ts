const array: number[] = [1, 2, 3, 4, 5, 6, 7];
const HIGHER_THAN: number = 4;

const calculateNumbersHigherThan = (
  chosenArray: number[],
  higherThanChosen: number
): number => {
  let sum: number = 0,
    array: number[] = chosenArray,
    higherThan: number = higherThanChosen;
  for (let i = 0; i < array.length; i++) {
    if (higherThan < array[i]) {
      sum += array[i];
    }
  }
  return sum;
};

console.log(
  "Sum of the numbers in the array, which are greater than the chosen the number: ",
  calculateNumbersHigherThan(array, HIGHER_THAN)
);
