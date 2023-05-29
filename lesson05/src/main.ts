type One = string;
type Two = string | number;

type Three = 'hello';

let a: One = 'hello';
let b = a as Two;
let c = a as Three;

let d = <One>'world';
let e = <string | number>'world';
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myValue: string = addOrConcat(2, 2, 'concat') as string;
let nextValue: number = addOrConcat(2, 2, 'concat') as number;
console.log(typeof myValue, typeof nextValue); // string string

const n: number = 10;
n as unknown as string;

//DOM
const img = document.querySelector('img')!;
img.src = 'https://www.facebook.com/photo/?fbid=592945845519764&set=a.118037429677277';

const myImage = document.getElementById('#myImage')! as HTMLImageElement;
myImage.src = ''; //

const nextImage = <HTMLImageElement>document.getElementById('#nextImage');
nextImage.src = '';

