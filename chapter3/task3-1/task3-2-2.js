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

Array.prototype.checkIfObjectIsPresentDeep = function (object) {
  if (!this || !object || !this.length === 0) {
    return false;
  }

  return (
    this.includes(object) ||
    !!this.find(
      (item) =>
        item &&
        typeof item === "object" &&
        findObj(Array.isArray(item) ? item : Object.values(item), object)
    )
  );
};

const isObjectPresent = array.checkIfObjectIsPresentDeep(person);
console.log(isObjectPresent);
