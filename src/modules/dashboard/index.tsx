import React from "react";
import { Col, Row, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import CardContainer from "components/CardContainer";
import { AiOutlinePlus } from "react-icons/ai";
import ServerStatus from "./serverStatus";
import Filters from "./filters";
import Table from "./table";
import Servers from "./progress";
import "./styles.css";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <section id="dashboard">
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <Row>
          <Col span={24}>
            <Button
              icon={<AiOutlinePlus />}
              onClick={() => navigate("/new-schedule")}
            >
              New Schedule
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <CardContainer>
              <ServerStatus />
            </CardContainer>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <CardContainer pad="0px 20px 20px 20px">
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
