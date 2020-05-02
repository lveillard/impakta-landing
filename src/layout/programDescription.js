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
  max-height: 90%;

  display: block;
  margin: 25px auto 0px auto;
  object-fit: cover;

  @media (min-width: 700px) {
    max-width: 50%;
  }

  @media (min-width: 1100px) {
    max-width: 92%;
  }
`;

const HeaderC = styled.div`
  max-height: 20%;

  @media (min-width: 700px) {
    max-height: 40%;
  }

  @media (min-width: 1100px) {
    max-height: 32%;
  }
`;

const ProgramDescription = (props) => {
  const [globalState, globalActions] = useGlobal();

  const [size, setSize] = useState("");

  useEffect(() => {});
  return (
    <React.Fragment>
      <Header />
      <content
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
                <div
                  style={{
                    flexGrow: "1",
                    transition: "all 400ms ease-in-out",
                  }}
                  key={x.title + size}
                  className="column "
                >
                  <Carta
                    color={x.buttonColor}
                    className="card is-shady"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <HeaderC style={{}} className="  has-text-centered">
                      {" "}
                      {x.image && <IMG src={x.image} alt="error" />}
                    </HeaderC>

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
      </content>
    </React.Fragment>
  );
};

export default ProgramDescription;
