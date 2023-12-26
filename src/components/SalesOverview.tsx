import React from "react";
import { Box, Center, Flex, Text} from "@chakra-ui/react";
import SalesCard from "./SalesCard";
import LeftControl from "../assets/svg/LeftControl";
import Divider from "../assets/svg/Divider";
import RightControl from "../assets/svg/RightControl";
const SalesOverview = () => {
  return (
    <>
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
          mt="20px"
          height="1px"
          width="100%"
          bg="#E4E4E4"
          pl="0px"
          pr="0px"
        ></Box>
        <Flex>
          <Flex>
            <Flex gap="53px" mt="76px">
              <Box
                width="18px"
                height="18px"
                borderRadius="50%"
                bg="#F5F5F5"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <LeftControl />
              </Box>
              <Box mt="65px">
                <Box
                  height="1px"
                  width="311px"
                  bg="#E4E4E4"
                  alignSelf="flex-end"
                ></Box>
                <Box
                  display="flex"
                  gap="14px"
                  fontSize="10px"
                  fontFamily="Euclid Circular B"
                  fontWeight="500"
                  mt="6px"
                  color="#919191"
                  marginLeft="10px"
                >
                  <Text>Jan</Text>
                  <Text>Feb</Text>
                  <Text>Mar</Text>
                  <Text>Apr</Text>
                  <Text>May</Text>
                  <Text>Jun</Text>
                  <Text>Jul</Text>
                  <Text>Aug</Text>
                  <Text>Sep</Text>
                </Box>
              </Box>
              <Box
                width="18px"
                height="18px"
                borderRadius="50%"
                bg="#F5F5F5"
                position="relative"
                left="50px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <RightControl />
              </Box>
            </Flex>
            <Box>
              <Divider />
            </Box>
          </Flex>
          <SalesCard />
        </Flex>
      </Box>
    </>
  );
};

export default SalesOverview;
