function deepCopy(arg){
    if (Array.isArray(arg)){
        let result = []
        for (let value of arg){
            result.push(deepCopy(value))
        }
        return result
    }else if(typeof arg === "object" && !(arg instanceof RegExp)){
        let result = {}
        for (let key in arg){
            let value = arg[key]
            result[key] = value 
        }
        return result
    }else{
        return arg
    }
}

