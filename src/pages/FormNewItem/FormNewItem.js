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
  };

  const addAction = () => {
    dispatch(addItem(item));
    resetForm();
  };

  const hendlerChange = (e) => {
    setItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      id: crypto.randomUUID(),
      img: "https://cdn.comfy.ua/media/catalog/product/i/p/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_1_.jpg",
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
      <button onClick={addAction} type="submit" className="submit">
        <span>add cart +</span>
      </button>
    </div>
  );
};
