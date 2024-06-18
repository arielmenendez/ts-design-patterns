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

// Singleton Pattern

class Database {
  private static instance: Database;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public query(query: string): void {
    console.log(`Executing query: ${query}`);
  }
}

const db = Database.getInstance();
db.query('Manage this');

// Adapter Pattern

interface OldJoystick {
  connectToPort(): void;
  readInputs(): number;
}

class OldJoystickImp implements OldJoystick {
  public connectToPort(): void {
    console.log('Connecting to port');
  }

  public readInputs(): number {
    console.log('Reading the old joystick inputs');
    return Math.floor(Math.random() * 256);
  }
}

interface USBJoystick {
  connectToUSB(): void;
  readData(): number;
}

class USBJoystickImp implements USBJoystick {
  public connectToUSB(): void {
    console.log('Connecting to usb');
  }

  public readData(): number {
    console.log('Reading from USB');
    return Math.floor(Math.random() * 256);
  }
}

class JoystickAdapter implements USBJoystick {
  constructor(private oldJoystickImp: OldJoystickImp) {}

  public connectToUSB(): void {
    this.oldJoystickImp.connectToPort();
  }

  public readData(): number {
    return this.oldJoystickImp.readInputs();
  }
}

const oldJoystick = new OldJoystickImp();
const oldJoystickWithAdapter = new JoystickAdapter(oldJoystick);
