import React from "react";
import Anchor from "../../atoms/Anchor/Anchor";

export default function LiElement({ data, funcMenuClose, customClass }) {
  const { liclass, url, name } = data;
  return (
    <li
      className={(liclass && liclass) || customClass}
      onClick={() => funcMenuClose()}
    >
      <Anchor url={`/${url ? url : name.toLowerCase()}`} content={name} />
    </li>
  );
}
