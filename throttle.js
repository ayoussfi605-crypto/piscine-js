
function throttle(fn, wait) {
    let timeout;
    return function (...arg) {
        if (!timeout) {
            fn(...arg)
        }
        timeout = setTimeout(() =>

            timeout = null
            , wait)
    }
}




function opThrottle(fn, wait, option = {}) {
    let timeout;
    return function(...arg){
        if(option.leading){
            if(!timeout){
                fn(...arg)
                timeout = setTimeout(() => 
                    timeout = null 
                , wait)

            }
        }else if(option.trailing){
            if(timeout){
                fn(...arg)
            }
            timeout = setTimeout(() => 
                timeout = null 
            , wait)
        }
    }
} 
