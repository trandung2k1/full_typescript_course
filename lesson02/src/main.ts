let myName: string = 'Tran Van Dung';
console.log(myName);
// myName = 21 //error
let isLoading: boolean = false;
isLoading = true;
let meaningOfLife: number = 69;
console.log('Meaning Of Life: ', meaningOfLife);
console.log('Is loading: ', isLoading);

let album: any;
album = 'Hello';
album = true;
album = 2001;

const sum = (a: number, b: number): number => a + b;

const sumString = (a: number, b: string): string => a + b;

//union
let postId: string | number;
postId = 1;
postId = 'one';

let isActive: number | boolean;
//0 = false, else true

let re: RegExp = /\w+/g;
