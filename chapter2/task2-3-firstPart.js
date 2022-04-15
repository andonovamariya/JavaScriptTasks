const firstArray = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];
const secondArray = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  undefined,
  6,
];

const firstFoundArrayElement = firstArray.find((element) => {
  return Array.isArray(element);
});

const appender = (firstFoundArrayElement, secondArray) => {
  for (let i = 0; i < secondArray.length; i++) {
    if (secondArray[i]) {
      firstFoundArrayElement.push(secondArray[i]);
    }
  }

  return firstArray;
};

console.log(appender(firstFoundArrayElement, secondArray));
