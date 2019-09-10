function strSearch(str, smallStr) {
  let count = 0;
  let left = 0;
  let right;
  if (str.length < smallStr.length) return 0;
  while (left <= str.length - 1 - (smallStr.length - 1)) {
    right = left + smallStr.length;
    if (str.slice(left, right) === smallStr) {
      count++;
      left = right + 1;
    } else {
      left++;
    }
  }
  return count;
}

strSearch('chatsdogsshdsdcogasdhdoggod', 'god');
