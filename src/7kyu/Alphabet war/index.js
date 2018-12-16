function alphabetWar(fight) {
    let left = {
        w: 4,
        p: 3,
        b: 2,
        s: 1
    };
    let right = {
        m: 4,
        q: 3,
        d: 2,
        z: 1
    };
    const resLeft = [...fight].reduce((total, char) => total + (left[char] || 0), 0);
    const resRight = [...fight].reduce((total, char) => total + (right[char] || 0), 0);

    if (resLeft === resRight) return "Let's fight again!";
    if (resLeft > resRight) return "Left side wins!";
    if (resLeft < resRight) return "Right side wins!";

}