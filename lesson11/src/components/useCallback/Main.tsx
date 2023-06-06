import { useCallback, useState } from 'react';
import Child from './Child';

const Main = () => {
    const [count, setCount] = useState<number>(0);
    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);
    // const handleClick = () => {
    //     setCount((prev) => prev + 1);
    // };
    return (
        <div>
            <h1>Main</h1>
            <h3>{count}</h3>
            <Child onIncrease={handleClick} />
        </div>
    );
};

export default Main;
