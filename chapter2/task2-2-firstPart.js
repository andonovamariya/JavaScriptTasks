const person = { name: "John Doe" };
const array = [
  6,
  "Test",
  "value",
  person,
  1,
  undefined,
  null,
  () => {
    console.log("Hello,  world!");
  },
  { count: 5 },
  { name: "John Doe" },
];

const checkIfObjectIsIncluded = (array, person) => {
  if (array.includes(person)) {
    return "The object is included in the array.";
  } else {
    return "The object is not included in the array.";
  }
};
console.log(checkIfObjectIsIncluded(array, person));