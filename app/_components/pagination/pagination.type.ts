import { Dispatch, SetStateAction } from "react";

export interface IPagination {
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  totalPagesCount: number;
}
