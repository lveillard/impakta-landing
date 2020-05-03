import React, { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import { useGlobal } from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bulma-components";
import axios from "axios";

import Login from "./login";
import Working from "./working";
import useStore from "use-global-hook";

import { useHistory } from "react-router-dom";

const Button = styled.span`
  color: black;
  cursor: pointer;

  background-color: ${(props) =>
    props.main ? "#fff067" : props.second ? "#ffd666" : "#ffa477"};
  height: 40px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1;
  padding: 0px 12px;
  font-size: 12px;
  font-weight: 550;
  letter-spacing: 1.5px;

  ${(props) =>
    props.right &&
    css`
      float: right;
    `}
  &:hover {
    background-color: ${(props) => (props.main ? "#ff4ea5" : "#ff4ea5")};
    color: ${(props) => (props.main ? "white" : "white")};
  }
`;

const Nav = styled.nav`
  background: #252525;
  height: 40px;

  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 2;
  display: flex;
  font-family: "Nunito", sans-serif;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 40px;

  /* Netflix logo */
  img {
    height: 40px;
    padding: 5px;
    vertical-align: middle;
  }
`;

const Bar = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  flex: 1 1 0%;
`;

const Inscription = styled.button`
  height: 48px;
  width: 173px;

  &:hover {
    background-color: #ffe923 !important;
    transform: translateY(-0.15em);
    transition-duration: 0.3s;
  }
`;

const IMG = styled.img`
  @media (max-height: 600px) {
    @media (max-width: 700px) {
      max-width: 200px;
    }
  }
`;

const Hero = (props) => {
  const [globalState, globalActions] = useGlobal();

  const history = useHistory();

  const [popup, setPopup] = useState("");

  function remove(e, id) {
    e.stopPropagation();
    globalActions.removeTask(id);
  }

  const LINKEDIN_STATE = "random_string:que_pasa_titi";
  const LINKEDIN_SCOPE = "r_liteprofile r_emailaddress";
  const LINKEDIN_RIDERECT = "http://localhost:3000/linkedin";
  const LINKEDIN_CLIENT_ID = "776bt41709lgww";

  const getURLWithQueryParams = (base, params) => {
    const query = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    return `${base}?${query}`;
  };

  const secondSteps = async () => {
    console.log("Holi");

    if (
      globalState.auth.linkedin &&
      LINKEDIN_STATE === globalState.auth.linkedin.state
    ) {
      try {
        const answer = await axios.get(
          "https://impaktia.glitch.me/auth/linkedin",
          {
            params: {
              state: globalState.auth.linkedin.state,
              code: globalState.auth.linkedin.code,
            },
          }
        );
        console.log(answer);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const LINKEDIN_URL = getURLWithQueryParams(
    "https://www.linkedin.com/oauth/v2/authorization",
    {
      response_type: "code",
      client_id: LINKEDIN_CLIENT_ID,
      redirect_uri: LINKEDIN_RIDERECT,
      state: LINKEDIN_STATE,
      scope: LINKEDIN_SCOPE,
    }
  );

  const signInWithLinkedin = () => {
    const TempPopUp = window.open(
      LINKEDIN_URL,
      "_blank",
      "width=450,height=600"
    );
  };

  const receiveLinkedInMessage = ({
    origin,
    data: { state, code, error, ...rest },
  }) => {
    if (origin !== window.location.origin || state !== LINKEDIN_STATE) return;

    if (code) {
      console.log("worked");
      globalActions.setAuthProp({ linkedin: { state: state, code: code } });
    } else if (
      error &&
      !["user_cancelled_login", "user_cancelled_authorize"].includes(error)
    ) {
      console.log("error");
      console.log("origin:", origin, "data:", { state, code, error, ...rest });
    }
  };

  useEffect(() => {
    window.addEventListener("message", receiveLinkedInMessage);
  }, []);

  return (
    <div>
      <div className="hero is-white">
        <section className="hero is-medium is-bold has-text-centered">
          <div className="">
            <div
              className="hero-body columns is-vcentered"
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: 0,
                marginRight: 0,
                height: "calc(100vh - 110px)",
                flexDirection: "row-reverse",
              }}
            >
              <div className="column">
                <IMG
                  src="candidata2.svg"
                  width="auto"
                  height="auto"
                  alt="illustration"
                />
              </div>
              <div className="column">
                {" "}
                <div className="container has-text-centered">
                  <h1 className="title ">MAXIMIZA TU IMPACTO</h1>
                  <h2 className="subtitle">
                    Encuentra el trabajo que mejor se adapta a tus skills y
                    gustos
                  </h2>
                  <Inscription
                    onClick={() => history.push("/programs")}
                    className="button is-warning "
                  >
                    <span className="icon is-small">
                      <img alt="" src="iconblack.png" />

                      {/*<svg
                        style={{ fill: "#2867B2", background: "white" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>*/}

                      <i className="fas fa-check" />
                    </span>
                    <span style={{ paddingLeft: "5px" }}>Inscríbete</span>
                  </Inscription>
                  {/*

                  <Button onClick={() => signInWithLinkedin()}>
                    Test inscription
                  </Button>

                  <Button onClick={() => secondSteps()}>SecondSteps</Button>
                  */}

                  <Modal
                    closeOnBlur={true}
                    show={globalState.modal.login || false}
                    showClose={false}
                    onClose={() => globalActions.setModal("login")}
                  >
                    <Modal.Content style={{ overflow: "hidden" }}>
                      <Login text="Estamos construyendo el sistema de login usando linkedin!..." />
                    </Modal.Content>
                  </Modal>

                  <Modal
                    closeOnBlur={true}
                    show={globalState.modal.working || false}
                    showClose={false}
                    onClose={() => globalActions.setModal("working")}
                  >
                    <Modal.Content style={{ overflow: "hidden" }}>
                      <Working text="Estamos construyendo el sistema de login usando linkedin..." />
                    </Modal.Content>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
