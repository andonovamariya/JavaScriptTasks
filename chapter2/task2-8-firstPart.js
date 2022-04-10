const arr = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  { name: "john.doe", role: "admin" },
];
const INPUTWEIGHT = 2;

const getObjectWeight = (array) => {
  let nullWeight = 0,
    objectWeight = 0,
    stringWeight = 0,
    numberWeight = 0,
    undefinedWeight = 0,
    booleanWeight = 0,
    dateWeight = 0;
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
    } else
      console.log("Wasn't able to find a corresponding value in the array");
  }
  /*
  arrayWeights.push(
    { nullWeight: nullWeight },
    { objectWeight: objectWeight },
    { stringWeight: stringWeight },
    { numberWeight: numberWeight },
    { undefinedWeight: undefinedWeight }
  );
  */

  const OBJECT_WITH_WEIGHTS = {};
  OBJECT_WITH_WEIGHTS.nullWeight = nullWeight;
  OBJECT_WITH_WEIGHTS.objectWeight = objectWeight;
  OBJECT_WITH_WEIGHTS.stringWeight = stringWeight;
  OBJECT_WITH_WEIGHTS.numberWeight = numberWeight;
  OBJECT_WITH_WEIGHTS.undefinedWeight = undefinedWeight;
  /*OBJECT_WITH_WEIGHTS.push({
    nullWeight: nullWeight,
    objectWeight: objectWeight,
    stringWeight: stringWeight,
    numberWeight: numberWeight,
    undefinedWeight: undefinedWeight,
  });*/
  return OBJECT_WITH_WEIGHTS;
};

const equalWeight = (inputWeight, obj) => {
  console.log("Objects weight:\n", obj);
  for (const property in obj) {
    if (obj[property] === inputWeight) {
      return true;
    } else if (obj[property] !== inputWeight) {
      return false;
    }
  }
};

console.log(equalWeight(INPUTWEIGHT, getObjectWeight(arr)));
