import React from 'react';

type ChildProps = {
    onIncrease: () => void;
};
// eslint-disable-next-line react-refresh/only-export-components
const Child: React.FC<ChildProps> = ({ onIncrease }) => {
    console.log('Render or Re-render');
    return (
        <div>
            <h2>Child</h2>
            <button onClick={onIncrease}>Increase</button>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Child);
