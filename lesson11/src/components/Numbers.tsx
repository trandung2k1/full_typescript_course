import { useMemo, useState } from 'react';
const Numbers = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [n, setN] = useState<number>(0);
    const total = useMemo(() => {
        const rs = numbers.reduce((acc, curr) => {
            console.log('Total numbers');
            return acc + curr;
        }, 0);
        return rs;
    }, [numbers]);
    // const total = numbers.reduce((acc, curr) => {
    //     console.log('Total numbers');
    //     return acc + curr;
    // }, 0);
    // console.log(total);
    const handleAdd: React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
        if (n) {
            setNumbers((prev) => [...prev, n]);
        }
    };
    return (
        <>
            <h1>Numbers</h1>
            <h2>Total: {total}</h2>
            <input
                type="text"
                value={n}
                onChange={(e) => setN(+e.target.value)}
                placeholder="Enter number"
            />
            <button onClick={handleAdd}>Add</button>
        </>
    );
};

export default Numbers;
