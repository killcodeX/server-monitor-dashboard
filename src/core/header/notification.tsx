import { Popover } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Notification() {
  const content = <p>No Message!</p>;

  return (
    <Popover content={content} title="Notification Center">
      <div className="notification-container">
        <IoIosNotificationsOutline />
      </div>
    </Popover>
  );
}
