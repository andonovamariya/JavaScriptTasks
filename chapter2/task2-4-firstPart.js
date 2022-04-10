const array = [1, 2, 3, 4, 5, 6, 7];
const HIGHER_THAN = 4;

const calculateNumbersHigherThan = (array, higherThan) => {
  let sum = 0;
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