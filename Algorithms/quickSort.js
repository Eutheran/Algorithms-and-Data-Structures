function swapHelper(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swapHelper(arr, swapIdx, i);
    }
  }
  swapHelper(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIdx = pivotHelper(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }
  return arr;
}

quickSort([5, 12, 2, 4, 7, 123, 213, 531, 6]);
