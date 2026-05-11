
function pick(obj,arrstr){
    let arr = typeof arrstr === "string" ? arrstr.split(' ') : arrstr
    
    let pk = {}
    let kys = Object.keys(obj)
    for(let i = 0 ; i < kys.length; i++){
        arr.includes(kys[i]) ? pk[kys[i]] = obj[kys[i]] : pk
    }
    return pk

}

function omit(obj,arrstr){
    let arr = typeof arrstr === "string" ? arrstr.split(' ') : arrstr
    
    let om = {}
    let kys = Object.keys(obj)
    for(let i = 0 ; i < kys.length; i++){
        !arr.includes(kys[i]) ? om[kys[i]] = obj[kys[i]] : om
    }
    return om

}
