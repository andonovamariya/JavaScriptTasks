const SENTENCE: string = "What we do in life echoes to eternity";
const FORMAT: RegExp = /[^a-zA-Z0-9 ]/g;

export const findTheLongestWord = (chosenString: string, letter: string): string => {
  let string: string = chosenString;
  
  const stringWords: string[] = string.replace(FORMAT, "").split(" ");

  const isThereWordStartingWithPassedLetter: boolean = stringWords.some(
    (word) => word.startsWith(letter)
  );

  if (isThereWordStartingWithPassedLetter) {
    let index: number = stringWords.reduce((acc, curr, i) => {
      return curr.length >= stringWords[acc].length &&
        stringWords[i].startsWith(letter)
        ? i
        : acc;
    }, 0);

    return stringWords[index];
  }

  return "There is no word starting with this letter in the sentence.";
};

console.log(findTheLongestWord(SENTENCE, "e"));

