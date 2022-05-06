const MAX_NUMBER: number = 5;

const thirdPattern = (maxNumber: number): string => {
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

  return row;
};

console.log("Third pattern:\n", thirdPattern(MAX_NUMBER));

export {};
