import { CartIcon } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import React, { useMemo } from "react";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {

  const dispatch = useDispatch();

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
            <button onClick={() => {dispatch(logout())}}>
              logout
            </button>
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
