// Chakra imports
import {
  Input,
  Stack,
  Button,
  useColorModeValue,
  VStack,
  Box,
  FormControl,
  HStack
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useState } from "react";
import { CheckIcon, Search2Icon } from "@chakra-ui/icons";


const ClientSearch = ({setSearchType, setSearchParams}) => {
  const [activeFilter, setActiveFilter] = useState('Individual');
  const [searchValues, setSearchValues] = useState({ firstName: '', lastName: '', companyName: '', groupName: '', clientID: '' });
  const textColor = useColorModeValue("gray.700", "white");
  const activeButtonBg = useColorModeValue('blue.500', 'blue.600');
  const activeTextColor = useColorModeValue('white', 'gray.200');
  const hoverBg = useColorModeValue('blue.500', 'blue.700');
  const hoverTextColor = 'white';


  const handleSearch = () => {
    setSearchType(activeFilter);
    switch (activeFilter) {
      case 'Individual':
        setSearchParams({ firstName: searchValues.firstName, lastName: searchValues.lastName });
        break;
      case 'Company':
        setSearchParams({ companyName: searchValues.companyName });
        break;
      case 'Group':
        setSearchParams({ groupName: searchValues.groupName });
        break;
      case 'Client ID':
        setSearchParams({ clientID: searchValues.clientID });
        break;
      default:
        break;
    }
  };

  const renderInputField = () => {
    switch (activeFilter) {
      case 'Individual':
        return (
          <HStack>
            <Input placeholder="First name" value={searchValues.firstName} onChange={(e) => setSearchValues({...searchValues, firstName: e.target.value})} />
            <Input placeholder="Last name" value={searchValues.lastName} onChange={(e) => setSearchValues({...searchValues, lastName: e.target.value})} />
          </HStack>
        );
      case 'Company':
        return <Input placeholder="Company Name" value={searchValues.companyName} onChange={(e) => setSearchValues({...searchValues, companyName: e.target.value})} />;
      case 'Group':
        return <Input placeholder="Group Name" value={searchValues.groupName} onChange={(e) => setSearchValues({...searchValues, groupName: e.target.value})} />;
      case 'Client ID':
        return <Input placeholder="Client ID" value={searchValues.clientID} onChange={(e) => setSearchValues({...searchValues, clientID: e.target.value})} />;
      default:
        return null;
    }
  };

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardBody alignItems="center" justifyContent="center">
        <VStack spacing={6} w="full">
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={activeFilter === 'Individual' ? <CheckIcon /> : undefined}
              bg={activeFilter === 'Individual' ? activeButtonBg : undefined}
              color={activeFilter === 'Individual' ? activeTextColor : undefined}
              _hover={{
                bg: hoverBg,
                color: activeFilter !== 'Individual' ? hoverTextColor : activeTextColor,
              }}
              onClick={() => setActiveFilter('Individual')}
            >
              Individual
            </Button>
            <Button
              leftIcon={activeFilter === 'Company' ? <CheckIcon /> : undefined}
              bg={activeFilter === 'Company' ? activeButtonBg : undefined}
              color={activeFilter === 'Company' ? activeTextColor : undefined}
              _hover={{
                bg: hoverBg,
                color: activeFilter !== 'Individual' ? hoverTextColor : activeTextColor,
              }}
              onClick={() => setActiveFilter('Company')}
            >
              Company
            </Button>
            <Button
              leftIcon={activeFilter === 'Group' ? <CheckIcon /> : undefined}
              bg={activeFilter === 'Group' ? activeButtonBg : undefined}
              color={activeFilter === 'Group' ? activeTextColor : undefined}
              _hover={{
                bg: hoverBg,
                color: activeFilter !== 'Individual' ? hoverTextColor : activeTextColor,
              }}
              onClick={() => setActiveFilter('Group')}
            >
              Group
            </Button>
            <Button
              leftIcon={activeFilter === 'Client ID' ? <CheckIcon /> : undefined}
              bg={activeFilter === 'Client ID' ? activeButtonBg : undefined}
              color={activeFilter === 'Client ID' ? activeTextColor : undefined}
              _hover={{
                bg: hoverBg,
                color: activeFilter !== 'Client ID' ? hoverTextColor : activeTextColor,
              }}
              onClick={() => setActiveFilter('Client ID')}
            >
              Client ID
            </Button>

            <Box flexGrow={1} />
          </Stack>
          <FormControl mt={4}>
            {renderInputField()}
          </FormControl>
          <Button
            colorScheme="blue"
            variant="solid"
            w="full"
            fontSize="lg"
            rightIcon={<Search2Icon/>}
            onClick={handleSearch}
          >
            Search
          </Button>
        </VStack>

      </CardBody>
    </Card>
  );
};

export default ClientSearch;
