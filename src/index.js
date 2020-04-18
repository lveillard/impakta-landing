import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Header from "./layout/header";
import Footer from "./layout/footer";
import Main from "./layout/main";
import Sticky from "./layout/sticky";

function App() {
  return (
    <div className="App">
      <Header />
      <Sticky />
      <Main />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
