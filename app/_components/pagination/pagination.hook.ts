import { ChangeEventHandler, useMemo } from "react";

import { IPagination } from "./pagination.type";
import { range } from "./pagination.util";

export const usePagination = ({
  page,
  setPage,
  totalPagesCount,
}: IPagination) => {
  const paginationRange = useMemo(() => {
    return Array.from(
      { length: totalPagesCount },
      (undefined, index) => index + 1
    );
  }, [totalPagesCount]);

  const onPageChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    setPage(+value);
  };

  const onNextClick = () => setPage(page + 1);
  const onPrevClick = () => setPage(page - 1);

  return {
    onPageChange,
    paginationRange,
    onNextClick,
    onPrevClick,
  };
};
