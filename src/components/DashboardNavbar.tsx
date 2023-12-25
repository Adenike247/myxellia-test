import React from "react";
import styles from "../../styles/Home.module.css";
import DashCard from "./DashCard";
import LocationIcon from "../assets/svg/LocationIcon";
import Users from "../assets/svg/Users";
import { Flex, Box, Center, Text, Input } from "@chakra-ui/react";
import Wallet from "../assets/svg/Wallet";
import Request from "../assets/svg/Request";
import Setting from "../assets/svg/Settings";
import DashboardIcon from "../assets/svg/DashboardIcon";
import Search from "../assets/svg/Search";
const DashboardNavbar = () => {
  return (
    <>
      <Box
        pl="78px"
        pr="78px"
        pt="14px"
        pb="15px"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02);"
        bg="FFF"
        cursor="pointer"
      >
        <Flex gap="27px">
          <Flex gap="10px" alignItems="center">
            <Center
              h="38"
              bg="#F5F5F5"
              pt="10px"
              pb="10px"
              pr="21px"
              pl="22px"
              borderRadius="8px"
            >
              <Flex alignItems="center" gap="4">
                <DashboardIcon />
                <Text fontWeight="600" fontSize="14px">
                  Dashboard
                </Text>
              </Flex>
            </Center>
            <DashCard icon={<LocationIcon />} title={"Listings"} />
            <DashCard icon={<Users />} title={"User"} />
            <DashCard icon={<Wallet />} title={"Account"} />
            <DashCard icon={<Request />} title={"Request"} />
            <DashCard icon={<Setting />} title={"Settings"} />
          </Flex>
          <Flex>
            <Input
              type="text"
              pt="14px"
              pb="14px"
              pr="16px"
              width="319px"
              height="43px"
              placeholder="Search... properties, customers here"
              fontSize="12px"
              fontWeight="300"
              fontFamily="Euclid Circular B"
              bg="#F5F5F5" // Set the background color
              border="1px solid"
              // Set the border thickness
              borderColor="#E4E4E4" // Set the border color
              borderRadius="12px" // Set the border radius
              _placeholder={{
                color: "#919191", // Set the placeholder color
              }}
              outline="none"
            />
            <Box position="relative" right="50px" top="10px">
              <Search />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default DashboardNavbar;
