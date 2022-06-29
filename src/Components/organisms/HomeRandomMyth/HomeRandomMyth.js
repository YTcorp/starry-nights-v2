import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

import ArrowDown from "../../atoms/ArrowDown/ArrowDown";
import CardMyth from "../../molecules/Cards/CardMyth";
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
      {!isEmpty(randomMyth) && <CardMyth modal={false} data={randomMyth} />}
      <ArrowDown href="#Map" />
    </section>
  );
}
