// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal{
        
        static greeting = "Miaou"
        constructor(name){
            super()
            this.name = name;  
        }
    }
    class Dog extends Animal {
       static greeting ="wouaf"
       constructor(name) {
           super()
           this.name = name;
       }
    }
    document.getElementById("run").addEventListener("click", () => {
      let cat1 = new Cat("Poussy");
      let dog1 = new Dog("Marcel");
      alert(cat1.sayHello());
      alert(dog1.sayHello());
    });
   
})();
