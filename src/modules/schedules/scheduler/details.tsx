import React from "react";
import { Col, Row, Flex, Space, Tag, Typography } from "antd";

const { Text } = Typography;

export default function Details() {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Row>
        <Col span={24}>
          <div className="title">AWS Application</div>
        </Col>
      </Row>
      <Flex justify="space-between">
        <Flex gap="4px 0" wrap>
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="gold">gold</Tag>
        </Flex>
        <Flex gap="4px 0" wrap>
          <Text type="secondary">Showing Server Data for 7 Days</Text>
        </Flex>
      </Flex>
    </Space>
  );
}
