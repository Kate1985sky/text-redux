import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const { amount } = useSelector((store) => store.bucket);

  return (
    <nav>
      <div className="nav-center">
        <NavLink as={NavLink} to="/">
          <h3>redux toolkit</h3>
        </NavLink>
        <NavLink as={NavLink} to="/search">
          search
        </NavLink>
        <NavLink as={NavLink} to="/add">
        + add
        </NavLink>
        <NavLink as={NavLink} to="/login">
        log in
        </NavLink>

        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
