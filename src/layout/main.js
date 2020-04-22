import React, { useState, useEffect, useContext } from "react";

import { useGlobal } from "../store/store";
import Details from "../details/details";

const Main = props => {
  const [globalState, globalActions] = useGlobal();

  return (
    <div className="main">


      {" "}
      {/*
      <button
        onClick={() => globalActions.changeVersion()}
        style={{ background: "red", width: "100px" }}
      >
        {" "}
        version{" "}
      </button>

     */}
      <Details /> <br />
    </div>
  );
};

export default Main;
