"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const PERCENT = 80;
const removeInner = (chosenArray, chosenPercent) => {
    let array = chosenArray, percent = chosenPercent;
    let calculatedPercentage = (percent / 100) * array.length;
    const calculatedMiddle = Math.floor(calculatedPercentage / 2);
    let result = [
        ...array.slice(0, calculatedMiddle),
        ...array.slice(-calculatedMiddle),
    ];
    return result;
};
console.log(removeInner(array, PERCENT));
