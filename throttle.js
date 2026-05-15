function throttle(fn, wait){
    let timeout;
   return function(...arg){
    //clearTimeout(timeout)
    if (!timeout){
        fn(...arg)
    }
     timeout = setTimeout(() =>
         timeout = null
     ,wait);
    } 
}


// function opThrottle(fn, wait, option = { leading: true }){

// }