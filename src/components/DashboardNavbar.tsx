import React from "react";
import DashCard from "./DashCard";
import LocationIcon from "../assets/svg/LocationIcon";
import Users from "../assets/svg/Users";
import { Flex, Box, Input } from "@chakra-ui/react";
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
            <DashCard
              backgroundColor="#F5F5F5"
              fontWeight="600"
              icon={<DashboardIcon />}
              title={"Dashboard"}
            />
            <DashCard
              backgroundColor="#FFF"
              icon={<LocationIcon />}
              fontWeight="400"
              title={"Listings"}
            />
            <DashCard
              fontWeight="400"
              backgroundColor="#FFF"
              icon={<Users />}
              title={"Users"}
            />
            <DashCard
              fontWeight="400"
              backgroundColor="#FFF"
              icon={<Wallet />}
              title={"Account"}
            />
            <DashCard
              fontWeight="400"
              backgroundColor="#FFF"
              icon={<Request />}
              title={"Request"}
            />
            <DashCard
              fontWeight="400"
              backgroundColor="#FFF"
              icon={<Setting />}
              title={"Settings"}
            />
          </Flex>
          <Flex>
            <Input
              type="text"
              pt="14px"
              pb="14px"
              pr="16px"
              width="319px"
              placeholder="Search... properties, customers here"
              fontSize="12px"
              fontWeight="300"
              fontFamily="Euclid Circular B"
              focusBorderColor="transparent" // Set to a transparent color
              bg="#F5F5F5" // Set the background color
              border="1px solid"
              // Set the border thickness
              borderColor="#E4E4E4" // Set the border color
              borderRadius="12px" // Set the border radius
              _placeholder={{
                color: "#919191", // Set the placeholder color
              }}
            />
            <Box position="relative" right="35px" top="10px" zIndex={2}>
              <Search />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default DashboardNavbar;
