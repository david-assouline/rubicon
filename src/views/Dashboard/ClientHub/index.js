import React, { useEffect, useState } from "react";
import ClientSearch from "./Components/ClientSearch";

import {
  Flex,
  Grid
} from "@chakra-ui/react";
import { AddNewClient } from "./Components/AddNewClient";
import { MiniCardGrid } from "./Components/MiniCardGrid";
import PolicyTable from "../Administration/Components/PolicyTable";
import ClientSearchResults from "./Components/ClientSearchResults";

function ClientHub() {
  const [clientData, setClientData] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [searchParams, setSearchParams] = useState({ });
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev//api/functions/getclient?type=${searchType}&firstName=${searchParams.firstName}&lastName=${searchParams.lastName}`);
      const data = await response.json();
      setSearchResults(data);

    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchType && searchParams) {
      fetchData();
    }
  }, [searchType, searchParams]);

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns="2fr 3fr 1fr"
        templateRows="1fr"
        my="26px"
        gap="24px"
      >
        <ClientSearch
          title={"SEARCH"}
          setSearchType={setSearchType}
          setSearchParams={setSearchParams}
          // setPolicyData={setPolicyData}
          // policyGUID={policyGUID}
          // isLoading={isLoading}
          // setIsLoading={setIsLoading}
          // onActionComplete={fetchData}
        />
        <MiniCardGrid/>
        <AddNewClient/>
      </Grid>
      <ClientSearchResults
        title={"Search Results"}
        captions={["ID", "Customer", "Date of Birth", "Client Type", "Status"]}
        searchResults={searchResults}
      />
    </Flex>
  );
}

export default ClientHub;
