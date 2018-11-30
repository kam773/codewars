function toCamelCase(str){
    let Array;
    if(str === "") {
    return "";
    }
    if(str.indexOf("-") !== -1) {
       Array = str.split("-")
    }  else {
       Array = str.split("_")
    }

    let ccLetter = Array[0];

    for(let i = 1; i < Array.length; i++) {
      ccLetter += capitalize(Array[i]);
    }
    return ccLetter;
  }

  const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}