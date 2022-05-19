console.log("Diamond pattern:");
const MAX_NUMBER: number = 7;
diamondPattern(MAX_NUMBER);
export function diamondPattern(maxNumber: number): void {
  let i: number,
    j: number,
    max: number = maxNumber,
    row: string = "";

  for (i = 0; i <= max; i++) {
    for (j = 1; j <= i; j++) {
      row += " " + j;
    }

    for (j = i; j > 1; j--) {
      row += " " + (j - 1);
    }

    row += "\n";
  }

  for (i = max - 1; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
      row += " " + j;
    }

    for (j = i; j > 1; j--) {
      row += " " + (j - 1);
    }

    row += "\n";
  }

  console.log(row);
}
