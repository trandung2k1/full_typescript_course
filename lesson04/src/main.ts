//Type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name: string;
    active: boolean;
    albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

//Literal types
let myName: 'Dung';
myName = 'Dung';

let userName: 'Dung' | 'John' | 'Amy';

// userName = 'Nam';// error
userName = 'Dung';

//functions

const add = (a: number, b: number): number => {
    return a + b;
};

const logMsg = (message: any): void => {
    console.log(message);
};

console.log('Hello!');
console.log(add(2, 3));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number;
// }

let subtract: mathFunction = function (c: number, d: number): number {
    return c - d;
};

const demo: mathFunction = (a: number, b: number) => {
    return a + b;
};

let multiply: mathFunction = function (a, b) {
    return a * b;
};

logMsg(multiply(2, 3));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));

//default param value
const sumAll = (a: number = 10, b: number, c: number = 1): number => {
    return a + b + c;
};
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 2, 3));

// Rest parameters
// const total = (...nums: number[]): number => {
//     return nums.reduce((prev, curr) => prev + curr);
// };
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//never
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) break;
    }
};
//custom type
const isNumber = (value: number): boolean => {
    return typeof value === 'number' ? true : false;
};

//use never type
const numberOrString = (value: any): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return createError('This should never happen!');
};
logMsg(numberOrString(true));
