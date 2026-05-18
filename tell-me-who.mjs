import { readdir } from "node:fs/promises";

const guests = process.argv[2] || "."
try{
    const read = await readdir(guests);
    let result;
    // read.forEach((elm, indx) =>{      
    //         let name = elm.split('.')[0]
    //         let [firstname, lastname] = name.split('_');
    //        result += `${indx+1}. ${lastname} ${firstname}` ;         
    // })


    read.map((elm) =>{      
            let name = elm.split('.')[0]
           result += name.split('_').reverse().join(' ');   
        })
        console.log(result);

     
    
}catch(err){
    console.log(err);
    
}
