interface Array<T> {
  convertTypesToKeys(): RegularObject;
}

interface RegularObject {
  [key: string]: any;
}

const numericArray: any[] = [
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

Array.prototype.convertTypesToKeys = function (): RegularObject {
  let objectWithTypes: RegularObject = {};
  let nullCount: number = 0,
    objectsCount: number = 0,
    stringsCount: number = 0,
    numericsCount: number = 0,
    arraysCount: number = 0,
    undefinedCount: number = 0,
    datesCount: number = 0,
    booleansCount: number = 0,
    functionsCount: number = 0;

  for (let i = 0; i <= this.length; i++) {
    if (this[i] === null) {
      nullCount++;
    } else if (typeof this[i] === "object") {
      objectsCount++;
    } else if (typeof this[i] === "string") {
      stringsCount++;
    } else if (typeof this[i] === "number") {
      numericsCount++;
    } else if (Array.isArray(this[i])) {
      arraysCount++;
    } else if (typeof this[i] === "undefined") {
      undefinedCount++;
    } else if (this[i] instanceof Date) {
      datesCount++;
    } else if (typeof this[i] === "boolean") {
      booleansCount++;
    } else if (this[i] instanceof Function) {
      functionsCount++;
    } else {
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

const destructuredArray: RegularObject = numericArray.convertTypesToKeys();

console.log(destructuredArray);
