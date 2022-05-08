"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array = [6, 4, 3, 1, 9, 44, 33, 2];
const sortBubble = (chosenArray) => {
    let array = chosenArray;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let l = array[j];
                array[j] = array[j + 1];
                array[j + 1] = l;
            }
        }
    }
    return array;
};
const sortMinMax = (chosenArray) => {
    let array = chosenArray;
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
