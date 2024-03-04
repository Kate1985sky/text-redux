import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { logginError } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { fakeUser } from "../../features/auth/authConfig";

const defaultFormValues = {
  name: "",
  password: "",
};

export const Login = () => {
  const [item, setItem] = useState(defaultFormValues);

  const { error } = useSelector((store) => store.auth);

  let navigate = useNavigate();

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

  const hendlerChange = (e) => {
    setItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="wrapper-login">
      <div className="container-login">
        <h3 className="title-search">Login form</h3>
        {error && <div className="error">{error}</div>}
        <form className="container-form" onSubmit={submitForm}>
          <label className="form">
            <input
              className="form-input-login"
              type="text"
              onChange={hendlerChange}
              value={item["name"]}
              name="name"
              placeholder="name"
            />
          </label>
          <label className="form">
            <input
              className="form-input-login"
              type="text"
              onChange={hendlerChange}
              value={item["password"]}
              name="password"
              placeholder="password"
            />
          </label>
          <button type="submit" className="submit">
            <span>log in</span>
          </button>
        </form>
      </div>
    </section>
  );
};
