import { TOrderBy } from "#/app/types";
import rawData from "./product_list.json";
import { sort, paginate, discount } from "./utils";

export const getData = ({ params }: { params: URLSearchParams }) => {
  // Get the order of sorting - default set to 'asc'
  const orderBy: TOrderBy = (params.get("order") as TOrderBy) || "asc";

  const totalCount = rawData.length;

  // Sort products based on their `actual_price` property
  const sortedProducts = sort({ items: rawData, orderBy });

  // Implement pagination based on user inputs
  const { items: products, totalPagesCount } = paginate({
    items: sortedProducts,
    params,
    totalCount,
  });

	// Calculate products discount percentage
  const calculateDiscount = discount(products);

  return {
    totalCount,
    totalPagesCount,
    data: calculateDiscount,
  };
};
