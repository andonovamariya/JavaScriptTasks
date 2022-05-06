"use strict";
const person = { name: "John Doe" };
const arrayWithDifferentValues = [
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
Array.prototype.checkIfObjectIsPresentDeep = function checkIfObjectIsPresentDeep(chosenObject) {
    if (!this || !chosenObject || this.length === 0) {
        return false;
    }
    return (this.includes(chosenObject) ||
        !!this.find((item) => item &&
            typeof item === "object" &&
            item.checkIfObjectIsPresentDeep(Array.isArray(item) ? item : Object.values(item), chosenObject)));
};
const isObjectPresent = arrayWithDifferentValues.checkIfObjectIsPresentDeep(person);
console.log(isObjectPresent);
