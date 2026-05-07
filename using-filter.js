
function filterShortStateName(arr){

    return arr.filter((st) => st.length < 7)
} 

function filterStartVowel(arr){

    return arr.filter((vw) => (/^a|o|e|u|i/gi).test(vw[0]) )
} 

function filter5Vowels(arr){
return arr.filter((word) =>{ 
 let count = 0;
 const vowl = "aouieAEUIO"

 for (let ar of word){
    if(vowl.includes(ar)){
        count++
    }
 } 
 return count >= 5
})
} 

function filter1DistinctVowel(arr) {
  return arr.filter((word) => {
    const vowelsMatch = word.toLowerCase().match(/[aeiou]/g);

    if (!vowelsMatch) return false;

    const distinctVowels = new Set(vowelsMatch);

    return distinctVowels.size === 1;
  });
}

function multiFilter(arrobj){
    return arrobj.filter((o) => o.capital.length >= 8 && !/^[aoiue]/i.test(o.name) && /[aoiue]/i.test(o.tag) && o.region != "South") 
}


