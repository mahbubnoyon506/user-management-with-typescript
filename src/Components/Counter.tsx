import React, { FormEvent, useState } from 'react';

interface Users {
    name: string,
    age: number
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<Users | null>(null)
    const handleIncrease = (): void => {
        setCounter(counter + 1)
    }
    const handleUserSubmit = (e: FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const userData = {
            name: 'John',
            age: 25
        }
        setUser(userData);
    }
    return (
        <div>
            <h2>This counter page</h2>
            <h4>{counter}</h4>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;