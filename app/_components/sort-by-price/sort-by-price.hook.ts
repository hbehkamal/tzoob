import { Dispatch, SetStateAction } from "react";

import { TOrderBy } from "#/_types";

export const useSortByPrice = ({
  setSortOrder,
}: {
  setSortOrder: Dispatch<SetStateAction<TOrderBy>>;
}) => {
  const handleSortChange = (order: TOrderBy) => () => {
    setSortOrder(order);
  };

  return { handleSortChange };
};
