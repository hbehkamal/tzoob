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
    page,
    setPage,
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
      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          variant="outline"
          colorScheme="gray"
          borderColor="gray.400"
          fontWeight="light"
          size={{ base: "sm", md: "md" }}
        >
          <Flex>
            Page limit:{" "}
            <Text ml={2} fontWeight="bold">
              {limit}
            </Text>
          </Flex>
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
