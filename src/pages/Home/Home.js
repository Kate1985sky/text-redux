import {  useSelector } from "react-redux";
import { CatalogItem } from "../../components/CatalogItem";

export const Home = () => {
  const { items, isLoading } = useSelector((store) => store.catalog);

  if (isLoading) {
    return (
      <div className="loading"> 
        <h1>Loading...</h1>
      </div>
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
  )
};