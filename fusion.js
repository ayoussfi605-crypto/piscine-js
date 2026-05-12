function fusion(a, b) {
  let res = {};
  let keys = new Set([...Object.keys(a), ...Object.keys(b)]);

  for (let key of keys) {

    // TYPE MISMATCH → take b and STOP
    if (typeof a[key] !== typeof b[key]) {
      res[key] = b[key] !== undefined ? b[key] : a[key];
      continue;
    }

    // ARRAY
    if (Array.isArray(a[key]) && Array.isArray(b[key])) {
      res[key] = [...a[key], ...b[key]];
    }

    // NUMBER
    else if (typeof a[key] === "number") {
      res[key] = a[key] + b[key];
    }

    // STRING
    else if (typeof a[key] === "string") {
      res[key] = a[key] + " " + b[key];
    }

    // OBJECT (RECURSIVE)
    else if (
      typeof a[key] === "object" &&
      a[key] !== null &&
      b[key] !== null &&
      !Array.isArray(a[key]) &&
      !Array.isArray(b[key])
    ) {
      res[key] = fusion(a[key], b[key]);
    }

    else {
      res[key] = a[key] !== undefined ? a[key] : b[key];
    }
  }

  return res;
}