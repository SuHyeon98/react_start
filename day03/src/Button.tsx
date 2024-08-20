import { CSSProperties } from 'react';

type lineType = 'Hard' | 'Smooth' | 'Circle';
type colorType = 'Primary' | 'Hover' | 'Secondary' | 'Deactive';

type ButtonProps = {
  borderRaius: lineType;
  backgroundColor: colorType;
};

const Button = ({ backgroundColor, borderRaius }: ButtonProps) => {
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

  const ButtonStyle: CSSProperties = {
    padding: '10px 45px',
    fontSize: '32px',
    color: 'white',
    borderRadius: radius[borderRaius],
    backgroundColor: bg[backgroundColor],
  };

  return <button style={ButtonStyle}>Button</button>;
};

export default Button;
