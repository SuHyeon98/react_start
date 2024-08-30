import { useState } from "react";
import CheckBox, { CheckBoxProps } from "./Bobbi/CheckBox";

function App() {
  // const [isChecked, setIsChecked] = useState<boolean[]>([false, false, false, false]);
  // const click = (num: number) =>
  // setIsChecked((prev) => prev.map((v, i) => (num === i ? !v : v)));

  type TermType =
    | "privacy"
    | "service"
    | "collection"
    | "age"
    | "choice1"
    | "choice2";

  type HasTerm = { eng: TermType };
  type CheckBoxType = Omit<CheckBoxProps, "click"> & HasTerm; // Omit 안에 있는 key 값을 제외하는 명령어

  const [checkBoxStates, setCheckBoxStates] = useState<CheckBoxType[]>([
    {
      eng: "privacy",
      textHelper: "개인정보처리방침",
      isNecssary: true,
      isChecked: false,
    },
    {
      eng: "service",
      textHelper: "서비스 이용약관",
      isNecssary: true,
      isChecked: false,
    },
    {
      eng: "collection",
      textHelper: "서비스 개인정보 수집 이용 동의",
      isNecssary: true,
      isChecked: false,
    },
    {
      eng: "age",
      textHelper: "만 14세 이상임을 확인합니다.",
      isNecssary: true,
      isChecked: false,
    },
    {
      eng: "choice1",
      textHelper: "서비스 개인정보 수집 이용 동의",
      isNecssary: false,
      isChecked: false,
    },
    {
      eng: "choice2",
      textHelper: "서비스 마케팅 정보 수신 동의",
      isNecssary: false,
      isChecked: false,
    },
  ]);

  const handleClick = (key: TermType) =>
    setCheckBoxStates((prev) =>
      prev.map((v) => (v.eng === key ? { ...v, isChecked: !v.isChecked } : v))
    );

  const isAllChecked = checkBoxStates
    .filter((v) => v.isNecssary)
    .every((v) => v.isChecked);

  return (
    <div>
      {checkBoxStates.map((v) => (
        <CheckBox {...v} click={() => handleClick(v.eng)} />
      ))}
      <button
        style={{
          backgroundColor: isAllChecked ? "yellow" : "transparent",
        }}
        className="w-28 py-5 rounded-3xl"
      >
        확인
      </button>
    </div>
  );
}

export default App;
