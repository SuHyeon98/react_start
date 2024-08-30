import { useState } from "react";

const Count = () => {
  const [num, setNum] = useState<number>(0);

  const plus = () => {
    if (num < 10) {
      setNum(num + 1);
    }
  };
  const minus = () => {
    if (num > -10) {
      setNum(num - 1);
    }
  };
  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{num}</span>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Count;
