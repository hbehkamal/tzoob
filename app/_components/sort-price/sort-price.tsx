import { FC } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { ISortPrice } from "./sort-price.type";
import { TOrderBy } from "#/_types";

const SortPrice: FC<ISortPrice> = ({ sortOrder, setSortOrder }) => {
  const handleSortChange = (order: TOrderBy) => () => {
    setSortOrder(order);
  };

  return (
    <Box>
      <Menu>
        <MenuButton as={Button}>
          Sort Price: {sortOrder == "asc" ? "Ascending" : "Descending"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleSortChange("asc")}>
            Price: Low to high
          </MenuItem>
          <MenuItem onClick={handleSortChange("desc")}>
            Price: Hight to low
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortPrice;
