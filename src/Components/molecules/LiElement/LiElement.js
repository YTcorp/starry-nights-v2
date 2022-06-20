import React from "react";
import Anchor from "../../atoms/Anchor/Anchor";

export default function LiElement(props) {
  if (typeof props.data.url !== "undefined") {
    return (
      <li
        className={
          (props.data.liclass && props.data.liclass) || props.customClass
        }
        onClick={() => props.funcMenu()}
      >
        <Anchor
          url={`/${
            props.data.url ? props.data.url : props.data.name.toLowerCase()
          }`}
          content={props.data.name}
        />
      </li>
    );
  } else {
    console.log("noURL >>>>>>>>>>>>>>>>>>>>>>>>>>", props.funcMenu);
    return (
      <li
        className={
          (props.data.liclass && props.data.liclass) || props.customClass
        }
        onClick={props.funcMenu && (() => props.funcMenu())}
      >
        {props.children
          ? props.children.length > 1
            ? props.children.map((element) => element)
            : props.children
          : props.data.name}
      </li>
    );
  }
}
