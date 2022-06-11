import React from "react";
import { MutatingDots } from "react-loader-spinner";

export default function Spinner({ className }) {
  return <MutatingDots height="100" width="100" ariaLabel="loading" />;
}
