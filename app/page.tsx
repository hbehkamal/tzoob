import getProducts from "#/actions";
import { ProductCard } from "#/components";
import { IProduct } from "#/types";

import styles from "./page.module.scss";

const Products = async () => {
  const { totalCount, totalPagesCount, data: products } = await getProducts();

  if (!products || !products.length) {
    return <div>no product found</div>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.products}>
        {products.map((product: IProduct) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </main>
  );
};

export default Products;
