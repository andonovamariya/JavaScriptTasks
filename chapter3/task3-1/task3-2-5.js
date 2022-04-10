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

Array.prototype.flatten = function (array, parentKey = 1, result = []) {
  Object.entries(array).forEach(([key, value]) => {
    const propertyName = parentKey ? parentKey + "_" + key : key;
    if (typeof array[key] === "object") {
      Array.prototype.flatten(array[key], propertyName, result);
    } else {
      result[propertyName] = array[key];
    }
  });
  return result;
};

const flattenedArray = array.flatten(array);
console.log(flattenedArray);
