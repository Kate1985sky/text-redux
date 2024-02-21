import { useDispatch, useSelector } from "react-redux";
import { addItemInBucket } from "../features/bucket/bucketSlice";

export const CatalogItem = ({ id, img, title, price }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.catalog);

  const idCartInBucket = id;

  const findCart = items.filter((item) => item.id === idCartInBucket);

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
      </div>
      <button
        className="btn"
        onClick={() => {
          dispatch(addItemInBucket(findCart));
        }}
      >
        Add to cart
      </button>
    </article>
  );
};
