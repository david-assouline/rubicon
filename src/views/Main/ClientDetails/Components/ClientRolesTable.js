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
import ClientRolesTableRow from "./ClientRolesTableRow";

const ClientRolesTable = ({ title, captions, data, clientGUID, isLoading, setIsLoading, onActionComplete }) => {
  const textColor = useColorModeValue("gray.700", "white");
  console.log(data)
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='0px 0px 10px 0px' >
        <Text fontSize='lg' color={textColor} fontWeight='bold'>
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
                <ClientRolesTableRow
                  key={index}
                  policy={record["PolicyGUID"]}
                  roleType={record["RoleType"]}
                  rolePercent={record["RolePercent"]}
                  setIsLoading={setIsLoading}
                  onActionComplete={onActionComplete}
                />
              ))
            ) : clientGUID ? (
              <Tr>
                <Td colSpan={captions.length}>
                  <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>Error Loading Table</AlertDescription>
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

export default ClientRolesTable;
