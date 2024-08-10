import React, { useState } from "react";
import { Col, Row, Flex, Space, Divider } from "antd";
import CardContainer from "components/CardContainer";
import ServerMonitor from "components/ServerMonitor";
import MaintainerScheduler from "./maintainerScheduler";
import Details from "./details";
import Table from "./table";
import dayjs from "dayjs";

export default function Scheduler() {
  const date = dayjs();
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date.add(7, "d"));
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Row>
        <Col span={24}>
          <CardContainer>
            <Details />
          </CardContainer>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <CardContainer>
            <Flex vertical>
              <MaintainerScheduler />
              <Divider style={{ margin: "12px 0" }} />
              <ServerMonitor
                heading="AutoPark schedule for servers(s) down time"
                subheading="Select respective cells to toggle server on or off state"
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
              />
            </Flex>
          </CardContainer>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <CardContainer>
            <Table />
          </CardContainer>
        </Col>
      </Row>
    </Space>
  );
}
