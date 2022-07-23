import AppContext from "./app-context";
import React, { useReducer, useCallback } from "react";

const defaultState = {
  contacts: [],
  currectContact: {},
  showModal: false,
  modalType: "delete",
};

const appReducer = (state, action) => {
  if (action.type === "OPEN_MODAL") {
    return { ...state, showModal: true };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  }

  if (action.type === "CHANGE_MODAL_TYPE") {
    return { ...state, modalType: action.modalType };
  }

  if (action.type === "SET_CURRENT_USER") {
    return { ...state, currectContact: action.currectContact };
  }

  return defaultState;
};

const AppProvider = ({ children }) => {
  const [appState, dispatchAppAction] = useReducer(appReducer, defaultState);

  const openModal = () => {
    dispatchAppAction({ type: "OPEN_MODAL" });
  };
  const closeModal = () => {
    dispatchAppAction({ type: "CLOSE_MODAL" });
  };

  const changeModalType = (modalType) => {
    dispatchAppAction({ type: "CHANGE_MODAL_TYPE", modalType });
  };

  const setCurrentContact = useCallback((currectContact) => {
    dispatchAppAction({ type: "SET_CURRENT_USER", currectContact });
  }, []);

  const appContext = {
    contacts: appState.contacts,
    currectContact: appState.currectContact,
    showModal: appState.showModal,
    modalType: appState.modalType,
    setCurrentContact,
    openModal,
    closeModal,
    changeModalType,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
