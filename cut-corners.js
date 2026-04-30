const getInt = (num) => {
    let abs = num < 0 ? -num : num;
    let res = 0;

    let step = 1;

    while (step <= abs) {
        step *= 2;
    }

    step /= 2;

    while (step >= 1) {
        if (res + step <= abs) {
            res += step;
        }
        step /= 2;
    }

    return num < 0 ? -res : res;
};


function round(nbr){

const int = getInt(nbr)

let num = nbr - int 

const negative = (num) < 0 ? -num : num;

if(num < 0){

    if ( negative <= 0.5){
    
        return +(nbr - num)
    }
    return +(nbr - num + (-1))
}
    if ( negative <= 0.5){
    
        return nbr - num
    }
    return nbr - num + 1

return nbr
}


function floor(nbr){

   
const int = getInt(nbr)

let num = nbr - int 

   if (num !== 0){
    
    if (nbr < 0 && num < 0){
        return nbr - num -1
       }
       return (nbr - num) 
    }

    return nbr
}


function trunc(nbr){
    return getInt(nbr) 
}


function ceil(nbr){
    
    const int = getInt(nbr)
    let i = nbr - int
    
    if (i > 0){
        return nbr - i + 1
    }
    if (i < 0){
        return nbr - i 
    }
    return nbr 
}


