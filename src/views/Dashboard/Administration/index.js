// Chakra imports
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PolicyTable from "./Components/PolicyTable";
import SampleProjects from "./Components/(sample)Projects";
import { dashboardTableData } from "variables/general";
import PolicyFilter from "./Components/PolicyFilter";
import PolicyButtons from "./Components/PolicyButtons";

function Administration(props) {
  const [policyData, setPolicyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { policyGUID = '38d76f58-bcf9-457f-b210-bef7daf4bc1f' } = props.location.state || {};

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/functions/getpolicy?policyGUID=${policyGUID}`);
      const data = await response.json();
      setPolicyData(data);

    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <PolicyFilter
        title={"Filters"}
        captions={["Transaction", "Date", "Detail", "Status", "Action"]}
        />
      <PolicyButtons
        title={"Filters"}
        captions={["Transaction", "Date", "Detail", "Status", "Action"]}
      />
      <PolicyTable
        title={"Policy"}
        captions={["Transaction", "Date", "GUID", "Status", "Action"]}
        data={policyData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onActionComplete={fetchData}
      />
      <SampleProjects
        title={"Summary"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default Administration;
