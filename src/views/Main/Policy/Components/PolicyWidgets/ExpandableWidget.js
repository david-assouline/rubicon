// Chakra imports
import {
  Button,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber, Text,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import React from "react";
import CardHeader from "../../../../../components/Card/CardHeader";

const ExpandableWidget = ({ title, amount, percentage, icon, onWidgetClick, isActive  }) => {
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = isActive ? "blue.500" : "transparent";
  const borderWidth = isActive ? "2px" : "0px";

  return (
    <Card minH='65px' p='6px 10px 0px 15px' border={borderWidth} borderColor={borderColor}>
      <CardHeader p='0px 0px 6px 0px'>
        <Text fontSize='xs' color="gray.400" fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Flex flexDirection='row' align='center' justify='center' w='100%'>
          <Stat me='auto'>
            <Flex>
              <StatNumber fontSize='md'>
                {amount}
              </StatNumber>
            </Flex>
          </Stat>
          <Button
            size="5px"
            mb="8px"
            colorScheme="ghost"
            _hover={{ bg: "#ebedf0" }}
            onClick={onWidgetClick}
          >
            {React.cloneElement(icon, { onClick: onWidgetClick })}
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ExpandableWidget;
