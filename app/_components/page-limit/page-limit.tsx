import { FC } from "react";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { usePageLimit } from "./page-limit.hook";
import { IPageLimit } from "./page-limit.type";

const PageLimit: FC<IPageLimit> = ({
  limit,
  setLimit,
  setPage,
  page,
  totalCount,
}) => {
  const { handleChangeLimit, range } = usePageLimit({
    limit,
    setLimit,
    setPage,
    page,
  });
  return (
    <Flex alignItems="center">
      <Text
        display={{ base: "none", md: "block" }}
        mr={2}
        fontSize="sm"
        color="gray.400"
      >
        Showing {range.start}-{range.end} of {totalCount}
      </Text>
      <Menu>
        <MenuButton
          as={Button}
          variant="outline"
          colorScheme="gray"
          borderColor="gray.400"
        >
          Page limit: {limit}
        </MenuButton>
        <MenuList zIndex={3}>
          <MenuItem onClick={handleChangeLimit(8)}>8</MenuItem>
          <MenuItem onClick={handleChangeLimit(16)}>16</MenuItem>
          <MenuItem onClick={handleChangeLimit(24)}>24</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default PageLimit;
