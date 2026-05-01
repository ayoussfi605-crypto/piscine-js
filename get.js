

function get(src, path){
    const patharr = path.split('.')
    let res = src 
    for(let i = 0 ; i < patharr.length ; i++){
        if (res === undefined){
            return undefined
        }
        res = res[patharr[i]]
    }
    return res
}
