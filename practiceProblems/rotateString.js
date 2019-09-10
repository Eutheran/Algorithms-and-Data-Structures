//create a function that takes a STRING and an ARRAY of instructions, for every 1 value you rotate the word one letter to the right, for every 0 value you rotate the word one letter to the left.

//Solution

// function rotateStr(str, arr) {
//   if (str.length === 0) {
//     return '';
//   }
//   if (arr.length === 0) {
//     return str;
//   }
//   let rotatedStr = str;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       rotatedStr = rotatedStr[rotatedStr.length - 1] + rotatedStr.slice(0, -1);
//     } else {
//       rotatedStr = rotatedStr.slice(1) + rotatedStr[0];
//     }
//   }
//   return rotatedStr;
// }

// rotateStr('cat', [0, 1, 1, 1, 0]);
