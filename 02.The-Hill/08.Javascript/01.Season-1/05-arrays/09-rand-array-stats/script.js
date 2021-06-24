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
      })
        
    });
})();
