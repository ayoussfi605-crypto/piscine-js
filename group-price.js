function groupPrice(str) {
  const regex = /(\$|USD|EUR)(\d+)\.(\d{2})/g;
  const result = [];

  let match;

  while ((match = regex.exec(str)) !== null) {
    result.push([match[0], match[2], match[3]]);
  }

  return result;
}