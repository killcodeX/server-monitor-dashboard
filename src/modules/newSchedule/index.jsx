import React from "react";
import {
  Col,
  Row,
  Form,
  Input,
  Space,
  Select,
  Divider,
  Radio,
  Button,
  Flex,
} from "antd";
import ServerMonitor from "components/ServerMonitor";
import CardContainer from "components/CardContainer";

const { TextArea } = Input;

export default function NewSchedule() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <section id="new-schedule">
      <Row>
        <Col span={24}>
          <CardContainer>
            <div className="title">New Schedule</div>
            <Divider style={{ margin: "12px 0" }} />
            <Form layout="vertical" onFinish={onFinish}>
              <Space
                direction="vertical"
                size="large"
                style={{ display: "flex" }}
              >
                <div className="request-details">
                  <div className="section-information">
                    <h3 className="section-information-heading">
                      Request Details
                    </h3>
                  </div>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Form.Item
                        label="Requested By"
                        name="Requested By"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Requested for"
                        name="Requested for"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
                <div className="application-server-information">
                  <div className="section-information">
                    <h3 className="section-information-heading">
                      Application & Server Information
                    </h3>
                    <span className="section-information-subheading">
                      what environment is being used
                    </span>
                  </div>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Form.Item label="">
                        <Radio.Group>
                          <Radio value="apple"> Azure </Radio>
                          <Radio value="pear"> Amazon Web Services </Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Form.Item
                        label="Application/Service Name"
                        name="Application/Service Name"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Server Name"
                        name="Server Name"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Timezone to hibernate"
                        name="Timezone to hibernate"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
                <div className="server-information">
                  <ServerMonitor
                    heading="AutoPark schedule for servers(s) down time"
                    subheading="Select respective cells to toggle server on or off state"
                  />
                </div>
                <div className="server-schedule">
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item
                        label="Schedule Name"
                        name="Schedule Name"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item
                        label="Schedule Name"
                        name="Schedule Name"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <TextArea rows={5} />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Space>
              <Flex gap="small">
                <Button>Cancel</Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Flex>
            </Form>
          </CardContainer>
        </Col>
      </Row>
    </section>
  );
}
