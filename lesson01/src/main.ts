let fullName: string = 'Dung';
console.log(fullName);
const age: number = 21;
console.log(age);
const PI: number = 3.14;
console.log(PI);
const a: number = 12;
const b: number = 6;
console.log(a / b);
const isLoading: boolean = true;
console.log(isLoading);
const cars: string[] = ['Mercedes', 'BMW', 'Volvo', 'Audi'];
console.log(cars);
//Check type variable
const typeOf = (value: any) => Object.prototype.toString.call(value).slice(8, -1);
console.log(typeOf(cars));
