import React from "react";
import styles from "../../styles/Home.module.css";
import { Flex,Center,Text,Box } from "@chakra-ui/react";
type DashCardProps = {
  icon: JSX.Element;
  title: string;
};
const DashCard = ({ icon, title }: DashCardProps) => {
  return (
    <>
      {/* <div className={styles.dashCardRoot}> */}
      <Box
        h="38"
        pt="10px"
        pb="10px"
        pr="30px"
        pl="32px"
        borderRadius="8px"
              bg="#FFF"
              cursor="pointer"
      >
        <Center>
          <Flex alignItems="center" gap="8px">
            <span>{icon}</span>
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

      {/* </div> */}
    </>
  );
};

export default DashCard;
