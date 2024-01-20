// Chakra imports
import {
  Alert, AlertDescription, AlertIcon, AlertTitle,
  Progress,
  Table,
  Tbody, Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import SearchResultRow from "./SearchResultRow";

const ClientSearchResultsTable = ({ title, captions, searchResults, isLoading }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my='10px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='0px 0px 5px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' pl='0px' color='gray.400'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {isLoading ? (
              <Tr>
                <Td colSpan={captions.length}>
                  <Progress size="md" colorScheme="blue" isIndeterminate />
                </Td>
              </Tr>
            ) : searchResults && searchResults.length > 0 ? (
              searchResults.map((record, index) => (
                <SearchResultRow
                  key={index}
                  ID={record["ClientID"]}
                  customer={record["ClientType"] === '01' ? record["FirstName"] + " " + record["LastName"] : record["CompanyName"]}
                  dateOfBirth={record["ClientType"] === '01' ? record["DateOfBirth"] : "N/A"}
                  clientType={record["ClientType"]}
                  status={record["ClientStatus"]}
                  clientGUID={record["ClientGUID"]}
                />
              ))
            ) : searchResults && searchResults.length === 0 ? (
              <Tr>
                <Td colSpan={captions.length}>
                  {/*<Alert status="error">*/}
                  {/*  <AlertIcon />*/}
                  {/*  <AlertDescription>Search Returned 0 Results</AlertDescription>*/}
                  {/*</Alert>*/}
                </Td>
              </Tr>
            ) : (
              <Tr></Tr>
            )}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ClientSearchResultsTable;
