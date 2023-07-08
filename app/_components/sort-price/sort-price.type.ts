import { Dispatch, SetStateAction } from "react";
import { TOrderBy } from "#/_types";

export interface ISortPrice {
  sortOrder: TOrderBy;
  setSortOrder: Dispatch<SetStateAction<TOrderBy>>;
}
