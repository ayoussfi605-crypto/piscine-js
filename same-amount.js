
function sameAmount(str , rgx1, rgx2){
    let res = ""
    res = str.match(rgx1).length === str.match(rgx2).length
    console.log(str.match(rgx1).length);
    if (str === null){
        return false
    }
    return res
}
