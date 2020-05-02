import React, { useState, useEffect, useCallback, useContext } from "react";

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
    background-color: ${(props) => props.color + "11"};
  }
  @media (min-width: 1100px) {
    max-height: calc(100vh - 110px);
  }
`;

const Des = styled.p`
  font-size: 18px;
  font-weight: 100;
`;

const IMG = styled.img`
  max-width: 75%;
  max-height: 30vh;

  display: block;
  margin: 25px auto 0px auto;
  object-fit: cover;

  @media (min-width: 700px) {
    max-width: 50%;
    max-height: 90%;
  }

  @media (min-width: 1100px) {
    max-width: 92%;
    max-height: 90%;
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

const Container = styled.div`
  max-width: 650px;

  @media (min-width: 700px) {
    max-width: 900px;
  }

  @media (min-width: 1100px) {
    max-width: 1200px;
    max-height: calc(100vh - 110px);
  }
`;

const ProgramDescription = (props) => {
  const [globalState, globalActions] = useGlobal();

  const [current, setCurrent] = useState(null);
  const [currentRemoved, setCurrentRemoved] = useState(null);

  const [remover, setRemover] = useState(false);
  const [clickBlocker, setClickBlocker] = useState(false);

  const [loading, setLoading] = useState(false);

  const currentAdder = (id) => {
    // empezamos de cero
    setLoading(false);

    setClickBlocker(true);

    // seleccionamos el que queremos
    setCurrent(id);

    // despues de 300 msegundos empezamos a quitar cosas

    setTimeout(() => {
      setLoading(true);
      globalActions.handleScroll("top", 0);
    }, 500);

    //despues de 800 msegundos nos lo cargamos todo
    setTimeout(() => {
      setRemover(true);
    }, 600);

    // despues de 1s ya solo queda el seleccionado
    setTimeout(() => {
      setLoading(false);
      setClickBlocker(false);
    }, 800);
  };

  const currentRemover = (id) => {
    console.log("remover");
    setLoading(true);
    setCurrent(null);

    setClickBlocker(true);

    setCurrentRemoved(id);
    setRemover(false);

    setTimeout(() => {
      setLoading(false);
      setCurrentRemoved(null);
      setClickBlocker(false);
    }, 500);

    /*setLoading(true);

    setTimeout(() => 
      setCurrent(null);
    }, 500);

    setTimeout(() => {
      setLoading(false);
    }, 600);*/
  };
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      currentRemover();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <content
        className="main "
        style={{ paddingLeft: "60px", paddingRight: "60px" }}
      >
        <Container
          className="container"
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Columns className="columns is-multiline" style={{ margin: "0px" }}>
            {globalState.details &&
              programs.items.map((x) => (
                <React.Fragment>
                  {(x.id === current || !remover) && (
                    <div
                      className="column "
                      style={{
                        flexGrow: "1",
                        //maxWidth: loading && current !== x.id && "200px",
                        transition:
                          "opacity 600ms, flex-basis 1000ms ease-in-out, max-width 500ms ease-in-out 500ms",
                        flexBasis: current === x.id && "75%",
                        //opacity: loading && 0,
                        opacity:
                          currentRemoved !== null
                            ? currentRemoved !== x.id && 0.2
                            : current === null
                            ? 1
                            : current !== x.id && 0.2,
                      }}
                      order={x.id == 3 && 1}
                      key={x.title}
                    >
                      <Carta
                        color={x.buttonColor}
                        onClick={() => {
                          if (clickBlocker === true) {
                          } else if (current !== x.id) {
                            currentAdder(x.id);
                          } else {
                            currentRemover(x.id);
                          }
                        }}
                        className="card is-shady"
                        style={{
                          cursor: clickBlocker && "default",

                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <HeaderC style={{}} className="has-text-centered">
                          {x.image && <IMG src={x.image} alt="error" />}
                        </HeaderC>

                        {(!loading ||
                          x.id === current ||
                          x.id === currentRemoved) && (
                          <div
                            className=" card-content"
                            style={{ flex: "auto" }}
                          >
                            <div className=" content">
                              <Heading size={5} style={{ textAlign: "center" }}>
                                {x.title}
                              </Heading>
                              {x.contentType === "html" ? (
                                <Des
                                  dangerouslySetInnerHTML={{
                                    __html: x.content,
                                  }}
                                ></Des>
                              ) : (
                                <Des> {x.content} </Des>
                              )}{" "}
                            </div>{" "}
                          </div>
                        )}
                        {(!loading ||
                          x.id === current ||
                          x.id === currentRemoved) && (
                          <div className="cardFooter">
                            <ButtonBot
                              className="button is-fullwidth"
                              color={x.buttonColor}
                            >
                              <b> {x.title}</b>
                            </ButtonBot>{" "}
                          </div>
                        )}
                      </Carta>
                    </div>
                  )}
                </React.Fragment>
              ))}
          </Columns>
        </Container>
      </content>
    </React.Fragment>
  );
};

export default ProgramDescription;
