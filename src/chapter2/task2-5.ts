const array: any[] = [
  {
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
  },
  "sunny day",
  5,
];

interface RegularObject {
  [key: string]: any[];
}

const flatten = (chosenArray: any[]): RegularObject => {
  let result: RegularObject = {};
  let array: any[] = chosenArray;
  for (const i in array) {
    if (typeof array[i] === "object") {
      const recursedElement = flatten(array[i]);
      for (const j in recursedElement) {
        result[i + "_" + j] = recursedElement[j];
      }
    } else {
      result[i] = array[i];
    }
  }
  return result;
};
console.log(flatten(array));

export {};
