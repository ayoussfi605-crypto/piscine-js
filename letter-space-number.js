

function letterSpaceNumber(str){
    const rgx = /\w\s\d(?!\w)/g
    let arr = str.match(rgx)
    if (arr === null){
        return []
    }
    return arr
}
