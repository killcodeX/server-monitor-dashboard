import React, { useState, useEffect } from "react";
import { DatePicker, Flex, Tag } from "antd";
import { format, eachDayOfInterval, startOfDay } from "date-fns";
import dayjs, { Dayjs } from "dayjs";
import { ServerMonitorProps } from "./schema";
import "./styles.css";

const { RangePicker } = DatePicker;
const hours: string[] = Array.from({ length: 24 }, (_, i) => `${i}:00`);
// const days: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function ServerMonitor(props: ServerMonitorProps) {
  const { heading, subheading } = props;
  const [schedule, setSchedule] = useState(
    Array(7)
      .fill(null)
      .map(() => Array(24).fill("active"))
  );

  const [startDate, setStartDate] = useState<Date>(new Date(2022, 2, 1));
  const [endDate, setEndDate] = useState<Date>(new Date(2022, 2, 7));
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    const dates = eachDayOfInterval({ start: startDate, end: endDate });
    if (dates.length <= 28) {
      setDays(dates);
      setSchedule(
        Array(dates.length)
          .fill(null)
          .map(() => Array(24).fill("active"))
      );
    }
  }, [startDate, endDate]);

  const toggleCell = (dayIndex: any, hourIndex: any) => {
    const newSchedule = schedule.map((day, i) =>
      day.map((hour, j) => {
        if (i === dayIndex && j === hourIndex) {
          return hour === "active" ? "stopped" : "active";
        }
        return hour;
      })
    );
    setSchedule(newSchedule);
  };

  const handleDateChange = (dates: any) => {
    if (dates) {
      setStartDate(startOfDay(dates[0].toDate()));
      setEndDate(startOfDay(dates[1].toDate()));
    }
  };

  return (
    <div className="server-monitor-container">
      <div className="server-monitor-container-header">
        <div className="section-information">
          <h3 className="section-information-heading">{heading}</h3>
          <span className="section-information-subheading">{subheading}</span>
        </div>
        <div className="server-monitor-date-picker-container">
          <RangePicker
            defaultValue={[dayjs(startDate), dayjs(endDate)]}
            onChange={handleDateChange}
            format="YYYY-MM-DD"
          />
        </div>
      </div>
      <div className="server-monitor-grid">
        <div className="server-monitor-header">
          <div></div>
          {hours.map((hour, index) => (
            <div key={index} className="server-monitor-hour">
              {hour}
            </div>
          ))}
        </div>
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="server-monitor-row">
            <div className="server-monitor-day">
              {format(day, "EEE dd MMM")}
            </div>
            {hours.map((_, hourIndex) => (
              <div
                key={hourIndex}
                className={`server-monitor-cell ${schedule[dayIndex][hourIndex]}`}
                onClick={() => toggleCell(dayIndex, hourIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <Flex gap="4px 0" wrap justify="end">
        <Tag color="green">Server Running</Tag>
        <Tag color="red">Server Stopped</Tag>
      </Flex>
    </div>
  );
}
