import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ExpandableWidget from "./ExpandableWidget";
import CardBody from "../../../../../components/Card/CardBody";
import Card from "../../../../../components/Card/Card";

export function PolicyWidgets({widgetsData, isLoading}) {
  const [activeWidget, setActiveWidget] = useState(null);

  const handleWidgetClick = (widgetName) => {
    setActiveWidget(activeWidget === widgetName ? null : widgetName);
  };

  const widgetProps = {
    widgetWidth: "25px",
    widgetHeight: "25px",
    widgetColor: "gray.700",
  };

  return (
    <>
      <SimpleGrid columns={{ base: 8 }} spacing={4} flexBasis={{ base: '100%', xl: '50%' }} p={2}>
        <ExpandableWidget
          title={"POLICY NUMBER"}
          data={widgetsData["PolicyNumber"]}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          isExpandable={false}
          isLoading={isLoading}
        />
        <ExpandableWidget
          title={"POLICY STATUS"}
          data={widgetsData["Status"]}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          isExpandable={false}
          isLoading={isLoading}
        />
        <ExpandableWidget
          title={"PRODUCT"}
          data={widgetsData["Product"]}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          isExpandable={false}
          isLoading={isLoading}
        />
        <ExpandableWidget
          title={"COVERAGES"}
          data={widgetsData["Coverages"]}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("COVERAGES")}
          isActive={activeWidget === "COVERAGES"}
          isExpandable={true}
          isLoading={isLoading}
        />
        <ExpandableWidget
          title={"ROLES"}
          data={widgetsData["RolesCount"]}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("ROLES")}
          isActive={activeWidget === "ROLES"}
          isExpandable={true}
          isLoading={isLoading}
        />
        <ExpandableWidget
          title={"PREMIUM"}
          data={widgetsData["TotalPremiumAmount"]}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("PREMIUM")}
          isActive={activeWidget === "PREMIUM"}
          isExpandable={true}
          isLoading={isLoading}
        />
        <ExpandableWidget
          title={"CASH VALUE"}
          data={widgetsData["CashValue"]}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("CASH VALUE")}
          isActive={activeWidget === "CASH VALUE"}
          isExpandable={true}
          isLoading={isLoading}
        />
        <ExpandableWidget
          title={"RELATIONSHIPS"}
          data={widgetsData["PolicyNumber"]}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("RELATIONSHIPS")}
          isActive={activeWidget === "RELATIONSHIPS"}
          isExpandable={true}
          isLoading={isLoading}
        />
      </SimpleGrid>

      {activeWidget && (
        <Card mb='20px' mt="5px" overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardBody>
            <p>Content for {activeWidget}</p>
          </CardBody>
        </Card>
      )}
    </>
  );
};