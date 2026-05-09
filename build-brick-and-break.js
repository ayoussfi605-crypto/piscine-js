let count = 1;

export const build = (amount) => {


    const interval = setInterval(() => {

        const brick = document.createElement("div");

        brick.id = `brick-${count}`


        if (count % 3 === 2) {
            brick.dataset.foundation = 'true';
        }

        document.body.append(brick);

        if (count === amount) {
            clearInterval(interval);
        }
        count++
    }, 100)
};

export const repair = (...ids) => {
    ids.forEach((id) => {
        let b = document.getElementById(id)
        if (b == null) {
            return
        }
        if (b.hasAttribute("data-foundation")) {
            b.dataset.repaired = "in progress"
        } else {
            b.dataset.repaired = "true"
        }
    })

};



export const destroy = () => {
    if (count === 1) {
        return
    }
    count--
    let lastbreak = document.querySelector("#brick-" + count)
    lastbreak.remove()
};







