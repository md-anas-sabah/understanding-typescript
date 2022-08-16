// Type: Easy way to refer to the different properties + function that a value has.
// type annotation: code that we add to tell typescript what type of value a variable will refer to.
// type interface: Typescript tries to figure out what type of value a variable refers to.

let apple: number = 5;
apple = 5;

// apple = "apple"; --> throw error
// apple = false; --> throw error

let speed: string = "fast";
let hasName: boolean = true;
let hasNothing: null = null;

// built in objects

let now: Date = new Date();
console.log(now.toUTCString());

// Array

let colors: string[] = ["Red", "Blue"];
colors.push("green");
// colors.push(19) --> throw error

let myNumbers: number[] = [1, 2, 3];

// Classes

class Car {}

let cars: Car = new Car();

// Object literals

let points: {
  x: number;
  y: number;
};

points = {
  x: 10,
  y: 20,
};

// points = {
//   x: 10,            ==> throws error
// };

// points = {
//   x: "122",         ==> throw error
//   y: 10,
// };

// Function

const logNumber: (a: number) => void = (a) => console.log(a);
logNumber(10);

// when tho use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) when we declare a variable on one line and initialize it later
let color = ["red", "green", "blue"];
let foundWord: boolean;

color.forEach((x) => {
  if (x == "green") foundWord = true;
});

// 3) variable whose type cannot be inferred correctly
let numbers = [-1, -22, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach((x) => {
  if (x > 0) numberAboveZero = x;
});
