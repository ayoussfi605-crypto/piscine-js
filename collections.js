
let arr =  {a : 1 , b : 2, s : 3}

const arrToSet = (arr) => new Set(arr)
const arrToStr = (arr) => arr.join("")
const setToArr = (set) => ([...arr])
const strToArr = (str) => arr.split('')
const strToSet = (str) => new Set([...arr])
const mapToObj = (map) => Object.fromEntries(arr)
const objToArr = (obj) => Object.values(arr)
const objToMap = (arr) => Object.fromEntries(arr)

console.log(objToArr(arr));
