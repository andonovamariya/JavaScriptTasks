const array = [6, 4, 3, 1, 8, 44, 33, 2];

const oddElements = (array) => {
  let oddNums = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNums++;
    }
  }

  return oddNums;
};

console.log("The count of odd elements in the array: ", oddElements(array));
