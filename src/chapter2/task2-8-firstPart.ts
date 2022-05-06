const array: any[] = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  {
    name: "john.doe",
    role: "admim",
  },
];
const INPUT_WEIGHT: number = 16;

const getValuesWeight = (chosenArray: any[]): number[] => {
  let countersArray: number[] = [],
    array: any[] = chosenArray,
    nullWeight: number = 0,
    objectWeight: number = 0,
    stringWeight: number = 0,
    numberWeight: number = 0,
    undefinedWeight: number = 0,
    booleanWeight: number = 0,
    dateWeight: number = 0;

  for (let i = 0; i <= array.length; i++) {
    if (typeof array[i] !== "undefined" && array[i] === null) {
      nullWeight += 2;
    } else if (
      array[i] instanceof Function ||
      typeof array[i] === "object" ||
      Array.isArray(array[i])
    ) {
      objectWeight += 10;
    } else if (typeof array[i] === "string") {
      stringWeight += 8;
    } else if (typeof array[i] === "number") {
      numberWeight += 4;
    } else if (typeof array[i] === "undefined") {
      undefinedWeight += 2;
    } else if (typeof array[i] === "boolean") {
      booleanWeight += 4;
    } else if (array[i] instanceof Date) {
      dateWeight += 5;
    } else {
      console.log("Wasn't able to find a corresponding value in the array");
    }
  }
  countersArray.push(
    nullWeight,
    objectWeight,
    stringWeight,
    numberWeight,
    undefinedWeight,
    booleanWeight,
    dateWeight
  );
  return countersArray;
};

const checkForEquality = (countersArray: number[], inputWeight: number): void => {
  let answer: boolean = false;
  for (let i = 0; i < countersArray.length; i++) {
    if (countersArray[i] === inputWeight) {
      answer = true;
    }
  }
  if (answer) {
    console.log(
      "There is a value in the array which is equal to the inputted one."
    );
  } else {
    console.log(
      "There is NOT a value in the array which is equal to the inputted one."
    );
  }
};
const OBJECT_WEIGHT = getValuesWeight(array);
console.log(OBJECT_WEIGHT);
console.log(checkForEquality(OBJECT_WEIGHT, INPUT_WEIGHT));

export {};
