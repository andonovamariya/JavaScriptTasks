const array: any[] = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  {
    name: "john.doe",
    role: "admin",
  },
];
const INPUT_WEIGHT: number = 12;

const getValuesWeight = (chosenArray: any[]): number[] => {
  let array: any[] = chosenArray,
    countersArray: number[] = [],
    numberCount: number = 0,
    nullCount: number = 0,
    objectCount: number = 0,
    functionCount: number = 0,
    undefinedCount: number = 0,
    booleanCount: number = 0,
    stringCount: number = 0,
    dateCount: number = 0;

  array.forEach((value: any) => {
    switch (typeof value) {
      case "number":
        numberCount += 4;
        break;
      case "object":
        if (value === null) {
          nullCount += 2;
        } else {
          objectCount += 10;
        }
        break;
      case "function":
        if (value instanceof Date) {
          dateCount += 5;
        } else {
          functionCount += 10;
        }
        break;
      case "undefined":
        undefinedCount += 2;
        break;
      case "boolean":
        booleanCount += 4;
        break;
      case "string":
        stringCount += 8;
        break;
    }
  });
  countersArray.push(
    numberCount,
    nullCount,
    objectCount,
    dateCount,
    functionCount,
    undefinedCount,
    booleanCount,
    stringCount
  );
  return countersArray;
};

const checkForEquality = (countersArray: number[], weight: number): boolean => {
  for (let i = 0; i < countersArray.length; i++) {
    if (countersArray[i] === weight) {
      return true;
    }
  }
  return false;
};

const OBJECT_WEIGHT = getValuesWeight(array);
console.log(getValuesWeight(array));
console.log(checkForEquality(OBJECT_WEIGHT, INPUT_WEIGHT));

export {};
