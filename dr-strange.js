
const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday', 'Sunday',
  'secondMonday', 'secondTuesday', 'secondWednesday',
  'secondThursday', 'secondFriday', 'secondSaturday',
  'secondSunday'
]


function addWeek(date) { 
  const epoch = new Date('0001-01-01') 
  const msDiff = date - epoch
  const daysDiff = (msDiff / (1000 * 60 * 60 * 24)) % 14 
  return days[daysDiff] 
}


function timeTravel({ date, hour, minute, second }){
  let newobj = new Date(date)
  newobj.setHours(hour) 
  newobj.setMinutes(minute)
  newobj.setSeconds(second)
  return newobj
}



