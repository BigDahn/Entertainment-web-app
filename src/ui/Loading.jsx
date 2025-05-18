import React, { useEffect } from "react";
import { useEntertainment } from "../context/Entertainment";

function Loading() {
  const { dispatch } = useEntertainment();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "loading" });
    }, 9000);
  });
  return <span class="loader"></span>;
}

export default Loading;
