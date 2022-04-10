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

const firstFoundArrayElement = array1.find((element) => {
  return Array.isArray(element);
});

const appender = (firstFoundArrayElement, array2) => {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i]) {
      firstFoundArrayElement.push(array2[i]);
    }
  }

  return array1;
};

console.log(appender(firstFoundArrayElement, array2));
