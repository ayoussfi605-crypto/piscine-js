import { readdir } from "node:fs/promises";

const file = process.argv[2] || "."

try{
    const read = await readdir(file);

    console.log(read.length);
}catch(err){
    console.log(err);
}

