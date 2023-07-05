"use client";

import { ProductCard, SortPrice } from "#/_components";

import styles from "./page.module.scss";
import { useProducts } from "./Products.hook";

const Products = () => {
  const { products, setSortOrder } = useProducts();

  if (!products || !products.length) {
    return <div>no product found</div>;
  }

  return (
    <main className={styles["product-list__wrapper"]}>
      <div className={styles["product-list__top"]}>
        <SortPrice setSortOrder={setSortOrder} />
      </div>
      <div className={styles["product-list-cards__wrapper"]}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </main>
  );
};

export default Products;
