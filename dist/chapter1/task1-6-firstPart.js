"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SENTENCE = "What we do in life echoes !!!!!!!!! to eternity";
const FORMAT = /[^a-zA-Z0-9 ]/g;
const findLongestWord = (stringFormat) => {
    let longestWord = "", string = stringFormat, wordSplit = string.replace(FORMAT, "").split(" ");
    for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i].length > longestWord.length) {
            longestWord = wordSplit[i];
        }
    }
    return longestWord;
};
console.log(findLongestWord(SENTENCE));
const sortLongestWord = (chosenString) => {
    let string = chosenString, longestWord = string
        .replace(FORMAT, "")
        .split(" ")
        .sort(function (a, b) {
        return b.length - a.length;
    });
    return longestWord[0];
};
console.log(sortLongestWord(SENTENCE));
const findLongestWordWithReduce = (chosentri) => {
    let wordSplit = string.replace(FORMAT, "").split(" ");
    let longestWord = wordSplit.reduce(function (longestWord, currentWord) {
        if (longestWord.length < currentWord.length) {
            return currentWord;
        }
        else
            return longestWord;
    }, " ");
    return longestWord;
};
console.log(findLongestWordWithReduce(SENTENCE));