import { TSortInputParams } from "#/_types";

export const sort = ({ items, orderBy = "asc" }: TSortInputParams) =>
  items.sort((a, b) =>
    orderBy == "asc"
      ? +a.actual_price - +b.actual_price
      : +b.actual_price - +a.actual_price
  );
