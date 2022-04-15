const array = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  { name: "john.doe", role: "admin" },
];
const INPUT_WEIGHT = 12;

const getArrayWeight = (array) => {
  let weight = 0;
  Object.entries(array).forEach(([key, value]) => {
    if (typeof value !== "undefined" && value === null) {
      weight += 2;
    } else if (
      value instanceof Function ||
      typeof value === "object" ||
      Array.isArray(value)
    ) {
      weight += 10;
    } else if (typeof value === "string") {
      weight += 8;
    } else if (typeof value === "number") {
      weight += 4;
    } else if (value instanceof Date) {
      weight += 5;
    } else if (typeof value === "undefined") {
      weight += 2;
    } else if (typeof value === "boolean") {
      weight += 4;
    } else if (value instanceof Date) {
      weight += 5;
    } else
      console.log("Wasn't able to find a corresponding value in the array");
  });
  return weight;
};

const higherWeightThan = (inputWeight, weight) => {
  if (inputWeight > weight) {
    return `The answer is ${true}, the inputted weight is ${inputWeight}, the weight of the elements in the array is ${weight}.`;
  } else
    return `The answer is ${false}, the inputted weight is ${inputWeight}, the weight of the elements in the array is ${weight}.`;
};

console.log(higherWeightThan(INPUT_WEIGHT, getArrayWeight(array)));
