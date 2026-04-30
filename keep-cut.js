
function cutFirst(str){
    let res = ""
    for(let i = 2 ; i < str.length; i++){
        res += str[i]
    }
    return res
}

function cutLast(str){
    let res = ""
    for(let i = 0 ; i < str.length-2; i++){
        res += str[i]
    }
    return res
}

function cutFirstLast(str){
    let res = ""
    for(let i = 2 ; i < str.length-2; i++){
        res += str[i]
    }
    return res
}

function keepFirst(str){
    let res = ""
    for(let i = 0 ; i < 2; i++){
       
            res += str[i]
        
        if (str.length === 1){
            res = str 
        }
    }
    return res
}

function keepLast(str){
    let res = ""
    for(let i = str.length-2 ; i < str.length; i++){

        res += str[i]
        
         if (str.length === 1){
            res = str 
        }
    }
    return res
}


function keepFirstLast(str){
    let res = ""
    for(let i = 0 ; i < str.length; i++){
        if (i > 1 && i < str.length-2){
            continue
        }
        res += str[i]
    }
    return res
}
