const array1: any[] = [
  [1, 2, 3, 4],
  ["one", "two"],
  [5, 6],
];
const array2: any[] = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  { role: "admin" },
  { name: "John" },
  [1000, 1001],
];

const foundArrays: any[] = array2.filter((el) => Array.isArray(el));
const foundObjects: any[] = array2.filter(
  (el) => typeof (el === "object") && el !== null && !(el instanceof Function)
);

const appenderEven = (array1: any[]): any[] => {
  for (let i = 0; i < array1.length; i++) {
    if (i % 2 === 0) {
      array1[i] = array1[i].concat(foundArrays);
    } else if (i % 2 !== 0) {
      array1[i] = array1[i].concat(foundObjects);
    }
  }
  return array1;
};

console.log(appenderEven(array1));

export{};