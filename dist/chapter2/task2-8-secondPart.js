const array = [
    6,
    "Test",
    "value",
    1,
    undefined,
    null,
    { name: "john.doe", role: "admin" },
];
const INPUT_WEIGHT = 12;
export const getArrayWeight = (chosenArray) => {
    let weight = 0, array = chosenArray;
    Object.entries(array).forEach(([key, value]) => {
        if (typeof value !== "undefined" && value === null) {
            weight += 2;
        }
        else if (value instanceof Function ||
            typeof value === "object" ||
            Array.isArray(value)) {
            weight += 10;
        }
        else if (typeof value === "string") {
            weight += 8;
        }
        else if (typeof value === "number") {
            weight += 4;
        }
        else if (value instanceof Date) {
            weight += 5;
        }
        else if (typeof value === "undefined") {
            weight += 2;
        }
        else if (typeof value === "boolean") {
            weight += 4;
        }
        else if (value instanceof Date) {
            weight += 5;
        }
        else
            console.log("Wasn't able to find a corresponding value in the array");
    });
    return weight;
};
export const higherWeightThan = (inputWeight, weight) => {
    if (inputWeight > weight) {
        return true;
    }
    else {
        return false;
    }
};
console.log(higherWeightThan(INPUT_WEIGHT, getArrayWeight(array)));
