"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const PERCENT = 80;
const removeInner = (array, percent) => {
    let percentage = (percent / 100) * array.length;
    const middle = Math.floor(percentage / 2);
    let result = [...array.slice(0, middle), ...array.slice(-middle)];
    return result;
};
console.log(removeInner(array, PERCENT));
