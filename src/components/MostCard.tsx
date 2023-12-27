import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import MostImg from "../assets/svg/MostImg";
type MostCardProps = {
  borderColor: string;
};
const MostCard = ({ borderColor }: MostCardProps) => {
  return (
    <>
      <Box>
        <Flex mt="10px" gap="14px">
          <Box
            width="67px"
            height="67px"
            border="1px solid"
            borderColor={borderColor}
            bg="#F5F5F5"
            borderRadius="12px"
            display="grid"
            placeItems="center"
          >
            <MostImg />
          </Box>
          <Box>
            <Text
              fontSize="16px"
              fontWeight="600"
              fontFamily="Euclid Circular B"
              pt="14px"
            >
              None
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default MostCard;
