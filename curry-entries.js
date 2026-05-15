const defaultCurry = (obj1) => (obj2) => {
  return { ...obj1, ...obj2 };
};

const mapCurry = (fn) => (obj) => {
  const entries = Object.entries(obj);
  const mappedEntries = entries.map(([k, v]) => fn([k, v]));
  return Object.fromEntries(mappedEntries);
};

const reduceCurry = (fn) => (obj, initialValue) => {
  const entries = Object.entries(obj);
  return entries.reduce((acc, [k, v]) => fn(acc, [k, v]), initialValue);
};

const filterCurry = (fn) => (obj) => {
  const entries = Object.entries(obj);
  const filteredEntries = entries.filter(([k, v]) => fn([k, v]));
  return Object.fromEntries(filteredEntries);
};


const reduceScore = (personnelObj) => {
  const forceUsers = filterCurry(([k, v]) => v.isForceUser)(personnelObj);
  return reduceCurry((acc, [k, v]) => acc + v.pilotingScore + v.shootingScore)(forceUsers, 0);
};

const filterForce = (personnelObj) => {
  return filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)(personnelObj);
};

function mapAverage(personnel){
    const mapFunc = ([k, v])=>{
        v.averageScore = (v.pilotingScore + v.shootingScore) / 2
        return [k, v]
    }
    return mapCurry(mapFunc)(personnel)
}