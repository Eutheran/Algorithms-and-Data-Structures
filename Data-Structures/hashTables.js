class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let primeNum = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * primeNum + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [[key, value]];
    } else {
      let repeatedKey = false;
      for (let subArr of this.keyMap[index]) {
        if (subArr.includes(key)) {
          repeatedKey = true;
          subArr[1] = value;
        }
      }
      if (repeatedKey === false) {
        this.keyMap[index].push([key, value]);
      }
    }
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let array of this.keyMap[index]) {
        if (array[0] === key) return array[1];
      }
      return undefined;
    }
    return undefined;
  }

  keys() {
    let keyArr = [];
    for (let arr of this.keyMap) {
      if (arr) {
        for (let subArr of arr) {
          if (!keyArr.includes(subArr[0])) keyArr.push(subArr[0]);
        }
      }
    }
    return keyArr;
  }

  values() {
    let valueArr = [];
    for (let arr of this.keyMap) {
      if (arr) {
        for (let subArr of arr) {
          if (!valueArr.includes(subArr[1])) valueArr.push(subArr[1]);
        }
      }
    }
    return valueArr;
  }
}

let table = new HashTable(5);
table.set('cats', 'are fine');
table.set('i love', 'pizza');
table.set('more', 'requests');
table.set('collide', 'please');
table.set('why', 'please');
