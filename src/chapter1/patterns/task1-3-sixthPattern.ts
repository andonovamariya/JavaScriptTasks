const MAX_NUMBER: number = 36;

const sixthPattern = (maxNumber: number): string => {
  let k: number = 11,
    l: number = 28,
    i: number,
    j: number,
    row: string = "",
    max: number = maxNumber;

  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      if (i === 1) {
        row += " " + j + " ";
      } else if (j === 10) {
        row += " " + k++ + " ";
      } else if (i === 10) {
        row += " " + l-- + " ";
      } else if (j === 1) {
        row += " " + max-- + " ";
      } else row += "    ";
    }
    row += "\n";
  }

  return row;
};
console.log("Sixth pattern:\n", sixthPattern(MAX_NUMBER));

export {};
