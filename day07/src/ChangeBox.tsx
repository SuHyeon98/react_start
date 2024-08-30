import { useState } from "react";

const ChangeBox = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");
  const greenClick = () => {
    setBackgroundColor("green");
  };
  const pinkClick = () => {
    setBackgroundColor("pink");
  };
  const yellowClick = () => {
    setBackgroundColor("yellow");
  };

  return (
    <>
      <div
        className="w-10 h-10"
        style={{ border: "1px solid black", backgroundColor }}
      ></div>
      <button onClick={greenClick}>초록</button>
      <button onClick={pinkClick}>핑크</button>
      <button onClick={yellowClick}>노랑</button>
    </>
  );
};
export default ChangeBox;
