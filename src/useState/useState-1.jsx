import React, { useState } from "react";

function Final() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decrementCount = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default Final;
