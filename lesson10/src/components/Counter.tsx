import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const handleIncrease: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        setCount((prev) => prev + 1);
    };
    const handleDecrease: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        setCount((prev) => prev - 1);
    };
    return (
        <>
            <h1>Count is {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </>
    );
};

export default Counter;
