import { CartItem } from "../../components/CartItem";
import { useSelector } from "react-redux";

export const Bucket = () => {
  const { inBucket } = useSelector((store) => store.bucket);
  // console.log("bucket", inBucket);

  if (inBucket.length === 0) {
    return (
      <div className="emptyContainer">
        <h3>Nothing adding here</h3>
      </div>
    );
  }
  return (
    <div>
      {inBucket.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
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
