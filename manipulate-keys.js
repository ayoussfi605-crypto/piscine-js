const filterKeys = (nutrients, fn) => {
  let ent = Object.entries(nutrients);
  let res = [];
  let x = [];
  for (let [k, v] of ent) {
    if (fn(k)) res.push([k, v]);
  }

  return Object.fromEntries(res);
};

const mapKeys = (nutrients, fn) => {
  let ent = Object.entries(nutrients);
  let res = [];
  for (let [k, v] of ent) {
    res.push([fn(k), v]);
  }

  return Object.fromEntries(res);
};

const reduceKeys = (nutrients, fn, ini) => {
  let x = Object.keys(nutrients);
  if (ini !== undefined) {
    return x.reduce((acc, cr) => {
      return fn(acc, cr);
    }, ini);
  }
  return x.reduce((acc, cr) => {
    return fn(acc, cr);
  });
};
