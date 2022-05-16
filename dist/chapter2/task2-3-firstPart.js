const firstArray = [
    1,
    undefined,
    [1, 2, 3],
    "test",
    { name: "John Doe" },
];
const secondArray = [
    null,
    () => {
        console.log("Hello,  world!");
    },
    ["one", "five"],
    undefined,
    6,
];
export const appendTruthyValues = (firstArray, secondArray) => {
    const firstFoundArrayElement = firstArray.find((element) => {
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
