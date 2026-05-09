export const getArchitects = () => {
    let arc = [...document.getElementsByTagName("a")]
    let nonarc = [...document.getElementsByTagName("span")]  
    return [arc, nonarc]
}

export const getClassical = () => {
    let cls = [...document.querySelectorAll("a.classical")]
    let noncls = [...document.querySelectorAll("a:not(.classical)")]
    return [cls, noncls]
}

export const getActive = () => {
    let actv = [...document.querySelectorAll("a.classical.active")]
    let noactv = [...document.querySelectorAll("a.classical:not(.active)")]
    return [actv, noactv]
}
export const getBonannoPisano = () => {
    let bonanno = [...document.getElementById("BonannoPisano")]
    let remainingActives = [...document.querySelectorAll("a.classical.active:not(#BonannoPisano)")]
    return [bonanno, remainingActives]
}


