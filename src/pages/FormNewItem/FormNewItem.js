import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/catalog/catalogSlice";

const defaultFormValues = {
  title: "",
  price: "",
};

export const FormNewItem = () => {
  const [item, setItem] = useState(defaultFormValues);

  const dispatch = useDispatch();

  const resetForm = () => {
    setItem(defaultFormValues);
  };

  const submitForm = (e) => {
    e.preventDefault();
    resetForm();
  };

  

  const hendlerChange = (e) => {
    setItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      id: crypto.randomUUID(),
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount: 1,
    }));
  };

  return (
    <div className="addCart">
      <form onSubmit={submitForm}>
        <label className="form">
          <input
            className="form-input"
            type="text"
            onChange={hendlerChange}
            value={item["title"]}
            name="title"
            placeholder="title"
          />
        </label>
        <label className="form">
          <input
            className="form-input"
            type="text"
            onChange={hendlerChange}
            value={item["price"]}
            name="price"
            placeholder="price"
          />
        </label>
      </form>
      <button
        onClick={() => {
          dispatch(addItem(item));
        }}
        type="submit"
        className="submit"
      >
        <span>add cart +</span>
      </button>
    </div>
  );
};
