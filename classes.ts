// Classes: blueprint to create an object with some fields(values and methods) to represent a 'thing
class Vehicle {
  drive(): void {
    console.log("vehicle sound");
  }
}

const vehicle = new Vehicle();
vehicle.drive();

class Car extends Vehicle {
  drive(): void {
    console.log("Car Sound");
  }
}

const car = new Car();
car.drive();

//class methods modifier
// 1. public: The default visibility of class member is public. A public member can be accessed by anywhere.

class Greeter {
  public greet() {
    console.log("Hi");
  }
}

const g = new Greeter();
g.greet();

// 2. Protected: Protected members are only visible for subclasses of the class they are declared in.

class Greet {
  public greet() {
    console.log("Hi " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreet extends Greet {
  public howdy() {
    //Ok to access protected member here.
    console.log("Howdy " + this.getName());
  }
}

const greet = new SpecialGreet();
greet.greet(); //Ok
greet.getName(); //Property 'getName' is protected and only accessible within class 'Greet' and its subclasses.

//3.Private: Private is like protected, but doesn't allow access to the member even from subclass
class Base {
  private x = 10;
}
const b = new Base();
console.log(b); //Can't access from outside the class

// Property 'x' is private and only accessible within the class Base.
class Derived extends Base {
  showX() {
    // Can't access in subclass
    console.log(this.x);
    // Property 'x' is private and only accessible within class 'Base
  }
}
