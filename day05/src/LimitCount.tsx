import { useState } from 'react';

type LimitCountProps = {
  max?: number;
  price?: number;
};

const LimitCount = ({ max, price = 0 }: LimitCountProps) => {
  const [amount, setAmount] = useState<number>(1);
  const increase = () => {
    setAmount(amount === max ? max : amount + 1);
  };
  const decrease = () => {
    setAmount(amount === 1 ? 1 : amount - 1);
  };

  return (
    <>
      <button className="border p-0 bg-slate-500" onClick={decrease}>
        -
      </button>
      <span>{amount}</span>
      <button className="border bg-slate-500" onClick={increase}>
        +
      </button>
      <div></div>
      <span>최대 {max}개</span>
      <span>{amount * price}원</span>
    </>
  );
};

export default LimitCount;
