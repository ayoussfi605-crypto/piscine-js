

function split(str, sep){
    let arr = []
    let res = ""
    for(let i = 0 ; i < str.length ; i++){
     
        if(str[i] !== sep){
        res += str[i]
        }
        if(str[i] === sep && res !== ""){ 
        arr.push(res)
        res = ""
    }
        
    }
    if(res !== ""){
        arr.push(res)
    }
    return arr
}

