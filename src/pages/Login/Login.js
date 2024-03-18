import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { logginError } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { fakeUser } from "../../features/auth/authConfig";
import { useTranslation } from "react-i18next";

const defaultFormValues = {
  name: "",
  password: "",
};

export const Login = () => {
  const [item, setItem] = useState(defaultFormValues);

  const { error } = useSelector((store) => store.auth);

  let navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    if (
      fakeUser.username === item.name &&
      fakeUser.password === item.password
    ) {
      navigate("/");
      dispatch(login());
    } else {
      dispatch(logginError({ message: "Wrong login or password" }));
    }

    resetForm();
  };

  const resetForm = () => {
    setItem(defaultFormValues);
  };

  const changeHandler = (e) => {
    setItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="wrapper-login">
      <div className="container-login">
        <h3 className="title-search">{t("login_form")}</h3>
        {error && <div className="error"><span className="error-span">{error}</span></div>}
        <form className="container-form" onSubmit={submitForm}>
          <label className="form">
            <input
              className="form-input-login"
              type="text"
              onChange={changeHandler}
              value={item["name"]}
              name="name"
              placeholder={t("name")}
            />
          </label>
          <label className="form">
            <input
              className="form-input-login"
              type="password"
              onChange={changeHandler}
              value={item["password"]}
              name="password"
              placeholder={t("password")}
            />
          </label>
          <button type="submit" className="submit">
            <span>{t("log_in_login")}</span>
          </button>
        </form>
      </div>
    </section>
  );
};
