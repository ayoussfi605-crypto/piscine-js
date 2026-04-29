
// function indexOf(arr, values, indx){

//     if (indx === undefined){
//         indx = 0
//     } 
//     for (let i = indx ; i < arr.length ; i++){
//         if (arr[i] === values){
//             return i;
//         }
//     }
//         return -1;
// }

// function lastIndexOf(arr, values, indx){
//         if (indx === null){
//         indx = 0
//     }
//     for (let i = arr.length-1 ; i >= indx ; i--){
//         if (arr[i] == values){
//             return i
//         }
//     }
//         return -1
// }

// function includes(arr, values, indx){
//         if (indx === null){
//         indx = 0
//     }
//     for (let i = indx ; i < arr.length ; i++){
//         if (arr[i] == values){
//             return true
//         }
//     }
//         return false
// }

// console.log(indexOf([1,2,3,3], 3, 2));


function indexOf(arr, value, indx) {
    if (indx === undefined) {
        indx = 0;
    }

    for (let i = indx; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
}

function lastIndexOf(arr, value, indx) {
    if (indx === undefined || indx === null) {
        indx = arr.length - 1;
    }

    for (let i = indx; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
}

function includes(arr, value, indx) {
    if (indx === undefined) {
        indx = 0;
    }

    for (let i = indx; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }

    return false;
}