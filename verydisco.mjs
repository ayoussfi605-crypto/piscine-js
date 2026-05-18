const args = process.argv
let s = args.slice(2,3);
let y = [];
s.forEach(element => {
    
    y = y.concat(element.split(' '))
   
});


let result = [] ;
y.forEach(element => {
    let x = Math.ceil(element.length / 2)
    let a = element.slice(x, element.length) + element.slice(0, x)
    result.push(a)
});
console.log(result.join(' '));

