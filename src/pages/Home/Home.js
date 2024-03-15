import {  useSelector } from "react-redux";
import { CatalogItem } from "../../components/CatalogItem";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { items, isLoading } = useSelector((store) => store.catalog);
  const { t } = useTranslation();

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
        <h2>{t('our_catalog')}</h2>
      </header>
      <div>
        {items.map((item) => {
          return <CatalogItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  )
};