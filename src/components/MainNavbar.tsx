import React, { useState } from "react";
import Add from "../assets/svg/Add";
import CalenderIcon from "../assets/svg/CalenderIcon";
import Notification from "../assets/svg/Notification";
import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Profile from "../assets/svg/Profile";
import Frame from "../assets/svg/Frame";
import VeergeLogo from "../assets/svg/VeergeLogo";
import ProfileCard from "./ProfileCard";
import { IoMdArrowDropdown } from "react-icons/io";
import Calender  from "./Calender";
const MainNavbar = () => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <>
      <Box
        pl="78px"
        pr="78px"
        pt="22px"
        pb="22px"
        bg="#191919"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Box cursor="pointer">
            <VeergeLogo />
            <Text
              fontSize="14px"
              fontWeight="400"
              color="#FFF"
              fontFamily="Proxima Nova"
            >
              For Mainstone
            </Text>
          </Box>
          <Flex gap="45px">
            <Flex alignItems="center" gap="24px" cursor="pointer">
              <Add />
              <span ref={btnRef} onClick={onOpen}>
                <CalenderIcon />
              </span>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton color="#FFF" outline="none" />
                  <DrawerHeader
                    bg="#171717"
                    color="#FFF"
                    fontSize="16px"
                    fontWeight="600"
                    fontFamily="Euclid Circular B"
                  >
                    Calender
                  </DrawerHeader>

                  <DrawerBody bg="#0D0D0D" pt="19px">
                    <Calender />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
              <Notification />
            </Flex>

            <Flex alignItems="center" gap="14px" cursor="pointer">
              <Profile />
              <Text
                color="#fff"
                fontSize="16px"
                fontWeight="500"
                fontFamily="Euclid Circular B"
              >
                Ahmed Ali
              </Text>
              {!showCard && (
                <span
                  onClick={() => {
                    setShowCard(!showCard);
                  }}
                >
                  <Frame />
                </span>
              )}
              {showCard && (
                <span
                  onClick={() => {
                    setShowCard(!showCard);
                  }}
                >
                  <IoMdArrowDropdown color="#FFF" fontSize="24px" />
                </span>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Box>
      {showCard && (
        <Box position="absolute" top="80px" right="50px" zIndex="3">
          <ProfileCard />
        </Box>
      )}
    </>
  );
};

export default MainNavbar;
