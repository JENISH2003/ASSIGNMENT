import React, { useRef, useState } from "react";

function UseRefExample() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Count: {count}</h2>
      <h2>Ref Count: {countRef.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Update State (Re-render)
      </button>

      <button onClick={() => countRef.current++}>
        Update Ref (No Re-render)
        
      </button>
    </div>
  );
}

export default UseRefExample;
