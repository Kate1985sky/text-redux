import { CatalogItem } from "../../components/CatalogItem";
import { useDispatch, useSelector } from "react-redux";

export const Bucket = ({inBucket}) => {
//   const { inBucket } = useSelector((store) => store.bucket);

  if (inBucket) {
    return <CatalogItem />;
  }
  return (
    <div className="emptyContainer">
      <h3>Nothing adding here</h3>
    </div>
  );
};

// <article className="cart-item">
//   {inBuket ? (
//     <CatalogItem />
//   ) : (
//     <div>
//       <h3>Nothing adding here</h3>
//     </div>
//   )}
// </article>
