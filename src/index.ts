// Interface Segregation Principle

interface CanWalk {
  walk(distance: number): void;
}

interface CanSwim {
  swim(distance: number): void;
}

interface Animal extends CanWalk, CanSwim {
  eat(): void;
  sleep(): void;
}

class Dog implements CanWalk, Animal {
  walk(distance: number): void {
    console.log(`Dog walks ${distance} meters`);
  }

  swim(distance: number): void {
    console.log(`Dog swims ${distance} meters`);
  }

  eat(): void {
    console.log('The dog is eating');
  }

  sleep(): void {
    console.log('The dog is sleeping');
  }
}

class Fish implements CanSwim {
  swim(distance: number): void {
    console.log(`The fish is swiming ${distance} meters`);
  }
}

// Decorator Pattern

interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

class ComponentDecorator extends Decorator {
  public operation(): string {
    return `ComponentDecorator(${super.operation()})`;
  }
}

const component = new ConcreteComponent();
const decorator = new ComponentDecorator(component);
console.log(decorator.operation()); // ComponentDecorator(ConcreteComponent)
