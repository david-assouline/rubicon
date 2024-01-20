// Chakra imports
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PolicyTable from "./Components/PolicyTable";
import SampleProjects from "./Components/(sample)Projects";
import { dashboardTableData } from "variables/general";
import PolicyFilter from "./Components/PolicyFilter";
import PolicyButtons from "./Components/PolicyButtons";
import { PolicySearchField } from "./Components/CustomButtons/PolicySearchField";

function Policy({ policyGUID, setPolicyGUID, ...props }) {
  const [policyData, setPolicyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/functions/getpolicy?type="regular"&policyGUID=${policyGUID}`);
      const data = await response.json();
      setPolicyData(data);

    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (policyGUID) {
      fetchData();
    }
  }, [policyGUID]);

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <PolicyFilter
        title={"Filters"}
        captions={["Transaction", "Date", "Detail", "Status", "Action"]}
        setPolicyData={setPolicyData}
        policyGUID={policyGUID}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onActionComplete={fetchData}
        />
      <PolicyButtons
        title={"Filters"}
        captions={["Transaction", "Date", "Detail", "Status", "Action"]}
        policyGUID={policyGUID}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onActionComplete={fetchData}
      />
      <PolicyTable
        title={"Policy"}
        captions={["Transaction", "Date", "GUID", "Status", "Action"]}
        data={policyData}
        policyGUID={policyGUID}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onActionComplete={fetchData}
      />
      {/*<SampleProjects*/}
      {/*  title={"Summary"}*/}
      {/*  captions={["Companies", "Budget", "Status", "Completion", ""]}*/}
      {/*  data={dashboardTableData}*/}
      {/*/>*/}
    </Flex>
  );
}

export default Policy;
