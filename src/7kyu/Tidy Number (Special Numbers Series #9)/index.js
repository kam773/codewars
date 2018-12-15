function tidyNumber(n){
    let sorted = n.toString().split("").sort().join("");
     if(String(n) === sorted) {
        return true;

    } else {
        return false;
    }

}