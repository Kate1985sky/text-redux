import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, dicrease } from "../features/bucket/bucketSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          {t("remove")}
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
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
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
