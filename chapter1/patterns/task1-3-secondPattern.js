const MAX_NUMBER = 5;

const secondPattern = (maxNumber) => {
  let row = "";
  let i, j;

  for (i = 0; i <= maxNumber; i++) {
    for (j = 1; j <= i; j++) {
      row += j;
    }
    row += "\n";
  }

  for (i = 1; i <= maxNumber - 1; i++) {
    for (j = 1; j <= maxNumber - i; j++) {
      row += j;
    }
    row += "\n";
  }

  return row;
};

console.log("Second pattern:\n", secondPattern(MAX_NUMBER));
