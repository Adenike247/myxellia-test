import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import ArrowUp from "../assets/svg/ArrowUp";

const SalesCard = () => {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)">
        <Box
          mt="16px"
          borderRadius="12px"
          bg="#FFF"
          border="1px solid"
          pl="15px"
          height="73px"
          width="189px"
          borderColor="#E4E4E4"
                  display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            fontFamily="Euclid Circular B"
            color="#4545FE"
            fontSize="20px"
            fontWeight="600"
            borderColor="#E4E4E4"
          >
            ₦ 0.00
          </Box>
          <Box>
            <Flex alignItems="center" gap="7px">
              <Box
                fontSize="10px"
                fontWeight="500"
                color="#3D3D3D"
                fontFamily="Euclid Circular B"
              >
                Balance
              </Box>
              <Flex alignItems="center" gap="4px">
                <Box>
                  <ArrowUp />
                </Box>
                <Box
                  fontSize="10px"
                  fontWeight="400"
                  color="#12D8A0"
                  fontFamily="Euclid Circular B"
                >
                  0%
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box
          mt="16px"
          borderRadius="12px"
          bg="#FFF"
          border="1px solid"
          pl="15px"
          height="73px"
          borderColor="#E4E4E4"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            fontFamily="Euclid Circular B"
            color="#4545FE"
            fontSize="20px"
            fontWeight="600"
            borderColor="#E4E4E4"
          >
            ₦ 0.00
          </Box>
          <Box>
            <Flex alignItems="center" gap="7px">
              <Box
                fontSize="10px"
                fontWeight="500"
                color="#3D3D3D"
                fontFamily="Euclid Circular B"
              >
                Balance
              </Box>
              <Flex alignItems="center" gap="4px">
                <Box>
                  <ArrowUp />
                </Box>
                <Box
                  fontSize="10px"
                  fontWeight="400"
                  color="#12D8A0"
                  fontFamily="Euclid Circular B"
                >
                  0%
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box
          mt="14px"
          borderRadius="12px"
          bg="#FFF"
          border="1px solid"
          pl="15px"
          height="73px"
          borderColor="#E4E4E4"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            fontFamily="Euclid Circular B"
            color="#4545FE"
            fontSize="20px"
            fontWeight="600"
            borderColor="#E4E4E4"
          >
            ₦ 0.00
          </Box>
          <Box>
            <Flex alignItems="center" gap="7px">
              <Box
                fontSize="10px"
                fontWeight="500"
                color="#3D3D3D"
                fontFamily="Euclid Circular B"
              >
                Balance
              </Box>
              <Flex alignItems="center" gap="4px">
                <Box>
                  <ArrowUp />
                </Box>
                <Box
                  fontSize="10px"
                  fontWeight="400"
                  color="#12D8A0"
                  fontFamily="Euclid Circular B"
                >
                  0%
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box
          mt="14px"
          borderRadius="12px"
          bg="#FFF"
          border="1px solid"
          pl="15px"
          height="73px"
          borderColor="#E4E4E4"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            fontFamily="Euclid Circular B"
            color="#4545FE"
            fontSize="20px"
            fontWeight="600"
            borderColor="#E4E4E4"
          >
            ₦ 0.00
          </Box>
          <Box>
            <Flex alignItems="center" gap="7px">
              <Box
                fontSize="10px"
                fontWeight="500"
                color="#3D3D3D"
                fontFamily="Euclid Circular B"
              >
                Balance
              </Box>
              <Flex alignItems="center" gap="4px">
                <Box>
                  <ArrowUp />
                </Box>
                <Box
                  fontSize="10px"
                  fontWeight="400"
                  color="#12D8A0"
                  fontFamily="Euclid Circular B"
                >
                  0%
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default SalesCard;
