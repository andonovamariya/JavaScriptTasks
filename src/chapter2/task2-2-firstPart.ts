const person: Person = { name: "John Doe" };
const array: any[] = [
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

interface Person {
  name: string;
}

export const checkIfObjectIsIncluded = (
  chosenArray: any[],
  person: Person
): boolean => {
  let array: any[] = chosenArray,
    object: Person = person;
  if (array.includes(object)) {
    return true;
  } else {
    return false;
  }
};
console.log(checkIfObjectIsIncluded(array, person));

