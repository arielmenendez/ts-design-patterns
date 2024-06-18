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

// Builder Pattern

enum CharacterTypes {
  'MAGE' = 'mage',
  'WARRIOR' = 'warrior',
  'ROUGE' = 'rouge',
}

class Character {
  level!: number;
  strength!: number;
  agility!: number;
  intelligence!: number;
  defense!: number;
  constructor(private name: string, private classType: CharacterTypes) {}

  displayStats(): void {
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
  private character: Character;

  constructor(name: string, characterType: CharacterTypes) {
    this.character = new Character(name, characterType);
  }

  setLevel(level: number) {
    this.character.level = level;
    return this;
  }

  setStrength(strength: number) {
    this.character.strength = strength;
    return this;
  }

  setAgility(agility: number) {
    this.character.agility = agility;
    return this;
  }

  setIntelligence(intelligence: number) {
    this.character.intelligence = intelligence;
    return this;
  }

  setDefense(defense: number) {
    this.character.defense = defense;
    return this;
  }

  build(): Character {
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
