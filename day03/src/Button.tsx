import { CSSProperties } from 'react';

type lineType = 'Hard' | 'Smooth' | 'Circle';
type colorType = 'Primary' | 'Hover' | 'Secondary' | 'Deactive';

type ButtonProps = {
  borderRadius: lineType;
  backgroundColor: colorType;
};

const radius = {
  Hard: '0px',
  Smooth: '5px',
  Circle: '43px',
};

const bg = {
  Primary: '#205bf3',
  Hover: '#478df5',
  Secondary: 'transparents',
  Deactive: '#979797',
};

const Button = ({ backgroundColor, borderRadius }: ButtonProps) => {
  const ButtonStyle: CSSProperties = {
    fontSize: '32px',
    color: 'white',
    padding: '10px 45px',
    borderRadius: radius[borderRadius],
    backgroundColor: bg[backgroundColor],
  };

  return <button style={ButtonStyle}>Button</button>;
};

export default Button;
