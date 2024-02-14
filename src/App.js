import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import { fetchItems } from "./features/catalog/catalogSlice";
// import {EditorProvider} from "./hooks/EditorProvider";


function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    
    <BrowserRouter>
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <Main />
      </main>
    </BrowserRouter>
   
  );
}

export default App;
