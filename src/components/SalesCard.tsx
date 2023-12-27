import React from "react";
import { Box, Flex,Text } from "@chakra-ui/react";
type SalesProps = {
  transactionType: string;
  icon: JSX.Element;
  amountColor: string;
  percentageColor: string;
  spanColor: string;
};
const SalesCard = ({
  transactionType,
  icon,
  amountColor,
  percentageColor,
  spanColor,
}: SalesProps) => {
  return (
    <>
      <Box
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
          color={amountColor}
          fontSize="20px"
          fontWeight="600"
          borderColor="#E4E4E4"
        >
          <Flex>
            <Text>₦ 0</Text>
            <Text color={spanColor}>.00</Text>
          </Flex>
        </Box>
        <Box>
          <Flex alignItems="center" gap="7px">
            <Box
              fontSize="10px"
              fontWeight="500"
              color="#3D3D3D"
              fontFamily="Euclid Circular B"
            >
              {transactionType}
            </Box>
            <Flex alignItems="center" gap="4px">
              {icon}
              <Box
                fontSize="10px"
                fontWeight="400"
                color={percentageColor}
                fontFamily="Euclid Circular B"
              >
                0%
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default SalesCard;
