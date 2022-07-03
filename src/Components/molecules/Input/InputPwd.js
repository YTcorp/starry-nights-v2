import React, { useState } from "react";
import EyeIcon from "../../atoms/EyeIcon/EyeIcon";
import Input from "./Input";

export default function InputPwd(props) {
  const [showType, setShowType] = useState(false);

  const toggleShowType = () => {
    setShowType(!showType);
  };

  return (
    <div className="input-icon-wrapper">
      <Input
        {...props}
        id="password"
        type={!showType ? "password" : "text"}
        required={true}
      />
      <EyeIcon onClick={toggleShowType} showType={showType} />
    </div>
  );
}
