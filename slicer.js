
function slice(arr, start, end){

    const type = typeof arr === "string"
    if (end === undefined){
        end = arr.length
    }
    if (start < 0){
       start = arr.length + start
   }
    if (end < 0){
        end = arr.length + end
    }
    
    let slc = []
    if (type){
         slc = ""
    }
    for(let i = start ; i < end ; i++){
        if (!type){
            slc.push(arr[i])
        }
        if (type){

            slc += arr[i]
        }
    }
    return slc
}
console.log(slice(arr, 2))