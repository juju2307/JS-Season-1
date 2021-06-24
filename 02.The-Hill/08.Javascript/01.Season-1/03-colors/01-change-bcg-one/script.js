
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {
  document.getElementById("red").addEventListener("click", function() {
      function changeColor (color) {
        document.body.style.backgroundColor = color;
      }
      changeColor("red");
    });
  
    document.getElementById("green").addEventListener("click", function() {
        function changeColor (color) {
          document.body.style.backgroundColor = color;
        }
        changeColor("green");
      });
      document.getElementById("yellow").addEventListener("click", function() {
        function changeColor (color) {
          document.body.style.backgroundColor = color;
        }
        changeColor("yellow");
      });
      document.getElementById("blue").addEventListener("click", function() {
        function changeColor (color) {
          document.body.style.backgroundColor = color;
        }
        changeColor("blue");
      });
})();
