// function sign(nbr) {
//     if (nbr == 0){
//         return 0
//     }else if (nbr > 0){
//         return 1
//     }
// }

// const sign = (nbr) => {
//     if (nbr == 0){
//         return 0
//     }
//     return  (nbr > 0 ? 1 : -1);
// }

const sign = nbr => nbr === 0 ? 0 : (nbr > 0 ? 1 : -1) 

const sameSign = (a,b) => (a < 0 && b < 0) || (a > 0 && b > 0) ? true : false;

