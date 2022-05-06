"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MAX_NUMBER = 5;
const fourthPattern = (maxNumber) => {
    let row = "", i, j, k, max = maxNumber;
    for (i = 0; i <= max; i++) {
        for (j = 1; j <= max - i + 1; j++) {
            row += " ";
        }
        for (k = 1; k <= i; k++) {
            row += k;
        }
        row += "\n";
    }
    for (i = 1; i <= max - 1; i++) {
        for (j = 1; j <= i + 1; j++) {
            row += " ";
        }
        for (k = 1; k <= max - i; k++) {
            row += k;
        }
        row += "\n";
    }
    return row;
};
console.log("Fourth pattern:\n", fourthPattern(MAX_NUMBER));
