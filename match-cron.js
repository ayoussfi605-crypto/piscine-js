function matchCron(cron, date){
    const [minute, hour, dayofmonth, monthofyear, dayofweek] = cron.split(' ')

        if (minute !== '*' && parseInt(minute) !== date.getMinutes()){      
                return false
        }
        if (hour !== '*' && parseInt(hour) !== date.getHours()){      
                return false
        }
        if (dayofmonth !== '*' && parseInt(dayofmonth) !== date.getDate()){      
                return false
        }
        if (monthofyear !== '*' && parseInt(monthofyear) !== date.getMonth()+1){      
                return false
        }
        if (dayofweek !== '*' && parseInt(dayofweek) !== date.getDay()){      
                return false
        }
        return true
    }
    
