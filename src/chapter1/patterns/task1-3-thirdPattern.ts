console.log("Third pattern:");
const MAX_NUMBER: number = 5;
thirdPattern(MAX_NUMBER);
export function thirdPattern(maxNumber: number): void {
  let row: string = "",
    i: number,
    j: number,
    max: number = maxNumber;

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
