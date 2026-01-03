import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./RTK/RtkReducer";

const RtkCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.Counter.value);
  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
};

export default RtkCounter;
