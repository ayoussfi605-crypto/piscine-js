
function indexOf(arr, values){
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i] == values){
            return i
        }
    }
        return -1
};

function lastIndexOf(arr, values){
    for (let i = arr.length-1 ; i >= 0 ; i--){
        if (arr[i] == values){
            return i
        }
    }
        return -1
}

function includes(arr, values){
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i] == values){
            return true
        }
    }
        return false
}
