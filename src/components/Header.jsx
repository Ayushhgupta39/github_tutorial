import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <Heading textAlign={"center"} size={"xl"}>
        Welcome to Github Tutorial.
      </Heading>
      <Box
        display={"flex"}
        flexDirection="column"
        fontFamily={"body"}
        bg={"gray.200"}
        border='1px' borderRadius={'lg'}
        borderColor='GrayText'
      >
        <Box
          p="2"
          display={"flex"}
          flexDirection="row"
          listStyleType={"none"}
          justifyContent="space-around"
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Contact</li>
          <li>Contact</li>
          <li>Contact</li>
        </Box>
      </Box>
    </Box>
  );
}
