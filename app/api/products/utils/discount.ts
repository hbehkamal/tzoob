import { IProduct } from "#/_types";

export const discount = (items: IProduct[]) =>
  items.map((item) => {
    const { actual_price, base_price } = item;

    if (actual_price === base_price) return item;

    return {
      ...item,
      discount: 100 - Math.round((+actual_price * 100) / +base_price),
    };
  });
