// Chakra imports
import {
  Button,
  Center, Icon, Text, VStack
} from "@chakra-ui/react";

import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import simpleBlueBackground from "../../../../assets/img/simplebluebackground.jpg";

export function AddNewClient() {
  return (
    <VStack
      bg="white"
      spacing={4}
      p={5}
      borderRadius="lg"
      align="stretch"
      justify="center"
    >
      <Center>
        <MdOutlinePersonAddAlt size="50px"/>
      </Center>
      <Button colorScheme="blue" variant="solid" size="md">
        Create New Client
      </Button>
    </VStack>
  );
};

