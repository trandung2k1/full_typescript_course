const echo = <T>(arg: T): T => arg;
console.log(echo<string>('Hi'));
const isObject = <T>(arg: T): boolean => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObject(true));
console.log(isObject('John'));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: 'John' }));
console.log(isObject(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false,
        };
    }
    if (isObject(arg) && !Object.keys(arg as keyof T).length) {
        return {
            arg,
            is: false,
        };
    }
    return {
        arg: arg,
        is: !!arg,
    };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dung'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Dung' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
console.log(isTrue(+0));

interface BoolCheck<T> {
    value: T;
    is: boolean;
}

const checkBooleanValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false,
        };
    }
    if (isObject(arg) && !Object.keys(arg as keyof T).length) {
        return {
            value: arg,
            is: false,
        };
    }
    return {
        value: arg,
        is: !!arg,
    };
};

interface HasID {
    id: number;
}
const processUser = <T extends HasID>(user: T): T => {
    return user;
};

console.log(processUser({ id: 1, name: 'Dung' }));

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map((u) => u[key]);
};

const usersArray = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
];
console.log(getUsersProperty(usersArray, 'email'));
console.log(getUsersProperty(usersArray, 'id'));

class StateObject<T> {
    private data: T;
    constructor(data: T) {
        this.data = data;
    }
    get state(): T {
        return this.data;
    }
    set state(value: T) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
// store.state = 13 //err
const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = [1, true, 'Dung'];
console.log(myState.state);
