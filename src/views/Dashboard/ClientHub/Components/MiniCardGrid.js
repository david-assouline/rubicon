// Chakra imports
import {
  Button,
  Center, Icon, SimpleGrid, Text, useColorModeValue, VStack
} from "@chakra-ui/react";

import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import simpleBlueBackground from "../../../../assets/img/simplebluebackground.jpg";
import MiniCards from "./CustomButtons/MiniCards";
import { CartIcon, DocumentIcon, GlobeIcon, WalletIcon } from "../../../../components/Icons/Icons";
import { GrGroup } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { IoBusinessSharp } from "react-icons/io5";
import { HiOutlineRectangleGroup } from "react-icons/hi2";



export function MiniCardGrid() {
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} flexBasis={{ base: '100%', xl: '30%' }} p={2}>
      <MiniCards
        title={"Total Clients"}
        amount={"592"}
        icon={<GrGroup size="25px" color={iconBoxInside} />}
      />
      <MiniCards
        title={"Individuals"}
        amount={"236"}
        icon={<GoPerson size="25px" color={iconBoxInside} />}
      />
      <MiniCards
        title={"Companies"}
        amount={"59"}
        icon={<IoBusinessSharp size="25px" color={iconBoxInside} />}
      />
      <MiniCards
        title={"Groups"}
        amount={"59"}
        icon={<HiOutlineRectangleGroup size="25px" color={iconBoxInside} />}
      />
    </SimpleGrid>
  );
};

