function firstDayWeek(week, year) {
  // 1. Cree date f 1 Jan dyal dak l-3am
  let date = new Date(year, 0 , 1)
  //kankonou sur 100% bli l-3am ghadi ykon exactement dakchi li bghina.
  date.setFullYear(year) 

  // 2. Ila bghina Week 1, hiya dima 01-01 (hasab l-matloub)
   if (week === 1) return `01-01-${year.padStart(4, '0')}`

  // 3. Zid l-iyam: (week - 1) * 7
  date.setDate(date.getDate() + (week - 1) * 7)

  // 4. Rje3 lor hta tlqa Monday (getDay === 1)
  // Kandiru check dyal year bach may-rj3sh l-3am li fat
  while(date.getDay() !== 1 && date.getFullYear() >= year){
    date.setDate(date.getDate() -1)
  }
  
  // 5. Ila rje3na l-3am li fat b-l-ghalat, rje3ha l-wl d-l-3am
  // if (date.getFullYear() < year) {
  //   date = new Date(year, 0, 1)
  //   date.setFullYear(year)
  // }

  // 6. Rajje3ha string dd-mm-yyyy
  let dd = String(date.getDate()).padStart(2 , '0')
  let mm = String(date.getMonth() + 1).padStart(2, '0')
  let yyyy = String(date.getFullYear()).padStart(4, '0')
  return `${dd}-${mm}-${yyyy}`
}
console.log(firstDayWeek(4,"2001"));
