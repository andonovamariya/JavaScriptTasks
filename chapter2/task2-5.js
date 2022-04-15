const array = [
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

const flatten = (element) => {
  let result = {};
  for (const i in element) {
    if (typeof element[i] === "object") {
      const recursedElement = flatten(element[i]);
      for (const j in recursedElement) {
        result[i + "_" + j] = recursedElement[j];
      }
    } else {
      result[i] = element[i];
    }
  }
  return result;
};
console.log(flatten(array));
