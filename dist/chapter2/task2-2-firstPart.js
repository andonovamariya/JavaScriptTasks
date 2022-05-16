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
export const checkIfObjectIsIncluded = (chosenArray, person) => {
    let array = chosenArray, object = person;
    if (array.includes(object)) {
        return true;
    }
    else {
        return false;
    }
};
console.log(checkIfObjectIsIncluded(array, person));
