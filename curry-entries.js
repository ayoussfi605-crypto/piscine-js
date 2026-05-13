function defaultCurry(obj1) {
    return function (obj2) {
        const newObj = { ...obj2 }
        for (let key in obj1) {
            if (newObj[key] === undefined) {
                newObj[key] = obj1[key]
            }
        }
        return newObj
    }
}

function mapCurry(func) {
    return function (obj) {
        const objArr = Object.entries(obj)
        const mappedObjArr = objArr.map(func)
        const newObj = Object.fromEntries(mappedObjArr)
        return newObj
    }
}

function reduceCurry(func) {
    return function (obj, start) {
        const objArr = Object.entries(obj)
        let reducedValue
        if (start === undefined) {
            reducedValue = objArr.slice(1).reduce(func, objArr[0])
        } else {
            reducedValue = objArr.reduce(func, start)
        }
        return reducedValue
    }
}

function filterCurry(func) {
    return function (obj) {
        const objArr = Object.entries(obj)
        const filteredObjArr = objArr.filter(func)
        const newObj = Object.fromEntries(filteredObjArr)
        return newObj
    }
}

function reduceScore(personnel, start){
    const filterFunc = ([k, v]) =>{
        return v.isForceUser
    }
    const filteredObj = filterCurry(filterFunc)(personnel)
    const reduceFunc = (acc, [k, v]) =>{
        return acc + v.pilotingScore + v.shootingScore
    }
    const reducedValue = reduceCurry(reduceFunc)(filteredObj, start)
    return reducedValue
}

function filterForce(personnel){
    const filterFunc = ([k, v]) =>{
        return v.isForceUser && v.shootingScore >= 80
    }
    return filterCurry(filterFunc)(personnel)
}

function mapAverage(personnel){
    const mapFunc = ([k, v])=>{
        v.averageScore = (v.pilotingScore + v.shootingScore) / 2
        return [k, v]
    }
    return mapCurry(mapFunc)(personnel)
}












/* 
const result = mapAverage(personnel)
console.log(result) */