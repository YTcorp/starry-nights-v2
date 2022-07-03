import React from "react";
import classNames from "classnames";

export default function Input(props) {
  const { className, id, onChange, type, placeholder, required, defaultValue } =
    props;
  return (
    <input
      autoComplete="off"
      className={classNames("Input", className)}
      id={id}
      onChange={({ target }) => onChange(target.value)}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
    />
  );
}
