import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = clas => {
    const style = document.createElement("style")
    colors.forEach(clr => {
        style.textContent += `
.${clr} {
    background: ${clr};
   }`
    });
    document.head.append(style)

}

export const generateColdShades = shades =>{
    const c = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    colors.forEach(clr =>{
        c.forEach(el => {
            if (clr.includes(el)){
               const div = document.createElement("div")
               div.classList.add(clr)
               div.textContent = clr
               document.body.append(div)
            }
        });
    })
}

export function choseShade(shade){
    const alldivs = document.querySelectorAll("div");
    alldivs.forEach(dv => {
        if (dv.classList.length === 1) {
            dv.className = (shade)
        }
    });
}

