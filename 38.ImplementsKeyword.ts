// explain implements keyword in typescript

type Animal = {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    constructor(public name: string) {
    }
    makeSound() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog('Rex');
dog.makeSound(); // Woof! Woof!