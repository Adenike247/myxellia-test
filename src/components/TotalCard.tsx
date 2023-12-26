import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import NextIcon from "../assets/svg/NextIcon";
import ImageIcon from "../assets/svg/ImageIcon";
import PreviewIcon from "../assets/svg/PreviewIcon";
import TotalNextIcon from "../assets/svg/TotalNextIcon";

const TotalCard = () => {
  return (
    <>
      <Box
        bg="#FFF"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
        borderRadius="16px"
        pl="25px"
        pr="18px"
        pt="25px"
        pb="18px"
        //   width="418px"
      >
        <Box
          display="flex"
          alignContent="center"
          justifyContent="space-between"
        >
          <Box>
            <Box display="flex">
              {" "}
              <Text
                color="#191919"
                fontSize="28px"
                fontWeight="600"
                fontFamily="Euclid Circular B"
              >
                ₦ 0
              </Text>
              <Text
                color="#CBCBCB"
                fontSize="28px"
                fontWeight="600"
                fontFamily="Euclid Circular B"
              >
                .00
              </Text>
            </Box>
            <Text pt="4px">Total Outstanding Balance</Text>
          </Box>
          <Flex alignContent="center" gap="2px">
            <Text
              fontSize="12px"
              fontFamily="Euclid Circular B"
              color="#CBCBCB"
              fontWeight="500"
            >
              View all
            </Text>
            <NextIcon />
          </Flex>
        </Box>
        <Flex gap="19px" mt="31px">
          <Box
            width="154px"
            borderRadius="12px"
            bg="#F5F5F5"
            display="flex"
            justifyContent="center"
            alignItems="center"
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
                pb="47px"
              >
                None
              </Text>
              <Text
                color="#FF6A6A"
                fontSize="14px"
                fontFamily="Euclid Circular B"
                fontWeight="600"
              >
                ₦ 0.00
              </Text>
              <Text color="#606060" pt="2px">
                Outstanding Balance
              </Text>
            </Box>
            <Box
              display="flex"
              gap="11px"
              mt="25px"
              alignItems="center"
              position="relative"
              left="65%"
            >
              <Text>1/5</Text>
              <Flex gap="8px">
                <Box
                  width="32px"
                  height="32px"
                  bg="#E4E4E4"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="50%"
                >
                  <PreviewIcon />
                </Box>
              </Flex>
              <Box
                width="32px"
                height="32px"
                bg="#E4E4E4"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="50%"
              >
                <TotalNextIcon />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TotalCard;
