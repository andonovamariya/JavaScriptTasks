"use strict";
const numericArray = [
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
Array.prototype.convertTypesToKeys = function () {
    let objectWithTypes = {};
    let nullCount = 0, objectsCount = 0, stringsCount = 0, numericsCount = 0, arraysCount = 0, undefinedCount = 0, datesCount = 0, booleansCount = 0, functionsCount = 0;
    for (let i = 0; i <= this.length; i++) {
        if (this[i] === null) {
            nullCount++;
        }
        else if (typeof this[i] === "object") {
            objectsCount++;
        }
        else if (typeof this[i] === "string") {
            stringsCount++;
        }
        else if (typeof this[i] === "number") {
            numericsCount++;
        }
        else if (Array.isArray(this[i])) {
            arraysCount++;
        }
        else if (typeof this[i] === "undefined") {
            undefinedCount++;
        }
        else if (this[i] instanceof Date) {
            datesCount++;
        }
        else if (typeof this[i] === "boolean") {
            booleansCount++;
        }
        else if (this[i] instanceof Function) {
            functionsCount++;
        }
        else {
            console.log("Wasn't able to find a corresponding value in the array");
        }
    }
    objectWithTypes["nullCount"] = nullCount;
    objectWithTypes["objectsCount"] = objectsCount;
    objectWithTypes["stringsCount"] = stringsCount;
    objectWithTypes["numericsCount"] = numericsCount;
    objectWithTypes["arraysCount"] = arraysCount;
    objectWithTypes["undefinedCount"] = undefinedCount;
    objectWithTypes["datesCount"] = datesCount;
    objectWithTypes["booleansCount"] = booleansCount;
    objectWithTypes["functionsCount"] = functionsCount;
    return objectWithTypes;
};
const destructuredArray = numericArray.convertTypesToKeys();
console.log(destructuredArray);
