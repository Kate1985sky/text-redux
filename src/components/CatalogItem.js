import { useDispatch, useSelector } from "react-redux";
import React, { useMemo } from "react";
import { addItemInBucket } from "../features/bucket/bucketSlice";
import { calculateTotals } from "../features/bucket/bucketSlice";

export const CatalogItem = ({ id, img, title, price }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.catalog);
  const { total } = useSelector((store) => store.bucket);

  const idCartInBucket = id;

  const findCart = items.filter((item) => item.id === idCartInBucket);

  // useMemo(() => {
  //   dispatch(calculateTotals());
  // }, [total]);

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
          dispatch(calculateTotals());
        }}
      >
        Add to cart
      </button>
    </article>
  );
};
