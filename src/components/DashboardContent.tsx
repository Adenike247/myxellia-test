import React from "react";
import { Box, Flex, Text, } from "@chakra-ui/react";
import Emoji from "../assets/images/Emoji.png";
import PropertyIcon from "../assets/svg/PropertyIcon";
import OverviewCard from "./OverviewCard";
import { customers, property } from "../data";
import PropertyProfile from "../assets/svg/PropertyProfile";
import Image from "next/image";
import SalesOverview from "./SalesOverview";


const DashboardContent = () => {
  return (
    <>
      <Box pl="78px" pr="78px" pt="19px" bg="#FBFCFC">
        <Flex>
          <Image src={Emoji} alt="emoji" width="29" height="29" />
          <Text fontFamily="Euclid Circular B" fontSize="20px" fontWeight="600">
            Hi Ahmed
          </Text>
        </Flex>
        <Text
          fontFamily="Euclid Circular B"
          fontSize="12px"
          fontWeight="400"
          color=" #919191"
        >
          Welcome to your Dashboard
        </Text>
        <Flex gap="21px" mt="20px">
          <SalesOverview />
          <Box>
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
        </Flex>
      </Box>
    </>
  );
};

export default DashboardContent;
