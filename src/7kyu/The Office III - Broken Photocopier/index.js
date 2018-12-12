function broken(x){
    return x.split("").map(el => el == "1"? el = "0" : el = "1").join("");
}