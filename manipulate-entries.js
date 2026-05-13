
const filterEntries = (obj, fn) => {
  let ent = Object.entries(obj);
  let res = ent.filter(fn)
  //   let res = [];
  //   for (let [k, v] of ent) {
  //     if (fn([k,v])) res.push([k, v]);
  //   }
  
  return Object.fromEntries(res);
};

const mapEntries = (nutrients, fn) => {
      let ent = Object.entries(nutrients);
      let a = ent.map(fn)
      return Object.fromEntries(a);
    };

    const reduceEntries = (nutrients, fn, st)=>{
        let ent = Object.entries(nutrients);
        if (st !== undefined){
            return ent.reduce(fn, st)
        }else{
            return ent.reduce(fn)            
        }
    }
//----------------------------------------------------------------------

function totalCalories(ob) {
  return reduceEntries(
    ob,
    (acc, [key, gr]) =>
      Math.round((acc + nutritionDB[key].calories * (gr / 100)) * 10) / 10,
    0);
}

function lowCarbs(ob) {
  return filterEntries(ob, ([key, gr]) => nutritionDB[key].carbs * (gr/100) < 50);
}

function cartTotal(ob) {
    return mapEntries(ob, ([key, gr]) => {
        const ntr = mapEntries(nutritionDB[key], ([nt, val]) => [nt, Math.round(val * (gr / 100)*1000)/1000])
        return [key,ntr]
    })
}

// const nutritionDB = {
//   tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//   vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//   oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//   onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//   garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//   paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//   sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//   orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }