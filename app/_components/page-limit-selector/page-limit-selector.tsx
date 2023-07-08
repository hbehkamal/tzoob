import { FC } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { usePageLimitSelector } from "./page-limit-selector.hook";
import { IPageLimitSelector } from "./page-limit-selector.type";

const PageLimitSelector: FC<IPageLimitSelector> = ({ limit, setLimit }) => {
  const { handleChangeLimit } = usePageLimitSelector({ setLimit });
  return (
    <Box>
      <Menu>
        <MenuButton as={Button}>Page limit: {limit}</MenuButton>
        <MenuList zIndex={3}>
          <MenuItem onClick={handleChangeLimit(8)}>8</MenuItem>
          <MenuItem onClick={handleChangeLimit(16)}>16</MenuItem>
          <MenuItem onClick={handleChangeLimit(24)}>24</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PageLimitSelector;
