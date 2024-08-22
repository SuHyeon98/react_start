import React, { CSSProperties, useState } from 'react';
import Tiket, { TwayPriceProps } from './TwayTiket';
import Button from './Button';
import StarbucksButton from './StarbucksButton';
import TailBox from './Tailbox';

// ctrl + w : 영역 선택
// ctrl + alt + l : 라인정리
// alt + j : 같은 단어 선택

// Components - Props + State
// html + css => Components
// js[랜더링] =>  Props
// js[이벤트] => State

function App() {
  const [color, setColor] = useState('black');
  //const [스타트값, 바꿔주는 값] = useState(스타트값)
  const [num, state] = useState(1);
  const plus = () => {
    setColor(num > 9 ? 'blue' : 'black');
    state(num + 1);
  };
  const minus = () => {
    setColor(num < 0 ? 'red' : 'black');
    state(num - 1);
  };
  return (
    <div>
      <span onClick={plus}>+</span>
      <span style={{ color }}>{num}</span>
      <span onClick={minus}>-</span>
    </div>
    // <div style={{ display: 'flex', gap: '10px' }}>
    //   <StarbucksButton backgroundColor="mainGreen" />
    //   <StarbucksButton backgroundColor="darkGreen" hasPlus={true} />
    //   <TailBox />
    // </div>
  );
}

export default App;
