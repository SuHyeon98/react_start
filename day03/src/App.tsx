import React, { CSSProperties } from 'react';
import Tiket, { TwayPriceProps } from './TwayTiket';
import Button from './Button';

// ctrl + w : 영역 선택
// ctrl + alt + l : 라인정리
// alt + j : 같은 단어 선택

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button backgroundColor="Primary" borderRadius="Hard" />
      <Button backgroundColor="Primary" borderRadius="Smooth" />
      <Button backgroundColor="Primary" borderRadius="Circle" />
    </div>
  );
}

export default App;
