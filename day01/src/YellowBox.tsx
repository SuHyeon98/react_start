import { CSSProperties } from 'react';

const YellowBox = () => {
  const boxType: CSSProperties = {
    width: '200px',
    height: '100px',
    border: '2px solid black',
    borderRadius: '10px',
    margin: '0 auto',
    backgroundColor: 'yellow',
    textAlign: 'center',
    alignItems: 'center',
  };

  const msg = '집에 가고 싶음';

  return <div style={boxType}>{msg}</div>;
};

export default YellowBox;
