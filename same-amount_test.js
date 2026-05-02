let rgx01 = /a/g
let rgx02 = /c/g

function sameAmount(str , rgx1, rgx2){


    res = str.match(rgx1).length === str.match(rgx2).length
    console.log(str.match(rgx1).length);
    if (str === null){
        return false
    }
    return res
}

console.log(sameAmount("aaabbbcc", rgx01 , rgx02));
