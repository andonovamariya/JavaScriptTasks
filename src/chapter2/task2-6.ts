const array: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const PERCENT: number = 80;

export const removeInnerPercentage = (
  chosenArray: number[],
  chosenPercent: number
): number[] => {
  let array: number[] = chosenArray,
    percent: number = chosenPercent;
  let calculatedPercentage: number = (percent / 100) * array.length;
  const calculatedMiddle: number = Math.floor(calculatedPercentage / 2);
  let result = [
    ...array.slice(0, calculatedMiddle),
    ...array.slice(-calculatedMiddle),
  ];
  return result;
};

console.log(removeInnerPercentage(array, PERCENT));

