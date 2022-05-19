console.log("Seventh pattern:");
const MAX_NUMBER: number = 5;
seventhPattern(MAX_NUMBER);

export function createSpace(n: number): string {
  let digit: number = n,
    formattedNumber: string = digit.toString();

  if (digit < 10) {
    formattedNumber = " 0" + digit.toString();
    return formattedNumber;
  } else if (digit <= 99) {
    formattedNumber = " " + digit.toString;
    return formattedNumber;
  }
  return formattedNumber;
}

export function seventhPattern(maxNumber: number): void {
  let array: number[][] = [
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

  let i: number,
    j: number,
    n: number = 1,
    low: number = 0,
    high: number = 9,
    row: string = "",
    max: number = maxNumber;

  for (i = 0; i < max; i++, low++, high--) {
    for (j = low; j <= high; j++, n++) {
      array[i][j] = n;
    }
    for (j = low + 1; j <= high; j++, n++) {
      array[j][high] = n;
    }
    for (j = high - 1; j >= low; j--, n++) {
      array[high][j] = n;
    }
    for (j = high - 1; j > low; j--, n++) {
      array[j][low] = n;
    }
  }

  for (i = 0; i < 10; i++) {
    row += "\n";

    for (j = 0; j < 10; j++) {
      row += " " + array[i][j] + " ";
    }
  }
  row += "\n";

  console.log(row);
}
