

function sameAmount(str , rgx01 , rgx02){
    let r1 = new RegExp(rgx01.source, "g")
    let r2 = new RegExp(rgx02.source, "g")
    let res = Boolean
    res = str.match(r1)?.length === str.match(r2)?.length 
    if (str === null){
        return false
    }
    return res
}

