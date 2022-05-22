import React, { useState } from 'react';
import "./Counter.css";

function Counter() {
    const [count, setcount] = useState(0);

    let color = (count > 0 ? "green" : count < 0 ? "red" : "black")

    const hadelIncrease = () => setcount(count + 1);
    const hadelDecrease = () => setcount(count - 1);
    const hadelReset = () => setcount(0);

    return (
        <div class="container">
            <h1>counter</h1>
            <span style={{ color }} id="value">{count}</span><br />
            <button onClick={() => hadelDecrease()} class="btn btn-decrease">DECEREASE</button>
            <button onClick={() => hadelReset()} class="btn btn-reset">RESET</button>
            <button onClick={() => hadelIncrease()} class="btn btn-increase">INCREASE</button>
        </div>
    )
}

export default Counter