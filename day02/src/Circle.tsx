import { CSSProperties } from 'react';

type CircleProps = {
  backgroundColor?: 'skyblue' | 'pink' | 'green';
  width: string;
  height: string;
  border: string;
};

const CircleType = (props: CircleProps) => (
  <div
    style={{
      ...props,
      backgroundColor: props.backgroundColor || 'skyblue',
      borderRadius: '9999px',
    }}
  />
);

export default CircleType;
