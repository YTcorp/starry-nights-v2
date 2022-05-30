import React from "react";
import Anchor from "../../atoms/Anchor/Anchor";

export default function LiElement({ data }) {
  const { liclass, url, name } = data;
  return (
    <li className={liclass && liclass}>
      <Anchor url={`/${url ? url : name.toLowerCase()}`} description={name} />
    </li>
  );
}
