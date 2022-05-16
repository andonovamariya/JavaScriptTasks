const array = [
    6,
    "Test",
    "value",
    1,
    undefined,
    null,
    {
        name: "john.doe",
        role: "admim",
    },
];
const INPUT_WEIGHT = 16;
export const getValuesWeight = (chosenArray) => {
    let countersArray = [], array = chosenArray, nullWeight = 0, objectWeight = 0, stringWeight = 0, numberWeight = 0, undefinedWeight = 0, booleanWeight = 0, dateWeight = 0;
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] !== "undefined" && array[i] === null) {
            nullWeight += 2;
        }
        else if (array[i] instanceof Function ||
            typeof array[i] === "object" ||
            Array.isArray(array[i])) {
            objectWeight += 10;
        }
        else if (typeof array[i] === "string") {
            stringWeight += 8;
        }
        else if (typeof array[i] === "number") {
            numberWeight += 4;
        }
        else if (typeof array[i] === "undefined") {
            undefinedWeight += 2;
        }
        else if (typeof array[i] === "boolean") {
            booleanWeight += 4;
        }
        else if (array[i] instanceof Date) {
            dateWeight += 5;
        }
        else {
            console.log("Wasn't able to find a corresponding value in the array");
        }
    }
    countersArray.push(nullWeight, objectWeight, stringWeight, numberWeight, undefinedWeight, booleanWeight, dateWeight);
    return countersArray;
};
export const checkForEquality = (countersArray, inputWeight) => {
    let answer = false;
    for (let i = 0; i < countersArray.length; i++) {
        if (countersArray[i] === inputWeight) {
            answer = true;
        }
    }
    if (answer) {
        return true;
    }
    else {
        return false;
    }
};
const OBJECT_WEIGHT = getValuesWeight(array);
console.log(OBJECT_WEIGHT);
console.log(checkForEquality(OBJECT_WEIGHT, INPUT_WEIGHT));
