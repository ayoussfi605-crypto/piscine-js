const map = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i, arr));
  }
  return newArr;
};

const flatMap = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i], i, arr); 

    if (Array.isArray(result)) {
      newArr.push(...result);
    } else {
      newArr.push(result);
    }
  }
  return newArr;
};
