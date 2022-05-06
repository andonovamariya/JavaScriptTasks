interface Object {
  deepCopyOfObject(): any;
}

interface Person {
  person: {
    firstName: string;
    lastName: string;
    role: string;
  };
  permissions: string[];
  age: number;
  competencies: [
    { skill: string; level: string },
    { skill: string; level: string }
  ];
}

const personObject: Person = {
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

function createDeepCopy(this: any) {
  let outObject: any, value: any, key: string;
  outObject = Array.isArray(this) ? [] : {};

  for (key in this) {
    if (this.hasOwnProperty(key)) {
      value = this[key];
      if (!value || typeof value !== "object") {
        outObject[key] = value;
      } else {
        outObject[key] = createDeepCopy.apply(value);
      }
    }
  }

  return outObject;
}

Object.prototype.deepCopyOfObject = createDeepCopy;
console.log(personObject.deepCopyOfObject());
