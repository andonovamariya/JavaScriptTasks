const array = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  () => {
    console.log("Hello,  world!");
  },
  { count: 5 },
];

const replaceArrayKeys = (array) => {
  let newArray = [];
  let nullCount = 0,
    objectsCount = 0,
    stringsCount = 0,
    numericsCount = 0,
    arraysCount = 0,
    undefinedCount = 0,
    datesCount = 0,
    booleansCount = 0,
    functionsCount = 0;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] === null) {
      nullCount++;
    } else if (typeof array[i] === "object") {
      objectsCount++;
    } else if (typeof array[i] === "string") {
      stringsCount++;
    } else if (typeof array[i] === "number") {
      numericsCount++;
    } else if (Array.isArray(array[i])) {
      arraysCount++;
    } else if (typeof array[i] === "undefined") {
      undefinedCount++;
    } else if (array[i] instanceof Date) {
      datesCount++;
    } else if (typeof array[i] === "boolean") {
      booleansCount++;
    } else if (array[i] instanceof Function) {
      functionsCount++;
    } else {
      console.log("Wasn't able to find a corresponding value in the array");
    }
  }

  newArray["nullCount"] = nullCount;
  newArray["objectsCount"] = objectsCount;
  newArray["stringsCount"] = stringsCount;
  newArray["numericsCount"] = numericsCount;
  newArray["arraysCount"] = arraysCount;
  newArray["undefinedCount"] = undefinedCount;
  newArray["datesCount"] = datesCount;
  newArray["booleansCount"] = booleansCount;
  newArray["functionsCount"] = functionsCount;

  return newArray;
};

console.log(replaceArrayKeys(array));
