import { FC } from "react";

import { IPagination } from "./pagination.type";
import { usePagination } from "./pagination.hook";
import styles from "./pagination.module.scss";

const Pagination: FC<IPagination> = ({ page, setPage, totalPagesCount }) => {
  const { onPageChange, paginationRange, onNextClick, onPrevClick } =
    usePagination({
      page,
      setPage,
      totalPagesCount,
    });

  if (page === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className={styles["pagination__wrapper"]}>
      <button onClick={onPrevClick}>PREVIOUS</button>
      <select onChange={onPageChange}>
        {paginationRange.map((item) => (
          <option value={item} key={item}>
            {item} / {totalPagesCount}
          </option>
        ))}
      </select>
      <button onClick={onNextClick}>NEXT</button>
    </div>
  );
};

export default Pagination;
