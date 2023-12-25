import React from "react";
import Add from "../assets/svg/Add";
import Calender from "../assets/svg/Calender";
import Notification from "../assets/svg/Notification";
import { Box, Flex, Text } from "@chakra-ui/react";
import Profile from "../assets/svg/Profile";
import Frame from "../assets/svg/Frame";
import VeergeLogo from "../assets/svg/VeergeLogo";
const MainNavbar = () => {
  return (
    <>
      <Box
        pl="78px"
        pr="78px"
        pt="22px"
        pb="22px"
        bg="#191919"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Box cursor="pointer">
            <VeergeLogo />
            <Text
              fontSize="14px"
              fontWeight="400"
              color="#FFF"
              fontFamily="Proxima Nova"
            >
              For Mainstone
            </Text>
          </Box>
          <Flex gap="45px">
            <Flex alignItems="center" gap="24px" cursor="pointer">
              <Add />
              <Calender />
              <Notification />
            </Flex>

            <Flex alignItems="center" gap="14px" cursor="pointer">
              <Profile />
              <Text
                color="#fff"
                fontSize="16px"
                fontWeight="500"
                fontFamily="Euclid Circular B"
              >
                Ahmed Ali
              </Text>
              <Frame />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default MainNavbar;
