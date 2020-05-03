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
  cursor: pointer;
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

const Header = (props) => {
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
          <div className="hero-head">
            <Nav>
              <Logo
                onClick={(e) => {
                  e.preventDefault();

                  history.push("/");
                  globalActions.handleScroll("top", 0);
                }}
              >
                <img
                  style={{ padding: "2px 0px 2px 15px" }}
                  src="logoblack.svg"
                />
              </Logo>
              <Bar>
                {" "}
                <Button
                  onClick={() => {
                    globalActions.handleScroll("top", 0);
                    history.push("/programs");
                  }}
                >
                  {" "}
                  INSCRIPCIÓN{" "}
                </Button>
                <Button
                  second
                  onClick={() => {
                    globalActions.setModal("login");
                  }}
                >
                  {" "}
                  INICIAR SESIÓN{" "}
                </Button>
                <Button
                  main
                  onClick={() => {
                    globalActions.handleScroll("end", 42);
                  }}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                    style={{ fontWeight: "100", fill: "#000000" }}
                  >
                    {" "}
                    <path d="M 30.306641 17.960938 C 23.138641 17.960938 17.306641 23.792938 17.306641 30.960938 L 17.306641 69.960938 C 17.306641 77.128938 23.138641 82.960938 30.306641 82.960938 L 69.306641 82.960938 C 76.474641 82.960938 82.306641 77.128938 82.306641 69.960938 L 82.306641 30.960938 C 82.306641 23.791938 76.475641 17.960938 69.306641 17.960938 L 30.306641 17.960938 z M 30.306641 19.960938 L 69.306641 19.960938 C 75.371641 19.960938 80.306641 24.895937 80.306641 30.960938 L 80.306641 69.960938 C 80.306641 76.025937 75.371641 80.960938 69.306641 80.960938 L 30.306641 80.960938 C 24.241641 80.960938 19.306641 76.025937 19.306641 69.960938 L 19.306641 30.960938 C 19.306641 24.895937 24.241641 19.960938 30.306641 19.960938 z M 33.144531 22.960938 C 27.168531 22.960938 22.306641 27.822828 22.306641 33.798828 L 22.306641 67.123047 C 22.306641 73.099047 27.168531 77.960938 33.144531 77.960938 L 66.470703 77.960938 C 72.446703 77.960938 77.306641 73.099047 77.306641 67.123047 L 77.306641 48.460938 C 77.306641 48.183937 77.082641 47.960938 76.806641 47.960938 C 76.530641 47.960938 76.306641 48.184937 76.306641 48.460938 L 76.306641 67.123047 C 76.306641 72.547047 71.894703 76.960938 66.470703 76.960938 L 33.144531 76.960938 C 27.720531 76.960938 23.306641 72.547047 23.306641 67.123047 L 23.306641 33.798828 C 23.306641 28.374828 27.720531 23.960937 33.144531 23.960938 L 66.806641 23.960938 C 67.082641 23.960938 67.306641 23.736937 67.306641 23.460938 C 67.306641 23.184938 67.082641 22.960937 66.806641 22.960938 L 33.144531 22.960938 z M 50.128906 32.591797 C 48.861906 32.591797 47.751219 33.005266 46.824219 33.822266 C 45.881219 34.655266 45.402344 35.700734 45.402344 36.927734 C 45.402344 37.544734 45.534875 38.128156 45.796875 38.660156 C 46.050875 39.179156 46.393406 39.638344 46.816406 40.027344 C 47.236406 40.413344 47.733016 40.726031 48.291016 40.957031 C 48.856016 41.192031 49.474906 41.310547 50.128906 41.310547 C 51.434906 41.310547 52.551266 40.877484 53.447266 40.021484 C 54.348266 39.158484 54.804687 38.117734 54.804688 36.927734 C 54.804688 35.733734 54.336062 34.699562 53.414062 33.851562 C 52.503062 33.015563 51.398906 32.591797 50.128906 32.591797 z M 50.130859 33.591797 C 51.156859 33.591797 52.008281 33.918844 52.738281 34.589844 C 53.456281 35.249844 53.806641 36.014688 53.806641 36.929688 C 53.806641 37.848687 53.463812 38.624781 52.757812 39.300781 C 52.044812 39.982781 51.184859 40.3125 50.130859 40.3125 C 49.608859 40.3125 49.117828 40.220156 48.673828 40.035156 C 48.223828 39.848156 47.827141 39.599922 47.494141 39.294922 C 47.163141 38.990922 46.894312 38.630656 46.695312 38.222656 C 46.502313 37.826656 46.402344 37.391687 46.402344 36.929688 C 46.402344 35.988687 46.756328 35.216266 47.486328 34.572266 C 48.234328 33.911266 49.099859 33.591797 50.130859 33.591797 z M 76.806641 36.960938 C 76.530641 36.960938 76.306641 37.183937 76.306641 37.460938 L 76.306641 39.460938 C 76.306641 39.736938 76.530641 39.960938 76.806641 39.960938 C 77.082641 39.960938 77.306641 39.736937 77.306641 39.460938 L 77.306641 37.460938 C 77.306641 37.184937 77.082641 36.960938 76.806641 36.960938 z M 76.806641 40.960938 C 76.530641 40.960938 76.306641 41.184938 76.306641 41.460938 L 76.306641 45.460938 C 76.306641 45.736938 76.530641 45.960937 76.806641 45.960938 C 77.082641 45.960938 77.306641 45.736938 77.306641 45.460938 L 77.306641 41.460938 C 77.306641 41.183937 77.082641 40.960938 76.806641 40.960938 z M 42.757812 44.013672 C 42.481812 44.013672 42.257813 44.237672 42.257812 44.513672 L 42.257812 47.087891 C 42.257812 47.363891 42.481812 47.587891 42.757812 47.587891 C 46.390813 47.587891 46.390625 48.797313 46.390625 49.195312 L 46.390625 62.919922 C 46.390625 63.328922 46.390812 64.419922 42.757812 64.419922 C 42.481812 64.419922 42.257813 64.643922 42.257812 64.919922 L 42.257812 67.492188 C 42.257812 67.768187 42.481812 67.992188 42.757812 67.992188 L 57.765625 67.992188 C 58.041625 67.992188 58.265625 67.768187 58.265625 67.492188 L 58.265625 64.919922 C 58.265625 64.643922 58.041625 64.419922 57.765625 64.419922 C 56.038625 64.419922 54.931656 64.173406 54.472656 63.691406 C 54.282656 63.491406 54.20175 63.243156 54.21875 62.910156 L 54.21875 62.886719 L 54.21875 44.513672 C 54.21875 44.237672 53.99475 44.013672 53.71875 44.013672 L 42.757812 44.013672 z M 43.257812 45.013672 L 53.216797 45.013672 L 53.216797 62.876953 C 53.189797 63.479953 53.367094 63.985813 53.746094 64.382812 C 54.364094 65.031813 55.488625 65.361109 57.265625 65.412109 L 57.265625 66.992188 L 43.257812 66.992188 L 43.257812 65.414062 C 44.685812 65.383062 47.390625 65.121922 47.390625 62.919922 L 47.390625 49.195312 C 47.390625 47.560313 46.000812 46.687703 43.257812 46.595703 L 43.257812 45.013672 z" />
                  </svg>
                </Button>{" "}
              </Bar>
            </Nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
