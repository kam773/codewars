function strong(n) {
    let ans = 0;
    String(n).split("").forEach(el => {
      let sum = 1;
      for(let i = el; i > 1; i--) sum = sum * i;
      ans = ans + sum;
    });
     return (ans != n) ? "Not Strong !!" : "STRONG!!!!";
}