"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const checkIfObjectIsPresentDeep = (array, object) => {
    if (!array || !object || array.length === 0) {
        return false;
    }
    return (array.includes(object) ||
        !!array.find((item) => item &&
            typeof item === "object" &&
            checkIfObjectIsPresentDeep(Array.isArray(item) ? item : Object.values(item), object)));
};
console.log(checkIfObjectIsPresentDeep(array, person));
