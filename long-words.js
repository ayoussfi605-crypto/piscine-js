function longWords(arr) {
  return arr.every((r) => r.length >= 5);
}

function oneLongWord(arr) {
  return arr.some((r) => r.length >= 10);
}

const noLongWords = (arr) => arr.every((r) => r.length < 7);
