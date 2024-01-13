import {
  Badge, Box,
  Button, Collapse, Divider,
  Flex, Grid, HStack, IconButton, Link,
  Td,
  Text,
  Tr,
  useColorModeValue, VStack
} from "@chakra-ui/react";

import React, { useState } from "react";
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
  RepeatClockIcon,
  TriangleDownIcon, TriangleUpIcon
} from "@chakra-ui/icons";


function SearchResultRow(props) {
  const { ID, customer, dateOfBirth, clientType, status, onActionComplete, ...clientDetails } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = status === "Active" ? "green.400" : "gray.400";
  const colorStatus = status === "Active" ? "white" : "gray.700";

  const toggleRow = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <React.Fragment>
    <Tr>
      <Td minWidth={"40 px"} maxWidth={"40px"} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              minWidth="100%"
            >
              {ID}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {customer}
        </Text>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="">
            {dateOfBirth}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="">
            {clientType}
          </Text>
        </Flex>
      </Td>

      <Td>
        {/*<Badge*/}
        {/*  bg={status === "01" ? "green.400" : bgStatus}*/}
        {/*  color={status === "02" ? "white" : colorStatus}*/}
        {/*  fontSize="16px"*/}
        {/*  p="3px 10px"*/}
        {/*  borderRadius="8px"*/}
        {/*>*/}
          {status}
        {/*</Badge>*/}
      </Td>
      <Td>
        <IconButton
          icon={isExpanded ? <TriangleUpIcon color="gray.400"/> : <TriangleDownIcon color="gray.400"/>}
          onClick={toggleRow}
          aria-label="Expand Row"
          variant="ghost"
        />
      </Td>
    </Tr>
      <Tr display={isExpanded ? "table-row" : "none"}>
        <Td colSpan="6">
          <Box p={2}>
            <Text fontSize="lg" mb={3}>Client Details</Text>
            <Divider mb={4} borderColor="gray.300" width="200px" borderWidth="1px"/>
            <Grid templateColumns="1fr 1fr 1fr" gap={5}>
              <Box>
                <Text fontWeight="bold" mb={1}>Email Address</Text>
                <Text>david.assouline@hotmail.com</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" mb={1}>Primary Phone Number</Text>
                <Text>514-824-0228</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" mb={1}>Identification Type</Text>
                <Text>Driver's license</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" mb={1}>Identification Number</Text>
                <Text>ASSOUD-28022024313514</Text>
              </Box>
              <Box gridColumn="span 2">
                <Text fontWeight="bold" mb={1}>Primary Address</Text>
                <Text>102-815 avenue plymouth, Mont-Royal, Quebec, H4P 0C6</Text>
              </Box>
              <Box gridColumn="span 2">
                <br/>
                <Button rightIcon={<ExternalLinkIcon />} colorScheme="blue" variant="link">
                  Go To Client
                </Button>
              </Box>
            </Grid>
          </Box>
        </Td>
      </Tr>
    </React.Fragment>
  );
}

export default SearchResultRow;