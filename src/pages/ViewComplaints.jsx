import React from "react";
import Card from "../components/Card";
import { Flex } from "@chakra-ui/react";

const ViewComplaints = () => {
  return (
    <div>
        <Flex gap={2} >
          <Card />
          <Card />
        </Flex>
    </div>
  );
};

export default ViewComplaints;
