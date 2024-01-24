import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ExpandableWidget from "./ExpandableWidget";
import CardBody from "../../../../../components/Card/CardBody";
import Card from "../../../../../components/Card/Card";

export function PolicyWidgets() {
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
          amount={"455123457"}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("POLICY NUMBER")}
          isActive={activeWidget === "POLICY NUMBER"}
        />
        <ExpandableWidget
          title={"POLICY STATUS"}
          amount={"ACTIVE"}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("POLICY STATUS")}
          isActive={activeWidget === "POLICY STATUS"}
        />
        <ExpandableWidget
          title={"PRODUCT"}
          amount={"WL"}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("PRODUCT")}
          isActive={activeWidget === "PRODUCT"}
        />
        <ExpandableWidget
          title={"COVERAGES"}
          amount={"2"}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("COVERAGES")}
          isActive={activeWidget === "COVERAGES"}
        />
        <ExpandableWidget
          title={"ROLES"}
          amount={"3"}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("ROLES")}
          isActive={activeWidget === "ROLES"}
        />
        <ExpandableWidget
          title={"PREMIUM"}
          amount={"750.69"}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("PREMIUM")}
          isActive={activeWidget === "PREMIUM"}
        />
        <ExpandableWidget
          title={"CASH VALUE"}
          amount={"$35,789.41"}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("CASH VALUE")}
          isActive={activeWidget === "CASH VALUE"}
        />
        <ExpandableWidget
          title={"RELATIONSHIPS"}
          amount={"4"}
          icon={<ChevronDownIcon w={widgetProps.widgetWidth} h={widgetProps.widgetHeight} color={widgetProps.widgetColor}/>}
          onWidgetClick={() => handleWidgetClick("RELATIONSHIPS")}
          isActive={activeWidget === "RELATIONSHIPS"}
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