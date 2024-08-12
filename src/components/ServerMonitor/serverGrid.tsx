import React from "react";
import uuid from "react-uuid";
import { format } from "date-fns";
import { Modal } from "antd";
import dayjs from "dayjs";
import { toggleCell } from "./utils";
import { ServerGridProps } from "../../schemas/ServerMonitorSchema";

// const days: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const hours: string[] = Array.from({ length: 24 }, (_, i) => `${i}:00`);

export default function ServerGrid({
  schedule,
  setSchedule,
  autopark,
  setAutopark,
}: any) {
  //ServerGridProps
  const handleServerToggle = ({ sch, day }: any) => {
    if (sch.status === "expired") {
      Modal.error({
        title: "Error",
        content: "Schedule status cannot be changed for previous days!",
        onOk() {},
      });
    } else {
      Modal.warning({
        title: "Warning",
        content:
          "You want to stop the server for today and same for selected weekday?",
        onOk() {
          toggleCell({ sch, day, schedule, setSchedule });
          const uniqId = uuid();
          const obj = {
            id: uniqId,
            time: `${sch.time}:00 - ${sch.time + 1}:00`,
            day: dayjs(day.currDate).format("ddd"),
          };
          setAutopark([...autopark, obj]);
        },
        okCancel: true,
        onCancel() {},
      });
    }
  };

  return (
    <div className="server-monitor-grid">
      <div className="server-monitor-header">
        <div></div>
        {hours.map((hour: string, index: number) => (
          <div key={index} className="server-monitor-hour">
            {hour}
          </div>
        ))}
      </div>
      {schedule.map((day: any, dayIndex: number) => (
        <div key={dayIndex} className="server-monitor-row">
          <div className="server-monitor-day">
            {format(day.currDate, "EEE dd MMM")}
          </div>
          {day.schedule.map((sch: any, hourIndex: number) => {
            return (
              <div
                className={`server-monitor-cell ${sch.status}`}
                key={hourIndex}
                onClick={() => handleServerToggle({ sch, day })}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// {schedule[dayIndex].map((item: any, hourIndex: number) => {
//   console.log(schedule[dayIndex]);
//   return (
//     <div
//       key={hourIndex}
// className={`server-monitor-cell ${schedule[dayIndex][hourIndex].status}`}
//       onClick={() => handleServerToggle({ dayIndex, hourIndex })}
//     ></div>
//   );
// })}
