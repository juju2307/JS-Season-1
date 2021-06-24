
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
 
  document.getElementById("run").addEventListener("click", function() {
    let year = document.getElementById("year").value;
    function numberOfFriday(year) {
    let count=0;
    for (let month=0; month<12; month++) {
      let d = new Date(year, month, 13);
      if (d.getDay() == 5) {
        count++;
      }
    }
      return count;
  
  }
   alert(numberOfFriday(year));
  

});
})();
