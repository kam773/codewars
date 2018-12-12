function makePassword(phrase) {
    let pass = [];
    phrase.split(" ").forEach(el => pass = pass + el.slice(0, 1));
    return pass.replace(/i|I/gi, "1").replace(/o|O/gi, "0").replace(/s|S/gi, "5")
}