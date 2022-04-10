const MAX_NUMBER = 16;

const fifthPattern = (maxNumber) => {
  let max, i, j, k;
  let row = "";

  for (i = 1; i <= maxNumber; i++) {
    row += i + " ";
    max = maxNumber - 1;
    k = i + max;

    for (j = 1; j < i; j++) {
      row += k + " ";
      max--;
      k += max;
    }

    row += "\n";
  }

  return row;
};

console.log("Fifth pattern:\n", fifthPattern(MAX_NUMBER));
