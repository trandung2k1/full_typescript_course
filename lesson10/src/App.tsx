import { useState } from 'react';
import Counter from './components/Counter';
import Heading from './components/Heading';
import Section from './components/Section';
import Count from './components/Count';
import List from './components/List';

const App = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <Heading title="Hello" />
            <Section>
                <h2>This is my Section.</h2>
            </Section>
            <Counter />
            <Count count={count} setCount={setCount} />
            <List
                items={['☕ Coffeee', '🌮Tacos', '🧑‍💻Code']}
                render={(item: string) => <span className="gold bold">{item}</span>}
            />
        </>
    );
};

export default App;
