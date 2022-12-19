import React, { useCallback, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const onDecrease = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
