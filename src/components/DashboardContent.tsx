import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Emoji from "../assets/images/Emoji.png";
import PropertyIcon from "../assets/svg/PropertyIcon";
import OverviewCard from "./OverviewCard";
import { customers, property } from "../data";
import PropertyProfile from "../assets/svg/PropertyProfile";
import Image from "next/image";
import SalesOverview from "./SalesOverview";
import ListingOverview from "./ListingOverview";
import SoldCard from "./SoldCard";
import OutstandingCard from "./OutstandingCard";

const DashboardContent = () => {
  return (
    <>
      <Box
        pl={{ lg: "78px", base: "20px" }}
        pr={{ lg: "78px", base: "20px" }}
        pt="19px"
        bg="#FBFCFC"
        pb="28px"
      >
        <Flex gap="4px">
          <Image src={Emoji} alt="emoji" width="29" height="29" />
          <Text
            fontFamily="Euclid Circular B"
            fontSize="20px"
            fontWeight="600"
            color="#191919"
          >
            Hi Ahmed
          </Text>
        </Flex>
        <Text
          fontFamily="Euclid Circular B"
          fontSize="12px"
          fontWeight="400"
          color=" #3D3D3D"
          pt="12px"
        >
          Welcome to your Dashboard
        </Text>
        <Box
          display="flex"
          alignItems="center"
          gap={{ lg: "21px", md: "8px" }}
          mt="20px"
        >
          <SalesOverview />
          <Box
            display={{ base: "none", lg: "inline", md: "inline", sm: "none" }}
          >
            <OverviewCard
              icon={<PropertyIcon />}
              title="Property Overview"
              data={property}
            />
            <Box mt="17px">
              <OverviewCard
                icon={<PropertyProfile />}
                title="Customers Overview"
                data={customers}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            display={{
              lg: "flex",
              base: "inline",
              md: "inline",
              // sm: "inline",
            }}
            gap="20px"
            mt="20px"
          >
            <Box mt={{ base: "20px", md: "20px", sm: "20px", lg: "0px" }}>
              <ListingOverview />
            </Box>
            <Box mt={{ base: "20px", md: "20px", sm: "20px", lg: "0px" }}>
              <OutstandingCard />
            </Box>
            <Box mt={{ base: "20px", md: "20px", sm: "20px", lg: "0px" }}>
              <SoldCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DashboardContent;
