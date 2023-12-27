import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import LeftControl from "../assets/svg/LeftControl";
import RightControl from "../assets/svg/RightControl";
import SalesPage from "./SalesPage";
import { calender } from "../data";
const SalesOverview = () => {
  return (
    <>
      <Box
        width="856px"
        pb="18px"
        borderRadius="16px"
        bg="#fff"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
      >
        <Flex justifyContent="space-between" pl="22px" pt="16px" pr="23px">
          <Box>
            <Text
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
              flexDirection="column"
              display="grid"
              placeItems="center"
            >
              <Box>
                <Text
                  fontWeight="500"
                  fontSize="14px"
                  color="#CBCBCB"
                  fontFamily="Euclid Circular B"
                >
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
              <Flex gap="12px" alignItems="center">
                <Box pl="18px" pr="17px" pt="7px" pb="8px" borderRadius="8px">
                  <Center>
                    <Text>1 Week</Text>
                  </Center>
                </Box>
                <Box pl="15px" pr="14px" pt="7px" pb="8px" borderRadius="8px">
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

        <Box
          mt="12px"
          height="1px"
          width="100%"
          bg="#E4E4E4"
          pl="0px"
          pr="0px"
        ></Box>
        <Flex
          justifyContent="space-between"
          pl="8px"
          pr="22px"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" >
            <Flex gap="55px" alignItems="center"mr="10px">
              <Box
                width="18px"
                height="18px"
                borderRadius="50%"
                bg="#F5F5F5"
                display="grid"
                placeItems="center"
              >
                <LeftControl />
              </Box>
              <Box>
                <Box
                  height="1px"
                  width="100%"
                  bg="#E4E4E4"
                  alignSelf="flex-end"
                  mt="10rem"
                ></Box>
                <>
                  <Box
                    display="flex"
                    gap="14px"
                    fontSize="10px"
                    fontFamily="Euclid Circular B"
                    fontWeight="500"
                    mt="6px"
                    color="#919191"
                    ml="20px"
                  >
                    {calender.map((item) => (
                      <>
                        <Text>{item}</Text>
                      </>
                    ))}
                  </Box>
                </>
              </Box>
            </Flex>
            <Box
              height="163px"
              borderLeftRadius="12px"
              width="50px"
              boxShadow="0px 0px 8px 0px rgba(0, 0, 0, 0.02)"
              display="grid"
              placeItems="center"
            >
              <Box
                width="18px"
                height="18px"
                borderRadius="50%"
                bg="#F5F5F5"
                display="grid"
                placeItems="center"
              >
                <RightControl />
              </Box>
            </Box>
          </Box>
          <SalesPage />
        </Flex>
      </Box>
    </>
  );
};

export default SalesOverview;
