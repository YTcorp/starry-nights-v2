import React from "react";

export default function Anchor({ target, url, content }) {
  if (target) {
    return (
      <a target="_blank" rel="noreferrer" href={url}>
        {content}
      </a>
    );
  } else {
    return <a href={url}>{content}</a>;
  }
}
