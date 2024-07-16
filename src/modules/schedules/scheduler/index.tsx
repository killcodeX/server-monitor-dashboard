import React from "react";
import { Col, Row, Flex, Space } from "antd";
import CardContainer from "components/CardContainer";
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
          <CardContainer>12</CardContainer>
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
