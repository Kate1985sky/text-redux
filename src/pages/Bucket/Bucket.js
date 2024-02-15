import { CartItem } from "../../components/CartItem";

export const Bucket = ({ inBucket }) => {
  console.log("bucket", inBucket);

  if (inBucket.length > 0) {
    return (
    <div>
        {inBucket.map((item) => {
          return <CartItem key={item.id} {...item}/>;
        })}
      </div>
    )
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
