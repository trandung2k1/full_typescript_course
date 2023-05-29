let stringArr: string[] = ['one', 'two', 'three'];
// stringArr.push(1); //error
console.log(stringArr);
stringArr.push('four');

let guitars = ['Strat', 'Les Paul', 5150];
// guitars.unshift(true); //error
guitars.push(1);
guitars.push('Hi');

guitars = stringArr;
// guitars = mixedData; //error
let mixedData = ['EVH', 1984, true];

let test = [];
let cars: string[] = [];
cars.push('Mercedes');
cars.push();
console.log(cars);
// cars.push(1) //error

//Tuple

let myTuple: [string, boolean, number] = ['Dung', true, 21];

let mixed = ['John', 1, false];

mixed = myTuple;

// myTuple = mixed; // error

//Objects
let myObj: object = {};
const typeOf = (value: any) => Object.prototype.toString.call(value).slice(8, -1);
console.log(typeOf(myObj)); //Object
myObj = [];
console.log(typeOf(myObj)); //Array

const exampleObj: {
    prop1: string;
    prop2: boolean;
} = {
    prop1: 'Dung',
    prop2: true,
};
console.log(exampleObj);

type Guitarist = {
    name?: string;
    active?: boolean;
    albums: (string | number)[];
};

//use class popular
// interface Guitarist {
//     name?: string;
//     active?: boolean;
//     albums: (string | number)[];
// }

let evh: Guitarist = {
    name: 'Eddie',
    active: true,
    albums: [1984, 'OU812'],
};

let jp: Guitarist = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV'],
};
const greetGuitarist = (guitarist: Guitarist): string => {
    // return `Hello ${guitarist.name?.toUpperCase()}!`;
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(jp);

//Enum
enum Grade {
    U = 1,
    D,
    C,
    B,
}
console.log(Grade.U);
