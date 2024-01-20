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
import ClientTableRow from "./ClientTableRow";

const ClientTable = ({ title, captions, data, policyGUID, isLoading, setIsLoading, onActionComplete }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card my='10px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
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
            ) : data && data.length > 0 ? (
              data.map((record, index) => (
                <ClientTableRow
                  // key={index} // Unique key for each row
                  // transactionName={record["TRXNAME"]}
                  // date={record["TRXDATETIME"]}
                  // trxGUID={record["TRXGUID"]}
                  // status={record["STATUS"]}
                  // action={record["STATUS"]}
                  // setIsLoading={setIsLoading}
                  // onActionComplete={onActionComplete}
                />
              ))
            ) : policyGUID ? (
              <Tr>
                <Td colSpan={captions.length}>
                  <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>No client found for {clientGUID}</AlertDescription>
                  </Alert>
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

export default ClientTable;
