import { Routes, Route, useNavigate } from "react-router-dom";
import { Search } from "../pages/Search/Search";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FormNewItem } from "../pages/FormNewItem/FormNewItem";
import { Bucket } from "../pages/Bucket/Bucket";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";

const ProtectedRoute = ({ children, ...rest }) => {
  const { isLogin } = useSelector((store) => store.auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return children;
};

const Main = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/search"
        element={
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/add"
        element={
          <ProtectedRoute>
            <FormNewItem />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/bucket"
        element={
          <ProtectedRoute>
            <Bucket />
          </ProtectedRoute>
        }
      ></Route>

      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Main;
