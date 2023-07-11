import { ChangeEventHandler, useMemo } from "react";

import { IPagination } from "./pagination.type";
import { scrollToTop } from "#/_utils";

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
    scrollToTop();
  };

  const onNextClick = () => {
    setPage(page + 1);
    scrollToTop();
  };

  const onPrevClick = () => {
    setPage(page - 1);
    scrollToTop();
  };

  return {
    onPageChange,
    pages,
    onNextClick,
    onPrevClick,
  };
};
