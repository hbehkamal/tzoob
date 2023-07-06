"use client";

import { Pagination, ProductCard, SortPrice } from "#/_components";

import styles from "./page.module.scss";
import { useProducts } from "./products.hook";

const Products = () => {
  const {
    products,
    setSortOrder,
    setPage,
    setLimit,
    totalCount,
    totalPagesCount,
    page,
  } = useProducts();

  if (!products || !products.length) {
    return <div>no product found</div>;
  }

  return (
    <main className={styles["product-list__wrapper"]}>
      <div className={styles["product-list__header"]}>
        <SortPrice setSortOrder={setSortOrder} />
      </div>
      <div className={styles["product-list-cards__wrapper"]}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
      <div className={styles["product-list__footer"]}>
        <Pagination
          page={page}
          setPage={setPage}
          totalPagesCount={totalPagesCount}
        />
      </div>
    </main>
  );
};

export default Products;
