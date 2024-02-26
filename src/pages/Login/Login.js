import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { CatalogItem } from "../../components/CatalogItem";

const defaultFormValues = {
  name: "",
  password: "",
};

export const Login = () => {
  const [item, setItem] = useState(defaultFormValues);

  const { isLogin } = useSelector((store) => store.auth);
  const { items, isLoading } = useSelector((store) => store.catalog);

  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

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
    <>
      {isLogin ? (
        <section className="cart">
          <header>
            <h2>Our catalog</h2>
          </header>
          <div>
            {isLogin
              ? items.map((item) => {
                  return <CatalogItem key={item.id} {...item} />;
                })
              : null}
          </div>
        </section>
      ) : (
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
            <button
              onClick={() => {
                dispatch(login());
              }}
              type="submit"
              className="submit"
            >
              <span>log in</span>
            </button>
          </div>
        </section>
      )}
    </>
  );
};
