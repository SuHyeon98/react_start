import { useState } from "react";
type LimitCountProps = {
  max?: number;
  price?: number;
}; // props 타입 만들어주기

//props 만든거 가져오기
const LimitCount = ({ max, price = 0 }: LimitCountProps) => {
  const [amount, setAmount] = useState<number>(1);

  const increase = () => {
    // max 쓸곳에 써주기
    setAmount(amount === max ? max : amount + 1);
  };
  const decrease = () => {
    setAmount(amount === 1 ? 1 : amount - 1);
  };

  return (
    <div className="">
      <button onClick={decrease}>-</button>
      <span>{amount}</span>
      <button onClick={increase}>+</button>
      <span>최대 {max}개</span>
      <span>{amount * price}원</span>
    </div>
  );
};
export default LimitCount;
