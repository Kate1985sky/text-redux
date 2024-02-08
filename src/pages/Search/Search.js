import React, { useState } from "react";
import CartItem from "../../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../../features/search/searchSlice";
import {getCartItems} from "../../features/cart/cartSlice";

export const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const { cartItems } = useSelector((store) => store.cart);
  // const { value } = useSelector((store) => store.search);

  const submitChange = (e) => {
    e.preventDefault();
    dispatch(getCartItems(input));
    setInput("");
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={submitChange}>
          <label>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              name="text"
              placeholder="Search here!"
            />
          </label>
          <button
            type="submit"
            className="btn-search"
          >
            <span>go ahead</span>
          </button>
        </form>
      </div>
      {/* <section className="cart">
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
      </section> */}
    </>
  );
};
