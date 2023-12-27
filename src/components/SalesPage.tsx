import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SalesCard from "./SalesCard";
import ArrowUp from "../assets/svg/ArrowUp";
import RedArrow from "../assets/svg/RedArrow";

const SalesPage = () => {
  return (
    <>
      <Box mt="16px">
        <Flex gap="16px">
          <SalesCard
            transactionType="Balance"
            icon={<ArrowUp />}
            amountColor="#4545FE"
            percentageColor="#12D8A0"
            spanColor="#4545FE"
          />
          <SalesCard
            transactionType="Deposit"
            icon={<ArrowUp />}
            amountColor="#12D8A0"
            percentageColor="#12D8A0"
            spanColor="#12D8A0"
          />
        </Flex>
        <Flex gap="16px" mt="14px">
          <SalesCard
            transactionType="Purchase"
            icon={<ArrowUp />}
            amountColor="#191919"
            percentageColor="#12D8A0"
            spanColor="#CBCBCB"
          />
          <SalesCard
            transactionType="Withdraw"
            icon={<RedArrow />}
            amountColor="#FF6A6A"
            percentageColor="#FF6A6A"
            spanColor="#FF6A6A"
          />
        </Flex>
      </Box>
    </>
  );
};

export default SalesPage;
