import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { isEmpty } from "lodash";

import { setModalContent } from "../../../store/features/showSlice";
import CardConstellation from "../../molecules/Cards/CardConstellation";
import CardForm from "../../molecules/Cards/CardForm";

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

  if (dataModal === undefined || dataModal === null || isEmpty(dataModal)) {
    document.querySelector("html").classList.remove("no-scroll");
    return null;
  }
  document.querySelector("html").classList.add("no-scroll");

  let cardType = "";
  if (dataModal.favorite !== undefined) {
    cardType = "constellation";
  } else if (dataModal.address !== undefined) {
    cardType = "address";
  }
  console.log(cardType);

  const handleClose = () => {
    setIsOpened(false);
    setTimeout(() => {
      dispatch(setModalContent(null));
    }, 200);
  };
  // console.log("on Modal, data:", dataModal);
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
      <div
        className={classNames(
          "Block Detail-Block",
          `Detail-Block__${cardType}`
        )}
      >
        {dataModal.favorite !== undefined && (
          <CardConstellation
            modal={true}
            funcClose={handleClose}
            data={dataModal}
          />
        )}

        {dataModal.address !== undefined && (
          <CardForm modal={true} funcClose={handleClose} data={dataModal} />
        )}
      </div>
    </div>
  );
}
