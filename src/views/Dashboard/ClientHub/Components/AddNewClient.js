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
      bg="blue.500"
      spacing={4}
      p={5}
      borderRadius="20px"
      align="stretch"
      justify="center"
    >
      <Center>
        <MdOutlinePersonAddAlt color="white" size="50px"/>
      </Center>
      <Button color="white" variant="solid" size="md" textColor="black">
        Create New Client
      </Button>
    </VStack>
  );
};

