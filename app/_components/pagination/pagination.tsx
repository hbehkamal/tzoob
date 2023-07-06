import { FC } from "react";

import { Button, Flex, Select } from "@chakra-ui/react";

import { IPagination } from "./pagination.type";
import { usePagination } from "./pagination.hook";

const Pagination: FC<IPagination> = ({ page, setPage, totalPagesCount }) => {
  const { onPageChange, pages, onNextClick, onPrevClick } = usePagination({
    page,
    setPage,
    totalPagesCount,
  });

  if (page === 0 || pages.length < 2) {
    return null;
  }

  return (
    <Flex maxW="420px" mx="auto">
      <Button onClick={onPrevClick} variant="outline" px={6}>
        PREVIOUS
      </Button>
      <Select onChange={onPageChange} mx={3} cursor="pointer">
        {pages.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <Button onClick={onNextClick} variant="outline">
        NEXT
      </Button>
    </Flex>
  );
};

export default Pagination;
