
const sameSign = (a, b) => (a < 0 && b < 0) || (a > 0 && b > 0);

function multiply(a,b){
    const negative = !sameSign(a, b);
    if (a < 0) a = -a
    if (b < 0) b = -b;

    let res = 0
    let cont = 0
    while (cont < b){
        res = res + a
        cont++;
    }   
    if (negative){
      res = -res;
    }
    
   return res;
}


function divide(a,b){

     if (b == 0){
        return
    }

    const negative = (!sameSign(a, b));
    if (a < 0) a = -a;
    if (b < 0) b = -b;

    let cont = 0

    while (a >= b) {
        a = a - b;
        cont++;
    }
        

    return negative ? -cont : cont;
};


function modulo(a,b){

    const negative = (!sameSign(a, b))

    if (a < 0) a = -a;
    if (b < 0) b = -b; 

    if (b == 0){
        return
    }
    let res = a  
    while (res >= b){
        res = res - b
    }   
    return negative ? res : -res;
};
