
function multiply(a,b){

    let res = 0
    let cont = 0
    while (cont < b){
       res = a+a
        cont++
    }   
   return res
};

function divide(a,b){

     if (b == 0){
        return
    }
    let cont = 0
    while (a > 0){
      a = a - b
      cont++
    }   
    return cont
};

function modulo(a,b){
    if (b == 0){
        return
    }
    let res = a  
    while (res >= b){
        res = res - b
    }   
    console.log(res);
};

// function modulo(a,b){
//      let res = 0  
//     while (a > 0){
//         if (a - b < 0){
//             res = a
//             break
//         } 
//        a = a - b
//     }   
// };