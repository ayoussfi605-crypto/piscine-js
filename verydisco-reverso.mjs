import { readFile } from "node:fs/promises";

const file = process.argv[2];

try {
    const content = await readFile(file, "utf-8");

    const result = content
        .split(" ")
        .map(word => {
            const mid = Math.floor(word.length / 2);
            return word.slice(mid) + word.slice(0, mid);
        })
        .join(" ");

    console.log(result);

} catch (err) {
    console.error(err);
}