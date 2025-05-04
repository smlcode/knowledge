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
const rex = new Dog('Rex', 'German Shepherd'); //new Dog object stored in heap.
const rex2 = rex; // create variable and set it to copy the rex variable's value which is a reference to the same Dog object.

makeSomeNoise(rex);
console.log(rex.bark());
console.log(rex.bark());
rex.name = 'Rexius'; //Changes rex and rex2.
console.log(rex.bark());
console.log(rex2.bark()); //same as rex2;

function makeSomeNoise(dog) {
    dog = new Dog('Mugi', 'Pom'); //does not change rex or rex 2
    console.log(dog.bark());
}