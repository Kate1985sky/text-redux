import { CartItem } from "../../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";

export const Bucket = () => {
  const dispatch = useDispatch();
  const { inBucket } = useSelector((store) => store.bucket);
  const { total } = useSelector((store) => store.bucket);

  if (inBucket.length === 0) {
    return (
      <div className="emptyContainer">
        <h3>Nothing adding here</h3>
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
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};
