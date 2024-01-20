// Chakra imports
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack, Box, FormLabel, Input, Select, Textarea, ModalFooter
} from "@chakra-ui/react";

import React from "react";
import { AddIcon, ChevronDownIcon, ViewIcon } from "@chakra-ui/icons";

export function ViewsButton() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        leftIcon={<ViewIcon />}
      >
        View
      </MenuButton>
      <MenuList>
        <MenuItem>Summary</MenuItem>
        <MenuItem>Roles</MenuItem>
        <MenuItem>Billing</MenuItem>
        <MenuItem>Cash Value</MenuItem>
        <MenuItem>Policy</MenuItem>
      </MenuList>
    </Menu>
  );
};

