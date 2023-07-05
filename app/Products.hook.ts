import { useEffect, useState } from "react";
import { getProducts } from "#/_lib";
import { IProduct, TOrderBy } from "#/_types";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortOrder, setSortOrder] = useState<TOrderBy>("asc");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPagesCount, setTotalPagesCount] = useState(0);

  useEffect(() => {
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
      });
  }, [sortOrder, page, limit]);

  return { products, setSortOrder, setPage, setLimit, totalCount };
};
