// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {
    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", function() {


        fruits.shift(); 
      
        fruits.pop();

        fruits.splice(0,0,"banana");
      
        fruits.push("kiwi");
       
 
       alert(fruits);
 
    });

})();
