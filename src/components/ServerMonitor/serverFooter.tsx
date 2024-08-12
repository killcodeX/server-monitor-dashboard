import React from "react";
import { Flex, Button, Tag } from "antd";
import { ServerFooterProps } from "../../schemas/ServerMonitorSchema";
import { nxtIntervalUpdate, prevIntervalUpdate } from "./utils";

export default function ServerFooter({
  endIndex,
  scheduleLength,
  startIndex,
  totalSteps,
  setTotalSteps,
  daysInterval,
}: any) {
  const handleNext = () => {
    if (endIndex < scheduleLength) {
      setTotalSteps(totalSteps + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setTotalSteps(totalSteps - 1);
    }
  };

  return (
    <Flex align="center" justify="space-between">
      <Flex gap="4px">
        <Button onClick={handlePrev} disabled={totalSteps === 0}>
          Previous {daysInterval} days
        </Button>
        <Button onClick={handleNext} disabled={endIndex >= scheduleLength}>
          Next {daysInterval} days
        </Button>
      </Flex>
      <Flex gap="4px">
        <Tag color="green">Server Running</Tag>
        <Tag color="red">Server Stopped</Tag>
        <Tag color="grey">Schedule not Possible</Tag>
      </Flex>
    </Flex>
  );
}

//ServerFooterProps
