import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArrowDown from "../../atoms/ArrowDown/ArrowDown";
import CardMyth from "../../molecules/Cards/CardMyth";
import { fetchRandomMyth } from "../../../API/mythService";
import isEmpty from "lodash/isEmpty";
import Spinner from "../../atoms/Spinner/Spinner";

export default function HomeRandomMyth() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomMyth());
  }, [dispatch]);
  const { randomMyth, loading } = useSelector((state) => state.myth);

  return (
    <section id="Myth" className="Section Myth">
      <h2 className="Section-Title">Retrouvez les mythes</h2>
      <div className="Block Detail-Block">
        {loading && <Spinner />}
        {!isEmpty(randomMyth) && <CardMyth modal={false} data={randomMyth} />}
      </div>
      <ArrowDown href="#Map" />
    </section>
  );
}
