import { IProduct, TOrderBy } from "#/_types";
import { DEFAULT_PARAMS } from "./consts";

type TGetProducts = (param: {
  page?: number;
  limit?: number;
  order?: TOrderBy;
}) => Promise<{
  data: IProduct[];
  totalCount: number;
  totalPagesCount: number;
}>;

const getProducts: TGetProducts = async (params) => {
  const {
    page = DEFAULT_PARAMS.PAGE,
    limit = DEFAULT_PARAMS.LIMIT,
    order = DEFAULT_PARAMS.ORDER,
  } = params;

  let data;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}products?page=${page}&limit=${limit}&order=${order}`
    );
    data = await res.json();
  } catch (error) {
    console.error(error);
  }

  return data;
};

export default getProducts;
