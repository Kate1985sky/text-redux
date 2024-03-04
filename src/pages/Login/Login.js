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

  // console.log("item", item.name);
  // console.log("fakeUser", fakeUser.username);
  // console.log("сравнение1", fakeUser.username === item.name && fakeUser.password === item.password);
  // console.log("сравнение2", fakeUser.password === item.password);
  

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const checkLoginUser = () => {
    if (
      fakeUser.username === item.name &&
      fakeUser.password === item.password
    ) {
      handleLogin();
    } else {
      dispatch(logginError(error));
    }
  }

  const submitForm = (e) => {
    e.preventDefault();

    checkLoginUser();

    resetForm();
  };

  const resetForm = () => {
    setItem(defaultFormValues);
  };

  const hendlerChange = (e) => {
    setItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      id: crypto.randomUUID(),
    }));
  };

  function handleLogin() {
    dispatch(login());
    navigate("/");
  }

  return (
    <section className="wrapper-login">
      <div className="container-login">
        <h3 className="title-search">Login form</h3>
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
        </form>
        <button onClick={handleLogin} type="submit" className="submit">
          <span>log in</span>
        </button>
      </div>
    </section>
  );
};
