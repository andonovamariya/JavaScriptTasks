console.log("Second pattern:");
const MAX_NUMBER: number = 5;
secondPattern(MAX_NUMBER);
export function secondPattern(maxNumber: number): void {
  let row: string = "",
    i: number,
    j: number,
    max: number = maxNumber;

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

  console.log(row);
}
