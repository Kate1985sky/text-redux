import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import { fetchItems } from "./features/catalog/catalogSlice";
import Modal from "./components/Modal";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <BrowserRouter>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <Main />
      </main>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
