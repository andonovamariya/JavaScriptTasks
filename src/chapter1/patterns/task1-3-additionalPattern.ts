const MAX_NUMBER: number = 7;

const diamondPattern = (maxNumber: number): string => {
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

  return row;
};

console.log("Diamond pattern:\n", diamondPattern(MAX_NUMBER));

export {};
