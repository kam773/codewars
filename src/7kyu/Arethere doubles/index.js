function doubleCheck(str){
    let regex = /([a-zA-Z0-9  !!??..,,])\1/gi;
    let tested = regex.test(str);
    if(tested) {
        return true;
    } else {
        return false;
  }
}