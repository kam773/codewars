const rotateToMax = n => {
    const split = n.toString().split("");
          const sort = split.sort(function(a, b){
              return b - a;
          })
          const result = sort.join("");
          const number = Number(result);

   return number;
 }