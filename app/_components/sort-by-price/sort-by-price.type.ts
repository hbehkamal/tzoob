import { Dispatch, SetStateAction } from "react";
import { TOrderBy } from "#/_types";

export interface ISortByPrice {
  sortOrder: TOrderBy;
  setSortOrder: Dispatch<SetStateAction<TOrderBy>>;
}
