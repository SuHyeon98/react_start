import { CSSProperties } from "react";

const Box = () => {
  const boxType: CSSProperties = {
    width: "100px",
    height: "200px",
    border: "2px solid black",
    borderRadius: "10px",
    margin: "0 auto",
    backgroundColor: "yellowgreen",
  };

  return <div style={boxType}></div>;
};

const GreenBox = () => {
  const boxType: CSSProperties = {
    width: "200px",
    height: "100px",
    border: "2px solid black",
    borderRadius: "10px",
    margin: "0 auto",
    backgroundColor: "green",
    textAlign: "center",
    alignItems: "center",
  };

  const msg = "집에 가고 싶음";

  return <div style={boxType}>{msg}</div>;
};
export default Box;
