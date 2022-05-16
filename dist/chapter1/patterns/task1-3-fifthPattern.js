const MAX_NUMBER = 16;
const fifthPattern = (maxNumber) => {
    let max = maxNumber, i, j, k, row = "";
    for (i = 1; i <= max; i++) {
        row += i + " ";
        max = max - 1;
        k = i + max;
        for (j = 1; j < i; j++) {
            row += k + " ";
            max--;
            k += max;
        }
        row += "\n";
    }
    return row;
};
console.log("Fifth pattern: \n", fifthPattern(MAX_NUMBER));
export {};
