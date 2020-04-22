import React, { useState, useEffect, useContext } from "react";

import styled, { css } from "styled-components";

import { useGlobal } from "../store/store";
import { candidato } from "./data";

const Wrapper = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  width: 98%;
`;

const Columns = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
  ${props =>
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
  ${props =>
    props.center &&
    css`
      align-items: center;
      display: flex;
    `}

  ${props =>
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

const Details = props => {
  const [globalState, globalActions] = useGlobal();

  return (
    <React.Fragment>
      {!globalState.boxed ? (
        <Wrapper className="hero is-white">
          {" "}
          <section className="hero is-bold ">
            <div
              className="hero-body columns "
              style={{
                marginTop: "auto",
                marginBottom: "auto"
              }}
            >
              <Columns className="holi" align>
                <Column top>
                  <Columns>
                    <Column center>
                      {" "}
                      <IMG src={"img/IA.svg"} alt="IA" />
                    </Column>
                  </Columns>
                  <Columns>
                    {" "}
                    <Column>
                      {" "}
                      <H2 className="">Inteligencia Artificial</H2>
                      <Des>
                        Nuestra I.A. identifica los puestos de trabajo que mejor
                        se adaptan a tus habilidades y a tu personalidad.
                      </Des>
                    </Column>
                  </Columns>
                </Column>

                <Column top>
                  <Columns>
                    <Column center>
                      {" "}
                      <IMG src={"img/collect.svg"} alt="collect" />
                    </Column>
                  </Columns>
                  <Columns>
                    {" "}
                    <Column>
                      {" "}
                      <H2 className=""> Proceso unificado </H2>
                      <Des>
                        {" "}
                        Las mejores empresas y start-ups en un sólo proceso.
                      </Des>
                    </Column>
                  </Columns>
                </Column>

                <Column top>
                  <Columns>
                    <Column center>
                      {" "}
                      <IMG src={"img/learning.svg"} alt="learning" />
                    </Column>
                  </Columns>
                  <Columns>
                    {" "}
                    <Column>
                      {" "}
                      <H2 className=""> Proceso didáctico </H2>
                      <Des>
                        Uno de nuestros objetivos principales es que aprendas
                        mientras realizas las pruebas y que recibas todo el
                        feedback posible, ya sea positivo o negativo.
                      </Des>
                    </Column>
                  </Columns>
                </Column>
              </Columns>
            </div>
          </section>
        </Wrapper>
      ) : (
          <div
            className="container"
            style={{ marginTop: "50px", marginBottom: "50px", maxWidth: "98%" }}
          >
            <Columns
              className="columns is-multiline is-gapless"
              style={{ margin: "0px" }}
            >
              {globalState.details &&
                candidato[globalState.details].type === "horizontal" &&
                candidato[globalState.details].items.map(x => (
                  <div key={x.title} className="column ">
                    <div className="card is-shady" style={{ height: "100%" }}>
                      <div className=" has-text-centered" />
                      {x.image && (
                        <div>
                          <IMG src={x.image} alt="error" />
                        </div>
                      )}
                      <div className=" card-content">
                        <div className=" content">
                          <h4> {x.title} </h4>
                          {x.contentType === "html" ?
                            <Des dangerouslySetInnerHTML={{ __html: x.content }}></Des>
                            :
                            <Des > <li> {x.content}</li>  </Des>
                          }
                          <p>
                            <a href="#">Learn more</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {globalState.details &&
                candidato[globalState.details].type === "vertical" && (
                  <div className="card is-shady" style={{ width: "100%" }}>
                    {candidato[globalState.details].items.map(x => (
                      <div key={x.title} className="column ">
                        <div className=" card-content">
                          <div className=" content">
                            <h4> {x.title} </h4>
                            <Des> {x.content}</Des>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </Columns>
          </div>
        )}
    </React.Fragment>
  );
};

export default Details;
