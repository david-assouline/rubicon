// Chakra imports
import {
  Input,
  Stack,
  Text,
  IconButton,
  Button,
  useColorModeValue, InputGroup, InputLeftAddon
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import PolicyTableRow from "./PolicyTableRow";

const PolicyFilter = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Stack spacing={8} direction="row" align="center">
          <InputGroup size="md">
            <InputLeftAddon children="From Date" />
            <Input type="date" />
          </InputGroup>
          <InputGroup size="md">
            <InputLeftAddon children="To Date" />
            <Input type="date" />
          </InputGroup>
          <Button w="48" colorScheme="blue" size="md">
            Refresh
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PolicyFilter;
