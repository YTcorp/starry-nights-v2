import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { isEmpty } from "lodash";

import { setModalContent } from "../../../store/features/showSlice";
import CardConstellation from "../../molecules/Cards/CardConstellation";

export default function Modal() {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const { dataModal } = useSelector((state) => state.show);
  useEffect(() => {
    if (!isEmpty(dataModal)) {
      setTimeout(() => {
        setIsOpened(true);
      }, 200);
    }
  }, [dataModal]);

  if (dataModal === undefined || dataModal === null || dataModal.length === 0) {
    document.querySelector("html").classList.remove("no-scroll");
    return null;
  }
  document.querySelector("html").classList.add("no-scroll");

  const handleClose = () => {
    setIsOpened(false);
    setTimeout(() => {
      dispatch(setModalContent(null));
    }, 200);
  };

  return (
    <div
      className={classNames("Modal", {
        "Modal--opened": isOpened,
      })}
      onClick={({ target, currentTarget }) => {
        if (currentTarget === target) {
          handleClose();
        }
      }}
    >
      <CardConstellation
        modal={true}
        funcClose={handleClose}
        data={dataModal}
      />
    </div>
  );
}
