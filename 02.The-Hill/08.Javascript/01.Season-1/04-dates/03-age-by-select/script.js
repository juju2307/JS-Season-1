
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
   
 document.getElementById("run").addEventListener("click", function() {
    let day = document.getElementById("dob-day").value;
    let month = document.getElementById("dob-month").value;
    let year = document.getElementById("dob-year").value;
    let birth = (year + month + day);
   

  function calculage() {
      let today = new Date();
      console.log(new Date());

      let age = today.getFullYear() - birth.getFullYear();
      let m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
      
  }
  alert(age);
}
});
})();
