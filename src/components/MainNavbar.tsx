import React from "react";
import Add from "../assets/svg/Add";
import styles from "../../styles/Home.module.css";
import Calender from "../assets/svg/Calender";
import Notification from "../assets/svg/Notification";
import { Flex } from "@chakra-ui/react";
const MainNavbar = () => {
  return (
    <>
      <div className={styles.mainRoot}>
        <Flex direction="row" justify="space-between" align="center">
          <div>
            <p className={styles.subHeader}>For Mainstone</p>
          </div>
          <div>
            <Add />
          </div>
          <div>
            <Calender />
          </div>
          <div>
            <Notification />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default MainNavbar;
