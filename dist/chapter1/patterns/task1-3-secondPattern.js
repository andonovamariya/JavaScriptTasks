const MAX_NUMBER = 5;
const secondPattern = (maxNumber) => {
    let row = "", i, j, max = maxNumber;
    for (i = 0; i <= max; i++) {
        for (j = 1; j <= i; j++) {
            row += j;
        }
        row += "\n";
    }
    for (i = 1; i <= max - 1; i++) {
        for (j = 1; j <= max - i; j++) {
            row += j;
        }
        row += "\n";
    }
    return row;
};
console.log("Second pattern:\n", secondPattern(MAX_NUMBER));
export {};
