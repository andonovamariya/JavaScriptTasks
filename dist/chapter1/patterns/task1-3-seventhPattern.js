const MAX_NUMBER = 5;
const createSpace = (n) => {
    let digit = n, formattedNumber = digit.toString();
    if (digit < 10) {
        formattedNumber = " 0" + digit.toString();
        return formattedNumber;
    }
    else if (digit <= 99) {
        formattedNumber = " " + digit.toString;
        return formattedNumber;
    }
    return formattedNumber;
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
    let i, j, n = 1, low = 0, high = 9, row = "", max = maxNumber;
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
    return row;
};
console.log("Seventh pattern: ", seventhPattern(MAX_NUMBER));
export {};
