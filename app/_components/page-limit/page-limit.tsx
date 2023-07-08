import { FC } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { usePageLimit } from "./page-limit.hook";
import { IPageLimit } from "./page-limit.type";

const PageLimit: FC<IPageLimit> = ({ limit, setLimit }) => {
  const { handleChangeLimit } = usePageLimit({ setLimit });
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

export default PageLimit;
