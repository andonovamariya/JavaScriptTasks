console.log("Third pattern:");
const MAX_NUMBER = 5;
thirdPattern(MAX_NUMBER);
export function thirdPattern(maxNumber) {
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
    console.log(row);
}
