// Craete a counter using custome hooks

import React from "react";
import useCounter from "../../hooks/useCounter";


const Counter = () => {

  const { count, increment, decrement } = useCounter();
 
  return (
    <section>
      <div className="container">
        <h2>{count}</h2>
        <button className="btn" onClick={increment}>Increment Counter</button>
        <button className="btn" onClick={decrement}>Decrement Counter</button>
      </div>
    </section>
  );
};

export default Counter;
