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
