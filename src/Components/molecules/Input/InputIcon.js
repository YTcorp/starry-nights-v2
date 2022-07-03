import React, { useState } from "react";
import Input from "./Input";
import EyeIcon from "../../atoms/EyeIcon/EyeIcon";

export default function InputIcon(props) {
  const [showTypePassword, setShowTypePassword] = useState(false);

  const toggleShowType = () => {
    setShowTypePassword(!showTypePassword);
  };

  const setTypePlaceholder = () => {
    let typePwd = {};
    if (props.id === "password") {
      typePwd.placeholder = "******";
      if (!showTypePassword) {
        typePwd.type = "password";
      } else {
        typePwd.type = "text";
      }
    } else {
      if (props.type) {
        typePwd.type = props.type;
      } else {
        typePwd.type = undefined;
      }
    }
    return typePwd;
  };

  return (
    <div className="input-icon-wrapper">
      <Input
        {...props}
        type={setTypePlaceholder().type}
        placeholder={setTypePlaceholder().placeholder}
      />
      {props.id === "password" ? (
        <EyeIcon onClick={toggleShowType} showType={showTypePassword} />
      ) : (
        props.children
      )}
    </div>
  );
}
