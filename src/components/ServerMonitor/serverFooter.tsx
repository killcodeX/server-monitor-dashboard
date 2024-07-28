import React from "react";
import { Flex, Button, Tag } from "antd";
import { ServerFooterProps } from "../../schemas/ServerMonitorSchema";
import { nxtIntervalUpdate, prevIntervalUpdate } from "./utils";

export default function ServerFooter({
  startDate,
  setStartDate,
  setEndDate,
  daysInterval,
}: ServerFooterProps) {
  return (
    <Flex align="center" justify="space-between">
      <Flex gap="4px">
        <Button
          onClick={() =>
            prevIntervalUpdate({
              startDate,
              setStartDate,
              setEndDate,
              daysInterval,
            })
          }
        >
          Previous {daysInterval} days
        </Button>
        <Button
          onClick={() =>
            nxtIntervalUpdate({
              startDate,
              setStartDate,
              setEndDate,
              daysInterval,
            })
          }
        >
          Next {daysInterval} days
        </Button>
      </Flex>
      <Flex gap="4px">
        <Tag color="green">Server Running</Tag>
        <Tag color="red">Server Stopped</Tag>
      </Flex>
    </Flex>
  );
}
