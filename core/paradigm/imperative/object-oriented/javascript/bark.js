// Define a "Dog" class
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        return `${this.name} says: Woof!`;
    }
}

// Create an instance of the "Dog" class
const rex = new Dog('Rex', 'German Shepherd');
console.log(rex.bark()); // "Rex says: Woof!"