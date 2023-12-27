import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight, MdOutlineGroup } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
const ProfileCard = () => {
  return (
    <>
      <Box
        bg="#FFF"
        borderRadius="10px"
        width="200px"
        pl="8px"
        pr="8px"
        pb="10px"
      >
        <Flex
          pt="10px"
          gap="14px"
          alignItems="center"
          justifyContent="space-between"
          pb="8px"
        >
          <Flex gap="4px" alignItems="center">
            <AiOutlineMessage />
            <Text
              fontWeight="500"
              fontSize="14px"
              fontFamily="Euclid Circular B"
              color="#3D3D3D"
            >
              Support center
            </Text>
          </Flex>
          <MdOutlineKeyboardArrowRight color="#E4E4E4" fontWeight="500" />
        </Flex>
        <Box width="100%" height="1px" bg="#E4E4E4"></Box>

        <Flex
          pt="10px"
          gap="14px"
          alignItems="center"
          justifyContent="space-between"
          pb="8px"
        >
          <Flex gap="4px" alignItems="center">
            <MdOutlineGroup />
            <Text
              fontWeight="500"
              fontSize="14px"
              fontFamily="Euclid Circular B"
              color="#3D3D3D"
            >
              Switch Account
            </Text>
          </Flex>
          <MdOutlineKeyboardArrowRight color="#E4E4E4" fontWeight="500" />
        </Flex>
        <Box width="100%" height="1px" bg="#E4E4E4"></Box>
        <Flex
          pt="10px"
          gap="14px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex gap="4px" alignItems="center">
            <TbLogout2 />
            <Text
              fontWeight="500"
              fontSize="14px"
              fontFamily="Euclid Circular B"
              color="#3D3D3D"
            >
              Logout
            </Text>
          </Flex>
          <MdOutlineKeyboardArrowRight color="#E4E4E4" fontWeight="500" />
        </Flex>
      </Box>
    </>
  );
};

export default ProfileCard;
