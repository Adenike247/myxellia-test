import React from "react";
import { Box, Center, Flex, Text, Stack } from "@chakra-ui/react";
import Emoji from "../assets/images/Rectangle 12749.png";
import Divider from "../assets/svg/Divider";
import PropertyIcon from "../assets/svg/PropertyIcon";
import OverviewCard from "./OverviewCard";
import { customers, property } from "../data";
import PropertyProfile from "../assets/svg/PropertyProfile";
import Image from "next/image";

const DashboardContent = () => {
  return (
    <>
      <Box pl="78px" pr="78px" pt="19px" bg="#FBFCFC">
        <Flex>
                  {/* <Emoji /> */}
                  <Image src={Emoji} alt="emoji" width="29" height="29"/>
          <Text fontFamily="Euclid Circular B" fontSize="20px" fontWeight="600">
            Hi Ahmed
          </Text>
        </Flex>
        <Text fontFamily="Euclid Circular B" fontSize="12px" fontWeight="400">
          Welcome to your Dashboard
        </Text>
        <Flex gap="21px" mt="20px">
          <Box
            width="856px"
            height="325px"
            pl="22px"
            pr="23px"
            borderRadius="16px"
            bg="#fff"
            boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
          >
            <Flex justifyContent="space-between">
              <Box>
                <Text
                  pt="16px"
                  fontSize="20px"
                  fontFamily="Euclid Circular B"
                  fontWeight="600"
                  color="#191919"
                >
                  Sales Overview
                </Text>
                <Text
                  fontSize="12px"
                  fontFamily="Euclid Circular B"
                  pt="12px"
                  fontWeight="400"
                  color="#606060"
                >
                  Showing overview Jan 2022 - Sep 2022
                </Text>
              </Box>
              <Box>
                <Box
                  height="46px"
                  borderRadius="12px"
                  border="1px solid"
                  borderColor="#CBCBCB"
                  width="177px"
                  mt="20px"
                  marginLeft="auto"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box>
                    <Text fontWeight="500" fontSize="14px" color="#CBCBCB">
                      View Transactions
                    </Text>
                  </Box>
                </Box>
                <Box
                  fontSize="14px"
                  fontWeight="400"
                  fontFamily="Euclid Circular B"
                  color="#3D3D3D"
                  pt="17px"
                >
                  <Flex gap="12px">
                    <Box
                      pl="18px"
                      pr="17px"
                      pt="7px"
                      pb="8px"
                      borderRadius="8px"
                    >
                      <Center>
                        <Text>1 Week</Text>
                      </Center>
                    </Box>
                    <Box
                      pl="15px"
                      pr="14px"
                      pt="7px"
                      pb="8px"
                      borderRadius="8px"
                    >
                      <Center>
                        <Text>1 Month</Text>
                      </Center>
                    </Box>
                    <Box
                      pl="20px"
                      pr="21px"
                      pt="7px"
                      pb="8px"
                      borderRadius="8px"
                      bg="#F5F5F5"
                    >
                      <Center>
                        <Text fontSize="14px" fontWeight="600">
                          1 Year
                        </Text>
                      </Center>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Flex>
            <Box mt="20px" width="100%">
              <Divider />
            </Box>
          </Box>
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
