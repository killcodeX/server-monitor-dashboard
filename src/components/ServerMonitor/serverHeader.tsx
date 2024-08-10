import React from "react";
import { DatePicker, Radio, Flex } from "antd";
import type { DatePickerProps } from "antd";
import { handleDateChange, changeInterval } from "./utils";
import dayjs, { Dayjs } from "dayjs";
import { ServerHeaderProps } from "../../schemas/ServerMonitorSchema";
const { RangePicker } = DatePicker;

export default function ServerHeader({
  heading,
  subheading,
  daysInterval,
  setDaysInterval,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: ServerHeaderProps) {
  return (
    <div className="server-monitor-container-header">
      <div className="section-information">
        <h3 className="section-information-heading">{heading}</h3>
        <span className="section-information-subheading">{subheading}</span>
      </div>
      <div className="server-monitor-date-picker-container">
        <div className="server-monitor-date-picker-interval-container">
          <div className="server-monitor-date-picker-interval-label">
            Number of days:
          </div>
          <Radio.Group
            value={daysInterval.toString()}
            onChange={(event) =>
              changeInterval({
                startDate,
                setStartDate,
                setEndDate,
                interval: Number(event.target.value),
                setDaysInterval,
              })
            }
          >
            <Radio value="7">7 days</Radio>
            <Radio value="28">28 days</Radio>
          </Radio.Group>
        </div>
        {/* <Flex gap="8px">
          <DatePicker
            value={dayjs(startDate)}
            onChange={(dates) =>
              handleDateChange({
                dates,
                setStartDate,
                setEndDate,
                daysInterval,
              })
            }
          />
          <DatePicker value={dayjs(endDate)} />
        </Flex> */}
        <RangePicker
          defaultValue={[dayjs(startDate), dayjs(endDate)]}
          onChange={(dates: any) => {
            if (dates) {
              setStartDate(dates[0]);
              setEndDate(dates[1]);
            }
          }}
          format="YYYY-MM-DD"
        />
      </div>
    </div>
  );
}
