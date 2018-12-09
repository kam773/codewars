function removeNoise(str){
    let string = str.replace(/[%$&/#·@|º\\ª]/g, "");
    return string;

}