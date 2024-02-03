import CardBody from "../../../../../../components/Card/CardBody";
import { Grid, Skeleton, Stat, StatNumber, Tag } from "@chakra-ui/react";
import Card from "../../../../../../components/Card/Card";
import React, { useEffect, useState } from "react";

const PolicyNumberExpandedWidget = ({policyGUID}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [widgetData, setWidgetData] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(`https://h40hwln9a9.execute-api.us-east-1.amazonaws.com/dev/api/functions/getpolicy?type=policyNumberWidget&policyGUID=${policyGUID}`);
      let data = await response.json();
      console.log(data)
      setWidgetData(data);

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

  const statsOrder = [
    { key: 'Issue Date'},
    { key: 'Paid To Date'},
    { key: 'Expiry Date'},
    { key: 'Total Premium Amount'},
    { key: 'Premium Frequency'},
    { key: 'Cash Value'},
    { key: 'Earned Premium'},
    { key: 'Unearned Premium'},
    { key: 'Annualized Premium'},
  ];

  return (
    <Card mb="20px" mt="5px" overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardBody>
        <Grid
          templateColumns="repeat(9, 1fr)"
          gap="40px"
        >
          {statsOrder.map(({ key }) => (
            <Stat key={key} display="flex" flexDirection="column" alignItems="center">
              <Tag fontSize="0.8em" mb="5px">{key}</Tag>
              <StatNumber display="flex" flexDirection="column" alignItems="center" fontSize="1em">{widgetData ? widgetData[key] : <Skeleton height='20px' width='100px' />}</StatNumber>
            </Stat>
          ))}
        </Grid>
      </CardBody>
    </Card>
  );
};

export default PolicyNumberExpandedWidget;
