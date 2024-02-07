import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center">
      <div>Oops Something went wrong....</div>
      <p>{error.data}</p>
    </div>
  );
};

export default Error;
