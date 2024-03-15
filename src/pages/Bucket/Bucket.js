import { CartItem } from "../../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const Bucket = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { inBucket } = useSelector((store) => store.bucket);

  const total = useMemo(() => {
    let acc = 0;
    inBucket.forEach((item) => {
      acc += item.amount * item.price; 
    });

    return acc;
  }, [inBucket]);

  if (inBucket.length === 0) {
    return (
      <div className="emptyContainer">
        <h3>{t("nothing_adding_here")}</h3>
      </div>
    );
  }
  return (
    <section className="cart">
      <div>
        {inBucket.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            {t("total")} <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          {t("clear_cart")}
        </button>
      </footer>
    </section>
  );
};
