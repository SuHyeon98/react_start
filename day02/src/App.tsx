import React, { CSSProperties } from 'react';
import Air from './Air';

// ctrl + w : 영역 선택
// ctrl + alt + l : 라인정리
// alt + j : 같은 단어 선택

function App() {
  const TwayData = [
    {
      dateProps: { month: '08', date: '19', day: '월' },
      priceProps: { price: 20000 },
    },
    {
      dateProps: { month: '08', date: '20', day: '화' },
      priceProps: { price: 50000 },
    },
    {
      dateProps: { month: '08', date: '21', day: '수' },
      priceProps: { price: 30000 },
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {TwayData.map((v) => (
        <Air {...v} />
      ))}
    </div>
  );
}

export default App;
