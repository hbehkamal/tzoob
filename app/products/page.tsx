import getProducts from "#/actions";
import { ProductCard } from "#/components";
import { IProduct } from "#/types";

const Products = async () => {
  const { totalCount, totalPagesCount, data: products } = await getProducts();

  if (!products || !products.length) {
    return <div>no product found</div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {products.map((product: IProduct) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;
