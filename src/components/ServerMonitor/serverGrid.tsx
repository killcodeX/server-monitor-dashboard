import React from "react";
import { format } from "date-fns";
import { toggleCell } from "./utils";
import { ServerGridProps } from "../../schemas/ServerMonitorSchema";

// const days: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const hours: string[] = Array.from({ length: 24 }, (_, i) => `${i}:00`);

export default function ServerGrid({
  schedule,
  setSchedule,
  days,
}: ServerGridProps) {
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
      {days.map((day: any, dayIndex: number) => (
        <div key={dayIndex} className="server-monitor-row">
          <div className="server-monitor-day">{format(day, "EEE dd MMM")}</div>
          {hours.map((_, hourIndex: number) => (
            <div
              key={hourIndex}
              className={`server-monitor-cell ${schedule[dayIndex][hourIndex]}`}
              onClick={() =>
                toggleCell({ dayIndex, hourIndex, schedule, setSchedule })
              }
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
