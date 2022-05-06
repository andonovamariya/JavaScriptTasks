const firstArray: any[] = [
  1,
  undefined,
  [1, 2, 3],
  "test",
  { name: "John Doe" },
];

const secondArray: any[] = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  undefined,
  6,
];

const firstFoundArrayElement: any[] = firstArray.find((element: any) => {
  return Array.isArray(element);
});

function appender(firstFoundArrayElement: any[], secondArray: any[]): any[] {
  for (let i = 0; i < secondArray.length; i++) {
    if (secondArray[i]) {
      firstFoundArrayElement.push(secondArray[i]);
    }
  }

  return firstArray;
}

console.log(appender(firstFoundArrayElement, secondArray));

export {};
