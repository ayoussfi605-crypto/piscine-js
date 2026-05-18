const args = process.argv
let s = args.slice(2);
 
    let result = [] ;
    s.forEach(element => {
        let x = Math.ceil(element.length / 2)
        let y = element.slice(x, element.length) + element.slice(0, x)
        result.push(y)
    });
    console.log(result.join(' '));
    

