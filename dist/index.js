"use strict";
// Interface Segregation Principle
class Dog {
    walk(distance) {
        console.log(`Dog walks ${distance} meters`);
    }
    swim(distance) {
        console.log(`Dog swims ${distance} meters`);
    }
    eat() {
        console.log('The dog is eating');
    }
    sleep() {
        console.log('The dog is sleeping');
    }
}
class Fish {
    swim(distance) {
        console.log(`The fish is swiming ${distance} meters`);
    }
}
class ConcreteComponent {
    operation() {
        return 'ConcreteComponent';
    }
}
class Decorator {
    constructor(component) {
        this.component = component;
    }
    operation() {
        return this.component.operation();
    }
}
class ComponentDecorator extends Decorator {
    operation() {
        return `ComponentDecorator(${super.operation()})`;
    }
}
const component = new ConcreteComponent();
const decorator = new ComponentDecorator(component);
console.log(decorator.operation()); // ComponentDecorator(ConcreteComponent)
// Singleton Pattern
class Database {
    constructor() { }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    query(query) {
        console.log(`Executing query: ${query}`);
    }
}
const db = Database.getInstance();
db.query('Manage this');
class OldJoystickImp {
    connectToPort() {
        console.log('Connecting to port');
    }
    readInputs() {
        console.log('Reading the old joystick inputs');
        return Math.floor(Math.random() * 256);
    }
}
class USBJoystickImp {
    connectToUSB() {
        console.log('Connecting to usb');
    }
    readData() {
        console.log('Reading from USB');
        return Math.floor(Math.random() * 256);
    }
}
class JoystickAdapter {
    constructor(oldJoystickImp) {
        this.oldJoystickImp = oldJoystickImp;
    }
    connectToUSB() {
        this.oldJoystickImp.connectToPort();
    }
    readData() {
        return this.oldJoystickImp.readInputs();
    }
}
const oldJoystick = new OldJoystickImp();
const oldJoystickWithAdapter = new JoystickAdapter(oldJoystick);
// Builder Pattern
var CharacterTypes;
(function (CharacterTypes) {
    CharacterTypes["MAGE"] = "mage";
    CharacterTypes["WARRIOR"] = "warrior";
    CharacterTypes["ROUGE"] = "rouge";
})(CharacterTypes || (CharacterTypes = {}));
class Character {
    constructor(name, classType) {
        this.name = name;
        this.classType = classType;
    }
    displayStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Class Type: ${this.classType}`);
        console.log(`Level: ${this.level}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Agility: ${this.agility}`);
        console.log(`Intelligence: ${this.intelligence}`);
        console.log(`Defense: ${this.defense}`);
    }
}
class CharacterBuilder {
    constructor(name, characterType) {
        this.character = new Character(name, characterType);
    }
    setLevel(level) {
        this.character.level = level;
        return this;
    }
    setStrength(strength) {
        this.character.strength = strength;
        return this;
    }
    setAgility(agility) {
        this.character.agility = agility;
        return this;
    }
    setIntelligence(intelligence) {
        this.character.intelligence = intelligence;
        return this;
    }
    setDefense(defense) {
        this.character.defense = defense;
        return this;
    }
    build() {
        return this.character;
    }
}
const warriorBuilder = new CharacterBuilder('Ariel', CharacterTypes.WARRIOR);
const warrior = warriorBuilder
    .setLevel(10)
    .setDefense(235)
    .setIntelligence(10)
    .setAgility(10)
    .setStrength(1000)
    .build();
warrior.displayStats();
