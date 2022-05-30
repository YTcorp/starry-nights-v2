import React from "react";
import Anchor from "../../atoms/Anchor/Anchor";
import HeaderLogo from "../../atoms/LogoHeader/LogoHeader";
import SearchBar from "../../organisms/SearchBar/SearchBar";

export default function HeaderLeft() {
  return (
    <div className="Header-Left">
      <Anchor url="/" description={<HeaderLogo />} />
      <SearchBar />
    </div>
  );
}
