class Coder {
    secondLang!: string;
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript',
    ) {
        this.name = name;
        this.music = music;
        this.lang = lang;
        this.age = age;
    }
    public getAge() {
        return `Hello, I'm ${this.age} years old`;
    }
}

const dung = new Coder('Dung', 'Lofi', 21);
console.log(dung);
console.log(dung.getAge());
console.log(dung.secondLang);

class WebDev extends Coder {
    constructor(public computer: string, name: string, music: string, age: number) {
        super(name, music, age);
        this.computer = computer;
    }
    public getLang(): string {
        return `I write ${this.lang}`;
    }
}
const sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(sara.getLang());

interface Musician {
    name: string;
    instrument: string;
    // play(action: string): string;
    play: (action: string) => string;
}
class Guitarist implements Musician {
    name: string;
    instrument: string;
    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'Guitar');
console.log(Page.play('strums'));

class Peeps {
    static count: number = 0;
    static getCount(): number {
        return Peeps.count;
    }
    public id: number;
    constructor(public name: string) {
        this.id = ++Peeps.count;
        this.name = name;
    }
}
const john = new Peeps('John');
const jane = new Peeps('Jane');
const amy = new Peeps('Amy');
console.log(Peeps.count);
console.log(john);
console.log(jane);
console.log(amy);

class Bands {
    private dataState: string[];
    constructor() {
        this.dataState = [];
    }
    public get data(): string[] {
        return this.dataState;
    }
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
        } else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const mybands = new Bands();
mybands.data = ['BTS', 'T-ara'];
console.log(mybands.data);
mybands.data = [...mybands.data, 'ZZ Top'];
console.log(mybands.data);
// mybands.data = [...mybands.data, 1];// error
