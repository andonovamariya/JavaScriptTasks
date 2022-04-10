const MAX_NUMBER = 5;
const createSpace = (n) => {
  return n < 10 ? " 0" + n : n <= 99 ? " " + n : n;
};

const seventhPattern = (maxNumber) => {
  let array = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let n = 1;
  let low = 0,
    high = 9;
  let row = "";

  for (i = 0; i < maxNumber; i++, low++, high--) {
    for (j = low; j <= high; j++, n++) {
      array[i][j] = createSpace(n);
    }
    for (j = low + 1; j <= high; j++, n++) {
      array[j][high] = createSpace(n);
    }
    for (j = high - 1; j >= low; j--, n++) {
      array[high][j] = createSpace(n);
    }
    for (j = high - 1; j > low; j--, n++) {
      array[j][low] = createSpace(n);
    }
  }

  for (i = 0; i < 10; i++) {
    row += "\n";

    for (j = 0; j < 10; j++) {
      row += " " + array[i][j] + " ";
    }
  }
  row += "\n";

  return row;
};

console.log("Seventh pattern: ", seventhPattern(MAX_NUMBER));
