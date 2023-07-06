import { ChangeEventHandler, useMemo } from "react";

import { IPagination } from "./pagination.type";

export const usePagination = ({
  page,
  setPage,
  totalPagesCount,
}: IPagination) => {
  const pages = useMemo(() => {
    return Array.from({ length: totalPagesCount }, (undefined, index) => {

      const value = index + 1;
      const label = `${value} / ${totalPagesCount}`;

      return { value, label };
    });
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
    pages,
    onNextClick,
    onPrevClick,
  };
};
