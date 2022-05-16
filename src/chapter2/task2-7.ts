const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const randomizeArray = (chosenArray: number[]): number[] => {
  let randomizedArray: number[] = chosenArray.sort(
    (a, b) => 0.5 - Math.random()
  );
  return randomizedArray;
};

export const findLongestSequenceOfRandomizedArray = (
  chosenArray: number[]
): number[] => {
  let array: number[] = chosenArray,
    result = [],
    temporaryArray: number[] = [],
    longestSequence: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      temporaryArray.push(array[i]);
    } else if (array[i] > array[i + 1]) {
      temporaryArray.push(array[i]);
      result.push(temporaryArray);
      temporaryArray = [];
    } else {
      temporaryArray.push(array[i]);
      result.push(temporaryArray);
      temporaryArray = [];
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (longestSequence.length < result[i].length) {
      longestSequence = result[i];
    }
  }
  return longestSequence;
};

const randomizedArray = randomizeArray(array);


console.log(randomizedArray);
console.log(
  "The longest sequence of ascending numeric order: ",
  findLongestSequenceOfRandomizedArray(randomizedArray)
);
