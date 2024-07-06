import React from "react";
import { Row, Col, Flex, Progress, Divider, Tabs } from "antd";
import { TfiCloud } from "react-icons/tfi";
import ProgressList from "./progressList";
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

// Creating a interface
interface ProgressDetailsTypes {
  data: object[];
}

interface ProgressItemDetailsTypes {
  id: string;
  heading: string;
  headingIcon: React.ReactNode;
}

export default function ProgressDetails({ data }: any) {
  return (
    <Row gutter={16}>
      {data.map((item: ProgressItemDetailsTypes) => {
        return (
          <Col span={8} key={item.id}>
            <div className="progress-item-container">
              <div className="progress-item-header">
                {item.headingIcon}
                <span>{item.heading}</span>
              </div>
              <Divider style={{ margin: "8px 0" }} />
              <div className="progress-details">
                <Progress type="circle" percent={90} strokeColor={twoColors} />
                <ProgressList />
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}
