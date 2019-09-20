//recursive solution, Time Complexity: O(2^n), that is exponential. Only slightly faster than factorial time.
const fib = num => {
  if (num <= 2) return 1;
  return fib(num - 1) - fib(num - 2);
};

//memoizied solution, Time Complexity is O(N)
const fib_memo = (num, memo = []) => {
  if (memo[num]) return memo[num];
  if (num <= 2) return 1;
  let res = fib(num - 1, memo) + fib(num - 2, memo);
  memo[num] = res;
  return res;
};

//these next two are bottom up approaches

//tabulated solution, Time Complexity is O(N), space complexity is O(N)
const fib_table = num => {
  if (num <= 2) return 1;
  //pre-build first few values
  const fibNumTable = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    fibNumTable[i] = fibNumTable[i - 1] + fibNumTable[i - 2];
  }
  return fibNumTable[num];
};

//this version of the table is O(1), constant space! We only store the pieces we need to complete the next sequence of fib and the answer.
const fib_best_table = num => {
  if (num <= 2) return 1;
  const fibNums = [0, 1, 1];
  let count = 3;
  while (count <= num) {
    fibNums[0] = fibNums[1];
    fibNums[1] = fibNums[2];
    fibNums[2] = fibNums[1] + fibNums[0];
    count++;
  }
  return fibNums[2];
};
