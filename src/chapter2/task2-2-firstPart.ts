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

const checkIfObjectIsIncluded = (
  chosenArray: any[],
  person: Person
): string => {
  let array: any[] = chosenArray,
    object: Person = person;
  if (array.includes(object)) {
    return "The object is included in the array.";
  } else {
    return "The object is not included in the array.";
  }
};
console.log(checkIfObjectIsIncluded(array, person));

export {};
