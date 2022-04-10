const array1 = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];
const array2 = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  undefined,
  6,
];

Array.prototype.appendTruthyValues = function (array1, array2) {
  const firstFoundArrayElement = array1.find((element) => {
    return Array.isArray(element);
  });

  for (let i = 0; i < array2.length; i++) {
    if (array2[i]) {
      firstFoundArrayElement.push(array2[i]);
    }
  }

  return array1;
};

const truthyValues = array1.appendTruthyValues(array1, array2);
console.log(truthyValues);
