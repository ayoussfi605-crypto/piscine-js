function throttle(fn, delay){
    let lastTime = 0
    return function (...args){
        let now = new Date()
        if (now - lastTime >= delay){
            lastTime = now
            fn(...args)
        }
    }
}


function opThrottle(fn, delay, options = {}) {
    let lastTime = 0
    let timerID = null

    return function (...args) {
    const now = Date.now()
    if (options.leading && now - lastTime >= delay) {
        lastTime = now
        fn(...args)
        return
    }

    if (options.trailing && !timerID) {
        if (lastTime === 0) lastTime = now

        const remaining = delay - (now - lastTime)

        timerID = setTimeout(() => {
        timerID = null
        lastTime = Date.now()
        fn(...args)
        }, remaining > 0 ? remaining : 0)
    }
    }
}