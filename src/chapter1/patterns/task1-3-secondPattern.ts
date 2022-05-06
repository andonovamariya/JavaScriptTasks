const MAX_NUMBER: number = 5;

const secondPattern = (maxNumber: number): string => {
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

  return row;
};

console.log("Second pattern:\n", secondPattern(MAX_NUMBER));

export {};
