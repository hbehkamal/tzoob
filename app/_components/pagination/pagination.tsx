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
      <Button
        isDisabled={page == 1}
        onClick={onPrevClick}
        variant="outline"
        colorScheme="gray"
        borderColor="black"
        fontWeight="400"
        minW="100px"
      >
        PREVIOUS
      </Button>
      <Select
        onChange={onPageChange}
        value={page}
        mx={3}
        cursor="pointer"
        borderColor="black"
      >
        {pages.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <Button
        isDisabled={page == totalPagesCount}
        onClick={onNextClick}
        variant="outline"
        colorScheme="gray"
        borderColor="black"
        fontWeight="400"
        minW="100px"
      >
        NEXT
      </Button>
    </Flex>
  );
};

export default Pagination;
