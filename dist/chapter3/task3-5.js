"use strict";
const personObject = {
    person: {
        firstName: "John",
        lastName: "Doe",
        role: "Admin",
    },
    permissions: ["read", "write", "special"],
    age: 42,
    competencies: [
        { skill: "JavaScript", level: "junior" },
        { skill: "css", level: "junior" },
    ],
};
function createDeepCopy() {
    let outObject, value, key;
    outObject = Array.isArray(this) ? [] : {};
    for (key in this) {
        if (this.hasOwnProperty(key)) {
            value = this[key];
            if (!value || typeof value !== "object") {
                outObject[key] = value;
            }
            else {
                outObject[key] = createDeepCopy.apply(value);
            }
        }
    }
    return outObject;
}
Object.prototype.deepCopyOfObject = createDeepCopy;
console.log(personObject.deepCopyOfObject());
