// Chakra imports
import {
  Stack,
  Button,
  useColorModeValue, Box
} from "@chakra-ui/react";

import React from "react";
import { ClientViewsButton } from "./CustomButtons/ClientViewsButton";
import {
  ClientInsertActivityButton,
} from "./CustomButtons/ClientInsertTrxButton";

const ClientButtons = ({ title, clientGUID, isLoading, setIsLoading, onActionComplete }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Box mt={4} mb={3}>
      <Stack spacing={8} direction="row" align="center">
        <ClientViewsButton/>
        <ClientInsertActivityButton
          setIsLoading={setIsLoading}
          onActionComplete={onActionComplete}
          clientGUID={clientGUID}
        />
      </Stack>
    </Box>
  );
};

export default ClientButtons;
