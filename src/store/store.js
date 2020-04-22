import React, { useState, useEffect, useContext } from "react";

import useGlobalHook from "use-global-hook";

const initialState = {
  text: "null",
  details: "match",
  boxed: true,
  status: "",
  modal: { working: false, login: false },
};

const actions = {

  setStatus: (store, value) => {
    store.setState({ status: value })
  },

  setModal: (store, modale) => {
    console.log(store.state);

    // if we want to keep the rest of the modals open
    //store.setState({ modal: { ...store.state.modal, [modale]: !store.state.modal[modale] } });

    // but truth is that we want to put all them to false
    store.setState({ modal: { [modale]: !store.state.modal[modale] } });

  },

  changeVersion: store => {
    console.log(store.state);

    store.setState({ boxed: !store.state.boxed });
  },

  details: (store, detail, e) => {
    store.actions.handleScroll("end", 74, e);
    store.setState({ details: detail });
    console.log(store.state);
  },

  handleScroll: (store, type, position, e) => {
    e && e.preventDefault();
    type === "top"
      ? window.scrollTo(0, position)
      : window.scrollTo(0, window.innerHeight - position);
  },

  increaseTimer: (store, id) => {
    const oldValue = store.state.tasks.find(x => x.id === id);
    const newValue = { ...oldValue, time: oldValue.time + 1 };
    const indexOldElement = store.state.tasks.findIndex(
      ({ id }) => id === newValue.id
    );
    const newArray = Object.assign([...store.state.tasks], {
      [indexOldElement]: newValue
    });
    store.setState({ tasks: newArray });
  }
};

export const useGlobal = useGlobalHook(React, initialState, actions);
