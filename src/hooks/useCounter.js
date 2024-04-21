import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1)
  }
}

export default useCounter;

