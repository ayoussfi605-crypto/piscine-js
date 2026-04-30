
function reverse(arr){

    const type = typeof arr === "string"
    let slc = []
    if (type){
         slc = ""
    }
    for(let i = arr.length-1 ; i >= 0; i--){
        
         if (!type){
            slc.push(arr[i])
        }
        if (type){

            slc += arr[i]
        }
    }
    return slc
}
