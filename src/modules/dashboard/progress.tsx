import React from "react";
import { Row, Col, Flex, Progress, Divider } from "antd";
import type { ProgressProps } from "antd";

const twoColors: ProgressProps["strokeColor"] = {
  "0%": "#108ee9",
  "100%": "#87d068",
};

const conicColors: ProgressProps["strokeColor"] = {
  "0%": "#87d068",
  "50%": "#ffe58f",
  "100%": "#ffccc7",
};

export default function Servers() {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="title">Servers</div>
        </Col>
      </Row>
      <Divider style={{ margin: "12px 0" }} />
      <Flex vertical gap="middle">
        <Flex gap="small" wrap>
          <Progress type="circle" percent={90} strokeColor={twoColors} />
          <Progress type="circle" percent={100} strokeColor={twoColors} />
          <Progress type="circle" percent={93} strokeColor={conicColors} />
        </Flex>
      </Flex>
    </>
  );
}
