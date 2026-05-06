function countLeapYears(date){
    const d = new Date(date)
    let x = d.getFullYear()
    let cont = 0
    for(let i = 1; i < x; i++){
       if((i % 4 === 0 && i % 100 != 0 || i % 400 === 0)){
        cont++
       }
        
    }

    return cont
}

