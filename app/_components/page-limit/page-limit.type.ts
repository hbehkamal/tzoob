import { Dispatch, SetStateAction } from "react";

export interface IPageLimit {
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
}
export interface IPageLimitHook {
  setLimit: Dispatch<SetStateAction<number>>;
}
