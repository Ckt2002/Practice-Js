const inputFileName = "Sound.mp3";

function getExtension(file) {
    let ex = '';
    for (let index = file.length; index >= 0; index--) {
        if (file[index] === ".")
            break;
        // if (ex) {
        ex += file[index] + ex;
        //     s
    }
    console.log(ex);
}

getExtension(inputFileName);