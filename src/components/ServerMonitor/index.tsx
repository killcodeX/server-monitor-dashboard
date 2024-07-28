import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { eachDayOfInterval } from "date-fns";
import { ServerMonitorProps } from "../../schemas/ServerMonitorSchema";
import ServerHeader from "./serverHeader";
import ServerGrid from "./serverGrid";
import ServerFooter from "./serverFooter";
import "./styles.css";

export default function ServerMonitor(props: ServerMonitorProps) {
  const { heading, subheading } = props;
  const [daysInterval, setDaysInterval] = useState<number>(7);
  const [schedule, setSchedule] = useState(
    Array(daysInterval)
      .fill(null)
      .map(() => Array(24).fill("active"))
  );

  const [startDate, setStartDate] = useState<Date>(new Date(2022, 2, 1));
  const [endDate, setEndDate] = useState<Date>(new Date(2022, 2, 7));
  const [days, setDays] = useState<Date[]>([]);

  // console.log({ startDate, endDate });

  useEffect(() => {
    const dates = eachDayOfInterval({ start: startDate, end: endDate });
    if (dates.length) {
      setDays(dates);
      setSchedule(
        Array(dates.length)
          .fill(null)
          .map(() => Array(24).fill("active"))
      );
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
      <ServerFooter
        startDate={startDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        daysInterval={daysInterval}
      />
    </div>
  );
}
