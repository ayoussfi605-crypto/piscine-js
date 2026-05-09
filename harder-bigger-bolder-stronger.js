export function generateLetters(){
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0 ; i < 120; i++){
        let div = document.createElement("div")
        let randomindx = Math.floor(Math.random() * alphabet.length)
      div.textContent = alphabet[randomindx]
      div.style.fontSize = `${i+11}px`
      if(i < 40){
        div.style.fontWeight = "300"
      }else if(i < 80){
        div.style.fontWeight = "400"
      }else{
        div.style.fontWeight = "600"
      }
    document.body.append(div)
  }
}