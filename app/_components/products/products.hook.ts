import { useEffect, useState } from "react";
import { DEFAULT_PARAMS, getProducts } from "#/_lib";
import { IProduct, TOrderBy } from "#/_types";

export const useProducts = ({
  firstRenderProducts,
}: {
  firstRenderProducts: IProduct[];
}) => {
  const [products, setProducts] = useState<IProduct[]>(firstRenderProducts);
  const [sortOrder, setSortOrder] = useState<TOrderBy>(DEFAULT_PARAMS.ORDER);
  const [page, setPage] = useState(DEFAULT_PARAMS.PAGE);
  const [limit, setLimit] = useState(DEFAULT_PARAMS.LIMIT);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts({ order: sortOrder, page, limit })
      .then(
        ({
          totalCount: _totalCount,
          totalPagesCount: _totalPagesCount,
          data,
        }) => {
          setTotalCount(_totalCount);
          setTotalPagesCount(_totalPagesCount);
          setProducts(data);
        }
      )
      .catch((error) => {
        console.error("error: ", error);
      })
      .finally(() => setIsLoading(false));
  }, [sortOrder, page, limit]);

  return {
    isLoading,
    products,
    sortOrder,
    setSortOrder,
    page,
    setPage,
    limit,
    setLimit,
    totalCount,
    totalPagesCount,
  };
};
