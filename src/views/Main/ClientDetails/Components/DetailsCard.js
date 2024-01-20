import { Box, Divider, Grid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import CardBody from "../../../../components/Card/CardBody";
import Card from "components/Card/Card.js";
import CardHeader from "../../../../components/Card/CardHeader";

const DetailsCard = ({title, clientDetails}) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='0px 0px 20px 0px' >
        <VStack alignItems="left">
          <Text fontSize="lg" mb={0} fontWeight="bold">{title}</Text>
          <Divider mb={4} borderColor="gray.300" width="200px" borderWidth="1px"/>
        </VStack>
      </CardHeader>
      <CardBody alignItems="center" justifyContent="left">
        <Grid templateColumns="1fr 1fr 1fr" gap={5}>
          <Box>
            <Text fontWeight="bold" mb={1} fontSize="sm">Email Address</Text>
            <Text fontSize="sm">{clientDetails.find(obj => obj["FieldName"] === "EmailAddress")?.["TextValue"] || "could not find"}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={1} fontSize="sm">ID Type</Text>
            <Text fontSize="sm">{clientDetails.find(obj => obj["FieldName"] === "IdentificationType")?.["TextValue"] || "could not find"}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={1} fontSize="sm">ID Number</Text>
            <Text fontSize="sm">{clientDetails.find(obj => obj["FieldName"] === "IdentificationNumber")?.["TextValue"] || "could not find"}</Text>
          </Box>
          <Box gridColumn="span 2">
            <Text fontWeight="bold" mb={1} fontSize="sm">Primary Address</Text>
            <Text fontSize="sm">{clientDetails.find(obj => obj["formattedAddress"])?.["formattedAddress"] || "N/A"}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={1} fontSize="sm">Phone Number</Text>
            <Text fontSize="sm">{clientDetails.find(obj => obj["FieldName"] === "PrimaryPhoneNumber")?.["TextValue"] || "could not find"}</Text>
          </Box>
        </Grid>
      </CardBody>
    </Card>
  )
};

export default DetailsCard;