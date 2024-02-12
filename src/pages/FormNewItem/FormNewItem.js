import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../features/newCart/newcartSlice";
// import { cartItems } from "../../features/cart/cartSlice";

const defaultFormValues = {
  "title": "",
  "price": "",
};

export const FormNewItem = () => {
  const [item, setItem] = useState(defaultFormValues);

  const dispatch = useDispatch();

  // const { cartItems } = useSelector((store) => store.cart);
  
 

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
      [e.target.name] : e.target.value,
      id: crypto.randomUUID(),
    }))
  }

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
      <button onClick={() => {dispatch(addCart(item))}} type="submit" className="submit">
        <span>add cart +</span>
      </button>
    </div>
  );
};
