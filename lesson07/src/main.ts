// interface TransactionObject {
//     Pizza: number;
//     Books: number;
//     Job: number;
// }
interface TransactionObject {
    readonly [index: string]: number;
}

const todayTranasactions: TransactionObject = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todayTranasactions.Pizza);
console.log(todayTranasactions['Pizza']);

let prop: string = 'Pizza';
console.log(todayTranasactions[prop]);

const todaysNet = (transactions: TransactionObject): number => {
    let total: number = 0;
    for (const transction in transactions) {
        total += transactions[transction];
    }
    return total;
};
console.log(todaysNet(todayTranasactions));

// todayTranasactions.Pizza = -5// error
// console.log(todayTranasactions['A']); //undefined

interface Student {
    // [key: string]: string | number | number[] | undefined;
    name: string;
    GPA: number;
    classes?: number[];
}
const student: Student = {
    name: 'Dung',
    GPA: 2.5,
    classes: [1, 2],
};
// console.log(student.test);
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);
// }
console.log(student.classes);
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
    console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student) => {
    console.log(student[key]);
};
logStudentKey(student, 'name');

//

// interface Incomes {
//     [key: string]: number;
// }
type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<Streams, number | string>;
const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const key in monthlyIncomes) {
    console.log(monthlyIncomes[key as keyof Incomes]);
}
