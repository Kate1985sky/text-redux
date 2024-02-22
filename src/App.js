import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import { fetchItems } from "./features/catalog/catalogSlice";
// import { Login } from "./pages/Login/Login";
import Modal from "./components/Modal";

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  // const { islogin } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);


  return (
    <BrowserRouter>
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <Main />
      </main>
    </BrowserRouter>
  )
}

export default App;
