import { ProductsContainer } from "./_containers";
import { DEFAULT_PARAMS, getProducts } from "./_lib";
import { IProduct } from "./_types";

const Page = async () => {
  let products: IProduct[] = [];

  try {
    const res = await getProducts({
      page: DEFAULT_PARAMS.PAGE,
      limit: DEFAULT_PARAMS.LIMIT,
      order: DEFAULT_PARAMS.ORDER,
    });

    const { data } = res;
    console.log("data: ", data);
    products = data;
  } catch (error) {
    console.log("error: ", error);
  }
  console.log("Page: ", products);

  return <ProductsContainer products={products} />;
};

export default Page;
