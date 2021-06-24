
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

 

    document.getElementById("addition").addEventListener("click", function() {
       
     let number1 = Number(document.getElementById("op-one").value);
     let number2 = Number(document.getElementById("op-two").value);
     let sum = number1 + number2;
        alert(sum);
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let number1 = Number(document.getElementById("op-one").value);
        let number2 = Number(document.getElementById("op-two").value);
        let sub = number1 - number2;
        alert(sub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let number1 = Number(document.getElementById("op-one").value);
        let number2 = Number(document.getElementById("op-two").value);
        let mult = number1 * number2;
        alert(mult);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let number1 = Number(document.getElementById("op-one").value);
        let number2 = Number(document.getElementById("op-two").value);
        let divi = number1 / number2;
        alert(divi);
    });
})();
