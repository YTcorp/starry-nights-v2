import React from "react";
import titleType from "../../../utils/titleType";
import contentType from "../../../utils/contentType";

export default function Section({ className, data }) {
  const { tType, tClass, tData, content, cClass, cData } = data;

  return (
    <div className={className}>
      {tType && titleType(tType, tClass, tData)}
      {content && contentType(content, cClass, cData)}
    </div>
  );
}
