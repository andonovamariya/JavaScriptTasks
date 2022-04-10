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

const checkIfObjectIsPresentDeep = (arr, obj) => {
  if (!arr || !obj || arr.length === 0) {
    return false;
  }

  return (
    arr.includes(obj) ||
    !!arr.find(
      (item) =>
        item &&
        typeof item === "object" &&
        findObj(Array.isArray(item) ? item : Object.values(item), person)
    )
  );
};

console.log(checkIfObjectIsPresentDeep(array, person));
