import CartItem from "../../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import {CatalogItem} from "../../components/CatalogItem";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { items, isLoading } = useSelector((store) => store.catalog);
console.log(items);
  if (items.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>No items</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Our catalog</h2>
      </header>
      <div>
        {items.map((item) => {
          return <CatalogItem key={item.id} {...item}/>;
        })}
      </div>
      {/* <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>clear cart</button>
      </footer> */}
    </section>
  );
};

export default CartContainer;