import React from "react";
import { Puff } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Puff
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
