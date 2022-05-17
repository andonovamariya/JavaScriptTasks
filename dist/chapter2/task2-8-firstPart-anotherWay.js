const array = [
    6,
    "Test",
    "value",
    1,
    undefined,
    null,
    {
        name: "john.doe",
        role: "admin",
    }
];
const INPUT_WEIGHT = 12;
export const getValuesWeight = (chosenArray) => {
    let array = chosenArray, countersArray = [], numberCount = 0, nullCount = 0, objectCount = 0, functionCount = 0, undefinedCount = 0, booleanCount = 0, stringCount = 0, dateCount = 0;
    array.forEach((value) => {
        switch (typeof value) {
            case "number":
                numberCount += 4;
                break;
            case "object":
                if (value === null) {
                    nullCount += 2;
                }
                else {
                    objectCount += 10;
                }
                break;
            case "function":
                if (value instanceof Date) {
                    dateCount += 5;
                }
                else {
                    functionCount += 10;
                }
                break;
            case "undefined":
                undefinedCount += 2;
                break;
            case "boolean":
                booleanCount += 4;
                break;
            case "string":
                stringCount += 8;
                break;
        }
    });
    countersArray.push(numberCount, nullCount, objectCount, dateCount, functionCount, undefinedCount, booleanCount, stringCount);
    return countersArray;
};
export const checkForEquality = (countersArray, weight) => {
    let answer = false;
    for (let i = 0; i < countersArray.length; i++) {
        if (countersArray[i] === weight) {
            answer = true;
        }
    }
    if (answer === true) {
        return true;
    }
    else {
        return false;
    }
};
const OBJECT_WEIGHT = getValuesWeight(array);
console.log(getValuesWeight(array));
console.log(checkForEquality(OBJECT_WEIGHT, INPUT_WEIGHT));
