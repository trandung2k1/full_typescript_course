import React, { KeyboardEvent, MouseEvent, useCallback, useMemo, useRef } from 'react';
import Numbers from './components/Numbers';
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};
const App = () => {
    const [count, setCount] = React.useState<number>(0);
    const [users, setUsers] = React.useState<User[] | null>(null);
    const [nums, setNums] = React.useState<number[]>([]);
    const [num, setNum] = React.useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const fetchUsers = async (): Promise<void> => {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: User[] = await response.json();
        setUsers(users);
    };
    React.useEffect(() => {
        console.log('Mounting');
        fetchUsers();
        return () => console.log('Clean up');
    }, []);
    const handleAdd = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void =>
            setCount((prev) => prev + 1),
        [],
    );
    const total = useMemo(() => {
        const rs = nums.reduce((prev, curr) => prev + curr, 0);
        console.log('reduce');
        return rs;
    }, [nums]);
    const addNumber = () => {
        setNums([...nums, num]);
        setNum(0);
    };
    React.useEffect(() => {
        inputRef.current?.focus();
    }, []);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleAdd}>Increase</button>
            <br />
            <h2>{total}</h2>
            <input
                ref={inputRef}
                type="number"
                value={num}
                onChange={(e) => setNum(+e.target.value)}
                min={0}
                placeholder="Enter number"
            />
            <br />
            <button onClick={addNumber}>Add number</button>
            <Numbers />
        </div>
    );
};

export default App;
