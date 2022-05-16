const MAX_NUMBER = 36;
const sixthPattern = (maxNumber) => {
    let k = 11, l = 28, i, j, row = "", max = maxNumber;
    for (i = 1; i <= 10; i++) {
        for (j = 1; j <= 10; j++) {
            if (i === 1) {
                row += " " + j + " ";
            }
            else if (j === 10) {
                row += " " + k++ + " ";
            }
            else if (i === 10) {
                row += " " + l-- + " ";
            }
            else if (j === 1) {
                row += " " + max-- + " ";
            }
            else
                row += "    ";
        }
        row += "\n";
    }
    return row;
};
console.log("Sixth pattern:\n", sixthPattern(MAX_NUMBER));
export {};
