// Chakra imports
import {
  Input,
  Stack,
  Text,
  Button,
  useColorModeValue, InputGroup, InputLeftAddon
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React, { useState } from "react";


const PolicyFilter = ({ title, setPolicyData, isLoading, policyGUID, setIsLoading, onActionComplete }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleRefresh = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/functions/getpolicy?type=daterange&policyGUID=${policyGUID}&startDate=${startDate}&endDate=${endDate}`);
      const data = await response.json();
      setPolicyData(data);

    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardBody>
        <Stack spacing={8} direction="row" align="center">
          <InputGroup size="sm">
            <InputLeftAddon children="From Date" />
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon children="To Date" />
            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </InputGroup>
          <Button
            w="48"
            colorScheme="blue"
            size="sm"
            onClick={handleRefresh}
          >
            Refresh
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PolicyFilter;
