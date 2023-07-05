import { FC } from "react";
import { ISortPrice } from "./sort-price.type";

const SortPrice: FC<ISortPrice> = ({ setSortOrder }) => {
  const handleSortChange = () => {
    setSortOrder("desc");
  };

  return <button onClick={handleSortChange}>Sort</button>;
};

export default SortPrice;
