const array = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  { name: "john.doe", role: "admin" },
];
const INPUT_WEIGHT = 2;

const typeOfFunction = {
  nullType: (val) => val == undefined,
  objectsType: (val) => typeof val === "object" && val !== null,
  stringsType: (val) => typeof val === "string",
  numericsType: (val) => typeof val === "number",
  arraysType: (val) => Array.isArray(val),
  undefinedType: (val) => val === undefined,
  datesType: (val) => val instanceof Date && !isNaN(val.valueOf()),
  booleansType: (val) => typeof val === "boolean",
  functions: (val) => typeof val === "function",
};

const getTypeKey = (value) => {
  const [item] = Object.entries(typeOfFunction).filter((element) => {
    const [, func] = element;
    return func(value);
  });
  const [key] = item || [];
  return key;
};

const weights = {
  nullType: 2,
  objectsType: 10,
  stringsType: 8,
  numericsType: 4,
  arraysType: 10,
  undefinedType: 2,
  datesType: 5,
  booleansType: 4,
  functions: 10,
};

const betterWeightCounter = (object) =>
  Object.values(object)
    .map((value) => weights[getTypeKey(value)])
    .reduce((sum, value) => sum + value);

const checkForEquality = (counter, inputWeight) => {
  if (counter === inputWeight) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForEquality(betterWeightCounter(array), INPUT_WEIGHT));
