// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    let keys = ["name", "species", "age", "gender", "color"];
    let values = ["Skitty", "cat", 9, "female", "tabby"];
    document.getElementById("run").addEventListener("click", () => {
      let obj = {};
      keys.forEach((key, i) => obj[key] = values[i]);
         console.log(obj);
    })
})();
