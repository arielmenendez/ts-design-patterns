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
console.log(decorator.operation());
