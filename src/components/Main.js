import { Routes, Route } from "react-router-dom";
import { Search } from "../pages/Search/Search";
import React from "react";
import { useSelector } from "react-redux";
import { FormNewItem } from "../pages/FormNewItem/FormNewItem";
import { Bucket } from "../pages/Bucket/Bucket";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";

const Main = () => {
  const { isLogin } = useSelector((store) => store.auth);
  return (
    <Routes>
      {isLogin ? (
        <>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/add" element={<FormNewItem />}></Route>
          <Route path="/bucket" element={<Bucket />}></Route>
          <Route path="/" element={<Home />}></Route>
        </>
      ) : (
        <Route path="/login" element={<Login />}></Route>
      )}
    </Routes>
  );
};

export default Main;
