async function isWinner(country){
    let winner;
    try{
        winner = await db.getWinner(country)
    }catch(err){
        return `${country} never was a winner`;
    }

    if(winner.continent !== "Europe"){
        return `${country} is not what we are looking for because of the continent`
    } 

    let result;
    try{
        result = await db.getResults(winner.id);
        
    }catch(err){
         return `${country} is not what we are looking for because of the number of times it was champion`
    } 
    if(result.length < 3){
        return `${country} is not what we are looking for because of the number of times it was champion`
    }
    const year = result.map(r => r.year).join(", ")
    const score = result.map(r => r.score).join(", ")
    
     return `${country} won the FIFA World Cup in ${year} winning by ${score}`
}

