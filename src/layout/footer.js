import React, { useState, useEffect, useContext } from "react";

import { useGlobal } from "../store/store";

const Footer = (props) => {
  const [globalState, globalActions] = useGlobal();

  return (
    <footer
      style={{
        background:
          "linear-gradient(185deg, rgba(255,240,103,1) 0%, rgba(255,240,105,1) 6%, rgba(255,241,110,1) 13%, rgba(255,248,188,1) 100%)",
      }}
      className="footer"
    >
      <div className="container">
        <div className="columns">
          <div className="column is-3 is-offset-2">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </li>
              <li>
                <a href="#">Vestibulum errato isse</a>
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="#">Labore et dolore magna aliqua</a>
              </li>
              <li>
                <a href="#">Kanban airis sum eschelor</a>
              </li>
            </ul>
          </div>
          <div className="column is-4">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="#">Objects in space</a>
              </li>
              <li>
                <a href="#">Playing cards with coyote</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content has-text-centered">
          <p>
            <a
              className="icon"
              href="https://github.com/BulmaTemplates/bulma-templates"
            >
              <i className="fa fa-github" />
            </a>
          </p>
          <div className="control level-item">
            <a href="https://github.com/BulmaTemplates/bulma-templates">
              <div className="tags has-addons">
                <span className="tag is-dark">Impaktia</span>
                <span className="tag is-info">Recruiting</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
