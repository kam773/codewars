function incrementString (strng) {
    // return incrementedString
   var string = strng.replace(/[0-9]/g, '');

   var len = strng.length  - string.length;

   var str = strng.slice(string.length) || "0";

   str = (parseInt(str) + 1).toString();

   while (str.length < len) {
     str = "0" + str;
   }

 return string.concat(str);
}