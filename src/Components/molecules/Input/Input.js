import React from "react";
import classNames from "classnames";

export default function Input(props) {
  const { className, id, onChange, type, placeholder, required, defaultValue } =
    props;
  //   console.log(
  //     className,
  //     id,
  //     onChange,
  //     type,
  //     placeholder,
  //     required,
  //     defaultValue
  //   );
  return (
    <input
      autoComplete="off"
      className={classNames("Input", className)}
      id={id}
      type={type || "text"}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
      onChange={({ target }) => onChange(target.value)}
    />
  );
}
