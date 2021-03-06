import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setModalContent } from "../../../store/features/showSlice";

export default function LiElement(props) {
  const dispatch = useDispatch();
  const { favConstellations } = useSelector((state) => state.userData);

  let handleData;
  if (props.data.img_url !== undefined) {
    handleData = (constellation) => {
      const isFav = favConstellations?.find(
        (favorite) => favorite.id === constellation.id
      )
        ? true
        : false;
      const foundConstellation = { ...constellation, favorite: isFav };
      dispatch(setModalContent(foundConstellation));
    };
  }
  return (
    <li
      className={
        (props.data.liclass && props.data.liclass) || props.customClass
      }
      onClick={() => {
        typeof handleData === "function" && handleData(props.data);
        props.funcMenu && props.funcMenu();
      }}
    >
      {typeof props.data.url !== "undefined" ? (
        <NavLink
          to={`/${
            props.data.url ? props.data.url : props.data.name.toLowerCase()
          }`}
        >
          {props.data.name}
        </NavLink>
      ) : typeof props.anchor !== "undefined" ? (
        <a href={props.anchor} onClick={props.onClick}>
          {props.data.name}
        </a>
      ) : props.children ? (
        props.children.length > 1 ? (
          props.children.map((element) => element)
        ) : (
          props.children
        )
      ) : (
        props.data.name
      )}
    </li>
  );
}
