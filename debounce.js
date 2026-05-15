function debounce(fn, wait){
    let timeout;
   return function(...arg){
    clearTimeout(timeout)
     timeout = setTimeout(() =>
         fn(...arg)
     ,wait);
    } 
}



function opDebounce(fn, wait, option ={}){
let timeout;
return function(...arg){
    if(!timeout && option.leading === true){
        fn(...arg)
    }
 clearTimeout(timeout)
     timeout = setTimeout(() =>
         fn(...arg)
     ,wait);
    } 
}





