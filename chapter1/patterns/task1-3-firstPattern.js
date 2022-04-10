const MAX_NUMBER = 5;

const firstPattern = (maxNumber) => {
  let row = "";
  let i, j;

  for (i = 0; i <= maxNumber; i++) {
    for (j = 1; j <= i; j++) {
      row += j;
    }
    row += "\n";
  }

  return row;
};

console.log("First pattern:\n", firstPattern(MAX_NUMBER));
