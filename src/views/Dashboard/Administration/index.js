// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Policy from "./components/Policy";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";
import { policyTablesData } from "./general";
import PolicyFilter from "./components/PolicyFilter";

function AdminTable() {
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

export default AdminTable;
