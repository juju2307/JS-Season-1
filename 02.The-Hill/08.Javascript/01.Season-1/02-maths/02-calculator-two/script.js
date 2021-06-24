
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        const number1 = Number(document.getElementById("op-one").value);
        const number2 = Number(document.getElementById("op-two").value);
        let result;
     
        switch (operation) {
            case "addition" :
               result = number1 + number2;
               alert(result);
               break
               
            case "substraction" :
                result = number1-number2;
                alert(result);
                break
            case "multiplication" :
               result = number1*number2;
                alert(result);
                break
            case "division" :
               result = number1/number2;
               alert(number1/number2);
               break
            default :
               alert(0);
               break
        }
    }
       
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
