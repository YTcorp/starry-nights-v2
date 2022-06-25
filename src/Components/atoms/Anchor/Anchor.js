import React from "react";

export default function Anchor({
  target,
  url,
  content,
  customClass,
  funcClick,
  children,
}) {
  if (target) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        className={customClass}
        onClick={funcClick && (() => funcClick())}
        href={url}
      >
        {content || children}
      </a>
    );
  } else {
    return (
      <a
        className={customClass}
        onClick={funcClick && (() => funcClick())}
        href={url}
      >
        {content || children}
      </a>
    );
  }
}
