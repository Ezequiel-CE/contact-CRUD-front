import AppContext from "./app-context";
import React, { useReducer } from "react";

const defaultState = {
  contacts: [],
  currectContact: "",
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

  const clearCartHandler = () => {
    dispatchAppAction({ type: "CLEAR" });
  };

  const appContext = {
    contacts: appState.contacts,
    currectContact: appState.currectContact,
    showModal: appState.showModal,
    modalType: appState.modalType,
    openModal,
    closeModal,
    changeModalType,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
