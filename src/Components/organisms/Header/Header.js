import React from "react";
import HeaderLeft from "../../molecules/HeaderLeft/HeaderLeft";
import HeaderRight from "../../molecules/HeaderRight/HeaderRight";

export default function Header() {
  return (
    <>
      <header className="Header">
        <div className="Container">
          <HeaderLeft />
          <HeaderRight />
        </div>
      </header>
    </>
  );
}
