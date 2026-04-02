const min = 1; const max = 10;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(min, max));