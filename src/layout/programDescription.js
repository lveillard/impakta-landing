import React, { useState, useEffect, useContext } from "react";

import { useGlobal } from "../store/store";

import Details from "../details/details";
import styled, { css } from "styled-components";

import { programs } from "../details/data";

import { Heading, Button } from "react-bulma-components";
import Header from "./header";

const Wrapper = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  width: 98%;
`;

const Columns = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    flex-direction: column;
    text-align: center;
  }
  ${(props) =>
    props.aligned &&
    css`
      align-items: baseline;
    `}
`;

const Column = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 10px;
  margin-right: 10px;
  ${(props) =>
    props.center &&
    css`
      align-items: center;
      display: flex;
    `}

  ${(props) =>
    props.top &&
    css`
      margin-top: 8vh;
    `}
`;

const H2 = styled.h1`
  font-size: px;
  font-weight: 900;
  margin: 2rem 0 20px;

  @media (max-width: 900px) {
    font-size: 22px;
    font-weight: 400;
  }
`;

const ButtonBot = styled.div`
  height: 50px;
  border: none;
  background: ${(props) => props.color + "33"};
  &:hover {
    background: ${(props) => props.color + "73"};
  }
  &:focus {
    box-shadow: ${(props) => "0 0 0 0.125em " + props.color + "50"};
    border-color: ${(props) => props.color + "50"};
    border: 1px solid;
  }
  &:active {
    box-shadow: ${(props) => "0 0 0 0.125em " + props.color + "50"};
    border-color: ${(props) => props.color + "50"};
    outline: none;
    border: none;
  }
`;

const Carta = styled.div`
  cursor: pointer;
  &:hover {
    background: ${(props) => props.color + "11"};
  }
`;

const Des = styled.p`
  font-size: 18px;
  font-weight: 100;
`;

const IMG = styled.img`
  max-width: 75%;
  display: block;
  margin: 25px auto 0px auto;
  object-fit: cover;
  @media (max-width: 900px) {
    max-width: 50%;
  }
  @media (max-width: 500px) {
    max-width: 75%;
  }
`;

const ProgramDescription = (props) => {
  const [globalState, globalActions] = useGlobal();

  return (
    <React.Fragment>
      <Header />
      <section
        className="main "
        style={{ paddingLeft: "60px", paddingRight: "60px" }}
      >
        <div
          className="container"
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            maxWidth: "1200px",
            minHeight: "83vh",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Columns className="columns is-multiline" style={{ margin: "0px" }}>
            {globalState.details &&
              programs.items.map((x) => (
                <div key={x.title} className="column ">
                  <Carta
                    color={x.buttonColor}
                    className="card is-shady"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div style={{}} className="  has-text-centered">
                      {" "}
                      {x.image && <IMG src={x.image} alt="error" />}
                    </div>

                    <div className=" card-content" style={{ flex: "auto" }}>
                      <div className=" content">
                        <Heading size={5} style={{}}>
                          {" "}
                          {x.title}{" "}
                        </Heading>
                        {x.contentType === "html" ? (
                          <Des
                            dangerouslySetInnerHTML={{ __html: x.content }}
                          ></Des>
                        ) : (
                          <Des> {x.content} </Des>
                        )}{" "}
                      </div>{" "}
                    </div>

                    <div class="cardFooter">
                      <ButtonBot
                        className="button is-fullwidth"
                        color={x.buttonColor}
                      >
                        <b> {x.title}</b>
                      </ButtonBot>{" "}
                    </div>
                  </Carta>
                </div>
              ))}
          </Columns>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProgramDescription;
