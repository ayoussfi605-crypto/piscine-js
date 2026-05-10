import { styles } from './pimp-my-style.data.js'


let count = 0
let isAdding = true
export function pimp() {
    let button = document.querySelector(".button")
    
    // when to add a classes
    if (isAdding) {

        button.classList.add(styles[count])
        count++


        // when to decide to add classes
        if (count === styles.length) {
            isAdding = false

        }
        // when to remove a classes
    } else {
        count--
        button.classList.remove(styles[count])


        if (count === 0) {
            isAdding = true
        }
    }

    button.classList.toggle("unpimp", !isAdding)
}


