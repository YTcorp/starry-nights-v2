import React from "react";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";

export default function EyeIcon({ showType, onClick }) {
  return (
    <>
      {!showType ? (
        <RiEyeCloseLine className="Icon-pwd" onClick={onClick} />
      ) : (
        <RiEyeLine className="Icon-pwd" onClick={onClick} />
      )}
    </>
  );
}
