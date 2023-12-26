import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import MostCard from "./MostCard";
import BookMark from "../assets/svg/BookMark";

const ListingOverview = () => {
  return (
    <>
      <Box
        borderRadius="16px"
        bg="#FFF"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
        pl="22px"
        pr="16px"
        pt="13px"
        pb="14px"
        // width="475px"
      >
        <Text fontWeight="600" fontSize="18px" fontFamily="Euclid Circular B">
          Listing Overview
        </Text>
        <Flex gap="31px" pt="18px">
          <Box>
            <Text
              color="#191919"
              fontSize="10px"
              fontWeight="400"
              fontFamily="Euclid Circular B"
            >
              Most viewed
            </Text>
            <Box width="206px" height="1px" bg="#E4E4E4" mt="4px"></Box>
            <MostCard />
          </Box>
          <Box>
            <Text
              color="#191919"
              fontSize="10px"
              fontWeight="400"
              fontFamily="Euclid Circular B"
            >
              Most viewed
            </Text>
            <Box width="206px" height="1px" bg="#E4E4E4" mt="4px"></Box>
            <MostCard />
          </Box>
        </Flex>
        <Box width="437px" borderRadius="12px" bg="#F5F5F5" mt="15px">
          <Box pt="10px" pl="11px" pr="15px" pb="10px">
            <Box>
              <Text
                color="#191919"
                fontSize="10px"
                fontWeight="400"
                fontFamily="Euclid Circular B"
              >
                Most viewed
              </Text>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MostCard />
                <Box
                  pt="11px"
                  pl="15px"
                  pb="11px"
                  pr="9px"
                  bg="#FFF"
                  borderRadius="12px"
                  border="1px solid"
                  borderColor="#E4E4E4"
                //   height="68px"
                  width="189px"
                >
                  <Flex justifyContent="space-between">
                    <Box>
                      <Text
                        fontSize="24px"
                        fontWeight="400"
                        fontFamily="Euclid Circular B"
                        color="#191919"
                      >
                        0
                      </Text>
                      <Text
                        fontSize="10px"
                        fontWeight="500"
                        fontFamily="Euclid Circular B"
                        color="#3D3D3D"
                      >
                        Number of watchlists
                      </Text>
                    </Box>
                    <BookMark />
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ListingOverview;
