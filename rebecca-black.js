function isFriday(date){
   
   return date.getDay() === 5 ?  true : false
}

function isWeekend(date){
   let wk = new Date(date).getDay()
   
   return wk === 6 ||wk === 0 ?  true : false
}

function isLeapYear(year){
   let yr = new Date(year).getFullYear()
   
   return yr % 4 === 0 && (yr % 100 !== 0 || yr % 400 === 0)?  true : false
}


function isLastDayOfMonth(date) {
let tm = new Date(date)
tm.setDate(tm.getDate() + 1)

return tm.getDate() === 1 ? true : false;

}


