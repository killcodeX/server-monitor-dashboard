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
const hours: number[] = Array.from({ length: 24 }, (_, i) => i);

export default function ServerMonitor(props: ServerMonitorProps) {
  const {
    heading,
    subheading,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    autopark,
    setAutopark,
  } = props;
  const todayDate = dayjs();
  const [daysInterval, setDaysInterval] = useState<number>(7);
  const [schedule, setSchedule] = useState<ScheduleProps[]>([]);
  const [currSchedule, setCurrSchedule] = useState<ScheduleProps[]>([]);
  const [days, setDays] = useState<Date[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);

  useEffect(() => {
    const diff = eachDayOfInterval({
      start: startDate.toDate(),
      end: endDate.toDate(),
    });
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
    }
  }, [startDate, endDate]);

  useEffect(() => {
    const items = [...schedule];
    const startIdx = totalSteps * daysInterval;
    const endIdx = startIdx + daysInterval;
    const currentItems = items.slice(
      startIndex,
      Math.min(endIndex, schedule.length)
    );
    setStartIndex(startIdx);
    setEndIndex(endIdx);
    setCurrSchedule(currentItems);
  }, [schedule, daysInterval, startIndex, endIndex, totalSteps]);

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
      <ServerGrid
        schedule={currSchedule}
        setSchedule={setCurrSchedule}
        days={days}
        autopark={autopark}
        setAutopark={setAutopark}
      />
      <ServerFooter
        startIndex={startIndex}
        endIndex={endIndex}
        scheduleLength={schedule.length}
        totalSteps={totalSteps}
        setTotalSteps={setTotalSteps}
        daysInterval={daysInterval}
      />
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
