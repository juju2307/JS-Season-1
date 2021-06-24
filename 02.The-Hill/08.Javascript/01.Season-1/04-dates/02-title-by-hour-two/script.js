
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {
    function getDateTime() {
        var now     = new Date(); 
        var hour    = now.getHours(); 
        var minutes = now.getMinutes();
       if(hour <= 17 &&  minutes < 30){  
          document.getElementById('target').innerHTML = "Hello";
       }
       else {
             document.getElementById('target').innerHTML = "Good evening";
        }
    }
  getDateTime()
    

    // your code here

})();
