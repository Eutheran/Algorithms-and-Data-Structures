//GIVEN A STRING WITH N CAPITAL LETTERS, RETURN THE MAXIMUM AMOUNT OF TIMES YOU CAN RETURN THE WORD BALLOON WITHOUT REUSING LETTERS IN THE STRING (THEY MAY BE REMOVED) EX:BBAALLLLOOOONNSS -> 2 BALL -> 0 XDASDAFASDASSADAFAS -> 0 NOLLOBA-> 1
// IT SHOULD BE o(1) space and o(n) time, SOLUTION IS BELOW

//SOLUTION

// function findBalloon(str) {
//   if (str.length < 7) return 0;
//   let max = 0;
//   let table = {
//     B: 0,
//     A: 0,
//     L: 0,
//     O: 0,
//     N: 0,
//   };
//   for (let char of str) {
//     if (table.hasOwnProperty(char)) table[char] = table[char] + 1;
//   }
//   table['L'] = Math.floor(table['L'] / 2);
//   table['O'] = Math.floor(table['O'] / 2);
//   max = Math.min(table['B'], table['A'], table['L'], table['O'], table['N']);

//   return max;
// }

//TESTS

// findBalloon('BAOLLONSASFASDASDBLALLLSOONSNSNS');
//returns 2

// findBalloon('BALL');
//returns 0

// findBalloon('BALLOONS');
//returns 1

// findBalloon('NOSOBALL');
//returns 1
