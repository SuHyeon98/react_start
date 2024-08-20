import React, { CSSProperties } from 'react';
import Tiket, { TwayPriceProps } from './TwayTiket';

// ctrl + w : 영역 선택
// ctrl + alt + l : 라인정리
// alt + j : 같은 단어 선택

function App() {
  const arr: TwayPriceProps[] = [
    {
      currency: 'KRW',
      price: 50000,
      seats: 2,
    },
    {
      currency: 'KRW',
      price: 40000,
      seats: 3,
    },
    {
      currency: 'KRW',
      price: 70000,
      seats: 0,
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {arr.map((v) => (
        <Tiket {...v} />
      ))}
    </div>
  );
}

export default App;
