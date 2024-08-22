import { CSSProperties } from 'react';

type Colors = 'mainGreen' | 'gray' | 'darkGreen';
type HexColors = '#4AA366' | '#DFE4EC' | '#1D4D4F';
type bgMapType = { [key in Colors]: HexColors };

type StarbucksButtonProps = {
  // backgroundColor: '#4aa366' | '#dfe4ec' | '#1d4d4f';
  backgroundColor: Colors;
  hasPlus?: boolean;
};

const StarbucksButton = ({
  backgroundColor,
  hasPlus = false,
}: StarbucksButtonProps) => {
  const bgMap: bgMapType = {
    mainGreen: '#4AA366',
    gray: '#DFE4EC',
    darkGreen: '#1D4D4F',
  };

  const buttonStyle: CSSProperties = {
    border: 'none',
    padding: '10px 45px',
    color: 'white',
    fontSize: '32px',
    fontWeight: 'bold',
    width: '330px',
    backgroundColor: bgMap[backgroundColor],
  };
  return <button style={buttonStyle}>{hasPlus && '+'} Button</button>;
};

export default StarbucksButton;
