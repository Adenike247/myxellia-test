import React from "react";
import { Flex,Center,Text,Box } from "@chakra-ui/react";
type DashCardProps = {
  icon: JSX.Element;
  title: string;
};
const DashCard = ({ icon, title }: DashCardProps) => {
  return (
    <>
      <Box
        pt="7px"
        pb="7px"
      
              width="148px"
        borderRadius="8px"
              bg="#FFF"
              cursor="pointer"
      >
        <Center>
          <Flex alignItems="center" gap="8px">
            {icon}
            <Text
              fontSize="14px"
              fontWeight="400"
              color="#3D3D3D"
              fontFamily="Euclid Circular B"
            >
              {title}
            </Text>
          </Flex>
        </Center>
      </Box>

    </>
  );
};

export default DashCard;
