import React, { useEffect } from "react";
import { useEntertainment } from "../context/Entertainment";

function Loading() {
  const { dispatch } = useEntertainment();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "loading" });
    }, 1000);
  });
  return <span className="loader"></span>;
}

export default Loading;
