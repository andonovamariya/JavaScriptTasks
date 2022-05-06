const MAX_NUMBER: number = 5;

const firstPattern = (maxNumber: number): string => {
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

  return row;
};

console.log("First pattern:\n", firstPattern(MAX_NUMBER));

export {};
