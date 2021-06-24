
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    function getDateTime() {
        var now     = new Date(); 
        var hour    = now.getHours(); 
       if(hour < 18){  
          document.getElementById('target').innerHTML = "Hello";
       }
       else {
             document.getElementById('target').innerHTML = "Good evening";
        }
    }
  getDateTime()

})();
