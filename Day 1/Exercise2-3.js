const arr = [1, 2, 3, "a", 3.455, "jsdfu"]

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * ((arr.length - 1) + 1));
    console.log(arr[randomIndex]);
}

getRandomElement(arr)