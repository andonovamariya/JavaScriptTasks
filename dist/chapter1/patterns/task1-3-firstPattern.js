console.log("First pattern:");
const MAX_NUMBER = 5;
firstPattern(MAX_NUMBER);
export function firstPattern(maxNumber) {
    let row = "", i, j, max = maxNumber;
    for (i = 0; i <= max; i++) {
        for (j = 1; j <= i; j++) {
            row += j;
        }
        row += "\n";
    }
    console.log(row);
}
