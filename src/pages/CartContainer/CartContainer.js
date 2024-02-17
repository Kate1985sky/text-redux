import { useSelector } from "react-redux";
import { CatalogItem } from "../../components/CatalogItem";

const CartContainer = () => {
 const { items, isLoading } = useSelector((store) => store.catalog);

 if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
 
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
          return <CatalogItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CartContainer;
