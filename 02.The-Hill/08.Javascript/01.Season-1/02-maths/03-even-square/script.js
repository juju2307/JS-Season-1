
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
 let number = 1
        // your code here
while(number <= 21) {
    number++
    let squaredNumber = parseInt(Math.sqrt(number));
    alert(squaredNumber);
}

    });

})();
