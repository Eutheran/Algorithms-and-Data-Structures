function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid));
  return merge(leftArr, rightArr);
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let resultArr = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || !arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i] || !arr1[i]) {
      resultArr.push(arr2[j]);
      j++;
    } else {
      resultArr.push(arr1[i], arr2[j]);
      i++;
      j++;
    }
  }
  return resultArr;
}
mergeSort([45, 17, 22]);
