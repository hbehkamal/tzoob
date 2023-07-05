import { Dispatch, SetStateAction } from "react";
import { TOrderBy } from "#/types";

export interface ISortPrice {
  setSortOrder: Dispatch<SetStateAction<TOrderBy>>;
}
