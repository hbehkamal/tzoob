import { useMemo } from "react";

import { IPageLimit } from "./page-limit.type";
import { DEFAULT_PARAMS } from "#/_constants";

export const usePageLimit = ({
  limit,
  setLimit,
  setPage,
  page,
}: Omit<IPageLimit, "totalCount">) => {
  const handleChangeLimit = (limit: number) => () => {
    setLimit(limit);
    setPage(DEFAULT_PARAMS.PAGE);
  };

  const range = useMemo(() => {
    const end = page * limit;
    const start = end - limit + 1;

    return { start, end };
  }, [page, limit]);

  return { handleChangeLimit, range };
};
