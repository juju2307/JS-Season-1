// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
    document.getElementById("run").addEventListener("click", function() {
        let numbers = [];
        for (a = 1; a <= 10; a++){
        let n = Math.floor(Math.random() *100);
        numbers.push(n);
      }
      numbers.forEach(function(item, index) {
          document.getElementById("n-" + (index +1)).innerHTML = item;
      });
      let minimum = Math.min(...numbers);
      document.getElementById("min").innerHTML = minimum;
      let maximum = Math.max(...numbers);
      document.getElementById("max").innerHTML = maximum;
      let somme = numbers.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue
      }, 0);
      document.getElementById("sum").innerHTML = somme;
        let moyenne = somme / numbers.length;
        document.getElementById("average").innerHTML = moyenne;
    });
})();
