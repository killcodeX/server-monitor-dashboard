import React from "react";
import { useDispatch } from "react-redux";
import { setLogout } from "../../redux/slices/auth";
import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { PiSignOutLight } from "react-icons/pi";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="header-user-details">
        <div className="header-user-details-name">John Doe</div>
        <div className="header-user-details-email">johndoe@test.com</div>
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: (
      <div className="header-menu">
        <AiOutlineUser />
        Account
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "4",
    label: (
      <div className="header-menu">
        <PiSignOutLight />
        Sign out
      </div>
    ),
  },
];

export default function AccountMenu() {
  const dispatch = useDispatch();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key == "3") {
      dispatch(setLogout());
    }
  };

  return (
    <Dropdown menu={{ items, onClick }} placement="bottomRight">
      <Avatar size={30} icon={<AiOutlineUser />} />
    </Dropdown>
  );
}
