import { CSSProperties } from "react";
import GreenBox from "./GreenBox";
import YellowBox from "./Yellowbox";
import RedBox from "./Redbox";
// .tsx[jsx] 태그를 return 하는 함수
function App() {
  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
  };
  return (
    <div className="App" style={grid}>
      {Array(1000)
        .fill("")
        .map((v, i) => {
          if (i % 3 == 0) return <GreenBox />;
          else if (i % 3 == 1) return <YellowBox />;
          else return <RedBox />;
        })}
    </div>
  );
}

export default App;
