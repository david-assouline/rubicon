import { Box, IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

export function PolicySearchField() {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>
    </Box>
  );
};