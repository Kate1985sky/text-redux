import { useState } from "react";
import { useDispatch } from "react-redux";
import login from "../../features/auth/authSlice";

const defaultFormValues = {
  name: "",
  password: "",
};

export const Login = () => {
  const [item, setItem] = useState(defaultFormValues);

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

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

  return (
    <section>
      <div className="addCart">
        <form onSubmit={submitForm}>
          <label className="form">
            <input
              className="form-input"
              type="text"
              onChange={hendlerChange}
              value={item["name"]}
              name="name"
              placeholder="name"
            />
          </label>
          <label className="form">
            <input
              className="form-input"
              type="text"
              onChange={hendlerChange}
              value={item["password"]}
              name="password"
              placeholder="password"
            />
          </label>
        </form>
        <button
          onClick={() => {
            dispatch(login())
          }}
          type="submit"
          className="submit"
        >
          <span>login ={'>'}]</span>
        </button>
      </div>
    </section>
  );
};
