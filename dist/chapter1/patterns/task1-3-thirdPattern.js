"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MAX_NUMBER = 5;
const thirdPattern = (maxNumber) => {
    let row = "", i, j, max = maxNumber;
    for (i = 0; i <= max; i++) {
        for (j = 1; j <= i; j++) {
            row += j;
        }
        for (j = i - 1; j >= 1; j--) {
            row += j;
        }
        row += "\n";
    }
    return row;
};
console.log("Third pattern:\n", thirdPattern(MAX_NUMBER));
