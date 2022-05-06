const array: number[] = [1, 2, 3, 4, 5, 6, 7];
const DIVISIBLE_NUMBER: number = 2;

const calculateNumbersDivisible = (
  chosenArray: number[],
  chosenDivisibleNumber: number
): number[] => {
  let divisibleNumbersArray: number[] = [],
    array: number[] = chosenArray,
    divisibleNumber: number = chosenDivisibleNumber;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % divisibleNumber === 0) {
      divisibleNumbersArray.push(array[i]);
    }
  }
  return divisibleNumbersArray;
};

console.log(
  "Array with the numbers in the array, which are divisible by the chosen the number: ",
  calculateNumbersDivisible(array, DIVISIBLE_NUMBER)
);

export {};
