import React from "react";
import { Col, Row, Flex, Space, Divider } from "antd";
import CardContainer from "components/CardContainer";
import ServerMonitor from "components/ServerMonitor";
import MaintainerScheduler from "./maintainerScheduler";
import Details from "./details";
import Table from "./table";

export default function Scheduler() {
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
              <ServerMonitor />
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
