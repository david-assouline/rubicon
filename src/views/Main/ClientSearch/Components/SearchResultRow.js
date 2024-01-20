import {
  Badge, Box,
  Button, Collapse, Divider,
  Flex, Grid, HStack, IconButton, Link, Progress,
  Td,
  Text,
  Tr,
  useColorModeValue, VStack
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
  RepeatClockIcon,
  TriangleDownIcon, TriangleUpIcon
} from "@chakra-ui/icons";


function SearchResultRow(props) {
  const { ID, customer, dateOfBirth, clientType, status, clientGUID, onActionComplete } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [clientDetails, setClientDetails] = useState([]);
  const [addressDetails, setAddressDetails] = useState([]);
  const [addressString, setAddressString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = status === "Active" ? "green.400" : "gray.400";
  const colorStatus = status === "Active" ? "white" : "gray.700";

  const toggleRow = async () => {
    setIsExpanded(!isExpanded);

    try {
      setIsLoading(true);
      let response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev//api/functions/getclient?type=ClientDetails&clientGUID=${clientGUID}`);
      let data = await response.json();
      console.log("fetching client details")
      setClientDetails(data);

      response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev//api/functions/getclient?type=AddressDetails&clientGUID=${clientGUID}`);
      data = await response.json();
      console.log("fetching address details")
      setAddressDetails(data)

    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function updateAddressString() {
      setIsLoading(true);
      if (addressDetails.length > 0) {
        const newAddressString = await buildAddressString(addressDetails);
        setAddressString(newAddressString);
      }
      setIsLoading(false);
    }

    updateAddressString();
  }, [addressDetails]);

  async function buildAddressString(addressDetails) {
    const houseNumber = addressDetails.find(obj => obj["FieldName"] === "HouseNumber")?.["TextValue"];
    const streetName = addressDetails.find(obj => obj["FieldName"] === "StreetName")?.["TextValue"];
    const city = addressDetails.find(obj => obj["FieldName"] === "City")?.["TextValue"];
    const province = addressDetails.find(obj => obj["FieldName"] === "Province")?.["TextValue"];
    const country = addressDetails.find(obj => obj["FieldName"] === "Country")?.["TextValue"];
    const postalCode = addressDetails.find(obj => obj["FieldName"] === "PostalCode")?.["TextValue"];
    return `${houseNumber} ${streetName}, ${city}, ${province}, ${country}, ${postalCode}`
    }


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
                {isLoading ? <Progress size="sm" w="200px" isIndeterminate /> : <Text>{clientDetails.find(obj => obj["FieldName"] === "EmailAddress")?.["TextValue"] || "could not find"}</Text>}
              </Box>
              <Box>
                <Text fontWeight="bold" mb={1}>Identification Type</Text>
                {isLoading ? <Progress size="sm" w="200px" isIndeterminate /> : <Text>{clientDetails.find(obj => obj["FieldName"] === "IdentificationType")?.["TextValue"] || "could not find"}</Text>}
              </Box>
              <Box>
                <Text fontWeight="bold" mb={1}>Identification Number</Text>
                {isLoading ? <Progress size="sm" w="200px" isIndeterminate /> : <Text>{clientDetails.find(obj => obj["FieldName"] === "IdentificationNumber")?.["TextValue"] || "could not find"}</Text>}
              </Box>
              <Box>
                <Text fontWeight="bold" mb={1}>Primary Address</Text>
                {isLoading ? <Progress size="sm" w="200px" isIndeterminate /> : <Text>{addressString}</Text>}
              </Box>
              <Box>
                <Text fontWeight="bold" mb={1}>Primary Phone Number</Text>
                {isLoading ? <Progress size="sm" w="200px" isIndeterminate /> : <Text>{clientDetails.find(obj => obj["FieldName"] === "PrimaryPhoneNumber")?.["TextValue"] || "could not find"}</Text>}
              </Box>
              <Box>
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