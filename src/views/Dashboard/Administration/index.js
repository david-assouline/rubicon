// Chakra imports
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Policy from "./components/Policy";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";
import { policyTablesData } from "./general";
import PolicyFilter from "./components/PolicyFilter";

function AdminPage() {
  const [policyData, setPolicyData] = useState([]); // State to store fetched data

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/functions/getpolicy'); // Replace with your API endpoint
        const data = await response.json();
        setPolicyData(data); // Update state with fetched data
        console.log(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <PolicyFilter
        title={"Filters"}
        captions={["Transaction", "Date", "Detail", "Status", "Action"]}
        />
      <Policy
        title={"Policy Screen"}
        captions={["Transaction", "Date", "Detail", "Status", "Action"]}
        data={policyTablesData}
      />
      <Projects
        title={"Summary"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default AdminPage;
