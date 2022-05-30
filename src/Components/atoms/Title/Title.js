import React from "react";
import titleSelector from "../../../utils/titleSelector";

export default function Title({ type, tClass, tData }) {
  return <>{titleSelector(type, tClass, tData)}</>;
}
