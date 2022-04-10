const MAX_NUMBER = 7;

const diamondPattern = (maxNumber) => {
  let i, j;
  let row = "";
  for (i = 0; i <= maxNumber; i++) {
    for (j = 1; j <= i; j++) {
      row += " " + j;
    }

    for (j = i; j > 1; j--) {
      row += " " + (j - 1);
    }

    row += "\n";
  }

  for (i = maxNumber - 1; i >= 1; i--) {
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
