const firstarray: any[] = [
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

interface Array<T> {
  appendTruthyValues(arr: any[]): any[];
}

Array.prototype.appendTruthyValues = function (chosenArray: any[]): any[] {
  let array: any[] = chosenArray;
  const firstFoundArrayElement: any = this.find((element) => {
    return Array.isArray(element);
  });

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      firstFoundArrayElement.push(array[i]);
    }
  }
  return this;
};

const truthyValues: any[] = firstarray.appendTruthyValues(secondArray);
console.log(truthyValues);

