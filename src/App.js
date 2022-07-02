import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "../src/Components/routes";
import Modal from "./Components/organisms/Modal/Modal";
import { closeMenu } from "./store/features/showSlice";

function App() {
  const dispatch = useDispatch();
  const { isOpenMenu } = useSelector((state) => state.show);

  const checkNavBlur = (e) => {
    const iconClass = e.target.className.animVal;
    const iconType = e.target.localName;
    const checkSvg = iconType === "svg" && iconClass === "Header-Menu-Toggle";
    const chekPath = iconType === "path" && iconClass === "";

    if (!checkSvg && !chekPath) {
      dispatch(closeMenu());
    }
  };

  return (
    <div
      onClick={isOpenMenu ? (e) => checkNavBlur(e) : undefined}
      className="App"
    >
      <Router />
      <Modal />
    </div>
  );
}

export default App;
