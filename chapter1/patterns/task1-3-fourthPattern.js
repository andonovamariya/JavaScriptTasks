const MAX_NUMBER = 5;

const fourthPattern = (maxNumber) => {
  let row = "";
  let i, j, k;

  for (i = 0; i <= maxNumber; i++) {
    for (j = 1; j <= maxNumber - i + 1; j++) {
      row += " ";
    }
    for (k = 1; k <= i; k++) {
      row += k;
    }
    row += "\n";
  }

  for (i = 1; i <= maxNumber - 1; i++) {
    for (j = 1; j <= i + 1; j++) {
      row += " ";
    }

    for (k = 1; k <= maxNumber - i; k++) {
      row += k;
    }
    row += "\n";
  }

  return row;
};

console.log("Fourth pattern:\n", fourthPattern(MAX_NUMBER));
