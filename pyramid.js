

function pyramid(str,nbr){

    let res = ""
    let space = " ".repeat(str.length)
    for(let i = 1 ; i <= nbr ; i++){
         res += space.repeat(nbr-i) + str.repeat(i*2-1)
    
        if(i !== nbr){
            res += "\n"
        }
    }
    return res
}

