// Typed Arrays :Arrays where each element is some consistent type of values

const carMakers: string[] = [];
carMakers.push("Audi");
carMakers.push("Ford");

const carByMake: string[][] = [];
carByMake.push(["f150"]);
carByMake.push(["i10"]);

const dates = [new Date(), new Date()];

// Help with interface when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values

// carMakers.push(100) --> error

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible Types
const importantDates: (Date | string)[] = [];
