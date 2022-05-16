const array = [6, 4, 3, 1, 8, 44, 33, 2];
export const bubbleSort = (chosenArray) => {
    let i, l, j, array = chosenArray;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                l = array[j];
                array[j] = array[j + 1];
                array[j + 1] = l;
            }
        }
    }
    return array;
};
console.log("Sorted array:", bubbleSort(array));
