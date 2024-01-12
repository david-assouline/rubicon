import React, { useEffect, useState } from "react";
import PolicyTable from "./Components/PolicyTable";
import SampleProjects from "./Components/(sample)Projects";
import { dashboardTableData } from "variables/general";
import ClientSearch from "./Components/ClientSearch";
import PolicyButtons from "./Components/PolicyButtons";
import { PolicySearchField } from "./Components/CustomButtons/PolicySearchField";

import {
  Flex,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Button,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton, VStack, Image, Grid, Center, Icon
} from "@chakra-ui/react";
import { AddIcon, ExternalLinkIcon, SearchIcon } from "@chakra-ui/icons";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import Card from "../../../components/Card/Card";
import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers";
import logoChakra from "../../../assets/svg/logo-white.svg";
import WorkWithTheRockets from "../Dashboard/components/WorkWithTheRockets";
import peopleImage from "../../../assets/img/people-image.png";
import { AddNewClient } from "./Components/AddNewClient";

function ClientHub() {
  const [clientData, setClientData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/functions/getpolicy?type="regular"&policyGUID=${policyGUID}`);
  //     const data = await response.json();
  //     setPolicyData(data);
  //
  //   } catch (error) {
  //     console.error('Error fetching data: ', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (policyGUID) {
  //     fetchData();
  //   }
  // }, [policyGUID]);

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns="1fr 7fr"
        templateRows="1fr"
        my="26px"
        gap="24px"
      >
        <AddNewClient/>
        <ClientSearch
          title={"Search"}
          captions={["Transaction", "Date", "Detail", "Status", "Action"]}
          // setPolicyData={setPolicyData}
          // policyGUID={policyGUID}
          // isLoading={isLoading}
          // setIsLoading={setIsLoading}
          // onActionComplete={fetchData}
        />
      </Grid>
      {/*<PolicyButtons*/}
      {/*  title={"Filters"}*/}
      {/*  captions={["Transaction", "Date", "Detail", "Status", "Action"]}*/}
      {/*  policyGUID={policyGUID}*/}
      {/*  isLoading={isLoading}*/}
      {/*  setIsLoading={setIsLoading}*/}
      {/*  onActionComplete={fetchData}*/}
      {/*/>*/}
      {/*<PolicyTable*/}
      {/*  title={"Policy"}*/}
      {/*  captions={["Transaction", "Date", "GUID", "Status", "Action"]}*/}
      {/*  data={policyData}*/}
      {/*  policyGUID={policyGUID}*/}
      {/*  isLoading={isLoading}*/}
      {/*  setIsLoading={setIsLoading}*/}
      {/*  onActionComplete={fetchData}*/}
      {/*/>*/}
    </Flex>
  );
}

export default ClientHub;
