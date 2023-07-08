import { Dispatch, SetStateAction } from "react";

export interface IPageLimitSelector {
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
}
export interface IPageLimitSelectorHook {
  setLimit: Dispatch<SetStateAction<number>>;
}
