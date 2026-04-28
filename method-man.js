const words = (str) => str.split(" ");

function sentence (arr){
    let conv = arr.join(" ")
    return conv
};

const yell = (str) => str.toUpperCase();

const whisper = (str) => `*${str.toLowerCase()}*`;

const capitalize = (str) => str.charAt(0).toUpperCase()+ str.slice(1).toLowerCase();