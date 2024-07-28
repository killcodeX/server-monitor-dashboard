import React from "react";
import { Col, Row, Flex, Space } from "antd";
import CardContainer from "components/CardContainer";
import SearchBar from "./searchBar";
import Scheduler from "./scheduler";
import Filters from "./filters";

export default function Schedules() {
  return (
    <section id="schedules">
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <Flex justify="center" align="center">
          <SearchBar />
        </Flex>
        <Row gutter={24}>
          <Col span={18}>
            <Scheduler />
          </Col>
          <Col span={6}>
            <CardContainer>
              <Filters />
            </CardContainer>
          </Col>
        </Row>
      </Space>
    </section>
  );
}
