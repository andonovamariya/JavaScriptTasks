"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array = [6, 4, 3, 1, 9, 44, 33, 2];
const sortBubble = (chosenArray) => {
    for (let i = 0; i < chosenArray.length; i++) {
        for (let j = 0; j < chosenArray.length; j++) {
            if (chosenArray[j] > chosenArray[j + 1]) {
                let l = chosenArray[j];
                chosenArray[j] = chosenArray[j + 1];
                chosenArray[j + 1] = l;
            }
        }
    }
    return chosenArray;
};
const sortMinMax = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[i]) {
                let l = array[j];
                array[j] = array[i];
                array[i] = l;
            }
        }
    }
    return array;
};
// Part 2
const chooseSortingMethod = (array, func) => { };
console.log(chooseSortingMethod(array, sortBubble));
