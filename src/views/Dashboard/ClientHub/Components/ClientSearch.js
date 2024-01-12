// Chakra imports
import {
  Input,
  Stack,
  Text,
  Button,
  useColorModeValue, InputGroup, InputLeftAddon, Flex, VStack, Checkbox, Badge, Box
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React, { useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";


const ClientSearch = ({ title, setPolicyData, isLoading, policyGUID, setIsLoading, onActionComplete }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // const handleRefresh = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/functions/getpolicy?type=daterange&policyGUID=${policyGUID}&startDate=${startDate}&endDate=${endDate}`);
  //     const data = await response.json();
  //     setPolicyData(data);
  //
  //   } catch (error) {
  //     console.error('Error fetching data: ', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const handleCheckboxChange = (e) => {
    // You can handle the checkbox change event here
    console.log(e.target.checked);
  }

  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <VStack align="start">
          <Checkbox onChange={handleCheckboxChange}>All
            <Badge ml="5" fontSize="0.8em" colorScheme="gray">
              592
            </Badge>
          </Checkbox>
          <Checkbox onChange={handleCheckboxChange}>Individual
            <Badge ml="5" fontSize="0.8em" colorScheme="gray">
              236
            </Badge>
          </Checkbox>
          <Checkbox onChange={handleCheckboxChange}>Company
            <Badge ml="5" fontSize="0.8em" colorScheme="gray">
              59
            </Badge>
          </Checkbox>
          <Checkbox onChange={handleCheckboxChange}>Group
            <Badge ml="5" fontSize="0.8em" colorScheme="gray">
              26
            </Badge>
          </Checkbox>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ClientSearch;
