import React, { useState } from 'react'

const Counter = () => {
   const [count, setCount] = useState(0);
  
    return (
      <>
        <div
          style={{
            height: "50px",
            width: "50px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{count}</h1>
        </div>
  
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </>
    );
}

export default Counter