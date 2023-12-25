import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import NextIcon from "../assets/svg/NextIcon";
type OverviewProps = {
  icon: JSX.Element;
  title: string;
  data: {
    text: string;
    value: string;
  }[];
};
const OverviewCard = ({ icon, title, data }: OverviewProps) => {
  return (
    <>
      <Box
        borderRadius="16px"
        bg="#FFF"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
        pl="17px"
        pr="15px"
        pt="17px"
        pb="16px"
        width="407px"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap="10px" alignItems="center">
            {icon}
            <Text>{title}</Text>
          </Flex>
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
        </Flex>
        <Flex mt="62px" gap="12px">
          {data.map((item) => (
            <>
              <Box
                borderRadius="12px"
                bg="#FFF"
                border="1px solid"
                borderColor="#F5F5F5"
                width="117px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                height="79px"
                justifyContent="center"
              >
                <Box textAlign="center">{item.value}</Box>
                <Box>{item.text}</Box>
              </Box>
            </>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default OverviewCard;
