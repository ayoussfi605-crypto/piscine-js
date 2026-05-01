
function DNA(str){

   let dna ={
    'C' : 'G',
    'G' : 'C',
    'A' : 'T',
    'U' : 'A',
   } 

   let conv = ""

    for(let i = 0 ; i < str.length; i++){
        
        conv += dna[str[i]]
    }
    return conv
}


function RNA(str){

   let rna ={
    'G' : 'C',
    'C' : 'G',
    'T' : 'A',
    'A' : 'U',
   } 

   let conv = ""

    for(let i = 0 ; i < str.length; i++){
        
        conv += rna[str[i]]
    }
    return conv
}


