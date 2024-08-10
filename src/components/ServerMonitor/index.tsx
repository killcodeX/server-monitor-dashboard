import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { eachDayOfInterval } from "date-fns";
import {
  ServerMonitorProps,
  ScheduleProps,
} from "../../schemas/ServerMonitorSchema";
import ServerHeader from "./serverHeader";
import ServerGrid from "./serverGrid";
import ServerFooter from "./serverFooter";
import "./styles.css";
const hours: string[] = Array.from({ length: 24 }, (_, i) => `${i}:00`);

export default function ServerMonitor(props: ServerMonitorProps) {
  const { heading, subheading, startDate, setStartDate, endDate, setEndDate } =
    props;
  const todayDate = dayjs();
  const [daysInterval, setDaysInterval] = useState<number>(7);
  const [schedule, setSchedule] = useState<ScheduleProps[]>([]);
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    const diff = eachDayOfInterval({
      start: startDate.toDate(),
      end: endDate.toDate(),
    });
    console.log("difference between selected dates", diff);
    if (diff.length) {
      let gridDays = diff.map((item) => {
        let sch = hours.map((hr) => {
          return {
            time: hr,
            status: todayDate.diff(dayjs(item), "d") > 0 ? "expired" : "active",
          };
        });
        return {
          currDate: item,
          schedule: sch,
        };
      });
      setDays(diff);
      setSchedule(gridDays);
      console.log("schedule", gridDays);
    }
  }, [startDate, endDate, daysInterval]);

  return (
    <div className="server-monitor-container">
      <ServerHeader
        heading={heading}
        subheading={subheading}
        daysInterval={daysInterval}
        setDaysInterval={setDaysInterval}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <ServerGrid schedule={schedule} setSchedule={setSchedule} days={days} />
      {/* <ServerFooter
        startDate={startDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        daysInterval={daysInterval}
      /> */}
    </div>
  );
}

// Array(daysInterval)
//       .fill(null)
//       .map(() => [
//         ...hours.map((hr) => {
//           console.log(todayDate.diff(startDate, "d"));
//           return {
//             time: hr,
//             status: todayDate.diff(startDate, "d") > 0 ? "expired" : "active",
//           };
//         }),
//       ])
