import {
  Badge,
  Button,
  Flex, IconButton,
  Td,
  Text,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";

import React, { useState } from "react";
import { ArrowForwardIcon, ChevronDownIcon, ChevronUpIcon, RepeatClockIcon } from "@chakra-ui/icons";


function SearchResultRow(props) {
  const { ID, customer, dateOfBirth, clientType, status, onActionComplete } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleRow = () => {
    setIsExpanded(!isExpanded);
  };


  const createApplicationLambda = async (action, trxGUID) => {
    try {
      const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/transactions/createapplication?action=${action}&trxGUID=${trxGUID}`);
      const data = await response.json();

    } catch (error) {
      console.error('Error calling Lambda function:', error);
    }
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
        <Badge
          bg={status === "01" ? "green.400" : bgStatus}
          color={status === "02" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      <Td>
        <IconButton
          icon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={toggleRow}
          aria-label="Expand Row"
        />
      </Td>
    </Tr>
    <Tr display={isExpanded ? "table-row" : "none"}>
      <Td colSpan="5">
        {/* Here you can add your expanded content */}
        <Text fontSize="md" color={textColor}>
          More details about {customer}
        </Text>
        {/* You can add more detailed information here */}
      </Td>
    </Tr>
    </React.Fragment>
  );
}

export default SearchResultRow;
