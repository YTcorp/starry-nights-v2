import React, { useState } from "react";
import EyeIcon from "../../atoms/EyeIcon/EyeIcon";
import classNames from "classnames";

export default function InputPwd({ onChange, className }) {
  const [showType, setShowType] = useState(false);

  const toggleShowType = () => {
    console.log("showType", showType);
    setShowType(!showType);
  };

  return (
    <div className="input-icon-wrapper">
      <input
        autoComplete="off"
        className={classNames("Input", className)}
        id="password"
        onChange={({ target }) => onChange(target.value)}
        type={!showType ? "password" : "text"}
        placeholder="*******"
        required
      />
      <EyeIcon onClick={toggleShowType} showType={showType} />
    </div>
  );
}
