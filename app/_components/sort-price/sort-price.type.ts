import { Dispatch, SetStateAction } from "react";
import { TOrderBy } from "#/_types";

export interface ISortPrice {
  setSortOrder: Dispatch<SetStateAction<TOrderBy>>;
}
