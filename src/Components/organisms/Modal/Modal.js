import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { setModalContent } from "../../../store/features/modalSlice";
import CardInfo from "../../molecules/CardInfo/CardInfo";

export default function Modal() {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const { dataCard } = useSelector((state) => state.modal);
  useEffect(() => {
    if (dataCard && Object.keys(dataCard).length > 1) {
      setTimeout(() => {
        setIsOpened(true);
      }, 200);
    }
  }, [dataCard]);

  if (dataCard === null || dataCard.length === 0) {
    document.querySelector("html").classList.remove("no-scroll");
    return null;
  }
  document.querySelector("html").classList.add("no-scroll");

  const handleCloseConstellation = () => {
    setIsOpened(false);
    setTimeout(() => {
      dispatch(setModalContent(null));
    }, 200);
  };

  return (
    <div
      className={classNames("Modal", { "Modal--opened": isOpened })}
      onClick={({ target, currentTarget }) => {
        if (currentTarget === target) {
          handleCloseConstellation();
        }
      }}
    >
      <CardInfo modal={true} funcClose={handleCloseConstellation} />
    </div>
  );
}
