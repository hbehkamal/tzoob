import { IProduct, TOrderBy } from "#/types";
import { DEFAULT_PARAMS } from "./consts";

type TGetProducts = (param?: {
  page?: number;
  limit?: number;
  order?: TOrderBy;
}) => Promise<{
  data: IProduct[];
  totalCount: number;
  totalPagesCount: number;
}>;

const getProducts: TGetProducts = async (params = DEFAULT_PARAMS) => {
  const { page, limit, order } = params;
  let data;
  try {
    const res = await fetch(
      `http://localhost:3000/api/products?page=${page}&limit=${limit}&order=${order}`
    );
    data = await res.json();
  } catch (error) {
    console.error(error);
  }

  return data;
};

export default getProducts;
