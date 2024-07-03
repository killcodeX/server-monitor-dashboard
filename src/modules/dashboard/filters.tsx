import React from "react";
import {
  Col,
  Row,
  Space,
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  Divider,
} from "antd";

const { RangePicker } = DatePicker;

export default function Filters() {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="title">Filters</div>
        </Col>
      </Row>
      <Divider style={{ margin: "12px 0" }} />
      <Space direction="vertical" size="small" style={{ display: "flex" }}>
        <Row>
          <Col span={24}>
            <Form layout="vertical">
              <Form.Item
                label="Input"
                name="Input"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="InputNumber"
                name="InputNumber"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="TextArea"
                name="TextArea"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item
                label="Mentions"
                name="Mentions"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Mentions />
              </Form.Item>

              <Form.Item
                label="Select"
                name="Select"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Select />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Space>
    </>
  );
}
