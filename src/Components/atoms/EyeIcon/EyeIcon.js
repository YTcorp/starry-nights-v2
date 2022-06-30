import React from "react";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";

export default function EyeIcon({ funcClic, showState }) {
  return (
    <>
      {!showState ? (
        <RiEyeCloseLine onClick={funcClic} />
      ) : (
        <RiEyeLine onClick={funcClic} />
      )}
    </>
  );
}
