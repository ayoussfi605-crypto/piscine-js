function round(nbr){

   const int = modulo(nbr, 1)

const negative = (int) < 0 ? -int : int;

if(int < 0){

    if ( negative <= 0.5){
    
        return +(nbr - int)
    }
    return +(nbr - int + (-1))
}
    if ( negative <= 0.5){
    
        return nbr - int
    }
    return nbr - int + 1

return nbr
}

function floor(nbr){

   const int = modulo(nbr, 1)

   if (int !== 0){
    
    if (nbr < 0 && int < 0){
        return nbr - int -1
       }
       return (nbr - int) 
    }

    return nbr
}

function trunc(nbr){

   const int = modulo(nbr, 1)

   if (int !== 0){
        return nbr - int 
       }
       return nbr 
}

function ceil(nbr){

   const int = modulo(nbr, 1)

   if (int > 0){
        return nbr - int + 1
       }
    if (int < 0){
        return nbr - int 
       }
       return nbr 
}


function modulo(a,b){

    if (b == 0){
        return
    }

    const negative = a < 0;

    if (a < 0) a = -a;
    if (b < 0) b = -b; 

    let res = a ; 

    while (res >= b){
        res = res - b;
    }   
    return negative ? -res : res;
};
