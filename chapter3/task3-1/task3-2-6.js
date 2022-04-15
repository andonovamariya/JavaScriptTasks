const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const PERCENT = 50;

Array.prototype.removeInnerPercentage = function (percent) {
  let percentage = (percent / 100) * this.length;
  const middle = Math.floor(percentage / 2);
  result = [...this.slice(0, middle), ...this.slice(-middle)];
  return result;
};

const arrayWithoutInnerPercentage = array.removeInnerPercentage(PERCENT);
console.log(arrayWithoutInnerPercentage);
