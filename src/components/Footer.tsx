import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Lock from "../assets/svg/Lock";

const Footer = () => {
  return (
    <>
      <Box display="grid" placeItems="center">
        {" "}
        <Box display="flex" gap="5px" alignItems="center">
          <Lock />
          <Text
            fontSize="16px"
            color="#919191"
            fontFamily="Euclid Circular B"
            fontWeight="400"
          >
            End-to-end encryption
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
