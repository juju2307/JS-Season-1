// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    document.getElementById("run").addEventListener("click", function() {
   let rrace = Math.floor(Math.random() * birds.length);
   let race = birds[rrace];
   let items = Array.from(adjectives);
   let radj = Math.floor(Math.random() * items.length);
   let adj = items[radj];

   if (race.fem == true) {
       adj += "e";
      alert(document.getElementById("target").innerHTML = "La"+ " " + race.name + " " + adj);
   }
   else{
       alert(document.getElementById("target").innerHTML = "Le" + " " + race.name + " " + adj);
   }
    });
 
})();
