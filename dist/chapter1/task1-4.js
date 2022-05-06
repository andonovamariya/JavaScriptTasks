"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectedArray = [
    6,
    "Test",
    "value",
    1,
    undefined,
    null,
    () => {
        console.log("Hello,  world!");
    },
    { count: 5 },
];
const replaceArrayKeys = (chosenArray) => {
    let typesObject = {}, array = chosenArray, nullCount = 0, objectsCount = 0, stringsCount = 0, numericsCount = 0, arraysCount = 0, undefinedCount = 0, datesCount = 0, booleansCount = 0, functionsCount = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === null) {
            nullCount++;
        }
        else if (typeof array[i] === "object") {
            objectsCount++;
        }
        else if (typeof array[i] === "string") {
            stringsCount++;
        }
        else if (typeof array[i] === "number") {
            numericsCount++;
        }
        else if (Array.isArray(array[i])) {
            arraysCount++;
        }
        else if (typeof array[i] === "undefined") {
            undefinedCount++;
        }
        else if (array[i] instanceof Date) {
            datesCount++;
        }
        else if (typeof array[i] === "boolean") {
            booleansCount++;
        }
        else if (array[i] instanceof Function) {
            functionsCount++;
        }
        else {
            console.log("Wasn't able to find a corresponding value in the array");
        }
    }
    typesObject["nullCount"] = nullCount;
    typesObject["objectsCount"] = objectsCount;
    typesObject["stringsCount"] = stringsCount;
    typesObject["numericsCount"] = numericsCount;
    typesObject["arraysCount"] = arraysCount;
    typesObject["undefinedCount"] = undefinedCount;
    typesObject["datesCount"] = datesCount;
    typesObject["booleansCount"] = booleansCount;
    typesObject["functionsCount"] = functionsCount;
    return typesObject;
};
console.log(replaceArrayKeys(selectedArray));
