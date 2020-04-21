import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { useGlobal } from "../store/store";

const Features = styled.div`
  background: #fff067;
  border-bottom: 2px solid #ffe923;
  position: sticky;
  top: 0;
  z-index: 1;
  .featureNav {
    width: 80%;
    @media (max-width: 600px) {
      width: 100%;
    }
    cursor: pointer;
    margin: 0 auto;
    display: flex;
  }
  a {
    text-decoration: none;
    text-align: center;
    font-weight: bold;

    color: black;
    width: 25%;

    padding: 12px 8px 2px 8px;
    line-height: 20px;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    &:hover {
      color: white;
      svg {
        fill: white;
      }
    }
    h2 {
      margin: 10px 0 0;
      font-size: 0.9em;
    }
    svg {
      fill: #777;
    }
    .selected {
      color: white;
      fill: white;
    }
  }
`;

const Sticky = props => {
  const [globalState, globalActions] = useGlobal();

  return (
    <div className="box cta">
      <Features>
        <div className="prefeatureNav" style={{ padding: "34px 0 0 0" }} />
        <div className="featureNav">
          <a href={"/"} onClick={e => globalActions.details("match", e)}>
            <h2> 🎯 </h2>
            <h2> MATCH </h2>
          </a>
          <a href={"/"} onClick={e => globalActions.details("impact", e)}>
            <h2> 🚀</h2>
            <h2> IMPACTO</h2>
          </a>
          <a href={"/"} onClick={e => globalActions.details("community", e)}>
            <h2> 👥</h2>
            <h2> COMUNIDAD</h2>
          </a>
          <a href={"/"} onClick={e => globalActions.details("faq", e)}>
            <h2> ❓</h2>
            <h2> FAQ </h2>
          </a>
        </div>
      </Features>
    </div>
  );
};

export default Sticky;
