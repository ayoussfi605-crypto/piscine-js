const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday', 'Sunday',
  'secondMonday', 'secondTuesday', 'secondWednesday',
  'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
]

function addWeek(date) {
  const epoch = new Date('0001-01-01')

  const msDiff = date.getTime() - epoch.getTime()
  const daysDiff = msDiff / (1000 * 60 * 60 * 24)

  return days[daysDiff%14]
}

function timeTravel({ date, hour, minute, second }) {
  const newDate = new Date(date) 

  newDate.setHours(hour)
  newDate.setMinutes(minute)
  newDate.setSeconds(second)

  return newDate
}