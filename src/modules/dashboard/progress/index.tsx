import React from "react";
import { Row, Col, Flex, Progress, Divider, Tabs } from "antd";
import type { TabsProps } from "antd";
import { TfiBlackboard, TfiCalendar, TfiStatsUp } from "react-icons/tfi";
import ProgressDetails from "./progressDetails";

let data = [
  {
    id: 1,
    heading: "On-demand Server Actions",
    headingIcon: <TfiBlackboard />,
  },
  {
    id: 2,
    heading: "Schedules",
    headingIcon: <TfiCalendar />,
  },
  {
    id: 3,
    heading: "Server Autopark Performances",
    headingIcon: <TfiStatsUp />,
  },
];

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "AWS",
    children: <ProgressDetails data={data} />,
  },
  {
    key: "2",
    label: "Azure",
    children: <ProgressDetails data={data} />,
  },
];

export default function Servers() {
  return (
    <>
      {/* <Row>
        <Col span={24}>
          <div className="title">Servers</div>
        </Col>
      </Row>
      <Divider style={{ margin: "12px 0" }} /> */}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
}
