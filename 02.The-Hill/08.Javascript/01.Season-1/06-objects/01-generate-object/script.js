// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    document.getElementById("run").addEventListener("click", function() {
    let people = {lastname:" Metz ", firstname: "Julie ", age: "46 ", city: "Gozée ", country: "Belgique "}
    alert("I am" + people.firstname + " " + people.lastname + " " + "i am" + " " + people.age + " " + "and i leave in " + people.city + " " + "in " + people.country);
    });
})();
