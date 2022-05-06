const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const randomizeArray = (chosenArray: number[]): number[] => {
  let array: number[] = chosenArray;
  let randomizedArray: number[] = array.sort((a, b) => 0.5 - Math.random());
  return randomizedArray;
};

const findLongestSequence = (randomizedArray: number[]): number[] => {
  let array: number[] = randomizedArray,
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

console.log("The randomized array: ", randomizeArray(array));
console.log(
  "The longest sequence of ascending numeric order: ",
  findLongestSequence(array)
);

export {};
