
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
    let n = document.getElementById("number").value;
    //let answer = factorial(n);
      function factorial(n) {
    
        if (n === 0) {
            return 1;
        }else {
            return n * factorial(n-1);
        }
    }
    alert(factorial(n));
});
        
       

})();
