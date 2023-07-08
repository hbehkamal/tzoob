import { Dispatch, SetStateAction } from "react";

export interface IPageLimit {
  limit: number;
  totalCount: number;
  page: number;
  setLimit: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
}