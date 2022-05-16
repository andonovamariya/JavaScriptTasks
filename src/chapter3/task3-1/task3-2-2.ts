interface Array<T> {
  checkIfObjectIsPresentDeep(object: Person): boolean;
}
interface Person {
  name: string;
}
const person: Person = { name: "John Doe" };
const arrayWithDifferentValues: any[] = [
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
export const prototypeCheckIfObjectIsPresentDeep = () => {
  Array.prototype.checkIfObjectIsPresentDeep =
    function checkIfObjectIsPresentDeep(chosenObject: Person): boolean {
      if (!this || !chosenObject || this.length === 0) {
        return false;
      }

      return (
        this.includes(chosenObject) ||
        !!this.find(
          (item: any) =>
            item &&
            typeof item === "object" &&
            item.checkIfObjectIsPresentDeep(
              Array.isArray(item) ? item : Object.values(item),
              chosenObject
            )
        )
      );
    };
};

const isObjectPresent: boolean =
  arrayWithDifferentValues.checkIfObjectIsPresentDeep(person);
console.log(isObjectPresent);
