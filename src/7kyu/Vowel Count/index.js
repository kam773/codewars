function getCount(str) {
    var vowelsCount = 0;
    let string = str.split("");
    for(let i = 0; i < string.length; i++) {
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
              vowelsCount++;
        }
    }

    return vowelsCount;
}