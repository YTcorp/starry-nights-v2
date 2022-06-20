import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalContent } from "../../../store/features/modalSlice";
import Anchor from "../..//atoms/Anchor/Anchor";

export default function LiElement(props) {
  const { favConstellations } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  let handleData;

  if (props.data.img_url) {
    handleData = (constellation) => {
      const isFav = favConstellations.find((favorite) => favorite.id === constellation.id)
        ? true
        : false;
      const foundConstellation = { ...constellation, favorite: isFav };
      dispatch(setModalContent(foundConstellation));
    }
  }

  return (
    <li
      className={
        (props.data.liclass && props.data.liclass) || props.customClass
      }
      onClick={() => {
        typeof handleData === 'function' && handleData(props.data);
        props.funcMenu && props.funcMenu();
      }
      }
    >
      {typeof props.data.url !== "undefined"
        ? <Anchor
          url={`/${props.data.url ? props.data.url : props.data.name.toLowerCase()}`}
          content={props.data.name}
        />
        :
        props.children
          ? props.children.length > 1
            ? props.children.map((element) => element)
            : props.children
          : props.data.name
      }
    </li>
  )
}
