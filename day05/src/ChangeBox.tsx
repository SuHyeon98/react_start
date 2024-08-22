import { useState } from 'react';

const ChangeBox = () => {
  const [backgroundColor, setBackgroundColor] = useState('yellowgreen');
  const greenClick = () => {
    setBackgroundColor('yellowgreen');
  };
  const pinkClick = () => {
    setBackgroundColor('pink');
  };
  const blueClick = () => {
    setBackgroundColor('skyblue');
  };

  return (
    <>
      <div
        className="w-10 h-10"
        style={{ border: '1px solid black', backgroundColor }}
      ></div>
      <button onClick={greenClick}>초록</button>
      <button onClick={pinkClick}>핑크</button>
      <button onClick={blueClick}>파랑</button>
    </>
  );
};

export default ChangeBox;
