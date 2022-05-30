import React from "react";

export default function Anchor({ url, description }) {
  return <a href={url}>{description}</a>;
}
