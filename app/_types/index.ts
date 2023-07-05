export interface IProduct {
  id: string;
  product_name: string;
  brand_name: string;
  actual_price: string;
  base_price: string;
  filename: string;
  discount?: number;
}

export type TOrderBy = "asc" | "desc";

export type TPaginateInputParams = {
  items: IProduct[];
  page: number;
  limit: number;
  totalCount: number;
};
export type TSortInputParams = {
  items: IProduct[];
  orderBy: TOrderBy;
};
