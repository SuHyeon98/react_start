import { CSSProperties } from 'react';

const Box = () => {
  const boxType: CSSProperties = {
    width: '100px',
    height: '200px',
    border: '2px solid black',
    borderRadius: '10px',
    margin: '0 auto',
    backgroundColor: 'yellowgreen',
  };

  return <div style={boxType}></div>;
};

export default Box;
