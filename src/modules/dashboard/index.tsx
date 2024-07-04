import React from "react";
import { Col, Row, Space, Button } from "antd";
import CardContainer from "components/CardContainer";
import { AiOutlinePlus } from "react-icons/ai";
import Filters from "./filters";
import Table from "./table";
import Servers from "./progress";
import "./styles.css";

export default function Dashboard() {
  return (
    <section id="dashboard">
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <Row>
          <Col span={24}>
            <Button icon={<AiOutlinePlus />}>New Schedule</Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <CardContainer>
              <Servers />
            </CardContainer>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={18}>
            <CardContainer>
              <Table />
            </CardContainer>
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
