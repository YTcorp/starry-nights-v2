import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArrowDown from "../../atoms/ArrowDown/ArrowDown";
import CardMyth from "../../molecules/CardMyth/CardMyth";
import { fetchRandomMyth } from "../../../API/mythService";

export default function HomeRandomMyth() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomMyth());
  }, [dispatch]);
  const { randomMyth } = useSelector((state) => state.myth);

  return (
    <section id="Myth" className="Section Myth">
      <h2 className="Section-Title">Retrouvez les mythes</h2>
      <CardMyth modal={false} data={randomMyth} />
      <ArrowDown />
    </section>
  );
}
