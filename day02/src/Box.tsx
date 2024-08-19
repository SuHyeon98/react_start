import { CSSProperties } from 'react';

type BoxProps = {
  backgroundColor?: 'skyblue' | 'pink' | 'green' | 'orange';
  width: string;
  height: string;
  borderRadius: string;
};

const BoxType = (props: BoxProps) => (
  <div
    style={{ ...props, backgroundColor: props.backgroundColor || 'skyblue' }}
  />
);
export default BoxType;
