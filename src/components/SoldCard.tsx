import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import ImageIcon from "../assets/svg/ImageIcon";
import Bulb from "../assets/svg/Bulb";
import Cancel from "../assets/svg/Cancel";

const SoldCard = () => {
  return (
    <>
      <Box
        position="relative"
        bg="#FFF"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
        borderRadius="16px"
        pl="21px"
        pr="58px"
        pt="16px"
        pb="18px"
        maxHeight="325px"
        width={{ base: "387px", lg: "500px" }}
      >
        <Text
          color="#12D8A0"
          fontSize="16px"
          fontWeight="600"
          fontFamily="Euclid Circular B"
        >
          Top Selling
        </Text>
        <Flex
          fontSize="28px"
          fontWeight="600"
          fontFamily="Euclid Circular B"
          pt="10px"
        >
          <Text color="#191919">₦ 0</Text>
          <Text color="#CBCBCB">.00</Text>
        </Flex>
        <Text color="#606060" fontSize="14px" fontWeight="400">
          Total Sold
        </Text>
        <Flex gap="19px" mt="14px" pb="60px">
          <Box
            width="154px"
            borderRadius="12px"
            bg="#F5F5F5"
            display="grid"
            placeItems="center"
            height="175px"
          >
            <ImageIcon />
          </Box>
          <Box>
            <Box>
              <Text
                color="#191919"
                fontSize="20px"
                fontFamily="Euclid Circular B"
                fontWeight="600"
              >
                None
              </Text>
              <Text
                color="#CBCBCB"
                fontSize="16px"
                fontFamily="Euclid Circular B"
                fontWeight="600"
                pt="34px"
              >
                0
              </Text>
              <Text
                color="#606060"
                pt="2px"
                fontFamily="Euclid Circular B"
                fontSize="12px"
              >
                Whole units sold
              </Text>
            </Box>
          </Box>
        </Flex>
        <Box position="absolute" bottom="75px" left="160px">
          <Box
            padding="15px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#4545FE"
            borderRadius="70px"
            gap="8px"
            position="absolute"
          >
            <Bulb />
            <Text
              fontSize="20px"
              fontFamily="Euclid Circular B"
              fontWeight="400"
              color="#FFF"
              whiteSpace="nowrap"
            >
              Veerge Assistant
            </Text>
            <Cancel />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SoldCard;
