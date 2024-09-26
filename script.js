class Animal {
    constructor(name, sound) {
        if (this.constructor === Animal) {
            throw new Error("Abstract class 'Animal' cannot be instantiated directly.");
        }
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        throw new Error("Method 'makeSound()' must be implemented.");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Woof");
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}!`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "Meow");
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}!`);
    }
}

const dog1 = new Dog("Rex");
const cat1 = new Cat("Whiskers");
const dog2 = new Dog("Buddy");

dog1.makeSound(); 
cat1.makeSound(); 
dog2.makeSound();