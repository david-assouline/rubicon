// Chakra imports
import {
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
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import PolicyTableRow from "../../../../components/Tables/PolicyTableRow";

const Policy = ({ title, captions, data, isLoading, setIsLoading, onActionComplete }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }}>
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
                  <Progress size="md" colorScheme="teal" isIndeterminate />
                </Td>
              </Tr>
            ) : (
              data.map((record, index) => (
                <PolicyTableRow
                  key={index} // Unique key for each row
                  transactionName={record["TRXNAME"]}
                  date={record["TRXDATETIME"]}
                  trxGUID={record["TRXGUID"]}
                  status={record["STATUS"]}
                  action={record["STATUS"]}
                  setIsLoading={setIsLoading}
                  onActionComplete={onActionComplete}
                />
              ))
            )}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Policy;
