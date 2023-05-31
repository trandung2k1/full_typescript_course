interface Assignment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
}
//Partial
const updateAssignment = (
    assignment: Assignment,
    propsToUpdate: Partial<Assignment>,
): Assignment => {
    return { ...assignment, ...propsToUpdate };
};

const assign1: Assignment = {
    studentId: '2019603537',
    title: 'Final Project',
    grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

//Required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign;
};

// recordAssignment({ ...assign1, verified: true }); ✅
// recordAssignment(assign1); // X
//ReadOnly
const assignVerified: Readonly<Assignment> = { ...assign1, verified: false };
// assignVerified.verified = false;
// assignVerified.grade = 100;

//Record
const hexColormap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';
const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'A',
    Kelly: 'B',
};

interface Grades {
    assign1: number;
    assign2: number;
}
const gradeData: Record<Students, Grades> = {
    Sara: {
        assign1: 85,
        assign2: 100,
    },
    Kelly: {
        assign1: 80,
        assign2: 95,
    },
};

//Pick and Omit
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;
const score: AssignResult = {
    studentId: 'k123',
    grade: 100,
};
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;
const preview: AssignPreview = {
    studentId: 'k123',
    title: 'Final Project',
};
//Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, 'U'>;
type highGrades = Extract<LetterGrades, 'A' | 'B'>;

//Nonullable
type AllPossibleGrades = 'Dung' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

//Return Type
// type newAssign = { title: string; points: number };
const createNewAssign = (title: string, points: number) => {
    return {
        title,
        points,
    };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);

//Parameters
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

//Awaited
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return await data.json();
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
fetchUsers()
    .then((users: FetchUsersReturnType) => console.log(users))
    .catch((err) => console.log(err));

//This
interface Student {
    id: number;
    class: string;
    getClass(this: Student): () => string;
}
const student: Student = {
    id: 1,
    class: 'KTPM02',
    getClass: function (this: Student) {
        return () => {
            return this.class;
        };
    },
};

console.log(student.getClass()());
