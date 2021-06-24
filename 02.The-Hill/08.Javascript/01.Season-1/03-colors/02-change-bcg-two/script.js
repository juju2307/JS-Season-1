
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {
 
 document.getElementById("run").addEventListener("click", function() {
    let colors = document.getElementById("color").value;
    function changeColor (color) {
      document.body.style.backgroundColor = color;
    }
    changeColor(colors);
  });
    // your code here

})();
