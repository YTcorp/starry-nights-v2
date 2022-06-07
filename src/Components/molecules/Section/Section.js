import React from "react";
import titleType from "../../../utils/titleType";
import contentType from "../../../utils/contentType";

export default function Section(props) {
  const { id, className, data, children } = props;
  const { tType, tClass, tData, content, cClass, cData } = data;

  return (
    <div id={id && id} className={className}>
      {tType && titleType(tType, tClass, tData)}
      {content && contentType(content, cClass, cData)}
      {children && children}
    </div>
  );
}
