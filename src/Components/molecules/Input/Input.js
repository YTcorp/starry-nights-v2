import React from "react";
import classNames from "classnames";

export default function Input(props) {
  const { className, id, onChange, type, placeholder, required } = props;

  return (
    <input
      autoComplete="off"
      className={classNames("Input", className)}
      id={id}
      onChange={({ target }) => onChange(target.value)}
      type={type}
      placeholder={type === "password" ? "*******" : placeholder || ""}
      required={required}
    />
  );
}
