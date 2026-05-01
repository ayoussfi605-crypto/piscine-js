
let arr = ['ee', 'ff', 'g', '']


function split(str, sep){

    if(sep === ''){
        let arr = []
    for(let i = 0 ; i < str.length ; i++){
                arr.push(str[i])
            }
            return arr
    }

    let arr = []
    let res = ""
     while(str.length > 0){
        let indx = str.indexOf(sep)
        if(indx === -1){
            arr.push(str)
            break
        }
        res = str.slice(0, indx)
        arr.push(res)
        str = str.slice(indx + sep.length)
     }
        
     if (str === ""){
         arr.push("")
        }
        return arr
}



function join(arr, sep){
    let res = ""
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === arr[arr.length-1]){
            res += arr[i] 
        }else{
            res+= arr[i] +sep
        }
    }
    return res
}
console.log(join(arr, ','));