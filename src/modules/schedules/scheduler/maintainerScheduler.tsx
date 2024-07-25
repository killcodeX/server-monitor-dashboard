import React from "react";
import { Flex, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { AiOutlineMore } from "react-icons/ai";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <>Edit Schedule</>,
  },
  {
    key: "2",
    label: <>Add/Remove Servers</>,
  },
  {
    key: "4",
    label: <>Delete Schedule</>,
  },
];

export default function MaintainerScheduler() {
  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key == "1") {
      alert("clicked");
    }
  };

  return (
    <Flex justify="space-between" align="center">
      <div className="title">Maintenance Schedule</div>
      <Dropdown menu={{ items, onClick }} placement="bottomRight">
        <AiOutlineMore style={{ fontSize: "20px" }} />
      </Dropdown>
    </Flex>
  );
}
