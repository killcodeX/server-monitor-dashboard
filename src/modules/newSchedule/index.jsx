import React, { useState, useEffect, useId } from "react";
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
import uuid from "react-uuid";
import { initialSchedule } from "./scheduleObj";
import dayjs from "dayjs";
import { scheduleApi } from "core/api/scheduleApi";

const { TextArea } = Input;

export default function NewSchedule() {
  const date = dayjs();
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date.add(7, "d"));
  const [form] = Form.useForm();
  const uniqId = uuid();
  const [schedule, setSchedule] = useState(initialSchedule);

  console.log(dayjs());

  const onFinish = (values) => {
    console.log({
      RITM: uniqId,
      Action: "Create",
      startDate: startDate.toString(),
      endDate: endDate.toString(),
      ...values,
    });
  };
  return (
    <section id="new-schedule">
      <Row>
        <Col span={24}>
          <CardContainer>
            <div className="title">New Schedule</div>
            <Divider style={{ margin: "12px 0" }} />
            <Form
              form={form}
              layout="vertical"
              initialValues={schedule}
              onFinish={onFinish}
            >
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
                        name="reqBy"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select
                          options={[
                            { value: "Pancham", label: "Pancham" },
                            { value: "Bharat", label: "Bharat" },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Requested for"
                        name="reqFor"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select
                          options={[
                            { value: "Hibernation_1", label: "Hibernation_1" },
                            { value: "Hibernation_2", label: "Hibernation_2" },
                          ]}
                        />
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
                      <Form.Item name="env">
                        <Radio.Group>
                          <Radio value="azure"> Azure </Radio>
                          <Radio value="aws"> Amazon Web Services </Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Form.Item
                        label="Application/Service Name"
                        name="appName"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select
                          options={[
                            {
                              value: "Backend_Server",
                              label: "Backend_Server",
                            },
                            { value: "Db_Server", label: "Db_Server" },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Server Name"
                        name="serverDetails"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select
                          mode="multiple"
                          options={[
                            {
                              value: "i-0682485bdac58d5c6",
                              label: "i-0682485bdac58d5c6",
                            },
                            {
                              value: "test 1",
                              label: "test 1",
                            },
                            {
                              value: "test 2",
                              label: "test 2",
                            },
                            {
                              value: "test 3",
                              label: "test 3",
                            },
                            {
                              value: "test 4",
                              label: "test 4",
                            },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Timezone to hibernate"
                        name="timeZone"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Select
                          options={[
                            {
                              value: "IST",
                              label: "IST",
                            },
                            {
                              value: "CST",
                              label: "CST",
                            },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
                <div className="server-information">
                  <ServerMonitor
                    heading="AutoPark schedule for servers(s) down time"
                    subheading="Select respective cells to toggle server on or off state"
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                  />
                </div>
                <div className="server-schedule">
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item
                        label="Schedule Name"
                        name="scheduleName"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item
                        label="Business Justification"
                        name="justification"
                        rules={[{ required: true, message: "Please input!" }]}
                      >
                        <TextArea rows={5} />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Space>
              <Flex gap="small">
                <Button onClick={() => form.resetFields()}>Cancel</Button>
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
