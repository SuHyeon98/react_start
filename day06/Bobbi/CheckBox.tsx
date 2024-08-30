import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";

type CheckBoxProps = {
  isNecssary?: boolean;
  textHelper?: string;
  isChecked?: boolean;
  click: () => void;
};
const CheckBox = ({
  isNecssary = false,
  textHelper = "No Contents",
  isChecked,
  click,
}: CheckBoxProps) => {
  return (
    <div className="flex items-center gap-1">
      <span onClick={click} style={{ color: "#2c3e50" }}>
        {isChecked ? <FaRegCheckCircle /> : <FaCheckCircle />}
      </span>
      <span style={{ color: isNecssary ? "#EBFF00" : "#2c3e50" }}>
        {isNecssary ? "(필수)" : "(선택)"}
      </span>
      <span style={{ color: "#2c3e50" }}>{textHelper}</span>
    </div>
  );
};

export default CheckBox;
