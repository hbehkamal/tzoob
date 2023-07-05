"use client";

import { useEffect, useState } from "react";
import { getProducts } from "#/_lib";
import { ProductCard, SortPrice } from "#/_components";
import { IProduct, TOrderBy } from "#/_types";

import styles from "./page.module.scss";

const DEFAULT_PARAMS = { page: 1, limit: 8, order: "asc" };

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortOrder, setSortOrder] = useState<TOrderBy>("asc");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    getProducts({ order: sortOrder, page, limit }).then(
      ({ totalCount, totalPagesCount, data }) => {
        setProducts(data);
      }
    );
  }, [sortOrder, page, limit]);

  if (!products || !products.length) {
    return <div>no product found</div>;
  }

  return (
    <main className={styles["product-list__wrapper"]}>
      <div className={styles["product-list__top"]}>
        <SortPrice setSortOrder={setSortOrder} />
      </div>
      <div className={styles["product-list-cards__wrapper"]}>
        {products.map((product: IProduct) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </main>
  );
};

export default Products;
