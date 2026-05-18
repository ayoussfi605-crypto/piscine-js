import { readdir } from "node:fs/promises";

const guests = process.argv[2] || "."
try{
    const read = await readdir(guests);
    let result;

 let x = read.map((elm) =>{      
            let name = elm.split('.')[0]
           result = name.split('_').reverse().join(' '); 
           return result 
        }).sort()

        let count = 0
   let a = x.map((el) =>{
        count++
         let f =`${count}. ${el}` 
         console.log(f);
         return f
    }) 

}catch(err){
    console.log(err);

}
