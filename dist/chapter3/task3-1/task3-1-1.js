"use strict";
const numbersArray = [6, 4, 3, 1, 8, 44, 33, 2];
Array.prototype.findOddElements = function () {
    let oddNumbersCount = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 !== 0) {
            oddNumbersCount++;
        }
    }
    return oddNumbersCount;
};
const oddElements = numbersArray.findOddElements();
console.log(oddElements);
