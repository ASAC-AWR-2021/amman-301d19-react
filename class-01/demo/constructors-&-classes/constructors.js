'use strict';

// constructors are models of our data (data model)
// data representation
// create new object

// lets creat an Animal construer

function Animal(name, legs, movement) { //pascal case
    this.name = name;
    this.legs = legs;
    this.movement = movement;
}

function Cat(name, legs, movement, type) {
    Animal.call(this, name, legs, movement);
    this.type = type;
}

Animal.prototype.move = function () {
    console.log(`it moves by ${this.movement}`);
}

Cat.prototype = Object.create(Animal.prototype);

const mishMish = new Cat('Mish Mish', 4, 'walk', 'orange Tabby');

console.log(mishMish);