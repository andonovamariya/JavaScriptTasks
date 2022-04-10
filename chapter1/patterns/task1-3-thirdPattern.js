const MAX_NUMBER = 5;

const thirdPattern = (maxNumber) => {
  let row = "";
  let i, j;

  for (i = 0; i <= maxNumber; i++) {
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
