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

export const checkIfObjectIsPresentDeep = (array: any[], object: Person): boolean => {
  if (!array || !object || array.length === 0) {
    return false;
  }

  return (
    array.includes(object) ||
    !!array.find(
      (item: any) =>
        item &&
        typeof item === "object" &&
        checkIfObjectIsPresentDeep(
          Array.isArray(item) ? item : Object.values(item),
          object
        )
    )
  );
};

console.log(checkIfObjectIsPresentDeep(array, person));

