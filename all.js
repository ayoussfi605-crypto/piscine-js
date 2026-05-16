function all(obj){
    const keys = Object.keys(obj)

    if(keys.length === 0){
        return Promise.resolve({})
    }
    return new Promise((resolve, reject) =>{
        const result = {};
        let remaining = keys.length;
        keys.forEach((key) =>{
            Promise.resolve(obj[key]).then(value =>{
                result[key] = value;
                remaining--;
                if(remaining === 0){
                    resolve(result);
                }
            }).catch(err =>{
                reject(err)
            });
        });
    });
}