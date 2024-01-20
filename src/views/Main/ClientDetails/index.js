import React, { useEffect, useState } from "react";

import {
  Flex,
  Grid
} from "@chakra-ui/react";
import ClientTable from "./Components/ClientTable";
import { useHistory, useLocation } from "react-router-dom";
import DetailsCard from "./Components/DetailsCard";

function ClientDetails() {
  const [clientDetails, setClientDetails] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.clientState) {
      setClientDetails(location.state.clientState);
    }
    else if (!location.state || !location.state.clientState) {
      history.push('/admin/client/search');
    }
  }, [location.state]);

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns="3fr 3fr 3fr"
        templateRows="1fr"
        my="26px"
        gap="24px"
      >
        <DetailsCard
          title={clientDetails.find(obj => obj["customer"])?.["customer"] || "N/A"}
          clientDetails={clientDetails}
        />
        {/*<MiniCardGrid/>*/}
        {/*<AddNewClient/>*/}
      </Grid>
      <ClientTable
        title={"Activities"}
        captions={["Transaction", "Date", "GUID", "Status", "Action"]}
        // data={policyData}
        // policyGUID={policyGUID}
        // isLoading={isLoading}
        // setIsLoading={setIsLoading}
        // onActionComplete={fetchData}
      />
    </Flex>
  );
}

export default ClientDetails;
