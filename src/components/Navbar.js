import { CartIcon } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import React, { useMemo } from "react";
import { logout } from "../features/auth/authSlice";
import { LogoutIcon } from "../icons";
import i18next from "i18next";
import { LOCALS } from "../constants/languages";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  

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
              <h4>{t("search")}</h4>
            </NavLink>
            <NavLink as={NavLink} to="/add">
              <h4>{t("add")}</h4>
            </NavLink>
            <button
              className="btn-logout"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <LogoutIcon />
            </button>
          </>
        ) : (
          <NavLink as={NavLink} to="/login">
            <h4>{t("log_in")}</h4>
          </NavLink>
        )}

        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
        <div>
          <button disabled={i18next.language === LOCALS.EN} className="btn-language" onClick={() => i18next.changeLanguage("en")}>
            {t("english")} /
          </button>
          <button disabled={i18next.language === LOCALS.UK} className="btn-language" onClick={() => i18next.changeLanguage("uk")}>
            {t("ukrainian")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
