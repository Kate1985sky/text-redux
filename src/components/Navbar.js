import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import React, { useMemo } from "react";

const Navbar = () => {
  const { inBucket } = useSelector((store) => store.bucket);
  const { isLogin } = useSelector((store) => store.auth);

  const amount = useMemo(() => {
    let result = 0;
    inBucket.forEach((item) => {
      result += item.amount;
    });
    return result;
  }, [inBucket]);

  return (
    <nav>
      <div className="nav-center">
        {isLogin ? (
          <>
            <NavLink as={NavLink} to="/">
              <h3>redux toolkit</h3>
            </NavLink>
            <NavLink as={NavLink} to="/search">
              search
            </NavLink>
            <NavLink as={NavLink} to="/add">
              + add
            </NavLink>
            <NavLink as={NavLink} to="/logout">
              logout
            </NavLink>{" "}
          </>
        ) : (
          <NavLink as={NavLink} to="/login">
            log in
          </NavLink>
        )}

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
