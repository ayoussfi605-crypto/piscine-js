const adder = (arr, initial = 0) => 
  arr.reduce((acc, curr) => acc + curr, initial);

const sumOrMul = (arr, initial = 0) => 
  arr.reduce((acc, curr) => (curr % 2 === 0 ? acc * curr : acc + curr), initial);

const funcExec = (funcs, initial) => 
  funcs.reduce((acc, func) => func(acc), initial);