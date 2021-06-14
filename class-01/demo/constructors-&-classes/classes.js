'use strict';

class Animal {

    constructor(name, legs, movement) {
        this.name = name;
        this.legs = legs;
        this.movement = movement;
    }

    move() {
        console.log(`it moves by ${this.movement}`);
    }

    eat() {
        console.log('the animal eats');
    }
}

class Cat extends Animal {

    constructor(names, legs, type) {
        super(names, legs, movement);
        this.type = type;
    }

    sound() {
        console.log(' the cat meows');
    }
}

// const mishMish = new Animal('Mish Mish', 4, 'walk');
const mishMish = new Cat('Mish Mish', 4, 'orange Tabby');

console.log(mishMish);
mishMish.eat();
mishMish.sound();