import React from "react";
import Anchor from "../../atoms/Anchor/Anchor";

export default function LiElement({ data, funcMenu, customClass }) {
  const { liclass, url, name } = data;
  if (url) {
    return (
      <li
        className={(liclass && liclass) || customClass}
        onClick={() => funcMenu()}
      >
        <Anchor url={`/${url ? url : name.toLowerCase()}`} content={name} />
      </li>
    );
  } else {
    return (
      <li
        className={(liclass && liclass) || customClass}
        onClick={() => funcMenu()}
      >
        {name}
      </li>
    );
  }
}
