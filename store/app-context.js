import { createContext } from "react";

const AppContex = createContext({
  contacts: [],
  currectContact: "",
  showModal: false,
  modalType: "",
  openModal: () => {},
  closeModal: () => {},
  changeModalType: (modalType) => {},
});

export default AppContex;
