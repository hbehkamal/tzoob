import rawData from "./product_list.json";
import { sort, paginate, calculateDiscount, parseParams } from "./utils";

export const getData = ({ params }: { params: URLSearchParams }) => {
  const { orderBy, page, limit } = parseParams(params);

  const totalCount = rawData.length;

  // Sort products based on their `actual_price` property
  const sortedProducts = sort({ items: rawData, orderBy });

  // Implement pagination based on user inputs
  const { items, totalPagesCount } = paginate({
    items: sortedProducts,
    page,
    limit,
    totalCount,
  });

  // Calculate products discount percentage
  const products = calculateDiscount(items);

  return {
    totalCount,
    totalPagesCount,
    data: products,
  };
};
