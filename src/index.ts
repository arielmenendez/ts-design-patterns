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
