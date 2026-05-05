function isValid(date){
if(date instanceof Date || typeof date === 'number') 
    return !isNaN(date);
} 
function isAfter(date1 , date2){
    return date1 > date2 
}
function isBefore(date1 , date2){
    return date1 < date2 
}
function isFuture(date){
    let ftr = new Date
    if(isValid(date) && date > ftr){
        return true
    }
    return false
}
function isPast(date){
    let Past = new Date
    return isValid(date) && date < Past
}
