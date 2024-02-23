import { Routes, Route } from "react-router-dom";
import { Search } from "../pages/Search/Search";
import React from "react";
import CartContainer from "../pages/CartContainer/CartContainer";
import { FormNewItem } from "../pages/FormNewItem/FormNewItem";
import { Bucket } from "../pages/Bucket/Bucket";
import { Login } from "../pages/Login/Login";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<CartContainer />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/add" element={<FormNewItem />}></Route>
      <Route path="/bucket" element={<Bucket />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Main;
