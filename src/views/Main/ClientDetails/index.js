import React, { useEffect, useState } from "react";

import {
  Flex,
  Grid
} from "@chakra-ui/react";
import ClientTable from "./Components/ClientTable";
import { useHistory, useLocation } from "react-router-dom";
import DetailsCard from "./Components/DetailsCard";
import ClientButtons from "./Components/ClientButtons";
import ClientRolesTable from "./Components/ClientRolesTable";
import { invoicesData } from "../../../variables/general";
import Invoices from "../Underwriting/components/Invoices";
import DocumentsCard from "./Components/DocumentsCard";

function ClientDetails() {
  const [clientDetails, setClientDetails] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientGUID, setClientGUID] = useState("");
  const [clientActivities, setClientActivities] = useState([]);
  const [clientRoles, setClientRoles] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.clientState) {
      setClientDetails(location.state.clientState);
    } else {
      history.push("/admin/client/search")
    }
  }, [location.state, history]);

  useEffect(() => {
    if (clientDetails.length > 0) {
      setClientName(clientDetails.find(obj => obj["customer"])?.["customer"] || "")
      setClientGUID(clientDetails.find(obj => obj["clientGUID"])?.["clientGUID"] || "")
    }
  }, [clientDetails]);

  useEffect(() => {
    if (clientGUID) {
      fetchClientRoles();
    }
  }, [clientGUID]);

  const fetchClientActivities = async () => {
    try {
      setIsLoading(true);
      console.log("fetching client activities")
      const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/functions/getclient?type="ClientRoles"&clientGUID=${clientGUID}`);
      const data = await response.json();
      setClientActivities(data);

    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchClientRoles = async () => {
    try {
      setIsLoading(true);
      console.log("fetching client roles")
      const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/functions/getclient?type=ClientRoles&clientGUID=${clientGUID}`)
      const data = await response.json();
      setClientRoles(data);

    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns="3fr 3fr 3fr"
        templateRows="1fr"
        my="26px"
        gap="24px"
      >
        <DetailsCard
          title={clientName}
          clientDetails={clientDetails}
        />
        <ClientRolesTable
          title={"Policy Roles"}
          captions={["PolicyNumber", "RoleType", "RolePercent"]}
          clientGUID={clientGUID}
          data={clientRoles}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <DocumentsCard
          title={"Documents"}
          data={invoicesData}
        />
      </Grid>
      <ClientButtons
        clientDetails={clientDetails}
        clientGUID={clientGUID}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        // onActionComplete={fetchData}
      />
      <ClientTable
        title={"Activities"}
        captions={["Transaction", "Date", "GUID", "Status", "Action"]}
        // data={clientActivities}
        clientGUID={clientGUID}
        // isLoading={isLoading}
        // setIsLoading={setIsLoading}
        // onActionComplete={fetchData}
      />
    </Flex>
  );
}

export default ClientDetails;
