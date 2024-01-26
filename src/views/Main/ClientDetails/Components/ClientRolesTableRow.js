import {
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";
import { ArrowForwardIcon, RepeatClockIcon } from "@chakra-ui/icons";


function ClientRolesTableRow(props) {
  const { policy, roleType, rolePercent, setIsLoading, onActionComplete } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  const cellPaddingY = "8px";
  const cellPaddingX = "8px";

  const createApplicationLambda = async (action, trxGUID) => {
    try {
      const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/transactions/createapplication?action=${action}&trxGUID=${trxGUID}`);
      const data = await response.json();

    } catch (error) {
      console.error('Error calling Lambda function:', error);
    }
  };

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px" px={cellPaddingX} py={cellPaddingY} textAlign="center">
        <Flex align="center" py="0px" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="sm"
              color={textColor}
              minWidth="100%"
            >
              {/*{policy}*/}
              2308919951002
            </Text>
          </Flex>
        </Flex>
      </Td>

      {/*<Td>*/}
      {/*  <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">*/}
      {/*    {date}*/}
      {/*  </Text>*/}
      {/*</Td>*/}

      <Td px={cellPaddingX} py={cellPaddingY} textAlign="center">
        <Flex direction="column">
          <Text fontSize="sm" color={textColor} fontWeight="">
            {roleType}
          </Text>
        </Flex>
      </Td>

      <Td px={cellPaddingX} py={cellPaddingY} textAlign="center">
        <Flex direction="column">
          <Text fontSize="sm" color={textColor}>
            {rolePercent}
          </Text>
        </Flex>
      </Td>

      {/*<Td>*/}
      {/*  <Badge*/}
      {/*    bg={status === "Active" ? "green.400" : bgStatus}*/}
      {/*    color={status === "Active" ? "white" : colorStatus}*/}
      {/*    fontSize="16px"*/}
      {/*    p="3px 10px"*/}
      {/*    borderRadius="8px"*/}
      {/*  >*/}
      {/*    {status}*/}
      {/*  </Badge>*/}
      {/*</Td>*/}

      {/*<Td>*/}
      {/*  {status === "Pending" && (*/}
      {/*    <Button*/}
      {/*      p="0px"*/}
      {/*      bg="transparent"*/}
      {/*      variant="no-hover"*/}
      {/*      onClick={() => {*/}
      {/*        setIsLoading(true);*/}
      {/*        createApplicationLambda("process", trxGUID).then(() => {*/}
      {/*          if (props.onActionComplete) {*/}
      {/*            props.onActionComplete();*/}
      {/*          }*/}
      {/*        });*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <ArrowForwardIcon w={8} h={8} color="green.400"/>*/}
      {/*    </Button>*/}
      {/*  )}*/}
      {/*  {status === "Active" && (*/}
      {/*    <Button*/}
      {/*      p="0px"*/}
      {/*      bg="transparent"*/}
      {/*      variant="no-hover"*/}
      {/*      onClick={() => {*/}
      {/*        setIsLoading(true);*/}
      {/*        createApplicationLambda("undo", trxGUID).then(() => {*/}
      {/*          if (props.onActionComplete) {*/}
      {/*            props.onActionComplete();*/}
      {/*          }*/}
      {/*        });*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <RepeatClockIcon w={6} h={6} color="gray.400"/>*/}
      {/*    </Button>*/}
      {/*  )}*/}
      {/*</Td>*/}

    </Tr>
  );
}

export default ClientRolesTableRow;
