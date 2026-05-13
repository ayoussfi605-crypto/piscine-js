
const nutrients = { carbohydrates: 12, protein: 20, fat: 5}

const filterValues = (nutrients, fn) => {
   let res = []
    let ent = Object.entries(nutrients)
    for(let [k,v] of ent){
    if (fn(v)) res.push([k,v]);
  }
   return Object.fromEntries(res)
};

const mapValues = (nutrients, fn) =>{
    let res = []
    let ent = Object.entries(nutrients)
    for(let [k,v] of ent){
        res.push([k, fn(v)])        
    }
    return Object.fromEntries(res)
}

const reduceValues = (nutrients, fn, ini=0) => {
    let acc = ini
    let ent = Object.entries(nutrients)
    for(let [k,v] of ent){
         acc = fn(acc, v) 
         console.log(acc);
         
    }
    return acc
};



// const filterValues = (nutrients, fn) => {
    // let res = []
    // let ent = Object.entries(nutrients)
    // for(let [k,v] of ent){
    //     if(v <= 12){
    //         res.push([k,v])
    //     }
    // }
    //  return Object.fromEntries(res)
// }

// function filterValues(nutrients){
//     let res = []
//     let ent = Object.entries(nutrients)
//     for(let [k,v] of ent){
//         if(v <= 12){
//             res.push([k,v])
//         }
//     }
//      return Object.fromEntries(res)
// }

// function mapValues(nutrients){
//     let res = []
//     let ent = Object.entries(nutrients)
//     for(let [k,v] of ent){
//         v+= 1
//         res.push([k,v])
//     }
//      return Object.fromEntries(res)
// }s, error:

// function reduceValues(nutrients){
//     let res = 0
//     let ent = Object.entries(nutrients)
//     for(let [k,v] of ent){
//        res += v
//     }
//      return res
// }
// console.log(reduceValues(nutrients));