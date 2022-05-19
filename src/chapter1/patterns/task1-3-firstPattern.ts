console.log("First pattern:");
const MAX_NUMBER: number = 5;
firstPattern(MAX_NUMBER);

export function firstPattern(maxNumber: number): void {
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

  console.log(row);
}
