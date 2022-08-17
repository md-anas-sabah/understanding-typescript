const Person = {
  name: "Anas",
  age: 21,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
const { age }: { age: number } = Person;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = Person;
