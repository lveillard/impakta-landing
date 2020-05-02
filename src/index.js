import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.min.css";

import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./layout/header";
import Hero from "./layout/hero";
import Footer from "./layout/footer";

import Main from "./layout/main";
import Sticky from "./layout/sticky";

import ProgramDescription from "./layout/programDescription";

import LinkedInPopUp from "./layout/LinkedinPopUp";

function Landing() {
  return (
    <div style={{ background: "#fafafa" }} className="App">
      <ToastContainer />
      <Header />
      <Hero />
      <Sticky />
      <Main />
      <Footer />
    </div>
  );
}

function Programs() {
  return (
    <div className="Programs">
      <ToastContainer />
      <Header />
      <ProgramDescription />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/linkedin" component={LinkedInPopUp} />
      <Route path="/programs" component={Programs} />
      <Route path="/" component={Landing} />
    </Switch>
  </BrowserRouter>,

  rootElement
);
