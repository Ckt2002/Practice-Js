const inputStr = "oneTwoThree";

function countWords(input) {
    let countedWords = 0;
    let countLetters = 0;

    for (const lt of input) {
        if (checkLetter(lt)) {
            countLetters++;
            continue;
        }
        if (countLetters > 0) {
            countedWords++;
            countLetters = 0;
        }
    }

    if (countLetters > 0) {
        countedWords++;
        countLetters = 0;
    }

    return countedWords;
}

function checkLetter(letter) {
    return letter >= 'a' && letter <= 'z'
}

console.log(countWords(inputStr));