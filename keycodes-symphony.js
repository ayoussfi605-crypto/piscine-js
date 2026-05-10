export function compose() {
    document.addEventListener("keydown", (event) => {

        let all = document.querySelectorAll(".note")
        if (event.key === "Backspace") {
            if (all.length > 0) {
                all[all.length - 1].remove()
            }
        }

        if (event.key >= 'a' && event.key <= 'z') {
            let div = document.createElement("div")
            div.textContent = event.key
            div.classList.add("note")
            div.style.backgroundColor = `hsl(${event.key.charCodeAt(0) % 90}, 90%, 60%)`;
            document.body.append(div)
        }

        if (event.key == "Escape") {
            all.forEach(div => {
                div.remove()
            })
        }
    })
}