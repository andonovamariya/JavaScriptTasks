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

export const appendTruthyValues = (
  firstArray: any[],
  secondArray: any[]
): any[] => {
  const firstFoundArrayElement: any[] = firstArray.find((element: any) => {
    return Array.isArray(element);
  });

  for (let i = 0; i < secondArray.length; i++) {
    if (secondArray[i]) {
      firstFoundArrayElement.push(secondArray[i]);
    }
  }

  return firstArray;
};

console.log(appendTruthyValues(firstArray, secondArray));
