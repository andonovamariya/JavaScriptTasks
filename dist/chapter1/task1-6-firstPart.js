const SENTENCE = "What we do in life echoes !!!!!!!!! to eternity";
const FORMAT = /[^a-zA-Z0-9 ]/g;
export const findLongestWord = (stringFormat) => {
    let longestWord = "", string = stringFormat;
    if (string && /^\s*$/.test(string) === false) {
        let wordSplit = string.replace(FORMAT, "").split(" ");
        for (let i = 0; i < wordSplit.length; i++) {
            if (wordSplit[i].length > longestWord.length) {
                longestWord = wordSplit[i];
            }
        }
        return longestWord;
    }
    else {
        throw new Error("You provided an invalid sentence value. Please, try again.");
    }
};
console.log(findLongestWord(SENTENCE));
export const sortLongestWord = (chosenString) => {
    let string = chosenString;
    if (string && /^\s*$/.test(string) === false) {
        let longestWord = string
            .replace(FORMAT, "")
            .split(" ")
            .sort(function (a, b) {
            return b.length - a.length;
        });
        return longestWord[0];
    }
    else {
        throw new Error("You provided an invalid sentence value. Please, try again.");
    }
};
console.log(sortLongestWord(SENTENCE));
export const findLongestWordWithReduce = (chosenString) => {
    let string = chosenString;
    if (string && /^\s*$/.test(string) === false) {
        let wordSplit = string.replace(FORMAT, "").split(" ");
        let longestWord = wordSplit.reduce(function (longestWord, currentWord) {
            if (longestWord.length < currentWord.length) {
                return currentWord;
            }
            else
                return longestWord;
        }, " ");
        return longestWord;
    }
    else {
        throw new Error("You provided an invalid sentence value. Please, try again.");
    }
};
console.log(findLongestWordWithReduce(SENTENCE));
