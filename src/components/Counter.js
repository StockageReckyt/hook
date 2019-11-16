import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <input type="number" onChange={event => setCount(event.target.value)} />
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount(Number(count) + 1)}>+1</button>
      <button onClick={() => setCount(Number(count) - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
