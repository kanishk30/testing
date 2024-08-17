import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return <>
        <h3>Counter</h3>
        <button onClick={decrement}> - </button>
        <h3>Count is {count}</h3>
        <button onClick={increment}> + </button>
    </>
}

export default Counter