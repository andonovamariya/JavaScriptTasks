"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MAX_NUMBER = 5;
const firstPattern = (maxNumber) => {
    let row = "", i, j, max = maxNumber;
    for (i = 0; i <= max; i++) {
        for (j = 1; j <= i; j++) {
            row += j;
        }
        row += "\n";
    }
    return row;
};
console.log("First pattern:\n", firstPattern(MAX_NUMBER));
