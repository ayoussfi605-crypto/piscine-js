const filter = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) newArr.push(arr[i]);
  }
  return newArr;
};

const reject = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) newArr.push(arr[i]);
  }
  return newArr;
};

const partition = (arr, fn) => [filter(arr, fn), reject(arr, fn)];
