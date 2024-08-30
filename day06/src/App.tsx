import { useState } from "react";
import CheckBox from "./Bobbi/CheckBox";

function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const click = () => setIsChecked((prev) => !prev);
  return (
    <div>
      <CheckBox
        click={click}
        isChecked={isChecked}
        isNecssary={true}
        textHelper="개인정보처리방침"
      ></CheckBox>
      {/* <CheckBox isNecssary={true} textHelper="서비스 이용약관"></CheckBox>
      <CheckBox
        isNecssary={true}
        textHelper="서비스 개인정보 수집 이용 동의"
      ></CheckBox>
      <CheckBox
        isNecssary={true}
        textHelper="만 14세 이상임을 확인합니다."
      ></CheckBox>
      <CheckBox
        isNecssary={false}
        textHelper="서비스 개인정보 수집 이용 동의"
      ></CheckBox>
      <CheckBox
        isNecssary={false}
        textHelper="서비스 마케팅 정보 수신 동의"
      ></CheckBox> */}
      <button
        style={{ backgroundColor: isChecked ? "yellow" : "transparent" }}
        className="w-28 py-5 rounded-3xl"
      >
        확인
      </button>
    </div>
  );
}

export default App;
