import React, { useState, useEffect, useContext } from "react";

import { useGlobal } from "../store/store";

const Footer = props => {
  const [globalState, globalActions] = useGlobal();

  return (
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-3 is-offset-2">
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
          <div class="column is-3">
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
          <div class="column is-4">
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
        <div class="content has-text-centered">
          <p>
            <a
              class="icon"
              href="https://github.com/BulmaTemplates/bulma-templates"
            >
              <i class="fa fa-github" />
            </a>
          </p>
          <div class="control level-item">
            <a href="https://github.com/BulmaTemplates/bulma-templates">
              <div class="tags has-addons">
                <span class="tag is-dark">Impaktia</span>
                <span class="tag is-info">Recruiting</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
