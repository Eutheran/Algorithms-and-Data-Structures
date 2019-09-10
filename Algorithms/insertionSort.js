function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curVal;
    console.log('j outside the loop', j);
  }
  return arr;
}

insertionSort([12, 4, 19, 2, 20, 1]);
