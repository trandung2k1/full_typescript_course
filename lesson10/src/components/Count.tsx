type CountProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};
const Count = ({ count, setCount }: CountProps) => {
    const handleIncrease: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        setCount((prev) => prev + 1);
    };
    const handleDecrease: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        setCount((prev) => prev - 1);
    };
    return (
        <>
            <h2>Count is {count}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </>
    );
};

export default Count;
