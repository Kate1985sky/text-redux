import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, dicrease, calculateTotals } from "../features/bucket/bucketSlice";
import { useDispatch } from "react-redux";

export const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => {
          dispatch(removeItem(id));
          dispatch(calculateTotals());
          }}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
            dispatch(calculateTotals());
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(dicrease({ id }));
            dispatch(calculateTotals());
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
