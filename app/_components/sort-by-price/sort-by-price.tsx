import { FC } from "react";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { ISortByPrice } from "./sort-by-price.type";
import { useSortByPrice } from "./sort-by-price.hook";

const SortByPrice: FC<ISortByPrice> = ({ sortOrder, setSortOrder }) => {
  const { handleSortChange } = useSortByPrice({ setSortOrder });

  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={Button}
        variant="outline"
        colorScheme="gray"
        borderColor="gray.400"
        fontWeight="light"
        size={{ base: "sm", md: "md" }}
      >
        <Flex w="full" justifyContent="space-between">
          <Text>Sort Price: </Text>
          {sortOrder == "asc" ? (
            <>
              <Text ml={1} mr={2} fontWeight="bold">
                Ascending
              </Text>{" "}
              &#8593;
            </>
          ) : (
            <>
              <Text ml={1} mr={2} fontWeight="bold">
                Descending
              </Text>{" "}
              &#8595;
            </>
          )}
        </Flex>
      </MenuButton>
      <MenuList zIndex={3}>
        <MenuItem onClick={handleSortChange("asc")}>
          &#8593;<Text ml={2}>Price: Low to high</Text>
        </MenuItem>
        <MenuItem onClick={handleSortChange("desc")}>
          &#8595;<Text ml={2}>Price: Hight to low</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortByPrice;
