
function first(arr){
return arr[0]
}
function last(arr){
return arr[arr.length-1]
}

function kiss(arr){
    const ls = last(arr)
    const fr = first(arr) 
    return [ls,fr]
}
