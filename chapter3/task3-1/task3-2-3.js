const firstarray = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];
const secondArray = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  undefined,
  6,
];

Array.prototype.appendTruthyValues = function (array) {
  const firstFoundArrayElement = this.find((element) => {
    return Array.isArray(element);
  });

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      firstFoundArrayElement.push(array[i]);
    }
  }
  return this;
};

const truthyValues = firstarray.appendTruthyValues(secondArray);
console.log(truthyValues);
