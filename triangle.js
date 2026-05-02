

function triangle(str, nbr){
    let res = ""
    for(let i = 0 ; i < nbr; i++){
        let x = i
        while(x >= 0){
            res += str  
            x--
        }
        if(i !== nbr-1){
            res += "\n"
        }
    }
    return res
}

i*2 -1