import {
  Box,
  Button,
  Flex, Icon,
  Link,
  Stack,
  Text,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import CquencyLogo from "assets/img/HomeInsuranceLogo.png";
import { Separator } from "components/Separator/Separator";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

const SidebarContent = ({ logoText, routes }) => {
  let location = useLocation();
  const [state, setState] = React.useState({});

  const activeRoute = (routeName) => {
    return location.pathname.startsWith(routeName) ? "active" : "";
  };

  const createLinks = (routes) => {
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }

      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <div key={prop.name}>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: "12px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
            >
              {prop.name}
            </Text>
            {createLinks(prop.views)}
          </div>
        );
      }

      let isActive = activeRoute(prop.layout + prop.path) === "active";

      return (
        <React.Fragment key={key}>
          <NavLink to={prop.layout + prop.path}>
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={isActive ? activeBg : "transparent"}
              mb={{ xl: "12px" }}
              mx={{ xl: "auto" }}
              ps={{ sm: "10px", xl: "16px" }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{ bg: "inherit", transform: "none", borderColor: "transparent" }}
              _focus={{ boxShadow: "none" }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={isActive ? "blue.500" : inactiveBg}
                    color={isActive ? "white" : "blue.500"}
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={isActive ? activeColor : inactiveColor} my="auto" fontSize="sm">
                  {prop.name}
                </Text>
              </Flex>
            </Button>
          </NavLink>
        </React.Fragment>
      );
    });
  };

  const links = <>{createLinks(routes)}</>;

  return (
    <>
      <Box pt={"25px"} mb="12px">
        <Link
          // href={`${process.env.PUBLIC_URL}/#/`}
          href={`/#/`}
          target="_blank"
          display="flex"
          lineHeight="100%"
          mb="30px"
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
          fontSize="11px"
        >
          <Image src={CquencyLogo} me="5px" />
          {/*<Text fontSize="sm" mt="3px">*/}
          {/*  {logoText}*/}
          {/*</Text>*/}
        </Link>

        <Separator></Separator>
      </Box>
      <Stack direction="column" mb="40px">
        <Box>{links}</Box>
      </Stack>
      <Button onClick={handleSignOut} variant="solid" colorScheme="blue" borderRadius="15px" mx="auto" my="20px" w="80%">
        Sign Out
      </Button>
    </>
  );
};

export default SidebarContent;