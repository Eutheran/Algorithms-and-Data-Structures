//math.abs is here to make sure these functions work with negative numbers
function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}
//you divide num by 10^x then see how many times you can divide that value by 10, remainder is your real num position value.

function countDigits(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
  // return Math.abs(num).toString().length, this is the string solution, make sure to math.abs to get rid of - sign as it counts as a character.
}
//This is a math based solution. +1 is because this solution has an off by 1 error. Also need the if statement because Math.log10(0) = -infinity.

function mostDigits(arr) {
  let maxDigits = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, countDigits(arr[i]));
  }
  return maxDigits;
}
//goes through the arr of numbers and finds the max length of the largest value in the arr

function radixSort(arr) {
  let maxPasses = mostDigits(arr);
  for (let i = 0; i < maxPasses; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}
//DONT USE THIS ARRAY COMMAND BELOW! CREATES INFINITE LOOP
// let digitBuckets = new Array(10).fill([]);

radixSort([123, 4, 235234, 124123123, 23]);
